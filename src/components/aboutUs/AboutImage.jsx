import Image from "next/image";

export const AboutImage = () => {
  return (
    <div
      className="
      relative
      h-[520px]
      overflow-hidden
      rounded-2xl
      shadow-xl
      "
    >
      <Image
        src="/images/about/about-01.jpg"
        fill
        alt="مجموعه حقوقی"
        className="object-cover"
      />

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black/40
        to-transparent
        "
      />
    </div>
  );
};
