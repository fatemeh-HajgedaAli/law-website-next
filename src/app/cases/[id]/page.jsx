import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaArrowLeft,
  FaGavel,
  FaCheckCircle,
} from "react-icons/fa";

import { casesData } from "@/components/cases/cases-data";

export default async function CaseDetailPage({ params }) {
  const { id } = await params;

  const caseItem = casesData.find((item) => String(item.id) === String(id));

  // -------------------------
  // Case Not Found
  // -------------------------
  if (!caseItem) {
    return (
      <main
        dir="rtl"
        className="flex min-h-screen items-center justify-center bg-[#F8F6F2] px-5 py-20"
      >
        <div className="w-full max-w-md text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#20231D] text-[#D4AF6A]">
            <FaGavel className="text-2xl" />
          </div>

          <h1 className="mb-3 text-2xl font-bold text-[#20231D]">
            پرونده پیدا نشد
          </h1>

          <p className="mb-7 text-sm leading-7 text-[#20231D]/50">
            پرونده‌ای با این شناسه وجود ندارد.
          </p>

          <Link
            href="/#cases"
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[#20231D]
              px-6
              py-3.5
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#B08B57]
            "
          >
            <FaArrowRight className="text-xs" />
            بازگشت به پرونده‌ها
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main
      dir="rtl"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#F8F6F2]
        px-4
        py-12
        sm:px-6
        sm:py-16
        md:px-10
        md:py-20
        lg:px-16
        lg:py-28
      "
    >
      {/* Background decorations */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-72
          w-72
          rounded-full
          bg-[#B08B57]/10
          blur-3xl
          sm:h-96
          sm:w-96
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-20
          h-72
          w-72
          rounded-full
          bg-[#20231D]/5
          blur-3xl
          sm:h-96
          sm:w-96
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Back Button */}

        <Link
          href="/cases"
          className="
            mb-7
            inline-flex
            items-center
            gap-3
            text-xs
            font-semibold
            text-[#20231D]/55
            transition-colors
            duration-300
            hover:text-[#B08B57]
            sm:mb-10
          "
        >
          <FaArrowRight className="text-[10px]" />
          بازگشت به پرونده‌ها
        </Link>

        {/* Main Card */}

        <article
          className="
            overflow-hidden
            rounded-[24px]
            border
            border-[#20231D]/10
            bg-white
            shadow-sm
            sm:rounded-[32px]
            lg:rounded-[40px]
          "
        >
          {/* =========================
              IMAGE
          ========================= */}

          <div
            className="
              relative
              h-[260px]
              w-full
              overflow-hidden
              sm:h-[360px]
              md:h-[430px]
              lg:h-[520px]
            "
          >
            <Image
              src={caseItem.image}
              alt={caseItem.title}
              fill
              priority
              sizes="
                (max-width: 640px) 100vw,
                (max-width: 1024px) 100vw,
                1200px
              "
              className="object-cover"
            />

            {/* Dark Overlay */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#10130F]/90
                via-[#10130F]/35
                to-transparent
              "
            />

            {/* Case Number */}

            <div
              className="
                absolute
                left-4
                top-4
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                bg-black/20
                text-xs
                font-semibold
                text-white
                backdrop-blur-md
                sm:left-7
                sm:top-7
                sm:h-12
                sm:w-12
              "
            >
              {caseItem.number}
            </div>

            {/* Image Content */}

            <div
              className="
                absolute
                bottom-5
                right-4
                left-4
                sm:bottom-7
                sm:right-7
                sm:left-7
                lg:bottom-10
                lg:right-10
                lg:left-10
              "
            >
              <div className="mb-3 flex flex-wrap items-center gap-2 sm:gap-3">
                <span
                  className="
                    rounded-full
                    bg-[#B08B57]
                    px-3
                    py-1.5
                    text-[10px]
                    font-semibold
                    text-white
                  "
                >
                  {caseItem.category}
                </span>

                <span className="text-xs text-white/70">{caseItem.year}</span>
              </div>

              <h1
                className="
                  max-w-4xl
                  text-2xl
                  font-bold
                  leading-[1.5]
                  text-white
                  sm:text-3xl
                  md:text-4xl
                  lg:text-5xl
                "
              >
                {caseItem.title}
              </h1>
            </div>
          </div>

          {/* =========================
              CONTENT
          ========================= */}

          <div
            className="
              p-5
              sm:p-8
              md:p-10
              lg:p-12
            "
          >
            {/* About Case */}

            <div className="max-w-4xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#B08B57] sm:w-10" />

                <span className="text-xs font-semibold text-[#B08B57]">
                  درباره پرونده
                </span>
              </div>

              <p
                className="
                  text-sm
                  leading-8
                  text-[#20231D]/65
                  sm:text-base
                  sm:leading-9
                "
              >
                {caseItem.description}
              </p>
            </div>

            {/* =========================
                DETAILS
            ========================= */}

            <div
              className="
                mt-8
                grid
                overflow-hidden
                rounded-2xl
                border
                border-[#20231D]/10
                sm:mt-10
                sm:grid-cols-3
              "
            >
              {/* Category */}

              <div
                className="
                  border-b
                  border-[#20231D]/10
                  p-5
                  sm:border-l
                  sm:border-b-0
                  sm:p-6
                "
              >
                <span className="mb-2 block text-[10px] text-[#20231D]/40">
                  حوزه پرونده
                </span>

                <span className="text-sm font-semibold text-[#20231D]">
                  {caseItem.category}
                </span>
              </div>

              {/* Year */}

              <div
                className="
                  border-b
                  border-[#20231D]/10
                  p-5
                  sm:border-l
                  sm:border-b-0
                  sm:p-6
                "
              >
                <span className="mb-2 block text-[10px] text-[#20231D]/40">
                  سال رسیدگی
                </span>

                <span className="text-sm font-semibold text-[#20231D]">
                  {caseItem.year}
                </span>
              </div>

              {/* Result */}

              <div className="p-5 sm:p-6">
                <span className="mb-2 block text-[10px] text-[#20231D]/40">
                  نتیجه پرونده
                </span>

                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-xs text-[#B08B57]" />

                  <span className="text-sm font-semibold text-[#20231D]">
                    {caseItem.result}
                  </span>
                </div>
              </div>
            </div>

            {/* =========================
                RESULT BOX
            ========================= */}

            <div
              className="
                mt-6
                flex
                flex-col
                gap-4
                rounded-2xl
                border
                border-[#B08B57]/20
                bg-[#B08B57]/5
                p-5
                sm:mt-8
                sm:flex-row
                sm:items-center
                sm:justify-between
                sm:p-6
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#20231D]
                    text-[#D4AF6A]
                  "
                >
                  <FaCheckCircle className="text-sm" />
                </div>

                <div>
                  <span className="mb-1 block text-[10px] text-[#20231D]/40">
                    نتیجه نهایی
                  </span>

                  <span className="text-sm font-bold text-[#20231D]">
                    {caseItem.result}
                  </span>
                </div>
              </div>

              <p
                className="
                  text-xs
                  leading-6
                  text-[#20231D]/50
                  sm:max-w-xs
                  sm:text-right
                "
              >
                پیگیری تخصصی و متعهدانه پرونده تا رسیدن به نتیجه مطلوب
              </p>
            </div>
          </div>
        </article>

        {/* =========================
            CTA
        ========================= */}

        <div
          className="
            mt-6
            flex
            flex-col
            gap-5
            rounded-3xl
            bg-[#20231D]
            px-5
            py-6
            text-center
            sm:mt-8
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:px-8
            sm:py-7
            sm:text-right
          "
        >
          <div>
            <h2 className="mb-2 text-lg font-bold text-white">
              پرونده حقوقی مشابهی دارید؟
            </h2>

            <p className="text-xs leading-6 text-white/50">
              برای بررسی شرایط پرونده و دریافت مشاوره با ما در ارتباط باشید.
            </p>
          </div>

          <Link
            href="/consultation"
            className="
              inline-flex
              w-full
              shrink-0
              items-center
              justify-center
              gap-3
              rounded-full
              bg-[#B08B57]
              px-6
              py-3.5
              text-xs
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#D4AF6A]
              sm:w-auto
            "
          >
            دریافت مشاوره
            <FaArrowLeft className="text-[10px]" />
          </Link>
        </div>
      </div>
    </main>
  );
}
