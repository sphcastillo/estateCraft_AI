'use server'
import { UserDetails } from "@/app/dashboard/upgrade/page";
import { adminDb } from "@/firebaseAdmin";
import getBaseUrl from '@/lib/getBaseUrl';
import stripe from "@/lib/stripe";
import { auth } from "@clerk/nextjs/server";

export async function createCheckoutSession(userDetails: UserDetails){
    const { userId } = await auth();

    if(!userId){
        throw new Error("User is not found/authenticated");
    }

    // first check if the user already has a stripeCustomerId
    let stripeCustomerId; 

    // get user document
    const user = await adminDb.collection('users').doc(userId).get();
    stripeCustomerId = user.data()?.stripeCustomerId;

    if(!stripeCustomerId){
        // create a new Stripe customer
        const customer = await stripe.customers.create({
            email: userDetails.email,
            name: userDetails.name,
            // clerk id = userId = stripe id
            metadata: {
                userId,
            }
        });

        await adminDb.collection('users').doc(userId).set({
            stripeCustomerId: customer.id,
        });

        stripeCustomerId = customer.id;
    }

    // create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price: 'price_1PktCSANWoVzcqdbYsX0R7s0',
                quantity: 1,
            }
        ],
        mode: 'subscription',
        // customer who we are associating this session with
        customer: stripeCustomerId,
        success_url: `${getBaseUrl()}/dashboard?upgrade=true`,
        cancel_url: `${getBaseUrl()}/dashboard/upgrade`
    });
    return session.id;
}