import Image from "next/image";
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
    <section className="dossier-hero relative overflow-hidden bg-[#FAF7F1]">
      <style>{`
        .dossier-hero {
          font-family: "Vazirmatn", Tahoma, sans-serif;
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
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .dossier-hero .rise {
          animation: riseIn 0.7s cubic-bezier(.22, .61, .36, 1) both;
          animation-delay: calc(var(--i, 0) * 100ms);
        }

        .dossier-hero .line-grow {
          transform-origin: right;
          animation: lineGrow 0.7s cubic-bezier(.22, .61, .36, 1) 0.4s both;
        }

        .dossier-hero .marquee-track {
          animation: marquee 45s linear infinite;
          transform: translate3d(0, 0, 0);
        }

        @media (prefers-reduced-motion: reduce) {
          .dossier-hero .rise,
          .dossier-hero .line-grow,
          .dossier-hero .marquee-track {
            animation: none;
          }
        }
      `}</style>

      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[1.05fr_1fr]">
        <div
          className="
            relative order-1 h-[55vh] min-h-[380px] max-h-[620px]
            overflow-hidden sm:h-[60vh]
            lg:order-1 lg:h-screen lg:min-h-screen lg:max-h-none
            lg:[clip-path:polygon(0_0,100%_0,90%_100%,0_100%)]
          "
        >
          <Image
            src={image}
            alt={title}
            fill
            priority
            sizes="
              (max-width: 640px) 100vw,
              (max-width: 1024px) 100vw,
              52vw
            "
            className="
              object-cover object-center
              transition-transform duration-[2500ms]
              hover:scale-105
            "
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1526]/90 via-[#101B2E]/25 to-[#101B2E]/10" />

          <div
            className="
              absolute bottom-5 right-5 z-10
              flex items-center gap-3 text-white
              sm:bottom-8 sm:right-8 sm:gap-4
              lg:right-auto lg:left-8
            "
          >
            <span className="text-sm tracking-[0.2em] text-[#C9A15F]">
              {toPersianDigits(index)}
            </span>

            <span className="h-px w-8 bg-[#C9A15F]/50 sm:w-12" />

            <span className="text-[10px] tracking-[0.2em] text-white/70 sm:text-xs sm:tracking-[0.3em]">
              دفتر وکالت
            </span>
          </div>

          <div
            className="
              absolute right-6 top-1/2 hidden -translate-y-1/2
              rotate-90 text-[10px] font-medium
              tracking-[0.5em] text-white/60 lg:block
            "
          >
            عدالت • تجربه • اعتماد
          </div>
        </div>

        <div
          className="
            order-2 flex min-h-[400px] items-center
            bg-[#FAF7F1] px-5 py-10
            sm:px-8 sm:py-24
            lg:min-h-screen lg:px-12 lg:py-16
            xl:px-20 2xl:px-24
          "
        >
          <div className={`flex w-full max-w-2xl flex-col ${align}`}>
            <div
              className={`
                rise mb-6 flex w-full items-center gap-3 ${justify}
                sm:mb-8 sm:gap-4
              `}
              style={{ "--i": 0 }}
            >
              <span className="h-px w-8 bg-[#A87C3E] sm:w-12" />

              <span className="text-[10px] font-semibold tracking-[0.15em] text-[#A87C3E] sm:text-xs sm:tracking-[0.3em]">
                {subtitle}
              </span>
            </div>

            <h1
              className="
                rise mb-5 text-4xl font-bold leading-[1.25]
                text-[#101B2E]
                sm:mb-6 sm:text-5xl
                md:text-6xl lg:text-7xl xl:text-[80px]
              "
              style={{ "--i": 1 }}
            >
              {title}
            </h1>

            <div
              className="
                line-grow mb-6 h-px w-16
                bg-[#A87C3E]
                sm:mb-8 sm:w-20
              "
              style={{
                transformOrigin: position === "left" ? "left" : "right",
              }}
            />

            <p
              className="
                rise mb-8 max-w-xl text-sm leading-8
                text-[#4A5568]
                sm:mb-10 sm:text-base sm:leading-8
                lg:text-lg
              "
              style={{ "--i": 2 }}
            >
              {description}
            </p>

            <div
              className="
                mt-8 w-full overflow-hidden
                border-t border-[#101B2E]/10
                pt-5
                sm:mt-10 sm:pt-6
              "
            >
              <div className="flex w-max whitespace-nowrap">
                <div className="marquee-track flex items-center gap-5 sm:gap-6">
                  {Array.from({ length: 2 }).map((_, i) => (
                    <span key={i} className="flex items-center gap-5 sm:gap-6">
                      <span className="text-[9px] font-medium tracking-[0.15em] text-[#101B2E]/40 sm:text-xs sm:tracking-[0.2em]">
                        مشاوره حقوقی معتبر
                      </span>

                      <span className="h-1 w-1 rounded-full bg-[#A87C3E]/60" />

                      <span className="text-[9px] text-[#101B2E]/40 sm:text-xs">
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

      <div
        className="
          pointer-events-none absolute bottom-6 left-1/2 z-10
          hidden -translate-x-1/2 flex-col items-center gap-2
          text-[#101B2E]/40 lg:flex
        "
      >
        <span className="text-[10px] tracking-[0.3em]">اسکرول</span>
        <span className="h-8 w-px bg-[#101B2E]/30" />
      </div>
    </section>
  );
}
