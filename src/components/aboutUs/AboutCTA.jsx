import { FaArrowLeft } from "react-icons/fa";

export default function AboutCTA() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {/* Primary Button */}

      <button
        className="
        group
        relative
        flex
        items-center
        gap-3
        overflow-hidden
        rounded-full
        bg-[#20231D]
        px-7
        py-3.5
        text-sm
        font-semibold
        text-white
        shadow-xl
        transition-all
        duration-500
        hover:-translate-y-1
        hover:shadow-2xl
        "
      >
        <span
          className="
          absolute
          inset-0
          translate-y-full
          bg-gradient-to-r
          from-[#B08B57]
          to-[#D4AF6A]
          transition-transform
          duration-500
          group-hover:translate-y-0
          "
        />

        <span className="relative z-10">رزرو مشاوره رایگان</span>

        <span
          className="
          relative
          z-10
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
          bg-white/10
          transition
          group-hover:bg-white/20
          "
        >
          <FaArrowLeft
            className="
            text-xs
            transition-transform
            duration-300
            group-hover:-translate-x-1
            "
          />
        </span>
      </button>

      {/* Secondary Button */}

      <button
        className="
        group
        flex
        items-center
        gap-3
        rounded-full
        border
        border-[#D4AF6A]
        bg-white
        px-7
        py-3.5
        text-sm
        font-semibold
        text-[#B08B57]
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-1
        hover:bg-[#B08B57]
        hover:text-white
        hover:shadow-xl
        "
      >
        <span>مشاهده خدمات حقوقی</span>

        <FaArrowLeft
          className="
          text-xs
          transition-transform
          duration-300
          group-hover:-translate-x-1
          "
        />
      </button>
    </div>
  );
}
