// mobile-menu

import Link from "next/link";
import { X } from "lucide-react";
// start
export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] lg:hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Mobile Menu */}
      <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white p-6 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">منو</h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close mobile menu"
          >
            <X className="h-7 w-7" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <ul className="mt-10 space-y-2">
          <li>
            <Link
              href="/"
              onClick={onClose}
              className="block rounded-md px-4 py-3 hover:bg-gray-100"
            >
              خانه
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              onClick={onClose}
              className="block rounded-md px-4 py-3 hover:bg-gray-100"
            >
              درباره ما
            </Link>
          </li>

          <li>
            <Link
              href="/services"
              onClick={onClose}
              className="block rounded-md px-4 py-3 hover:bg-gray-100"
            >
              حوزه‌های فعالیت
            </Link>
          </li>

          <li>
            <Link
              href="/lawyers"
              onClick={onClose}
              className="block rounded-md px-4 py-3 hover:bg-gray-100"
            >
              وکلا
            </Link>
          </li>

          <li>
            <Link
              href="/blog"
              onClick={onClose}
              className="block rounded-md px-4 py-3 hover:bg-gray-100"
            >
              وبلاگ
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              onClick={onClose}
              className="block rounded-md px-4 py-3 hover:bg-gray-100"
            >
              تماس با ما
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
