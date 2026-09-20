import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function DesktopNavigation({ isHomeOpen, setIsHomeOpen }) {
  return (
    <div className="hidden lg:flex">
      <ul className="flex items-center gap-8 text-foreground">
        <li>
          <Link
            href="/"
            className="font-medium transition-colors duration-200 hover:text-primary"
          >
            خانه
          </Link>
        </li>
        <li
          className="relative"
          onMouseEnter={() => setIsHomeOpen(true)}
          onMouseLeave={() => setIsHomeOpen(false)}
        >
          <button
            type="button"
            className="flex items-center gap-1 font-medium transition-colors duration-200 hover:text-primary"
          >
            خدمات ما
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ease-out ${
                isHomeOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`absolute right-0 top-full z-50 mt-2 w-48 origin-top-right rounded-md bg-white p-2 shadow-lg transition-all duration-300 ease-out ${
              isHomeOpen
                ? "visible translate-y-0 opacity-100 mt-8"
                : "invisible -translate-y-2 opacity-0"
            }`}
          >
            <Link
              href="/#services"
              className="block rounded-md px-4 py-3 text-sm transition-colors duration-200 hover:bg-primary hover:text-white"
            >
              خدمات ما
            </Link>

            <Link
              href="/#cases"
              className="block rounded-md px-4 py-3 text-sm transition-colors duration-200 hover:bg-primary hover:text-white"
            >
              پرونده‌های ما
            </Link>

            <Link
              href="/#practiceAreas"
              className="block rounded-md px-4 py-3 text-sm transition-colors duration-200 hover:bg-primary hover:text-white"
            >
              حوزه‌های تخصصی
            </Link>
          </div>
        </li>
        <li>
          <Link
            href="/#about-us"
            className="font-medium transition-colors duration-200 hover:text-primary"
          >
            درباره ما
          </Link>
        </li>
        <li>
          <Link
            href="/#faq"
            className="font-medium transition-colors duration-200 hover:text-primary"
          >
            سوالات متداول
          </Link>
        </li>
        <li>
          <Link
            href="/#contactus"
            className="font-medium transition-colors duration-200 hover:text-primary"
          >
            تماس با ما
          </Link>
        </li>
      </ul>
    </div>
  );
}
