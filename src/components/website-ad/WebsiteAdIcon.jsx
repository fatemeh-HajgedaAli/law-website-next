import Image from "next/image";

export default function WebsiteAdIcon() {
  return (
    <Image
      src="/logos/askPng.png"
      alt="ASK.DEV"
      width={28}
      height={28}
      className="relative z-10 h-[100%] w-full object-contain 
      transition-transform duration-300 group-hover:scale-110"
    />
  );
}
