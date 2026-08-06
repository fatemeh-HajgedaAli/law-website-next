// components/AboutPngImage.jsx
import Image from "next/image";
import { LawPatterns } from "./LawPatterns";

export const AboutPngImage = () => {
  return (
    <div className="relative flex h-[600px] items-center justify-center">
      <LawPatterns />

      <div className="relative z-20 h-[620px] w-full lg:left-20">
        <Image
          src="/images/about/about-02-png.png"
          fill
          alt="وکیل متخصص"
          className="object-contain"
        />
      </div>
    </div>
  );
};
