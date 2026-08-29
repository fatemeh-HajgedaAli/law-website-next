import Link from "next/link";

import { FaArrowLeft, FaGavel } from "react-icons/fa";

import CasesGrid from "./CasesGrid";
import CasesHero from "./CasesHero";
import { casesData } from "./cases-data";

export default function Cases() {
  const featuredCases = casesData.slice(0, 3);
  const caseCount = casesData.length;
  const caseCountFa = caseCount.toLocaleString("fa-IR");

  return (
    <section
      id="cases"
      className="
        relative
        overflow-hidden
        bg-[#F8F6F2]
        px-4 py-12
        sm:px-6 sm:py-16
        md:px-10 md:py-20
        lg:px-16 lg:py-28
      "
    >
      {/* =========================
          BACKGROUND
      ========================= */}

      {/* Main Gradient */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-[radial-gradient(circle_at_15%_20%,rgba(176,139,87,0.16),transparent_32%),radial-gradient(circle_at_85%_75%,rgba(32,35,29,0.07),transparent_35%),linear-gradient(135deg,#F8F6F2_0%,#F3EFE7_48%,#F8F6F2_100%)]
        "
      />

      {/* Golden Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-1/4
          h-[280px]
          w-[280px]
          rounded-full
          bg-[#B08B57]/10
          blur-[90px]

          sm:-left-32
          sm:h-[360px]
          sm:w-[360px]

          lg:h-[420px]
          lg:w-[420px]
          lg:blur-[120px]
        "
      />

      {/* Dark Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-10
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#20231D]/[0.05]
          blur-[90px]

          sm:h-[380px]
          sm:w-[380px]

          lg:h-[460px]
          lg:w-[460px]
          lg:blur-[130px]
        "
      />

      {/* Paper Texture */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.035]
          [background-image:radial-gradient(#20231D_0.7px,transparent_0.7px)]
          [background-size:8px_8px]
        "
      />

      {/* Decorative Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-32
          opacity-[0.035]
          [background-image:linear-gradient(to_right,#20231D_1px,transparent_1px),linear-gradient(to_bottom,#20231D_1px,transparent_1px)]
          [background-size:50px_50px]

          sm:h-40
          sm:[background-size:60px_60px]

          lg:[background-size:70px_70px]
        "
      />

      {/* =========================
          DOSSIER LINE
      ========================= */}

      <div
        className="
          pointer-events-none
          absolute
          right-[5%]
          top-8
          h-[calc(100%-4rem)]
          w-px
          opacity-40

          sm:right-[7%]
          sm:top-10

          lg:right-[8%]
          lg:top-10
          lg:opacity-100
        "
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgba(32,35,29,0.16) 0, rgba(32,35,29,0.16) 3px, transparent 3px, transparent 10px)",
        }}
      />

      {/* =========================
          STAMP
      ========================= */}

      <div
        className="
          stamp-in
          pointer-events-none
          absolute
          right-3
          top-5
          z-10
          select-none

          sm:right-5
          sm:top-7

          lg:right-6
          lg:top-8
        "
        aria-hidden="true"
      >
        <div
          className="
            relative
            flex
            h-16
            w-16
            rotate-[-9deg]
            items-center
            justify-center
            rounded-full
            border
            border-[#B08B57]/60
            bg-[#F8F6F2]/75
            shadow-[0_2px_14px_rgba(32,35,29,0.06)]
            backdrop-blur-sm

            sm:h-20
            sm:w-20

            md:h-24
            md:w-24

            lg:h-28
            lg:w-28
            lg:border-[1.5px]
          "
        >
          {/* Inner Dashed Circle */}
          <div
            className="
              absolute
              inset-[4px]
              rounded-full
              border
              border-dashed
              border-[#B08B57]/45

              sm:inset-[5px]

              lg:inset-[6px]
            "
          />

          <div className="flex flex-col items-center text-center">
            <span
              className="
                text-sm
                font-bold
                leading-none
                text-[#20231D]

                sm:text-lg

                md:text-xl

                lg:text-2xl
              "
              style={{
                fontFamily: "'Georgia', 'Times New Roman', serif",
              }}
            >
              {caseCountFa}
            </span>

            <span
              className="
                mt-0.5
                text-[6px]
                font-medium
                text-[#20231D]/70

                sm:mt-1
                sm:text-[7px]

                md:text-[8px]

                lg:text-[10px]
              "
            >
              پرونده ثبت‌شده
            </span>
          </div>
        </div>
      </div>

      {/* =========================
          CONTENT
      ========================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
        "
      >
        {/* Hero */}
        <CasesHero />

        {/* Featured Cases */}
        <CasesGrid cases={featuredCases} />

        {/* =========================
            CTA
        ========================= */}

        <div
          className="
            mt-10
            flex
            flex-col
            items-center
            gap-3

            sm:mt-12

            md:mt-14
          "
        >
          <Link
            href="/cases"
            className="
              group
              inline-flex
              w-full
              max-w-xs
              items-center
              justify-center
              gap-2
              rounded-full
              border
              border-[#B08B57]
              bg-white
              px-4
              py-3
              text-xs
              font-semibold
              text-[#20231D]
              shadow-sm
              transition-[transform,background-color,color,box-shadow]
              duration-300

              sm:w-auto
              sm:max-w-none
              sm:gap-3
              sm:px-7
              sm:py-4
              sm:text-sm

              motion-safe:hover:-translate-y-1
              motion-safe:hover:bg-[#20231D]
              motion-safe:hover:text-white
              motion-safe:hover:shadow-xl
            "
          >
            {/* Gavel */}
            <span
              className="
                flex
                h-7
                w-7
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#B08B57]/10
                text-[#B08B57]
                transition-colors
                duration-300

                sm:h-9
                sm:w-9

                group-hover:bg-[#B08B57]
                group-hover:text-white
              "
            >
              <FaGavel className="text-[10px] sm:text-xs" />
            </span>

            <span className="whitespace-nowrap">مشاهده تمام پرونده‌ها</span>

            {/* Arrow */}
            <span
              className="
                flex
                h-7
                w-7
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#B08B57]/10
                transition-colors
                duration-300

                sm:h-9
                sm:w-9

                group-hover:bg-[#B08B57]
              "
            >
              <FaArrowLeft className="text-[10px] sm:text-xs" />
            </span>
          </Link>

          <span
            className="
              text-center
              text-[10px]
              leading-5
              text-[#20231D]/50

              sm:text-xs
            "
          >
            بیش از {caseCountFa} پرونده در آرشیو موکلان ما
          </span>
        </div>
      </div>

      {/* =========================
          STAMP ANIMATION
      ========================= */}

      <style>{`
        @keyframes stampIn {
          from {
            opacity: 0;
            transform: rotate(6deg) scale(0.7);
          }

          60% {
            opacity: 1;
            transform: rotate(-11deg) scale(1.05);
          }

          to {
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
