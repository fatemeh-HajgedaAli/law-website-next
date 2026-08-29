"use client";

import { FaSearch } from "react-icons/fa";

export default function CasesSearch({ search, setSearch }) {
  return (
    <div className="relative mb-8 lg:mb-22 ">
      <FaSearch
        className="
          absolute right-4 top-1/2
          -translate-y-1/2
          text-sm text-[#B08B57]
          md:right-5
        "
      />

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="جستجوی پرونده، موضوع یا دسته‌بندی..."
        className="
          w-full
          rounded-2xl
          border border-[#20231D]/10
          bg-white
          py-3.5
          pr-11 pl-4
          text-xs text-[#20231D]
          shadow-sm
          outline-none
          transition-[border-color,box-shadow]
          duration-300
          placeholder:text-[#20231D]/35
          focus:border-[#B08B57]
          focus:ring-4
          focus:ring-[#B08B57]/10
          sm:py-4 sm:pr-12 sm:pl-5 sm:text-sm
        "
      />
    </div>
  );
}
