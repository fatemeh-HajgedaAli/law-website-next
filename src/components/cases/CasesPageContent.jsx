"use client";

import { useMemo, useState } from "react";

import CasesHero from "./CasesHero";
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

    if (search.trim()) {
      const query = search.trim().toLowerCase();

      result = result.filter((item) =>
        `${item.title} ${item.description} ${item.category} ${item.type}`
          .toLowerCase()
          .includes(query),
      );
    }

    result.sort((a, b) => {
      if (sort === "newest") {
        return Number(b.year) - Number(a.year);
      }

      return Number(a.year) - Number(b.year);
    });

    return result;
  }, [activeFilter, search, sort]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F8F6F2] px-5 py-20 md:px-10 lg:px-16 lg:py-28">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#B08B57]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#20231D]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <CasesSearch search={search} setSearch={setSearch} />

        <CasesFilter
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          sort={sort}
          setSort={setSort}
        />

        <div className="mb-6 flex items-center justify-between">
          <span className="text-xs text-[#20231D]/40">
            نمایش {filteredCases.length} پرونده
          </span>

          <span className="h-px flex-1 bg-[#20231D]/10 mr-5" />
        </div>

        <CasesGrid cases={filteredCases} />
      </div>
    </main>
  );
}
