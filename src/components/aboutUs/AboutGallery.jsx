import Image from "next/image";
import { FaAward } from "react-icons/fa";

export default function AboutGallery() {
  return (
    <div className="relative flex w-full justify-center px-4 sm:px-0">
      {/* Main Image */}
      <div
        className="
          group relative
          h-[400px] w-[285px]
          overflow-hidden rounded-[32px]
          sm:h-[500px] sm:w-[360px] sm:rounded-[36px]
          lg:h-[620px] lg:w-[440px]
        "
      >
        <Image
          src="/images/about/about-01.jpg"
          alt="Law Consultation"
          fill
          priority
          sizes="(max-width: 640px) 285px, (max-width: 1024px) 360px, 440px"
          className="
            object-cover
            transition-transform duration-700
            group-hover:scale-110
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-black/70 via-black/10 to-transparent
          "
        />

        {/* Premium Badge */}
        <div
          className="
            absolute right-8 top-4
            rounded-full
            bg-[#B08B57]
            px-4 py-1.5
            shadow-xl
            backdrop-blur-md
            sm:right-6 sm:top-6
            sm:px-6 sm:py-2
          "
        >
          <span
            className="
              text-[10px] font-bold
              uppercase tracking-[1.5px]
              text-white
              sm:text-xs
            "
          >
            Premium
          </span>
        </div>
      </div>

      {/* Lady Justice */}
      <div
        className="
    absolute
    bottom-[-20%]
    right-[-30%]
    z-10
    h-[300px]
    w-[220px]
    drop-shadow-[0_25px_35px_rgba(0,0,0,.22)]

    sm:-right-[10%]
    sm:-bottom-[10px]
    sm:h-[340px]
    sm:w-[230px]

    lg:-right-[39%]
    lg:bottom-[-15%]
    lg:h-[420px]
    lg:w-[380px]
  "
      >
        <Image
          src="/images/about/about-02-png.png"
          alt="Lady Justice"
          fill
          sizes="(max-width: 640px) 220px, (max-width: 1024px) 230px, 380px"
          className="
      object-contain"
        />
      </div>
    </div>
  );
}
