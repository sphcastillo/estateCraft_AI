import shape1 from "@/images/roundedRectangle.png";
import shape2 from "@/images/rectangleOval.png";
import shape3 from "@/images/longHorizontalOval.png";
import shape4 from "@/images/circle.png";
import shape5 from "@/images/longOval.png";
import Image from "next/image";

function Hero() {
  return (
    <div className="flex items-center justify-center space-x-2">
      <Image
        src={shape2}
        priority
        alt="Shape 2"
        className="lg:h-[225px] object-contain"
      />
      <Image
        src={shape3}
        priority
        alt="Shape 3"
        className="lg:h-[225px] object-contain"
      />
      <Image
        src={shape4}
        priority
        alt="Shape 4"
        className="lg:h-[225px] object-contain"
      />
      <Image
        src={shape5}
        priority
        alt="Shape 5"
        className="lg:h-[225px] object-contain"
      />
      <Image
        src={shape1}
        priority
        alt="Shape 1"
        className="lg:h-[225px] object-contain"
      />
    </div>
  );
}
export default Hero;
