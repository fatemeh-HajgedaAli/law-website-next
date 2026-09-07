"use client";

import { useState } from "react";
import { MapPin, Phone, Clock, Navigation, ArrowLeft } from "lucide-react";

const COLORS = {
  background: "#f8f6f2",
  foreground: "#161616",
  primary: "#b08d57",
  primaryDark: "#8c6d3f",
  dark: "#080809",
  brandGray: "#eeeeee",
};

const OFFICES = [
  {
    id: "tehran",
    name: "دفتر تهران",
    address: "تهران، پردیس، فاز ۴، خیابان فردوس",
    hours: "شنبه تا چهارشنبه، ۹ تا ۱۸",
    mapQuery: "تهران پردیس فاز ۴ خیابان فردوس",
  },
  {
    id: "mazandaran",
    name: "دفتر مازندران",
    address: "مازندران، نکا، جنب بانک ملی مرکزی",
    hours: "شنبه تا چهارشنبه، ۹ تا ۱۷",
    mapQuery: "نکا مازندران بانک ملی مرکزی",
  },
];

export default function ContactUs() {
  const [activeId, setActiveId] = useState(OFFICES[0].id);

  const active = OFFICES.find((office) => office.id === activeId);

  return (
    <section
      dir="rtl"
      id="contactus"
      className="relative overflow-hidden px-6 py-12"
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
      {/* ================= DECORATIVE BACKGROUND ================= */}

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

      {/* Gold Line */}

      <div
        className="pointer-events-none absolute right-0 top-1/3 h-px w-full opacity-30"
        style={{
          background:
            "linear-gradient(90deg, transparent, #b08d57, transparent)",
        }}
      />

      {/* Subtle Grid */}

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

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* ================= HEADER ================= */}

        <div className="mx-auto mb-10 max-w-3xl text-center">
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
            className="mb-6 text-center text-3xl font-bold leading-[1.8] md:text-5xl"
            style={{
              color: COLORS.foreground,
            }}
          >
            همراه شما در مسیر عدالت
          </h2>
          <p
            className="mt-5 text-center text-sm font-semibold leading-8 md:text-base"
            style={{
              color: COLORS.primaryDark,
            }}
          >
            دانش، دقت و پایبندی به اصول حرفه‌ای، اساس فعالیت ماست.
          </p>
        </div>

        {/* ================= MAIN ================= */}

        <div className="grid gap-6 lg:grid-cols-5">
          {/* ================= OFFICES ================= */}

          <div className="flex flex-col gap-4 lg:col-span-2">
            {OFFICES.map((office) => {
              const isActive = office.id === activeId;

              return (
                <button
                  key={office.id}
                  type="button"
                  onClick={() => setActiveId(office.id)}
                  className="group rounded-2xl
                   border p-6 text-right transition-all 
                   duration-300 hover:-translate-y-1"
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
                      <div className="flex items-center justify-between 
                      gap-3">
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

                      <p
                        className="mt-3 text-sm leading-7"
                        style={{
                          color: "#625f58",
                        }}
                      >
                        {office.address}
                      </p>

                      {/* Hours */}

                      <div
                        className="mt-4 flex items-center gap-2 text-xs"
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

            {/* ================= PHONE CTA ================= */}

            <div
              className="relative mt-2 overflow-hidden rounded-2xl border p-6"
              style={{
                background: "linear-gradient(135deg, #171717, #080809)",
                borderColor: "rgba(176,141,87,0.35)",
                boxShadow: "0 20px 50px rgba(0,0,0,0.16)",
              }}
            >
              {/* Gold Decoration */}

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
                        color: COLORS.primaryDark,
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
                      تماس مستقیم با گروه وکلای رهیاب
                    </p>

                    <a
                      href="tel:09902190109"
                      dir="ltr"
                      className="block text-xl font-bold tracking-wide text-white transition hover:text-[#d3b183]"
                    >
                      ۰۹۹۰۲۱۹۰۱۰۹
                    </a>
                  </div>
                </div>

                <a
                  href="tel:09902190109"
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

          {/* ================= MAP ================= */}

          <div
            className="relative overflow-hidden rounded-2xl border lg:col-span-3"
            style={{
              minHeight: "460px",
              borderColor: "rgba(176,141,87,0.35)",
              backgroundColor: "#ffffff",
              boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
            }}
          >
            <iframe
              key={active.id}
              title={active.name}
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                active.mapQuery,
              )}&output=embed`}
              className="h-full min-h-[260px] w-full"
              style={{
                border: 0,
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Map Label */}

            <div
              className="absolute right-5 top-5 
              flex items-center gap-3 rounded-xl border 
              px-4 py-3 shadow-lg backdrop-blur-md"
              style={{
                backgroundColor: "rgba(255,255,255,0.94)",
                borderColor: "rgba(176,141,87,0.30)",
              }}
            >
              <div
                className="flex h-8 w-8 items-center justify-center rounded-lg"
                style={{
                  backgroundColor: "rgba(176,141,87,0.12)",
                }}
              >
                <Navigation
                  className="h-4 w-4"
                  strokeWidth={1.8}
                  style={{
                    color: COLORS.primaryDark,
                  }}
                />
              </div>

              <span
                className="text-sm font-semibold"
                style={{
                  color: COLORS.foreground,
                }}
              >
                {active.name}
              </span>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}

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
