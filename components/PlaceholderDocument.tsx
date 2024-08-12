'use client'
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { PlusCircleIcon, FrownIcon } from "lucide-react";
import useSubscription from "@/hooks/useSubscription";

function PlaceholderDocument() {
    const { isOverFileLimit } = useSubscription();
    console.log('isOverFileLimit: ', isOverFileLimit);
    const router = useRouter();

    const handleClick = () => {
        // Check if user is FREE tier and if they are over the file limit ~ push to the upgrade page
        if(isOverFileLimit){
            router.push('/dashboard/upgrade');
        } else {
            router.push('/dashboard/upload');
        };
    };

    return (
        <Button 
            onClick={handleClick}
            className="flex flex-col items-center justify-center w-64 h-80 rounded-xl bg-gray-200 text-gray-400 drop-shadow-md"
        >
            {isOverFileLimit ? (
                <FrownIcon className="w-16 h-16" />
            ) : (
                <PlusCircleIcon className="w-16 h-16" />
            )}
            
            <p className="pt-2 font-semibold">
                {isOverFileLimit ? "Upgrade to add more documents": 'Add a document'}
            </p>
        </Button>
    )
}
export default PlaceholderDocument;