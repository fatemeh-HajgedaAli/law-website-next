"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Clock, ArrowLeft, ShieldCheck } from "lucide-react";

const COLORS = {
  background: "#f8f6f2",
  foreground: "#161616",
  primary: "#b08d57",
  primaryDark: "#8c6d3f",
};

const OFFICES = [
  {
    id: "tehran",
    name: "دفتر تهران",
    hours: "شنبه تا چهارشنبه، ۹ تا ۱۸",
  },
  {
    id: "mazandaran",
    name: "دفتر پردیس",
    hours: "شنبه تا چهارشنبه، ۹ تا ۱۷",
  },
];

export default function ContactUs() {
  const [activeId, setActiveId] = useState(OFFICES[0].id);

  const active = OFFICES.find((office) => office.id === activeId);

  return (
    <section
      dir="rtl"
      id="contactus"
      className="relative overflow-hidden px-6 py-16 md:py-20"
      style={{
        backgroundColor: COLORS.background,
        backgroundImage: `
          radial-gradient(
            circle at 10% 10%,
            rgba(176, 141, 87, 0.12),
            transparent 28%
          ),
          radial-gradient(
            circle at 90% 90%,
            rgba(176, 141, 87, 0.08),
            transparent 30%
          ),
          linear-gradient(
            135deg,
            #f8f6f2 0%,
            #ffffff 50%,
            #f5f1e9 100%
          )
        `,
      }}
    >
      {/* Decorative Background */}

      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full blur-[130px]"
        style={{
          backgroundColor: "rgba(176, 141, 87, 0.08)",
        }}
      />

      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full blur-[130px]"
        style={{
          backgroundColor: "rgba(176, 141, 87, 0.06)",
        }}
      />

      <div
        className="pointer-events-none absolute right-0 top-1/3 h-px w-full opacity-30"
        style={{
          background:
            "linear-gradient(90deg, transparent, #b08d57, transparent)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(176,141,87,0.7) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(176,141,87,0.7) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}

        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span
              className="h-px w-12"
              style={{
                backgroundColor: COLORS.primary,
              }}
            />

            <span
              className="text-sm font-semibold"
              style={{
                color: COLORS.primary,
              }}
            >
              تماس با ما
            </span>

            <span
              className="h-px w-12"
              style={{
                backgroundColor: COLORS.primary,
              }}
            />
          </div>

          <h2
            className="mb-5 text-center text-3xl font-bold leading-[1.8] md:text-5xl"
            style={{
              color: COLORS.foreground,
            }}
          >
            همراه شما در مسیر عدالت
          </h2>

          <p
            className="mt-4 text-center text-sm font-semibold leading-8 md:text-base"
            style={{
              color: COLORS.primaryDark,
            }}
          >
            دانش، دقت و پایبندی به اصول حرفه‌ای، اساس فعالیت ماست.
          </p>
        </div>

        {/* Main */}

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Offices */}

          <div className="flex flex-col gap-4 lg:col-span-2">
            {OFFICES.map((office) => {
              const isActive = office.id === activeId;

              return (
                <button
                  key={office.id}
                  type="button"
                  onClick={() => setActiveId(office.id)}
                  className="group rounded-2xl border p-6 text-right transition-all duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: isActive
                      ? "#ffffff"
                      : "rgba(255,255,255,0.72)",

                    borderColor: isActive ? "rgba(176,141,87,0.65)" : "#e5dfd4",

                    boxShadow: isActive
                      ? "0 20px 50px rgba(176,141,87,0.12), inset 0 0 30px rgba(176,141,87,0.025)"
                      : "0 12px 35px rgba(0,0,0,0.045)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}

                    <div
                      className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: isActive
                          ? "rgba(176,141,87,0.13)"
                          : "#f5eee4",
                      }}
                    >
                      <MapPin
                        className="h-5 w-5"
                        strokeWidth={1.7}
                        style={{
                          color: COLORS.primaryDark,
                        }}
                      />
                    </div>

                    {/* Content */}

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h3
                          className="text-lg font-bold"
                          style={{
                            color: COLORS.foreground,
                          }}
                        >
                          {office.name}
                        </h3>

                        <ArrowLeft
                          className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
                          style={{
                            color: isActive ? COLORS.primary : "#aaa49a",
                          }}
                        />
                      </div>

                      <p className="mt-2 text-sm leading-7 text-[#777168]">
                        {office.address}
                      </p>

                      <div
                        className="mt-3 flex items-center gap-2 text-xs"
                        style={{
                          color: "#999286",
                        }}
                      >
                        <Clock className="h-3.5 w-3.5" strokeWidth={1.8} />

                        <span>{office.hours}</span>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}

            {/* Phone CTA */}

            <div
              className="relative mt-2 overflow-hidden rounded-2xl border p-6"
              style={{
                background: "linear-gradient(135deg, #171717, #080809)",
                borderColor: "rgba(176,141,87,0.35)",
                boxShadow: "0 20px 50px rgba(0,0,0,0.16)",
              }}
            >
              <div
                className="absolute -left-10 -top-10 h-32 w-32 rounded-full blur-2xl"
                style={{
                  backgroundColor: "rgba(176,141,87,0.14)",
                }}
              />

              <div className="relative">
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: "rgba(176,141,87,0.16)",
                    }}
                  >
                    <Phone
                      className="h-5 w-5"
                      strokeWidth={1.7}
                      style={{
                        color: COLORS.primary,
                      }}
                    />
                  </div>

                  <div className="flex-1">
                    <p
                      className="mb-1 text-xs"
                      style={{
                        color: "rgba(255,255,255,0.48)",
                      }}
                    >
                      تماس مستقیم با ما
                    </p>

                    <a
                      href="tel:09112864596"
                      dir="ltr"
                      className="block text-xl font-bold tracking-wide text-white transition hover:text-[#d3b183]"
                    >
                      ۰۹۱۱۲۸۶۴۵۹۶
                    </a>
                  </div>
                </div>

                <a
                  href="tel:09112864596"
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, #b08d57, #8c6d3f)",
                    boxShadow: "0 8px 25px rgba(176,141,87,0.20)",
                  }}
                >
                  <Phone className="h-4 w-4" />
                  تماس مستقیم
                </a>
              </div>
            </div>
          </div>

          {/* Image Panel */}

          <div className="group relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/50 bg-[#171717] shadow-[0_25px_70px_rgba(0,0,0,0.15)] lg:col-span-3 lg:min-h-[570px]">
            <Image
              src="/images/testimonials/01.jpg"
              alt="دفتر وکالت و خدمات حقوقی"
              fill
              priority={false}
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />

            {/* Dark Gradient */}

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/5" />

            {/* Gold Glow */}

            <div
              className="absolute -right-20 -top-20 h-60 w-60 rounded-full blur-[90px]"
              style={{
                backgroundColor: "rgba(176,141,87,0.22)",
              }}
            />

            {/* Top Label */}

            <div className="absolute right-6 top-6">
              <div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-4 py-2 backdrop-blur-md">
                <ShieldCheck
                  className="h-4 w-4"
                  style={{
                    color: COLORS.primary,
                  }}
                />

                <span className="text-[10px] font-semibold tracking-[0.18em] text-white">
                  LAW FIRM
                </span>
              </div>
            </div>

            {/* Image Content */}

            <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
              <div className="max-w-xl">
                <p
                  className="mb-3 text-xs font-semibold tracking-[0.25em]"
                  style={{
                    color: "#d3b183",
                  }}
                >
                  PROFESSIONAL LEGAL SERVICES
                </p>

                <h3 className="text-3xl font-bold leading-[1.7] text-white md:text-4xl">
                  در کنار شما،
                  <br />
                  با تجربه و اطمینان
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-7 text-white/65">
                  برای دریافت مشاوره حقوقی و آشنایی بیشتر با خدمات ما، با دفتر
                  تماس بگیرید.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-14 flex justify-center">
          <div className="flex items-center gap-4">
            <span
              className="h-px w-12"
              style={{
                backgroundColor: "rgba(176,141,87,0.35)",
              }}
            />

            <p
              dir="ltr"
              className="text-xs tracking-[0.22em]"
              style={{
                color: "#9b9588",
              }}
            >
              Professional • Confidential • Experienced
            </p>

            <span
              className="h-px w-12"
              style={{
                backgroundColor: "rgba(176,141,87,0.35)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
