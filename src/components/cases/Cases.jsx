import Link from "next/link";
import { FaArrowLeft, FaGavel } from "react-icons/fa";

import CasesHero from "./CasesHero";
import CasesGrid from "./CasesGrid";
import { casesData } from "./cases-data";

export default function Cases() {
  // فقط چند پرونده برای نمایش در Home
  const featuredCases = casesData.slice(0, 3);
  const caseCount = casesData.length;
  const caseCountFa = caseCount.toLocaleString("fa-IR");

  return (
    <section className="relative overflow-hidden bg-[#F8F6F2] px-5 py-20 md:px-10 lg:px-16 lg:py-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#B08B57]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#20231D]/5 blur-3xl" />

      {/* Stitched dossier edge, replaces the plain hairline */}
      <div
        className="pointer-events-none absolute right-[8%] top-10 hidden h-[calc(100%-5rem)] w-px lg:block"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgba(32,35,29,0.18) 0, rgba(32,35,29,0.18) 4px, transparent 4px, transparent 12px)",
        }}
      />

      {/* Notary-style seal — the signature element, built from real data */}
      <div
        className="stamp-in pointer-events-none absolute right-6 top-8 z-10 hidden select-none md:right-10 md:top-10 lg:flex"
        aria-hidden="true"
      >
        <div className="relative flex h-28 w-28 -rotate-[9deg] items-center justify-center rounded-full border-[1.5px] border-[#B08B57]/70 bg-[#F8F6F2]/80 shadow-[0_2px_18px_rgba(32,35,29,0.08)] backdrop-blur-sm">
          <div className="absolute inset-[6px] rounded-full border border-dashed border-[#B08B57]/50" />
          <div className="flex flex-col items-center justify-center text-center">
            <span
              className="text-2xl font-bold leading-none text-[#20231D]"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              {caseCountFa}
            </span>
            <span className="mt-1 text-[10px] font-medium tracking-wide text-[#20231D]/70">
              پرونده ثبت‌شده
            </span>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <CasesHero />

        {/* Cases grid */}
        <CasesGrid cases={featuredCases} />

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col items-center gap-3">
          <Link
            href="/cases"
            className="
              group
              inline-flex
              items-center
              gap-4
              rounded-full
              border
              border-[#B08B57]
              bg-white
              px-7
              py-4
              text-sm
              font-semibold
              text-[#20231D]
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#20231D]
              hover:text-white
              hover:shadow-xl
            "
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#B08B57]/10 text-[#B08B57] transition-all duration-300 group-hover:bg-[#B08B57] group-hover:text-white">
              <FaGavel className="text-xs" />
            </span>

            <span>مشاهده تمام پرونده‌ها</span>

            <span
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-[#B08B57]/10
                transition-all
                duration-300
                group-hover:bg-[#B08B57]
              "
            >
              <FaArrowLeft className="text-xs" />
            </span>
          </Link>

          <span className="text-xs text-[#20231D]/50">
            بیش از {caseCountFa} پرونده در آرشیو موکلان ما
          </span>
        </div>
      </div>

      <style>{`
        @keyframes stampIn {
          0% {
            opacity: 0;
            transform: rotate(6deg) scale(0.7);
          }
          60% {
            opacity: 1;
            transform: rotate(-11deg) scale(1.05);
          }
          100% {
            opacity: 0.92;
            transform: rotate(-9deg) scale(1);
          }
        }
        .stamp-in {
          animation: stampIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: 0.15s;
        }
        @media (prefers-reduced-motion: reduce) {
          .stamp-in {
            animation: none;
            opacity: 0.92;
            transform: rotate(-9deg);
          }
        }
      `}</style>
    </section>
  );
}
