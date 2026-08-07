import Image from "next/image";
import { FaAward } from "react-icons/fa";
import AboutCTA from "./AboutCTA";

export default function AboutGallery() {
  return (
    <div className="relative flex flex-col items-center gap-8">
      {/* Image Wrapper */}

      <div
        className="group relative h-[430px] w-[310px] 
      overflow-hidden rounded-[36px]
        transition-all duration-700 sm:h-[500px] sm:w-[360px] 
        lg:h-[620px] lg:w-[440px]"
      >
        <Image
          src="/images/about/about-01.jpg"
          alt="Law Consultation"
          fill
          priority
          className="object-cover transition duration-700 
          group-hover:scale-110"
        />

        {/* Overlay */}

        <div
          className="absolute inset-0 bg-gradient-to-t 
        from-black/70 via-black/10 to-transparent"
        />

        {/* Badge */}

        <div className="absolute right-6 top-6 rounded-full bg-[#B08B57] px-5 py-2 shadow-xl backdrop-blur-md">
          <span className="text-xs font-bold uppercase tracking-[3px] text-white">
            Premium
          </span>
        </div>

        {/* Glass Card */}

        <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/20 bg-white/10 px-6 py-5 backdrop-blur-xl transition duration-500 group-hover:bg-white/15">
          <h3 className="text-2xl font-bold text-white">عدالت، تخصص، اعتماد</h3>

          <p className="mt-2 text-sm leading-7 text-gray-200">
            همراه شما در تمامی مراحل رسیدگی به پرونده
          </p>
        </div>
      </div>

      {/* Experience Card */}

      <div
        className="
        absolute
        lg:left-[-15px]
        left-10
        top-[30%]
        flex
        flex-col
        items-center
        justify-center
        rounded-full
        border
        border-white/70
        bg-white/40
        px-8
        py-4
        shadow-2xl
        backdrop-blur-2xl
        transition
        duration-500
        hover:-translate-y-2
        "
      >
        <FaAward className="mb-3 text-2xl text-[#B08B57]" />

        <h3 className="text-2xl font-bold text-[#20231D]">+۱۲</h3>

        <p className="mt-2 text-sm text-gray-500">سال تجربه</p>
      </div>

      {/* Lady Justice */}

      <div
        className="
        absolute
        lg:-right-[39%]
        -right-[13%]
       lg:-bottom-5
       bottom-5
        h-[260px]
        w-[170px]
        drop-shadow-[0_30px_40px_rgba(0,0,0,.2)]
        sm:h-[330px]
        sm:w-[220px]
        lg:h-[420px]
        lg:w-[380px]
        "
      >
        <Image
          src="/images/about/about-02-png.png"
          alt="Lady Justice"
          fill
          priority
          className="object-contain"
        />
      </div>

      {/* CTA */}

      <div className="relative z-30">
        <AboutCTA />
      </div>
    </div>
  );
}
