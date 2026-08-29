import Link from "next/link";
import { FaArrowLeft, FaGavel } from "react-icons/fa";

export default function CaseCard({ item }) {
  return (
    <article
      className="
        group relative overflow-hidden
        rounded-3xl border border-[#20231D]/10
        bg-white p-5
        shadow-sm
        transition-[transform,box-shadow]
        duration-500
        md:p-6
        motion-safe:hover:-translate-y-2
        motion-safe:hover:shadow-2xl
      "
    >
      {/* Decorative glow */}
      <div
        className="
          pointer-events-none absolute
          -right-16 -top-16
          h-32 w-32
          rounded-full
          bg-[#B08B57]/10
          blur-2xl
          transition-transform duration-500
          motion-safe:group-hover:scale-150
        "
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between md:mb-7">
          <span
            className="
              flex h-10 w-10 shrink-0
              items-center justify-center
              rounded-full
              bg-[#20231D]
              text-[#D4AF6A]
              md:h-11 md:w-11
            "
          >
            <FaGavel className="text-sm" />
          </span>

          <span
            className="
              rounded-full
              bg-[#B08B57]/10
              px-3 py-1.5
              text-[10px] font-semibold
              text-[#B08B57]
            "
          >
            {item.status}
          </span>
        </div>

        {/* Meta */}
        <div
          className="
            mb-3 flex items-center gap-2
            text-[10px] text-[#20231D]/40
            md:gap-3
          "
        >
          <span>{item.category}</span>
          <span>•</span>
          <span>{item.year}</span>
        </div>

        {/* Title */}
        <h2
          className="
            mb-3
            text-lg font-bold leading-8
            text-[#20231D]
            transition-colors duration-300
            md:mb-4 md:text-xl
            motion-safe:group-hover:text-[#B08B57]
          "
        >
          {item.title}
        </h2>

        {/* Description */}
        <p
          className="
            mb-6
            text-sm leading-7
            text-[#20231D]/55
            md:mb-7
          "
        >
          {item.description}
        </p>

        {/* Link */}
        <Link
          href={`/cases/${item.id}`}
          className="
            inline-flex items-center gap-3
            border-b border-[#B08B57]/40
            pb-2
            text-xs font-semibold
            text-[#20231D]
            transition-[color,border-color]
            duration-300
            motion-safe:group-hover:border-[#B08B57]
            motion-safe:group-hover:text-[#B08B57]
          "
        >
          <span>مشاهده جزئیات</span>

          <FaArrowLeft
            className="
              text-[10px]
              transition-transform duration-300
              motion-safe:group-hover:-translate-x-1
            "
          />
        </Link>
      </div>
    </article>
  );
}
