"use client";

import Link from "next/link";
import { ArrowUpLeft, Phone, MapPin, Mail, ArrowUp } from "lucide-react";

const QUICK_LINKS = [
  { label: "خانه", href: "/" },
  { label: "درباره ما", href: "/#aboutUs" },
  { label: "خدمات ما", href: "/#services" },
  { label: "پرونده‌های ما", href: "/#cases" },
  { label: "تماس با ما", href: "/#contactus" },
];

const SERVICES = [
  "مشاوره حقوقی",
  "وکالت دعاوی",
  "پرونده‌های ملکی",
  "پرونده‌های خانواده",
  "پرونده‌های کیفری",
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      dir="rtl"
      className="relative overflow-hidden bg-[#080809] text-white"
    >
      {/* Decorative Background */}

      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#b08d57]/10 blur-[130px]" />

      <div className="pointer-events-none absolute -bottom-60 -left-40 h-[500px] w-[500px] rounded-full bg-[#b08d57]/5 blur-[130px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(176,141,87,0.8) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(176,141,87,0.8) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* CTA */}

        <div className="relative -mt-1 overflow-hidden border-b border-white/10 py-12 md:py-16">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-[#b08d57]" />

                <span className="text-xs font-semibold tracking-[0.25em] text-[#b08d57]">
                  CONSULTATION
                </span>
              </div>

              <h2 className="max-w-2xl text-2xl font-bold leading-[1.8] text-white md:text-4xl">
                برای تصمیم درست،
                <span className="text-[#b08d57]"> مشورت کنید.</span>
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-white/45">
                تجربه، دانش و پیگیری حرفه‌ای؛ همراه شما در مسیر حل مسائل حقوقی.
              </p>
            </div>

            <Link
              href="/#contactus"
              className="group flex shrink-0 items-center gap-3 rounded-full border border-[#b08d57]/40 bg-[#b08d57]/10 px-6 py-4 text-sm font-semibold text-[#d3b183] transition-all duration-300 hover:-translate-y-1 hover:border-[#b08d57] hover:bg-[#b08d57] hover:text-white hover:shadow-[0_15px_40px_rgba(176,141,87,0.2)]"
            >
              دریافت مشاوره
              <ArrowUpLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>

        {/* Main Footer */}

        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}

          <div className="lg:col-span-4">
            <Link href="/" className="group inline-flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#b08d57]/30 bg-[#b08d57]/10 transition-all duration-300 group-hover:border-[#b08d57] group-hover:bg-[#b08d57]/20">
                <span className="font-serif text-2xl font-bold text-[#d3b183]">
                  ر
                </span>
              </div>

              <div>
                <span className="block text-xl font-bold text-white">
                  راهیاب
                </span>

                <span className="mt-1 block text-[10px] tracking-[0.25em] text-[#b08d57]">
                  LAW FIRM
                </span>
              </div>
            </Link>

            <p className="mt-7 max-w-sm text-sm leading-8 text-white/45">
              مجموعه‌ای از وکلای پایه یک دادگستری و متخصصان حقوقی که با تکیه بر
              دانش، تجربه و اصول حرفه‌ای، در کنار شما هستند.
            </p>
          </div>

          {/* Quick Links */}

          <div className="lg:col-span-2">
            <h3 className="mb-6 text-sm font-bold text-white">دسترسی سریع</h3>

            <ul className="space-y-4">
              {QUICK_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-white/40 transition-colors duration-300 hover:text-[#d3b183]"
                  >
                    <ArrowUpLeft className="h-3.5 w-3.5 text-[#b08d57]/60 opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100" />

                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}

          <div className="lg:col-span-3">
            <h3 className="mb-6 text-sm font-bold text-white">خدمات حقوقی</h3>

            <ul className="space-y-4">
              {SERVICES.map((service) => (
                <li key={service}>
                  <Link
                    href="/#services"
                    className="group flex items-center gap-3 text-sm text-white/40 transition-colors duration-300 hover:text-[#d3b183]"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#b08d57]/50 transition-all duration-300 group-hover:w-3" />

                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}

          <div className="lg:col-span-3">
            <h3 className="mb-6 text-sm font-bold text-white">ارتباط با ما</h3>

            <div className="space-y-5">
              <a
                href="tel:09112864596"
                className="group flex items-start gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#b08d57] transition-all duration-300 group-hover:bg-[#b08d57] group-hover:text-white">
                  <Phone className="h-4 w-4" />
                </div>

                <div>
                  <span className="block text-[10px] text-white/30">
                    تماس مستقیم
                  </span>

                  <span
                    dir="ltr"
                    className="mt-1 block text-sm font-semibold text-white/70 transition-colors group-hover:text-[#d3b183]"
                  >
                    ۰۹۱۱۲۸۶۴۵۹۶
                  </span>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#b08d57]">
                  <Mail className="h-4 w-4" />
                </div>

                <div>
                  <span className="block text-[10px] text-white/30">ایمیل</span>

                  <span className="mt-1 block text-sm text-white/50">
                    info@lawfirm.ir
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
            <p className="text-center text-xs text-white/25 md:text-right">
              © {new Date().getFullYear()} تمامی حقوق برای خانم نصیری محفوظ است.
            </p>

            <div className="flex items-center gap-6">
              <span
                dir="ltr"
                className="text-[9px] tracking-[0.25em] text-white/20"
              >
                PROFESSIONAL • CONFIDENTIAL • EXPERIENCED
              </span>

              <button
                type="button"
                onClick={scrollToTop}
                aria-label="بازگشت به بالا"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:border-[#b08d57] hover:bg-[#b08d57] hover:text-white"
              >
                <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
