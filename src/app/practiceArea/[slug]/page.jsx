import Link from "next/link";
import { notFound } from "next/navigation";
import { GoLaw } from "react-icons/go";

import { practiceAreas } from "../../../components/practiceAreas/practiceData";
import { practiceArticles } from "../../../data/practiceArticles";
import { toPersianDigits } from "../../../utils/toPersianDigits";

export default async function PracticeAreaPage({ params }) {
  const { slug } = await params;

  const practice = practiceAreas.find((item) => item.slug === slug);
  const article = practiceArticles[slug];

  if (!practice || !article) {
    notFound();
  }

  return (
    <main className="dossier min-h-screen bg-[#FAF7F1]">
      <style>{`
        .dossier {
          font-family: "Vazirmatn", Tahoma, sans-serif;
        }

        .dossier .font-display {
          font-family: "Vazirmatn", Tahoma, sans-serif;
        }

        .dossier .grain {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
        }

        @keyframes riseIn {
          from {
            opacity: 0;
            transform: translateY(14px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .dossier .rise {
          animation: riseIn 0.7s cubic-bezier(.22,.61,.36,1) both;
          animation-delay: calc(var(--i, 0) * 90ms);
        }

        @media (prefers-reduced-motion: reduce) {
          .dossier .rise {
            animation: none;
          }
        }
      `}</style>

      {/* Breadcrumb */}
      <nav
        dir="rtl"
        className="mx-auto flex max-w-7xl items-center gap-2 px-6 pt-6 text-sm text-[#6B7280]"
      >
        <Link href="/" className="transition hover:text-[#A87C3E]">
          خانه
        </Link>

        <span className="text-[#A87C3E]">/</span>

        <Link
          href="/#practiceAreas"
          className="transition hover:text-[#A87C3E]"
        >
          حوزه‌های تخصصی
        </Link>

        <span className="text-[#A87C3E]">/</span>

        <span className="text-[#2B2F36]">{article.title}</span>
      </nav>

      {/* Hero */}
      <section className="relative mx-6 mt-6 overflow-hidden rounded-3xl md:mx-auto md:max-w-7xl">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${practice.image})`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1526] via-[#101B2E]/85 to-[#101B2E]/50" />

        <div className="grain absolute inset-0" />

        {/* Decorative frame */}
        <div className="pointer-events-none absolute inset-6 hidden border border-[#A87C3E]/25 md:block" />

        <span className="pointer-events-none absolute right-8 top-8 hidden h-8 w-8 border-r-2 border-t-2 border-[#C9A15F] md:block" />

        <span className="pointer-events-none absolute bottom-8 left-8 hidden h-8 w-8 border-b-2 border-l-2 border-[#C9A15F] md:block" />

        <div className="relative z-10 mx-auto flex min-h-[540px] max-w-7xl items-center px-8 py-20 md:px-16">
          <div dir="rtl" className="max-w-3xl text-right text-white">
            {/* Category */}
            <div
              className="rise mb-6 flex items-center gap-3"
              style={{ "--i": 0 }}
            >
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-[#C9A15F]/40" />

                <div className="absolute inset-1.5 rounded-full border border-dashed border-[#C9A15F]/30" />

                <GoLaw
                  className="relative z-10 h-5 w-5 text-[#C9A15F]"
                  strokeWidth={1.4}
                />
              </div>

              <span className="text-sm tracking-[0.2em] text-[#C9A15F]">
                حوزه تخصصی وکالت
              </span>
            </div>

            {/* Title */}
            <h1
              className="font-display rise mb-6 text-4xl font-semibold leading-tight md:text-6xl"
              style={{ "--i": 1 }}
            >
              {article.title}
            </h1>

            {/* Divider */}
            <div
              className="rise mb-6 h-px w-24 bg-[#A87C3E]"
              style={{ "--i": 2 }}
            />

            {/* Subtitle */}
            <p
              className="rise max-w-2xl text-xl leading-9 text-white/80"
              style={{ "--i": 3 }}
            >
              {article.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section dir="rtl" className="mx-auto max-w-4xl px-6 py-20">
        <span className="mb-4 block text-sm font-semibold tracking-[0.25em] text-[#A87C3E]">
          چکیده پرونده
        </span>

        <div className="border-r-2 border-[#A87C3E]/60 pr-6">
          <p className="text-lg leading-9 text-[#4A5568]">{article.intro}</p>
        </div>
      </section>

      {/* Article Content */}
      <section dir="rtl" className="mx-auto max-w-4xl px-6 pb-20">
        {article.sections.map((section, index) => (
          <article
            key={index}
            className="mb-14 border-t border-dashed border-[#D8CFC0] pt-10 first:border-t-0 first:pt-0"
          >
            <span className="mb-3 block text-sm font-semibold tracking-[0.2em] text-[#A87C3E]">
              ماده {toPersianDigits(index + 1)}
            </span>

            <h2 className="font-display mb-6 text-2xl font-semibold text-[#101B2E] md:text-3xl">
              {section.title}
            </h2>

            <div className="space-y-4">
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p
                  key={paragraphIndex}
                  className="text-base leading-9 text-[#4A5568]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        ))}
      </section>

      {/* Services */}
      <section className="grain relative bg-[#101B2E] px-6 py-20">
        <div dir="rtl" className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <span className="text-sm font-semibold tracking-[0.25em] text-[#A87C3E]">
              خدمات
            </span>

            <h2 className="font-display mt-3 text-3xl font-semibold text-white">
              خدمات تخصصی {article.title}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {article.services.map((service, index) => (
              <div
                key={index}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#A87C3E]/50 hover:bg-white/[0.06]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#A87C3E]/50 text-lg font-semibold text-[#C9A15F] transition group-hover:bg-[#A87C3E] group-hover:text-[#101B2E]">
                  {toPersianDigits(index + 1)}
                </div>

                <h3 className="font-display mb-3 text-xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="leading-8 text-white/65">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section dir="rtl" className="mx-auto max-w-4xl px-6 py-20">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold tracking-[0.25em] text-[#A87C3E]">
            پرسش و پاسخ
          </span>

          <h2 className="font-display mt-3 text-3xl font-semibold text-[#101B2E]">
            سوالات متداول
          </h2>
        </div>

        <div className="space-y-4">
          {article.faq.map((item, index) => (
            <details
              key={index}
              className="group rounded-2xl border border-[#E7E0D2] bg-white p-6 transition open:border-[#A87C3E]/50 open:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#101B2E]">
                <span className="flex items-center gap-3">
                  <span className="text-sm text-[#A87C3E]">
                    {toPersianDigits(index + 1)}
                  </span>

                  {item.question}
                </span>

                <span className="shrink-0 text-xl text-[#A87C3E] transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 border-t border-dashed border-[#E7E0D2] pt-4 leading-8 text-[#4A5568]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#101B2E] px-6 py-24 text-center text-white">
        {/* Background icon */}
        <GoLaw
          className="pointer-events-none absolute left-1/2 
          top-1/2 h-[420px] w-[420px] -translate-x-1/2 
          -translate-y-1/2 text-[#A87C3E] opacity-[0.05]"
          strokeWidth={0.2}
        />

        <div dir="rtl" className="relative z-10 mx-auto max-w-2xl">
          <span className="text-sm font-semibold tracking-[0.25em] text-[#A87C3E]">
            مشاوره حقوقی
          </span>

          <h2 className="font-display mb-5 mt-3 text-3xl font-semibold md:text-4xl">
            نیاز به مشاوره حقوقی دارید؟
          </h2>

          <p className="mx-auto mb-10 max-w-xl leading-8 text-white/70">
            برای بررسی شرایط پرونده و دریافت راهنمایی تخصصی با ما در ارتباط
            باشید.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+982100000000"
              className="rounded-full border border-white/25 px-8 py-3.5 text-sm font-semibold text-white transition hover:border-[#A87C3E] hover:text-[#C9A15F]"
            >
              تماس مستقیم با دفتر
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
