// Counter.jsx
import { counterData } from "@/components/Counter/counterData";
import { toPersianDigits } from "@/utils/toPersianDigits";
// start
export default function Counter() {
  return (
    <section
      className="
    relative
    z-10
    overflow-hidden
    bg-cover
    bg-center
    bg-no-repeat
    pt-64
    pb-20
    lg:pt-80
    lg:pb-24
  "
      style={{
        backgroundImage: "url('/images/counter/counter03.jpg')",
      }}
    >
      {" "}
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {counterData.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className={`
                  group
                  flex
                  min-h-[190px]
                  flex-col
                  items-center
                  justify-center
                  px-5
                  py-8
                  text-center
                  text-white
                  transition-all
                  duration-300

                  ${
                    index !== counterData.length - 1
                      ? "border-l border-white/20"
                      : ""
                  }

                  ${index === 1 ? "lg:border-l" : ""}
                `}
              >
                {/* Icon */}
                <div
                  className="
                    mb-5
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/30
                    bg-white/10
                    text-primary
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    group-hover:border-primary
                    group-hover:bg-primary
                    group-hover:text-white
                  "
                >
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>

                {/* Number */}
                <h2
                  className="
                    text-4xl
                    font-semibold
                    tracking-tight
                    text-white
                    sm:text-5xl
                  "
                >
                  {toPersianDigits(item.number.toString())}

                  <span className="mr-1 text-primary">+</span>
                </h2>

                {/* Title */}
                <span
                  className="
                    mt-2
                    text-sm
                    font-medium
                    text-white/75
                    sm:text-base
                  "
                >
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
