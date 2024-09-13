import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { Nunito, PT_Sans, Zeyada, Fira_Sans } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
});

const pt_sans = PT_Sans({
  weight: "400",
  subsets: ["latin"],
});

const zeyada = Zeyada({
  weight: "400",
  subsets: ["latin"],
});

const fire_sans = Fira_Sans({
  weight: "400",
  subsets: ["latin"],
});

const features = [
  {
    name: "AI-Driven Content Enhancement",
    description:
      "Our advanced AI analyzes your presentation content, offering actionable suggestions to refine and elevate your materials. From enhancing the style and tone to optimizing key sections, we ensure your presentation resonates with your target audience.",
  },
  {
    name: "Automated Design Assistance",
    description:
      "Create visually stunning presentations effortlessly. Our AI helps you customize or create templates, suggesting design elements that align with current trends and best practices to make your presentations more engaging.",
  },
  {
    name: "Smart Content Generation",
    description:
      "Say goodbye to writer’s block. Our platform auto-generates content based on property data, market trends, and client preferences, ensuring every presentation is tailored to capture interest and drive results.",
  },
  {
    name: "Personalized Client Experience",
    description:
      "Tailor each presentation to your client’s specific needs with AI-driven recommendations. By analyzing client preferences and past interactions, our platform helps you craft personalized presentations that speak directly to their interests.",
  },
  {
    name: "Seamless Collaboration and Feedback",
    description:
      "Collaborate effortlessly with your team and incorporate client feedback directly into your presentations. Our platform streamlines the process, ensuring consistency and effective communication.",
  },
  {
    name: "Performance Insights and Analytics",
    description:
      "Gain valuable insights into how clients interact with your presentations. Track engagement metrics and receive actionable recommendations to continuously improve and refine your approach.",
  },
];

export default function Home() {
  return (
    <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-[#012e33] to-[#f3d1b7]">
      <Navbar />
      <div className="bg-[#012e33] py-24 sm:py-20 drop-shadow-xl">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl sm:text-center">
            <h2
              className={`${zeyada.className} text-[22px] tracking-wide text-[#f5f33a]`}
            >
              Empowering Realtors with AI-Driven Precision
            </h2>

            <p
              className={`${nunito.className} mt-2 text-3xl font-bold tracking-tight text-white sm:text-6xl`}
            >
              EstateCraft AI
            </p>

            {/* <p className="mt-6 text-lg leading-8 text-gray-600">
              Introducing{" "}
              <span className="font-bold text-indigo-600">Chat with PDF.</span>
              <br/>
              <br/> Upload your document, and our chatbot will answer questions, summarize content, and answer all your Qs. Ideal for everyone, 
              <span className="text-indigo-600">
              {" "} Chat with PDF
                </span>{" "}
                turns static documents into {" "}
                <span className="font-bold">dynamic conversations</span>,
                enhancing productivity 10x fold effortlessly.
            </p> */}
            <p
              className={`${pt_sans.className} mt-6 text-lg leading-8 text-white`}
            >
              Harness the power of AI with{" "}
              <span
                className={`${nunito.className} text-[#f5f33a] tracking-wide`}
              >
                {" "}
                EstateCraft AI
              </span>{" "}
              to elevate your real estate presentations. Our platform enhances
              your listings with tailored content, optimized design, and
              interactive features, helping you make a memorable impact and
              close deals more effectively.
            </p>
          </div>
          {/* Button is a child / asChild prop is needed */}
          <Button
            asChild
            className={`${fire_sans.className} mt-4 bg-[#f5f33a] text-[#637b38] tracking-wide rounded-2xl`}
          >
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </div>

        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Hero />
            {/* <Image 
              alt="App screenshot"
              src="https://i.imgur.com/VciRSTI.jpeg"
              width={2432}
              height={1442}
              className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            /> */}
            {/* blur effect */}
            {/* <div 
              className="relative"
              aria-hidden="true"
            > */}
            {/* notice requirements */}
            {/* <div className="absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/95 pt-[5%]"/>
            </div> */}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8 sm:mt-20 md:mt-24">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div>
              <h2
                className={`${zeyada.className} text-[28px] font-semibold leading-7 text-[#f5f33a]`}
              >
                Everything you need
              </h2>
              <p
                className={`${pt_sans.className} mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl`}
              >
                All-in-one platform
              </p>
              <p
                className={`${pt_sans.className} mt-6 text-base leading-7 text-white`}
              >
                It's designed to revolutionize the way real estate agents create
                and enhance their property listings. By seamlessly integrating
                PDF uploading, content extraction, and AI-driven
                recommendations, our platform provides a comprehensive suite of
                tools to streamline the listing process. Agents can customize
                professional templates, receive automated content enhancements,
                and access powerful analytics—all within a single, user-friendly
                interface. EstateCraft AI empowers agents to efficiently manage
                their listings, collaborate with teams, and elevate their
                property presentations, all while leveraging the latest in AI
                technology to optimize their marketing efforts.
              </p>
            </div>
            <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-white sm:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="font-semibold text-white">
                    <CheckIcon
                      aria-hidden="true"
                      className="absolute left-0 top-1 h-5 w-5 text-[#f5f33a]"
                    />
                    <span
                      className={`${fire_sans.className} text-lg text-[#f5f33a] `}
                    >
                      {feature.name}
                    </span>
                  </dt>
                  <dd className="mt-2">
                    <span
                      className={`${pt_sans.className} tracking-wide text-[16px]`}
                    >
                      {feature.description}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </main>
  );
}
