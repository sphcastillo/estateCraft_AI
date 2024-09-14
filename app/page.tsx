import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Nunito, PT_Sans, Zeyada, Fira_Sans } from "next/font/google";
import HomepageGrid from "@/components/HomepageGrid";
import HomepageDetails from "@/components/HomepageDetails";

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

export default function Home() {
  return (
    <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-[#012e33] to-[#f3d1b7]">
      <Navbar />

      <Hero />

      <HomepageGrid />

      <HomepageDetails />
      {/* blur effect */}
      {/* <div className="relative" aria-hidden="true">

          <div className="absolute bottom-0  bg-gradient-to-t from-white/95 pt-[5%]" />
        </div> */}
    </main>
  );
}
