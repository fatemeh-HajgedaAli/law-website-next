"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqData } from "./faqData";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      dir="rtl"
      className="relative overflow-hidden bg-[#F3EFE7] px-4 py-20 sm:px-6 md:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute inset-0 opacity-[0.35]
            [background-image:linear-gradient(rgba(16,27,46,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(16,27,46,0.045)_1px,transparent_1px)]
            [background-size:45px_45px]
            sm:[background-size:60px_60px]
          "
        />

        <div
          className="
            absolute -right-20 top-0 h-full w-[45%] opacity-[0.12]
            [background-image:repeating-linear-gradient(135deg,transparent_0,transparent_38px,#A87C3E_39px,#A87C3E_40px)]
            [mask-image:linear-gradient(to_left,black,transparent)]
          "
        />

        <div
          className="
            absolute bottom-0 left-0 h-[55%] w-[30%] opacity-[0.08]
            [background-image:linear-gradient(90deg,#101B2E_1px,transparent_1px),linear-gradient(#101B2E_1px,transparent_1px)]
            [background-size:35px_35px]
            [mask-image:linear-gradient(to_top_right,black,transparent)]
          "
        />

        <div className="absolute right-0 top-[18%] h-px w-[35%] bg-gradient-to-l from-[#A87C3E]/40 to-transparent" />

        <div className="absolute bottom-[18%] left-0 h-px w-[28%] bg-gradient-to-r from-[#A87C3E]/30 to-transparent" />

        <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-4xl">
        {/* Header */}
        <header className="mb-10 text-center sm:mb-14">
          <span className="text-xs font-semibold tracking-[0.18em] text-[#A87C3E] sm:text-sm sm:tracking-[0.25em]">
            پرسش و پاسخ
          </span>

          <h2 className="mt-3 text-2xl font-semibold text-[#101B2E] sm:mt-4 sm:text-3xl md:text-4xl">
            سوالات متداول
          </h2>

          <div className="mx-auto mt-4 h-px w-12 bg-[#A87C3E] sm:mt-5 sm:w-16" />

          <p className="mx-auto mt-4 max-w-md px-2 text-xs leading-7 text-[#667085] sm:mt-5 sm:text-sm sm:leading-8">
            پاسخ برخی از پرسش‌های رایج درباره خدمات و مشاوره حقوقی
          </p>
        </header>

        {/* FAQ List */}
        <div className="space-y-3 sm:space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`
                  relative overflow-hidden rounded-xl border
                  transition-all duration-300 sm:rounded-2xl
                  ${
                    isOpen
                      ? "border-[#A87C3E]/50 bg-[#101B2E] shadow-lg sm:shadow-xl"
                      : "border-[#DCD5C8] bg-[#FAF7F1] hover:border-[#A87C3E]/40 hover:shadow-md"
                  }
                `}
              >
                {/* Active Line */}
                <div
                  className={`
                    absolute right-0 top-0 h-full w-1 bg-[#C9A15F]
                    transition-transform duration-300
                    ${isOpen ? "translate-x-0" : "translate-x-full"}
                  `}
                />

                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="
                    flex w-full items-center justify-between
                    gap-3 px-4 py-4 text-right
                    sm:gap-5 sm:px-7 sm:py-6
                  "
                >
                  <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                    {/* Number */}
                    <span
                      className={`
                        flex h-8 w-8 shrink-0 items-center justify-center
                        rounded-full border text-[10px] font-semibold
                        transition-all duration-300
                        sm:h-9 sm:w-9 sm:text-xs
                        ${
                          isOpen
                            ? "border-[#C9A15F] bg-[#C9A15F] text-[#101B2E]"
                            : "border-[#C9A15F]/50 text-[#A87C3E]"
                        }
                      `}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Question Text */}
                    <span
                      className={`
                        text-xs font-semibold leading-6
                        transition-colors duration-300
                        sm:text-base sm:leading-7
                        ${isOpen ? "text-white" : "text-[#101B2E]"}
                      `}
                    >
                      {item.question}
                    </span>
                  </div>

                  {/* Plus */}
                  <span
                    className={`
                      flex h-8 w-8 shrink-0 items-center justify-center
                      rounded-full border transition-all duration-300
                      sm:h-10 sm:w-10
                      ${
                        isOpen
                          ? "rotate-45 border-[#C9A15F] bg-[#C9A15F] text-[#101B2E]"
                          : "border-[#A87C3E]/40 text-[#A87C3E]"
                      }
                    `}
                  >
                    <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`
                    grid transition-all duration-500 ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <div
                      className="
                        mx-4 border-t border-white/10
                        px-1 py-4
                        sm:mx-7 sm:px-2 sm:py-6
                      "
                    >
                      <p className="text-xs leading-7 text-white/65 sm:text-base sm:leading-8">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
