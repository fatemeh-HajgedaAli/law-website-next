import Image from "next/image";
import Link from "next/link";
import { toPersianDigits } from "@/utils/toPersianDigits";

export default function HeroSlide({
  image,
  position,
  subtitle,
  title,
  description,
  index = 1,
}) {
  const align =
    position === "center"
      ? "mx-auto text-center items-center"
      : position === "right"
        ? "mr-auto text-right items-end"
        : "ml-auto text-left items-start";

  const justify =
    position === "center"
      ? "justify-center"
      : position === "right"
        ? "justify-end"
        : "justify-start";

  return (
    <section className="dossier-hero relative min-h-screen overflow-hidden bg-[#FAF7F1]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700;800&family=Noto+Naskh+Arabic:wght@600;700&display=swap');

        .dossier-hero {
          font-family: 'Vazirmatn', Tahoma, sans-serif;
        }

        .dossier-hero .font-display {
          font-family: 'Noto Naskh Arabic', 'Vazirmatn', serif;
        }

        .dossier-hero .grain {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
        }

        @keyframes riseIn {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes sealIn {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) rotate(-25deg) scale(0.7);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) rotate(0deg) scale(1);
          }
        }

        @keyframes lineGrow {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .dossier-hero .rise {
          animation: riseIn 0.8s cubic-bezier(.22, .61, .36, 1) both;
          animation-delay: calc(var(--i, 0) * 110ms);
        }

        .dossier-hero .seal-in {
          animation: sealIn 1s cubic-bezier(.22, .61, .36, 1) 0.3s both;
        }

        .dossier-hero .line-grow {
          transform-origin: right;
          animation: lineGrow 0.9s cubic-bezier(.22, .61, .36, 1) 0.5s both;
        }

        .dossier-hero .marquee-track {
          animation: marquee 26s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .dossier-hero .rise,
          .dossier-hero .seal-in,
          .dossier-hero .line-grow,
          .dossier-hero .marquee-track {
            animation: none;
          }
        }
      `}</style>

      <div className="grid min-h-screen lg:grid-cols-[1.05fr_1fr]">
        <div className="relative order-1 min-h-[430px] overflow-hidden lg:order-1 lg:min-h-screen lg:[clip-path:polygon(0_0,100%_0,90%_100%,0_100%)]">
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover object-center transition-transform duration-[2500ms] hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1526]/90 via-[#101B2E]/25 to-[#101B2E]/10" />
          <div className="grain absolute inset-0" />

          <div className="absolute bottom-8 right-8 z-10 flex items-center gap-4 text-white lg:right-auto lg:left-8">
            <span className="font-display text-sm tracking-[0.2em] text-[#C9A15F]">
              {toPersianDigits(index)}
            </span>

            <span className="h-px w-12 bg-[#C9A15F]/50" />

            <span className="text-xs uppercase tracking-[0.3em] text-white/70">
              دفتر وکالت
            </span>
          </div>

          <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 rotate-90 text-[10px] font-medium tracking-[0.5em] text-white/60 lg:block">
            عدالت • تجربه • اعتماد
          </div>
        </div>

        <div className="seal-in pointer-events-none absolute right-[calc(50%-1px)] top-1/2 z-20 hidden -translate-y-1/2 translate-x-1/2 lg:block">
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#101B2E] shadow-[0_8px_30px_rgba(16,27,46,0.35)]">
            <svg
              viewBox="0 0 120 120"
              className="h-20 w-20 text-[#C9A15F]"
              aria-hidden="true"
            >
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="2 5"
              />

              <circle
                cx="60"
                cy="60"
                r="42"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              />

              <path
                d="
                  M60 25
                  V82
                  M42 82
                  H78
                  M60 35
                  L35 48
                  M60 35
                  L85 48
                  M35 48
                  L27 63
                  H43
                  Z
                  M85 48
                  L77 63
                  H93
                  Z
                  M27 63
                  Q35 72 43 63
                  M77 63
                  Q85 72 93 63
                "
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="order-2 flex min-h-[600px] items-center bg-[#FAF7F1] px-6 py-16 sm:px-10 lg:order-2 lg:min-h-screen lg:px-16 xl:px-24">
          <div className={`flex w-full max-w-2xl flex-col ${align}`}>
            <div
              className={`rise mb-8 flex items-center gap-4 ${justify}`}
              style={{ "--i": 0 }}
            >
              <span className="h-px w-12 bg-[#A87C3E]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#A87C3E]">
                {subtitle}
              </span>
            </div>

            <h1
              className="font-display rise mb-8 text-5xl font-semibold leading-[1.08] text-[#101B2E] sm:text-6xl lg:text-7xl xl:text-[80px]"
              style={{ "--i": 1 }}
            >
              {title}
            </h1>

            <div
              className="line-grow mb-8 h-px w-20 bg-[#A87C3E]"
              style={{
                transformOrigin: position === "left" ? "left" : "right",
              }}
            />

            <p
              className="rise mb-10 max-w-xl text-base leading-8 text-[#4A5568] sm:text-lg"
              style={{ "--i": 2 }}
            >
              {description}
            </p>

            <div
              className={`rise flex flex-wrap items-center gap-6 ${justify}`}
              style={{ "--i": 3 }}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 rounded-full bg-[#101B2E] px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#A87C3E] hover:text-[#101B2E]"
              >
                <span>دریافت مشاوره</span>

                <span className="text-lg transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>
              </Link>

              <Link
                href="/about"
                className="group inline-flex items-center gap-3 border-b border-[#101B2E]/25 pb-2 text-sm font-medium text-[#101B2E] transition-colors duration-300 hover:border-[#A87C3E] hover:text-[#A87C3E]"
              >
                <span>درباره ما</span>
              </Link>
            </div>

            <div className="mt-16 w-full overflow-hidden border-t border-[#101B2E]/10 pt-6">
              <div className="flex w-max whitespace-nowrap">
                <div className="marquee-track flex items-center gap-6">
                  {Array.from({ length: 2 }).map((_, i) => (
                    <span key={i} className="flex items-center gap-6">
                      <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#101B2E]/40">
                        مشاوره حقوقی معتبر
                      </span>

                      <span className="h-1 w-1 rounded-full bg-[#A87C3E]/60" />

                      <span className="text-xs text-[#101B2E]/40">
                        حرفه‌ای • محرمانه • باتجربه
                      </span>

                      <span className="h-1 w-1 rounded-full bg-[#A87C3E]/60" />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[#101B2E]/40 lg:flex">
        <span className="text-[10px] tracking-[0.3em]">اسکرول</span>
        <span className="h-8 w-px animate-pulse bg-[#101B2E]/30" />
      </div>
    </section>
  );
}
