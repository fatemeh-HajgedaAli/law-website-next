import Image from "next/image";
import { LawPatterns } from "./LawPatterns";

export const AboutPngImage = () => {
  return (
    <div
      className="
      relative
      flex
      h-[600px]
      items-center
      justify-center
      "
    >
      <LawPatterns />

      <div
        className="
        relative
        z-20
        h-[560px]
        w-[380px]
        "
      >
        <Image
          src="/images/about/about-02-png.png"
          fill
          alt="وکیل متخصص"
          className="
          object-contain
          drop-shadow-2xl
          "
        />
      </div>
    </div>
  );
};
