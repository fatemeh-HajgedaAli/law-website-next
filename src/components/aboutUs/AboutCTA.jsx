import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function AboutCTA() {
  return (
    <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
      <Link
        href="/consultation"
        className="
          group relative flex w-full items-center justify-center gap-3
          overflow-hidden rounded-full
          bg-[#20231D] px-6 py-3.5
          text-sm font-semibold text-white
          shadow-xl
          transition-[transform,box-shadow]
          duration-500
          hover:-translate-y-1 hover:shadow-2xl
          sm:w-auto sm:px-7
        "
      >
        <span
          className="
            absolute inset-0 translate-y-full
            bg-gradient-to-r from-[#B08B57] to-[#D4AF6A]
            transition-transform duration-500
            group-hover:translate-y-0
          "
        />

        <span className="relative z-10 whitespace-nowrap">
          رزرو مشاوره رایگان
        </span>

        <span
          className="
            relative z-10 flex h-8 w-8 shrink-0
            items-center justify-center
            rounded-full bg-white/10
            transition-colors
            group-hover:bg-white/20
          "
        >
          <FaArrowLeft className="text-xs transition-transform duration-300 group-hover:-translate-x-1" />
        </span>
      </Link>

      <Link
        href="/services"
        className="
          group flex w-full items-center justify-center gap-3
          rounded-full
          border border-[#D4AF6A]
          bg-white px-6 py-3.5
          text-sm font-semibold text-[#B08B57]
          shadow-sm
          transition-[transform,background-color,color,box-shadow]
          duration-500
          hover:-translate-y-1
          hover:bg-[#B08B57]
          hover:text-white
          hover:shadow-xl
          sm:w-auto sm:px-7
        "
      >
        <span className="whitespace-nowrap">مشاهده خدمات حقوقی</span>

        <FaArrowLeft className="shrink-0 text-xs transition-transform duration-300 group-hover:-translate-x-1" />
      </Link>
    </div>
  );
}
