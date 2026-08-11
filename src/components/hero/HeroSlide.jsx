import Image from "next/image";
import Link from "next/link";

export default function HeroSlide({
  image,
  position,
  subtitle,
  title,
  description,
}) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f4f1eb]">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* =========================
            IMAGE SIDE
        ========================== */}
        <div className="relative order-1 min-h-[430px] overflow-hidden lg:order-1 lg:min-h-screen">
          {/* Image */}
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="
              object-cover
              object-center
              transition-transform
              duration-[2000ms]
              hover:scale-105
            "
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Image Number */}
          <div className="absolute bottom-8 left-8 z-10 flex items-center gap-4 text-white">
            <span className="text-xs tracking-[0.3em] opacity-70">01</span>

            <span className="h-px w-12 bg-white/50" />

            <span className="text-xs uppercase tracking-[0.3em] opacity-70">
              Law Firm
            </span>
          </div>

          {/* Vertical Label */}
          <div
            className="
              absolute
              right-6
              top-1/2
              hidden
              -translate-y-1/2
              rotate-90
              text-[10px]
              font-medium
              uppercase
              tracking-[0.45em]
              text-white/70
              lg:block
            "
          >
            Justice • Experience • Trust
          </div>
        </div>

        {/* =========================
            CONTENT SIDE
        ========================== */}
        <div
          className="
            order-2
            flex
            min-h-[600px]
            items-center
            bg-[#f4f1eb]
            px-6
            py-16
            sm:px-10
            lg:order-2
            lg:min-h-screen
            lg:px-16
            xl:px-24
          "
        >
          <div
            className={`
              w-full
              max-w-2xl
              ${
                position === "center"
                  ? "mx-auto text-center"
                  : position === "right"
                    ? "mr-auto text-right"
                    : "ml-auto text-left"
              }
            `}
          >
            {/* Small Editorial Label */}
            <div
              className={`
                mb-8
                flex
                items-center
                gap-4
                ${
                  position === "center"
                    ? "justify-center"
                    : position === "right"
                      ? "justify-end"
                      : "justify-start"
                }
              `}
            >
              <span className="h-px w-12 bg-primary" />

              <span
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-primary
                "
              >
                {subtitle}
              </span>
            </div>

            {/* Main Title */}
            <h1
              className="
                mb-8
                text-5xl
                font-bold
                leading-[1]
                tracking-[-0.03em]
                text-[#171717]
                sm:text-6xl
                lg:text-7xl
                xl:text-[82px]
              "
            >
              {title}
            </h1>

            {/* Decorative Line */}
            <div
              className={`
                mb-8
                h-px
                w-20
                bg-black/20
                ${
                  position === "center"
                    ? "mx-auto"
                    : position === "right"
                      ? "mr-auto"
                      : "ml-0"
                }
              `}
            />

            {/* Description */}
            <p
              className="
                mb-10
                max-w-xl
                text-base
                leading-8
                text-[#66615b]
                sm:text-lg
              "
            >
              {description}
            </p>

            {/* CTA */}
            <div
              className={`
                flex
                flex-wrap
                items-center
                gap-6
                ${
                  position === "center"
                    ? "justify-center"
                    : position === "right"
                      ? "justify-end"
                      : "justify-start"
                }
              `}
            >
              {/* Primary CTA */}
              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-4
                  bg-[#171717]
                  px-7
                  py-4
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:bg-primary
                "
              >
                <span>دریافت مشاوره</span>

                <span
                  className="
                    text-lg
                    transition-transform
                    duration-300
                    group-hover:-translate-x-1
                  "
                >
                  ←
                </span>
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/about"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  border-b
                  border-black/30
                  pb-2
                  text-sm
                  font-medium
                  text-[#171717]
                  transition-colors
                  duration-300
                  hover:border-primary
                  hover:text-primary
                "
              >
                <span>درباره ما</span>
              </Link>
            </div>

            {/* Bottom Information */}
            <div
              className="
                mt-16
                flex
                items-center
                gap-6
                border-t
                border-black/10
                pt-6
              "
            >
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-black/40">
                Trusted Legal Counsel
              </span>

              <span className="h-px w-8 bg-black/20" />

              <span className="text-xs text-black/40">
                Professional • Confidential • Experienced
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
