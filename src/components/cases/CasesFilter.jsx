"use client";

const filters = ["همه", "حقوقی", "کیفری", "ملکی", "خانواده", "تجاری"];

export default function CasesFilter({
  activeFilter,
  setActiveFilter,
  sort,
  setSort,
}) {
  return (
    <div
      className="
        mb-4
        flex flex-col gap-4 mt-[-5%]
        rounded-3xl
        border border-[#20231D]/10
        bg-white
        p-4
        shadow-sm
        sm:p-5
        md:mb-8
        md:flex-row
        md:items-center
        md:justify-between
        
      "
    >
      {/* Filters */}
      <div
        className="
          flex
          gap-2
          overflow-x-auto
          pb-1
          scrollbar-hide
          md:flex-wrap
          md:overflow-hidden
        "
      >
        {filters.map((filter) => {
          const active = activeFilter === filter;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`
                shrink-0
                rounded-full
                px-4 py-2.5
                text-xs font-medium
                transition-[background-color,color,box-shadow]
                duration-300
                ${
                  active
                    ? "bg-[#20231D] text-white shadow-lg"
                    : "bg-[#F8F6F2] text-[#20231D]/60 hover:bg-[#B08B57]/10 hover:text-[#B08B57]"
                }
              `}
            >
              {filter}
            </button>
          );
        })}
      </div>

      {/* Sort */}
      <div className="relative w-full md:w-auto">
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="
      w-full
      appearance-none
      rounded-2xl
      border border-[#20231D]/10
      bg-white
      px-5 py-3.5
      pl-11
      text-xs
      font-medium
      text-[#20231D]
      shadow-sm
      outline-none
      transition-all
      duration-300

      hover:border-[#B08B57]/40
      hover:shadow-md

      focus:border-[#B08B57]
      focus:ring-4
      focus:ring-[#B08B57]/10

      md:w-44
      md:py-3.5
    "
        >
          <option value="newest">جدیدترین</option>
          <option value="oldest">قدیمی‌ترین</option>
        </select>

        {/* Arrow */}
        <span
          className="
      pointer-events-none
      absolute
      left-4
      top-1/2
      -translate-y-1/2
      text-[10px]
      text-[#B08B57]
    "
        >
          ▼
        </span>
      </div>
    </div>
  );
}
