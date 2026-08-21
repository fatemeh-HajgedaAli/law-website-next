"use client";

import { FaSearch } from "react-icons/fa";

export default function CasesSearch({ search, setSearch }) {
  return (
    <div className="relative mb-6">
      <FaSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-sm text-[#B08B57]" />

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="جستجوی پرونده، موضوع یا دسته‌بندی..."
        className="w-full rounded-2xl border border-[#20231D]/10 bg-white py-4 pr-12 pl-5 text-sm text-[#20231D] shadow-sm outline-none transition-all placeholder:text-[#20231D]/35 focus:border-[#B08B57] focus:ring-4 focus:ring-[#B08B57]/10"
      />
    </div>
  );
}
