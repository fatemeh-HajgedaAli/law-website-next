// components/AboutImage.jsx
import Image from "next/image";

export const AboutImage = () => {
  return (
    <div className="relative h-[400px] overflow-hidden rounded-xl shadow-xl">
      <Image
        src="/images/about/about-01.jpg"
        fill
        alt="مجموعه حقوقی"
        className="object-cover"
      />
    </div>
  );
};
