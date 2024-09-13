import Link from "next/link";
import { Fira_Sans, Nunito } from "next/font/google";
import Image from "next/image";
import logo from "@/images/EstateCraft.png";

const fire_sans = Fira_Sans({
  weight: "400",
  subsets: ["latin"],
});

const nunito = Nunito({
  subsets: ["latin"],
});

function Navbar() {
  return (
    <header className="flex justify-between items-center p-4 bg-[#012e33] shadow-md rounded-t-md border-sky-100 border-b-[1px]">
      {" "}
      {/* Logo on the left */}
      <div className="flex items-center space-x-2">
        <Link href="/" className="flex items-center space-x-2">
          <Image src={logo} alt="EstateCraft AI" width={40} height={40} />
          <span className={`${nunito.className} text-white text-lg`}>EstateCraft AI</span>
        </Link>
      </div>
      {/* Buttons on the right */}
      <div className="flex items-center space-x-4">
        <Link href="/login">
          <button
            className={`${fire_sans.className} px-4 py-2 text-md tracking-wide text-white hover:bg-gray-200`}
          >
            Login
          </button>
        </Link>
        <div className="h-6 border-l border-gray-300"></div>

        <Link href="/signup">
          <button
            className={`${fire_sans.className} px-4 py-2 text-sm tracking-wide text-[#637b38] bg-[#f5f33a] rounded-2xl hover:bg-blue-700`}
          >
            Signup
          </button>
        </Link>
      </div>
    </header>
  );
}
export default Navbar;
