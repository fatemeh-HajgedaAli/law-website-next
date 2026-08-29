
import { FaBriefcase, FaAward } from "react-icons/fa";
import { toPersianDigits } from "@/utils/toPersianDigits";

export default function AboutStats() {
  return (
    <div className="grid max-w-lg grid-cols-2 gap-4">
      <div
        className="
          group flex items-center gap-4
          rounded-2xl border border-[#D4AF6A]/20
          bg-[#20231D] p-4 shadow-lg
          transition-transform duration-300
          hover:-translate-y-1
        "
      >
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D4AF6A]/20 text-[#D4AF6A]">
          <FaBriefcase />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#D4AF6A]">
            {toPersianDigits("۱۰٬۰۰۰+")}
          </h3>
          <p className="text-xs text-gray-300">پرونده موفق</p>
        </div>
      </div>

      <div
        className="
          group flex items-center gap-4
          rounded-2xl border border-gray-200
          bg-white p-4 shadow-md
          transition-transform duration-300
          hover:-translate-y-1
        "
      >
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F8F5EF] text-[#B08B57]">
          <FaAward />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#B08B57]">
            {toPersianDigits("۱۲+")}
          </h3>
          <p className="text-xs text-gray-500">سال تجربه</p>
        </div>
      </div>
    </div>
  );
}

