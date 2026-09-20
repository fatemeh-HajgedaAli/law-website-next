"use client";

import Link from "next/link";
import { X, ArrowUpLeft } from "lucide-react";

export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  const menuItems = [
    {
      label: "خانه",
      href: "/",
    },
    {
      label: "درباره ما",
      href: "/#aboutUs",
    },
    {
      label: "خدمات ما",
      href: "/#services",
    },
    {
      label: "پرونده‌های ما",
      href: "/#cases",
    },
    {
      label: "تماس با ما",
      href: "/#contactus",
    },
  ];

  return (
    <div
      className="fixed inset-0 z-[9999999] overflow-hidden lg:hidden"
      dir="rtl"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px] animate-[fadeIn_150ms_ease-out]"
        onClick={onClose}
      />

      {/* Menu */}
      <div className="absolute right-0 top-0 z-10 flex h-full w-[88%] max-w-sm flex-col overflow-y-auto bg-white/95 shadow-[-20px_0_60px_rgba(0,0,0,0.15)] backdrop-blur-lg animate-[slideIn_220ms_cubic-bezier(0.22,1,0.36,1)]">
        {/* Header */}
        <div className="relative flex shrink-0 items-center justify-between border-b border-gray-100 px-6 pb-5 pt-6">
          <div>
            <p className="text-xs font-medium tracking-widest text-primary/70">
              NAVIGATION
            </p>

            <h2 className="mt-1 text-2xl font-bold text-gray-900">منو</h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close mobile menu"
            className="group flex h-11 w-11 items-center justify-center rounded-full bg-gray-50 text-gray-700 transition-all duration-500 hover:bg-primary hover:text-white active:scale-90"
          >
            <X className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li
                key={item.href}
                className="animate-[menuItem_220ms_ease-out_both]"
                style={{
                  animationDelay: `${index * 30 + 40}ms`,
                }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="group relative flex items-center justify-between overflow-hidden rounded-2xl px-5 py-4 text-base font-medium text-gray-800 transition-all duration-300 ease-out hover:text-white active:scale-[0.98]"
                >
                  {/* Hover Background */}
                  <span className="absolute inset-0 -z-0 translate-x-full bg-primary transition-transform duration-300 ease-out group-hover:translate-x-0" />

                  {/* Text */}
                  <span className="relative z-10">{item.label}</span>

                  {/* Arrow */}
                  <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-all duration-300 ease-out group-hover:-translate-x-1 group-hover:bg-white/20 group-hover:text-white">
                    <ArrowUpLeft className="h-4 w-4" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Consultation */}
        <div className="shrink-0 px-6 pb-6">
          <div className="rounded-2xl border border-primary/10 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-5">
            <p className="text-xs font-medium text-primary">
              نیاز به مشاوره دارید؟
            </p>

            <p className="mt-1 text-sm leading-6 text-gray-600">
              برای دریافت مشاوره با ما در ارتباط باشید.
            </p>

            <Link
              href="/#contactus"
              onClick={onClose}
              className="mt-4 flex items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]"
            >
              دریافت مشاوره
            </Link>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }

          to {
            transform: translateX(0);
          }
        }

        @keyframes menuItem {
          from {
            opacity: 0;
            transform: translateX(12px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
