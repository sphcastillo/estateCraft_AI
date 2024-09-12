import shape1 from "@/images/rectangleoval.ong.png";
import shape2 from "@/images/Verticaloval.png";
import shape3 from "@/images/longHorizontalOval.png";
import shape4 from "@/images/roundedRectangle.png";
import shape5 from "@/images/circle.png";
import Image from "next/image";

function Hero() {
  return (
    <div className="flex items-center justify-center">
      <Image src={shape1} alt="Shape 1" className="lg:h-[310px] border-2 border-[#f5f33a]" />
      <Image src={shape2} alt="Shape 2" className="lg:h-[310px] border-2 border-[#f5f33a]" />
      <Image src={shape3} alt="Shape 3" className="lg:h-[310px] border-2 border-[#f5f33a]" />
      <Image src={shape4} alt="Shape 4" className="lg:h-[310px] border-2 border-[#f5f33a]" />
      <Image src={shape5} alt="Shape 5" className="lg:h-[310px] border-2 border-[#f5f33a]" />
    </div>
  );
}
export default Hero;
