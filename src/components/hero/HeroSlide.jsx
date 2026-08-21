import Image from "next/image";
import Link from "next/link";

export default function HeroSlide({
  image,
  position,
  subtitle,
  title,
  description,
}) {
  const isCenter = position === "center";
  const isRight = position === "right";

  const contentAlignment = isCenter
    ? "mx-auto text-center"
    : isRight
      ? "mr-auto text-right"
      : "ml-auto text-left";

  const itemsAlignment = isCenter
    ? "justify-center"
    : isRight
      ? "justify-end"
      : "justify-start";

  const lineAlignment = isCenter ? "mx-auto" : isRight ? "mr-auto" : "ml-0";

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#f4f1eb]">
      <div className="grid min-h-screen w-full lg:grid-cols-2">
        {/* IMAGE SIDE */}
        <div
          className="
            relative
            order-1
            min-h-[380px]
            w-full
            overflow-hidden
            lg:order-1
            lg:min-h-screen
          "
        >
          <Image
            src={image}
            alt={title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="
              pointer-events-none
              object-cover
              object-center
              transition-transform
              duration-[2000ms]
              lg:hover:scale-105
            "
          />

          <div className="pointer-events-none absolute inset-0 z-[1] bg-black/10" />

          <div
            className="
              pointer-events-none
              absolute
              bottom-6
              left-6
              z-10
              flex
              items-center
              gap-3
              text-white
              sm:bottom-8
              sm:left-8
              sm:gap-4
            "
          >
            <span className="text-[10px] tracking-[0.3em] opacity-70 sm:text-xs">
              01
            </span>

            <span className="h-px w-8 bg-white/50 sm:w-12" />

            <span className="text-[10px] uppercase tracking-[0.3em] opacity-70 sm:text-xs">
              Law Firm
            </span>
          </div>

          <div
            className="
              pointer-events-none
              absolute
              right-5
              top-1/2
              z-10
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

        {/* CONTENT SIDE */}
        <div
          className="
            order-2
            flex
            min-h-[600px]
            w-full
            items-center
            bg-[#f4f1eb]
            px-6
            py-14
            sm:px-10
            sm:py-16
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
              ${contentAlignment}
            `}
          >
            {/* SUBTITLE */}
            <div
              className={`
                mb-6
                flex
                items-center
                gap-3
                sm:mb-8
                sm:gap-4
                ${itemsAlignment}
              `}
            >
              <span className="h-px w-8 bg-primary sm:w-12" />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-primary
                  sm:text-xs
                  sm:tracking-[0.3em]
                "
              >
                {subtitle}
              </span>
            </div>

            {/* TITLE */}
            <h1
              className="
                mb-6
                break-words
                text-4xl
                font-bold
                leading-[1.05]
                tracking-[-0.03em]
                text-[#171717]
                sm:mb-8
                sm:text-6xl
                lg:text-7xl
                xl:text-[82px]
              "
            >
              {title}
            </h1>

            {/* DECORATIVE LINE */}
            <div
              className={`
                mb-6
                h-px
                w-16
                bg-black/20
                sm:mb-8
                sm:w-20
                ${lineAlignment}
              `}
            />

            {/* DESCRIPTION */}
            <p
              className="
                mb-8
                max-w-xl
                text-sm
                leading-7
                text-[#66615b]
                sm:mb-10
                sm:text-lg
                sm:leading-8
              "
            >
              {description}
            </p>

            {/* CTA */}
            <div
              className={`
                relative
                z-30
                flex
                flex-wrap
                items-center
                gap-4
                sm:gap-6
                ${itemsAlignment}
              `}
            >
              <Link
                href="/contact"
                className="
                  group
                  relative
                  z-30
                  inline-flex
                  min-h-12
                  touch-manipulation
                  items-center
                  gap-3
                  bg-[#171717]
                  px-6
                  py-3.5
                  text-sm
                  font-medium
                  text-white
                  transition-colors
                  duration-300
                  active:scale-[0.98]
                  hover:bg-primary
                  sm:px-7
                  sm:py-4
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

              <Link
                href="/about"
                className="
                  group
                  relative
                  z-30
                  inline-flex
                  min-h-12
                  touch-manipulation
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
                  active:opacity-70
                  hover:border-primary
                  hover:text-primary
                "
              >
                <span>درباره ما</span>
              </Link>
            </div>

            {/* BOTTOM INFORMATION */}
            <div
              className="
                mt-12
                flex
                flex-col
                items-start
                gap-3
                border-t
                border-black/10
                pt-5
                sm:mt-16
                sm:flex-row
                sm:items-center
                sm:gap-6
                sm:pt-6
              "
            >
              <span
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-black/40
                  sm:text-xs
                "
              >
                Trusted Legal Counsel
              </span>

              <span className="hidden h-px w-8 bg-black/20 sm:block" />

              <span className="text-[10px] text-black/40 sm:text-xs">
                Professional • Confidential • Experienced
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
