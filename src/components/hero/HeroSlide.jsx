import Link from "next/link";

export default function HeroSlide({
  image,
  position,
  subtitle,
  title,
  description,
}) {
  return (
    <div
      className="
    relative
    min-h-[500px]
    lg:min-h-[700px]
    bg-cover
    bg-center
    bg-no-repeat
  "
      style={{
        backgroundImage: `url(${image.src})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/60" />

      {/* Container */}
      <div
        className="
    relative
    mx-auto
    flex
    min-h-[700px]
    w-full
    max-w-6xl
    items-center
    px-4
    sm:px-6
    lg:px-8
  "
      >
        {/* Content */}
        <div
          className={`
            w-full lg:w-7/12 mt-60
            ${
              position === "left"
                ? "text-left"
                : position === "center"
                  ? "mx-auto text-center"
                  : "ml-auto text-right"
            }
          `}
        >
          {/* Small Text */}
          <span className="mb-2 block text-lg font-medium text-white">
            {subtitle}
          </span>

          <h1 className="mb-5 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <h4 className="mb-8 text-xl font-medium leading-9 text-white">
            {description}
          </h4>

          {/* Buttons */}
          <div
            className={`
              flex gap-4
              ${
                position === "center"
                  ? "justify-center"
                  : position === "right"
                    ? "justify-end"
                    : "justify-start"
              }
            `}
          >
            <Link
              href="/contact"
              className="
    relative overflow-hidden border border-gray-400 
    bg-primary px-6 py-4 text-sm font-medium text-white border--1 border-white
    transition-colors duration-300
    before:absolute before:inset-0
    before:-translate-y-full
    before:bg-foreground
    before:transition-transform before:duration-300
    hover:before:translate-y-0
  "
            >
              <span className="relative z-10">دریافت مشاوره</span>
            </Link>

            <Link
              href="/about"
              className="
    relative overflow-hidden
    border border-gray-400 
    px-6 py-4 
    text-sm font-medium text-gray-400
    transition-colors duration-300
    before:absolute before:inset-0
    before:-translate-y-full
    before:bg-primary
    before:opacity-100
    before:transition-transform before:duration-300
    hover:before:translate-y-0
    hover:text-white
  "
            >
              <span className="relative z-10">درباره ما</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
