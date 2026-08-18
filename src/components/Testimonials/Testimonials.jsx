"use client";

import { useEffect, useState } from "react";
import { testimonials } from "./testimonialData";

const avatarColors = {
  blue: "bg-blue-100 text-blue-600",
  purple: "bg-purple-100 text-purple-600",
  green: "bg-emerald-100 text-emerald-600",
};

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimonial = testimonials[activeIndex];

  // Random testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((currentIndex) => {
        let randomIndex;

        do {
          randomIndex = Math.floor(Math.random() * testimonials.length);
        } while (testimonials.length > 1 && randomIndex === currentIndex);

        return randomIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      dir="rtl"
      className="
        relative isolate overflow-hidden
        bg-[#f7f5f0]
        py-20
        sm:py-24
        lg:py-20
      "
    >
      {/* ================= Background ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            -right-32
            -top-32
            h-[400px]
            w-[400px]
            rounded-full
            bg-orange-300/20
            blur-[110px]
          "
        />

        <div
          className="
            absolute
            -bottom-32
            -left-32
            h-[400px]
            w-[400px]
            rounded-full
            bg-slate-400/15
            blur-[110px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[450px]
            w-[450px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/70
            blur-[100px]
          "
        />
      </div>

      {/* ================= Container ================= */}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* ================= Header ================= */}

        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-orange-400" />

            <span className="text-[11px] font-bold 
            tracking-[0.2em] text-primary">
              TESTIMONIALS
            </span>

            <span className="h-px w-8 bg-primary" />
          </div>

          <h2
            className="
              text-3xl
              font-black
              tracking-tight
              text-slate-900
              sm:text-4xl
              lg:text-[44px]
            "
          >
            تجربه موکلین ما
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-sm
              leading-7
              text-slate-500
              sm:text-base
            "
          >
            اعتماد موکلین، ارزشمندترین سرمایه ماست. ما تلاش می‌کنیم در تمام
            مراحل پرونده، همراه و پشتیبان شما باشیم.
          </p>
        </div>

        {/* ================= Main ================= */}

        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ================= Images ================= */}

          <div
            className="
              relative
              mx-auto
              h-[430px]
              w-full
              max-w-[420px]
              lg:col-span-5
            "
          >
            {/* Image 1 */}

            <div
              className="
                absolute
                right-0
                top-8
                z-10
                h-[215px]
                w-[160px]
                overflow-hidden
                rounded-[1.5rem]
                border-4
                border-white
                shadow-[0_18px_50px_rgba(15,23,42,0.14)]
                rotate-[-7deg]
                transition-all
                duration-500
                hover:z-40
                hover:rotate-0
                hover:scale-105
              "
            >
              <img
                src={testimonials[0].image}
                alt="خدمات حقوقی"
                className="
                  h-full
                  w-full
                  object-cover
                  transition
                  duration-500
                  hover:scale-110
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent" />
            </div>

            {/* Image 2 */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                z-30
                h-[300px]
                w-[210px]
                -translate-x-1/2
                -translate-y-1/2
                overflow-hidden
                rounded-[1.8rem]
                border-[5px]
                border-white
                shadow-[0_25px_65px_rgba(15,23,42,0.2)]
                transition-all
                duration-500
                hover:scale-[1.03]
              "
            >
              <img
                src={testimonials[1].image}
                alt="وکیل"
                className="
                  h-full
                  w-full
                  object-cover
                  transition
                  duration-500
                  hover:scale-110
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 to-transparent" />

              <div
                className="
                  absolute
                  bottom-4
                  right-4
                  rounded-full
                  border
                  border-white/30
                  bg-white/15
                  px-3
                  py-1.5
                  text-[10px]
                  font-bold
                  text-white
                  backdrop-blur-md
                "
              >
                اعتماد و تجربه
              </div>
            </div>

            {/* Image 3 */}

            <div
              className="
                absolute
                bottom-4
                left-0
                z-20
                h-[205px]
                w-[155px]
                overflow-hidden
                rounded-[1.5rem]
                border-4
                border-white
                shadow-[0_18px_50px_rgba(15,23,42,0.14)]
                rotate-[7deg]
                transition-all
                duration-500
                hover:z-40
                hover:rotate-0
                hover:scale-105
              "
            >
              <img
                src={testimonials[2].image}
                alt="مشاوره حقوقی"
                className="
                  h-full
                  w-full
                  object-cover
                  transition
                  duration-500
                  hover:scale-110
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent" />
            </div>

            {/* Quote */}

            <div
              className="
                absolute
                bottom-7
                right-8
                z-50
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border-4
                border-[#f7f5f0]
                bg-slate-950
                text-2xl
                font-serif
                text-orange-400
                shadow-xl
              "
            >
              "
            </div>
          </div>

          {/* ================= Testimonial ================= */}

          <div className="lg:col-span-7">
            <div
              key={activeTestimonial.id}
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-white
                bg-white/80
                p-7
                shadow-[0_25px_70px_rgba(15,23,42,0.07)]
                backdrop-blur-xl
                transition-all
                duration-500
                sm:p-9
                lg:p-10
              "
            >
              {/* Top Line */}

              <div
                className="
                  absolute
                  inset-x-0
                  top-0
                  h-[3px]
                  bg-gradient-to-r
                  from-orange-400
                  via-amber-400
                  to-orange-500
                "
              />

              {/* Quote */}

              <span
                className="
                  pointer-events-none
                  absolute
                  right-7
                  top-2
                  font-serif
                  text-[90px]
                  leading-none
                  text-orange-400/10
                "
              >
                "
              </span>

              <div className="relative">
                {/* Header */}

                <div className="flex items-center justify-between">
                  <span
                    className="
                      rounded-full
                      bg-orange-50
                      px-3
                      py-1.5
                      text-[11px]
                      font-bold
                      text-orange-600
                    "
                  >
                    نظر موکل
                  </span>

                  <div
                    className="
                      flex
                      items-center
                      gap-1.5
                      text-[11px]
                      font-medium
                      text-emerald-600
                    "
                  >
                    <span className="relative flex h-2 w-2">
                      <span
                        className="
                          absolute
                          inline-flex
                          h-full
                          w-full
                          animate-ping
                          rounded-full
                          bg-emerald-400
                          opacity-50
                        "
                      />

                      <span
                        className="
                          relative
                          inline-flex
                          h-2
                          w-2
                          rounded-full
                          bg-emerald-500
                        "
                      />
                    </span>
                    موکل تأیید شده
                  </div>
                </div>

                {/* Comment */}

                <div className="mt-8">
                  <p
                    className="
                      max-w-2xl
                      text-base
                      font-medium
                      leading-8
                      text-slate-700
                      sm:text-lg
                    "
                  >
                    "{activeTestimonial.text}"
                  </p>
                </div>

                {/* Divider */}

                <div
                  className="
                    my-7
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-slate-200
                    to-transparent
                  "
                />

                {/* User */}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}

                    <div
                      className={`
                        flex
                        h-14
                        w-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border-4
                        border-white
                        shadow-md
                        ${avatarColors[activeTestimonial.avatarColor]}
                      `}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-7 w-7"
                      >
                        <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-5 0-9 2.5-9 6v2h18v-2c0-3.5-4-6-9-6Z" />
                      </svg>
                    </div>

                    {/* User Info */}

                    <div>
                      <h3 className="text-sm font-bold text-slate-900 sm:text-base">
                        {activeTestimonial.name}
                      </h3>

                      <p className="mt-0.5 text-xs font-medium text-orange-500">
                        {activeTestimonial.position}
                      </p>
                    </div>
                  </div>

                  {/* Number */}

                  <span
                    className="
                      hidden
                      text-4xl
                      font-black
                      text-slate-100
                      sm:block
                    "
                  >
                    0{activeIndex + 1}
                  </span>
                </div>

                {/* ================= Controls ================= */}

                <div className="mt-8 flex items-center justify-between">
                  {/* Dots */}

                  <div className="flex items-center gap-2">
                    {testimonials.map((testimonial, index) => (
                      <button
                        key={testimonial.id}
                        onClick={() => setActiveIndex(index)}
                        aria-label={`نمایش نظر ${index + 1}`}
                        className={`
                          h-2
                          rounded-full
                          transition-all
                          duration-500
                          ${
                            activeIndex === index
                              ? "w-8 bg-orange-500"
                              : "w-2 bg-slate-300 hover:bg-orange-300"
                          }
                        `}
                      />
                    ))}
                  </div>

                  {/* Counter */}

                  <span className="text-[11px] font-semibold text-slate-400">
                    {activeIndex + 1} / {testimonials.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
