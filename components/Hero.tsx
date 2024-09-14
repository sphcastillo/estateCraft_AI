import shape1 from "@/images/roundedRectangle.png";
import shape2 from "@/images/rectangleOval.png";
import shape3 from "@/images/longHorizontalOval.png";
import shape4 from "@/images/circle.png";
import shape5 from "@/images/longOval.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
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

function Hero() {
  return (
    <div className="bg-[#012e33] py-24 sm:py-20 drop-shadow-xl relative">
      <div
        aria-hidden="true"
        className="absolute  left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl  md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative  aspect-[1155/678] w-[400px] -translate-x-1/2 rotate-[40deg] top-4 bg-gradient-to-tr from-orange-400 to-[#f3d1b7] opacity-60  sm:w-[800px]"
        />
      </div>

      <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl sm:text-center">
          <h2
            className={`${zeyada.className} text-[22px] tracking-wide text-[#f5f33a] text-center`}
          >
            Empowering Realtors with AI-Driven Precision
          </h2>

          <p
            className={`${nunito.className} mt-2 text-6xl font-bold tracking-tight text-center text-white sm:text-6xl`}
          >
            EstateCraft AI
          </p>

          <p
            className={`${pt_sans.className} mt-6 text-lg leading-8 text-center text-white`}
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
            interactive features, helping you make a memorable impact and close
            deals more effectively.
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
          <div className="flex items-center justify-center space-x-2 pb-[84px]">
            <Image
              src={shape2}
              priority
              alt="Shape 2"
              className="h-[140px] lg:h-[225px] object-contain"
            />
            <Image
              src={shape3}
              priority
              alt="Shape 3"
              className="h-[140px] lg:h-[225px] object-contain"
            />
            <Image
              src={shape4}
              priority
              alt="Shape 4"
              className="h-[140px] lg:h-[225px] object-contain"
            />
            <Image
              src={shape5}
              priority
              alt="Shape 5"
              className="h-[140px] hidden lg:h-[225px] object-contain"
            />
            <Image
              src={shape1}
              priority
              alt="Shape 1"
              className="h-[140px] lg:h-[225px] object-contain"
            />
          </div>
        </div>
      </div>

    </div>
  );
}
export default Hero;
