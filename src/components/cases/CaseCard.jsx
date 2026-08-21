import Link from "next/link";
import { FaArrowLeft, FaGavel } from "react-icons/fa";

export default function CaseCard({ item }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-[#20231D]/10 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#B08B57]/10 blur-2xl transition-transform duration-500 group-hover:scale-150" />

      <div className="relative z-10">
        <div className="mb-7 flex items-center justify-between">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#20231D] text-[#D4AF6A]">
            <FaGavel className="text-sm" />
          </span>

          <span className="rounded-full bg-[#B08B57]/10 px-3 py-1.5 text-[10px] font-semibold text-[#B08B57]">
            {item.status}
          </span>
        </div>

        <div className="mb-3 flex items-center gap-3 text-[10px] text-[#20231D]/40">
          <span>{item.category}</span>
          <span>•</span>
          <span>{item.year}</span>
        </div>

        <h2 className="mb-4 text-xl font-bold leading-8 text-[#20231D] transition-colors duration-300 group-hover:text-[#B08B57]">
          {item.title}
        </h2>

        <p className="mb-7 text-sm leading-7 text-[#20231D]/55">
          {item.description}
        </p>

        <Link
          href={`/cases/${item.id}`}
          className="inline-flex items-center gap-3 border-b border-[#B08B57]/40 pb-2 text-xs font-semibold text-[#20231D] transition-all duration-300 group-hover:border-[#B08B57] group-hover:text-[#B08B57]"
        >
          مشاهده جزئیات
          <FaArrowLeft className="text-[10px] transition-transform duration-300 group-hover:-translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
