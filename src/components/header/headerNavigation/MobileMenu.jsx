"use client";

import Link from "next/link";
import { X } from "lucide-react";

export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999999] lg:hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Mobile Menu */}
      <div
        className="
          absolute
          right-0
          top-0
          z-10
          flex
          h-full
          w-[85%]
          max-w-sm
          flex-col
          overflow-y-auto
          bg-white
          p-5
          shadow-2xl
          sm:w-[360px]
          sm:p-6
        "
        dir="rtl"
      >
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-gray-200 pb-5">
          <h2 className="text-xl font-bold text-gray-900">منو</h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close mobile menu"
            className="
              flex
              h-11
              w-11
              touch-manipulation
              items-center
              justify-center
              rounded-full
              text-gray-700
              transition-colors
              hover:bg-gray-100
              active:scale-95
              active:bg-gray-200
            "
          >
            <X className="h-6 w-6 pointer-events-none" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-6">
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                onClick={onClose}
                className="
                  block
                  touch-manipulation
                  rounded-lg
                  px-4
                  py-3.5
                  text-base
                  font-medium
                  text-gray-800
                  transition-colors
                  hover:bg-gray-100
                  active:bg-gray-200
                "
              >
                خانه
              </Link>
            </li>

            <li>
              <Link
                href="/#aboutUs"
                onClick={onClose}
                className="
                  block
                  touch-manipulation
                  rounded-lg
                  px-4
                  py-3.5
                  text-base
                  font-medium
                  text-gray-800
                  transition-colors
                  hover:bg-gray-100
                  active:bg-gray-200
                "
              >
                درباره ما
              </Link>
            </li>

            <li>
              <Link
                href="/#services"
                onClick={onClose}
                className="
                  block
                  touch-manipulation
                  rounded-lg
                  px-4
                  py-3.5
                  text-base
                  font-medium
                  text-gray-800
                  transition-colors
                  hover:bg-gray-100
                  active:bg-gray-200
                "
              >
                خدمات ما
              </Link>
            </li>
                <li>
              <Link
                href="/#contactus"
                onClick={onClose}
                className="
                  block
                  touch-manipulation
                  rounded-lg
                  px-4
                  py-3.5
                  text-base
                  font-medium
                  text-gray-800
                  transition-colors
                  hover:bg-gray-100
                  active:bg-gray-200
                "
              >
                تماس با ما
              </Link>
            </li>
            <li>
              <Link
                href="/#cases"
                onClick={onClose}
                className="
                  block
                  touch-manipulation
                  rounded-lg
                  px-4
                  py-3.5
                  text-base
                  font-medium
                  text-gray-800
                  transition-colors
                  hover:bg-gray-100
                  active:bg-gray-200
                "
              >
                پرونده‌های ما
              </Link>
            </li>
   
          </ul>
        </nav>
      </div>
    </div>
  );
}
