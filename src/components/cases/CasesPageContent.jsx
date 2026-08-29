"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useMemo, useState } from "react";

import CasesFilter from "./CasesFilter";
import CasesGrid from "./CasesGrid";
import CasesSearch from "./CasesSearch";
import { casesData } from "./cases-data";

export default function CasesPageContent() {
  const [activeFilter, setActiveFilter] = useState("همه");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");

  const filteredCases = useMemo(() => {
    let result = [...casesData];

    if (activeFilter !== "همه") {
      result = result.filter((item) => item.category === activeFilter);
    }

    const query = search.trim().toLowerCase();

    if (query) {
      result = result.filter((item) =>
        `${item.title} ${item.description} ${item.category} ${item.type}`
          .toLowerCase()
          .includes(query),
      );
    }

    result.sort((a, b) =>
      sort === "newest"
        ? Number(b.year) - Number(a.year)
        : Number(a.year) - Number(b.year),
    );

    return result;
  }, [activeFilter, search, sort]);

  return (
    <main
      className="
        relative min-h-screen
        overflow-hidden
        bg-[#F8F6F2]
        px-4 py-14
        sm:px-6 sm:py-16
        md:px-10 md:py-20
        lg:px-16 lg:py-28
      "
    >
      {/* Background */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40 top-20
          h-72 w-72
          rounded-full
          bg-[#B08B57]/10
          blur-3xl
          md:h-96 md:w-96
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40 bottom-20
          h-72 w-72
          rounded-full
          bg-[#20231D]/5
          blur-3xl
          md:h-96 md:w-96
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl -mt-10">
        {/* Back to Home */}
        <div className="mb-6 md:mb-8">
          <Link
            href="/#cases"
            className="
              group
              inline-flex
              items-center
              gap-3
              px-4 py-2.5
              text-xs
              font-medium
              text-[#20231D]/60
            "
          >
            <FaArrowRight
              className="
                text-[9px]
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />

            <span>بازگشت به صفحه اصلی</span>
          </Link>
        </div>

        <CasesSearch search={search} setSearch={setSearch} />

        <CasesFilter
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          sort={sort}
          setSort={setSort}
        />

        {/* Result count */}
        <div className="mb-5 flex items-center gap-4 md:mb-6">
          <span className="shrink-0 text-xs text-[#20231D]/40">
            نمایش {filteredCases.length} پرونده
          </span>

          <span className="h-px flex-1 bg-[#20231D]/10" />
        </div>

        <CasesGrid cases={filteredCases} />
      </div>
    </main>
  );
}
