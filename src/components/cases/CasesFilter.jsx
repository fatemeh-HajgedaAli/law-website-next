"use client";

const filters = ["همه", "حقوقی", "کیفری", "ملکی", "خانواده", "تجاری"];

export default function CasesFilter({
  activeFilter,
  setActiveFilter,
  sort,
  setSort,
}) {
  return (
    <div className="mb-10 flex flex-col gap-5 rounded-3xl border border-[#20231D]/10 bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between">
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => {
          const active = activeFilter === filter;

          return (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2.5 text-xs font-medium transition-all duration-300 ${
                active
                  ? "bg-[#20231D] text-white shadow-lg"
                  : "bg-[#F8F6F2] text-[#20231D]/60 hover:bg-[#B08B57]/10 hover:text-[#B08B57]"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="rounded-full border border-[#20231D]/10 bg-[#F8F6F2] px-5 py-3 text-xs text-[#20231D] outline-none"
      >
        <option value="newest">جدیدترین</option>
        <option value="oldest">قدیمی‌ترین</option>
      </select>
    </div>
  );
}
