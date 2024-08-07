import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";



export const metadata: Metadata = {
  title: "EstateCraft AI",
  description: "Elevate your real estate business with EstateCraft AI, the cutting-edge SaaS designed to transform your property listings into captivating, professional presentations. Harnessing the power of OpenAI, EstateCraft AI simplifies the creation process, ensuring you present each property in the best possible light.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className='min-h-screen h-screen overflow-hidden flex flex-col'>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
