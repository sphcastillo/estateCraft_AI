import homepageGrid1 from "@/images/homepageGrid/homepageGrid1.png";
import homepageGrid2 from "@/images/homepageGrid/homepageGrid2.png";
import homepageGrid3 from "@/images/homepageGrid/homepageGrid3.png";
import Image from "next/image";
import { Nunito, PT_Sans, Zeyada, Fira_Sans } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
});

const pt_sans = PT_Sans({
  weight: "400",
  subsets: ["latin"],
});

const pt_sans_bold = PT_Sans({
  weight: "700",
  subsets: ["latin"],
})

const zeyada = Zeyada({
  weight: "400",
  subsets: ["latin"],
});

const fire_sans = Fira_Sans({
  weight: "400",
  subsets: ["latin"],
});

export default function HomepageGrid() {
  return (
    
    <div className="grid grid-rows-3 gap-2 p-2 sm:p-8 bg-white">
      {/* First Row */}
      <div className="grid grid-cols-2 xs:grid-cols-[1fr_auto_1fr] pt-7">
        <div className="h-[140px]">
          <div>
            <div className="pt-3">
              <span className={`${pt_sans_bold.className} text-[#012e33] text-lg font-bold`}>PDF Parsing and Extraction:</span>
            </div>
            <div className="pt-2">
              <span className={`${pt_sans.className} text-[#012e33]`}>
                Automatically extract text and key information from uploaded
                PDFs for easy review and editing.
              </span>
            </div>
          </div>
        </div>
        {/* Narrower middle column */}
        <div className="h-[140px] w-[70px] hidden xs:flex xs:w-[130px] sm:w-[140px] md:w-[170px] lg:w-[220px]">
          <div className="flex justify-center items-center w-full">
            <span className="text-center text-6xl text-[#d2e3e4]">01</span>
          </div>
        </div>
        <div className="h-[140px]">
          <div className="flex justify-center items-center">
            <Image
              className="object-contain h-[140px]"
              src={homepageGrid1}
              alt="Homepage Grid 1"
            />
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-2 xs:grid-cols-[1fr_1fr_auto]">
        <div className="h-[140px]">
          <div className="w-full">
            <Image
              className="object-contain h-[140px] w-4/5"
              src={homepageGrid2}
              alt="Homepage Grid 2"
            />
          </div>
        </div>
        <div className="h-[140px]">
          <div>
            <div className="pt-3">
              <span className={`${pt_sans_bold.className} text-[#012e33] text-lg font-bold`}>AI-Powered Recommendations:</span>
            </div>
            <div className="pt-2">
              <span className={`${pt_sans.className} text-[#012e33]`}>
                Receive intelligent suggestions for improving listing content,
                including enhanced wording and optimized images.
              </span>
            </div>
          </div>
        </div>
        {/* Narrower last column */}
        <div className="h-[140px] w-[70px] hidden xs:flex xs:w-[130px] sm:w-[140px] md:w-[170px] lg:w-[220px]">
          <div className="flex justify-center items-center w-full">
            <span className="text-center text-6xl text-[#d2e3e4]">02</span>
          </div>
        </div>
      </div>

      {/* Third Row */}
      <div className="grid grid-cols-2 xs:grid-cols-[auto_1fr_1fr]">
        {/* Narrower first column */}
        <div className="h-[140px] w-[70px] hidden xs:flex xs:w-[130px] sm:w-[140px] md:w-[170px] lg:w-[220px]">
          <div className="flex justify-center items-center w-full">
            <span className="text-center text-6xl text-[#d2e3e4]">03</span>
          </div>
        </div>

        <div className="h-[140px]">
          <div className="flex justify-center items-center">
            <Image
              className="object-contain h-[140px]"
              src={homepageGrid3}
              alt="Homepage Grid 3"
            />
          </div>
        </div>
        <div className="h-[140px]">
          <div>
            <div className="pt-3">
              <span className={`${pt_sans_bold.className} text-[#012e33] text-lg font-bold`}>Automated Content Enhancement:</span>
            </div>
            <div className="pt-2">
              <span className={`${pt_sans.className} text-[#012e33]`}>
                Use AI to automatically improve and rewrite listing content
                based on best practices.
              </span>
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
  );
}
