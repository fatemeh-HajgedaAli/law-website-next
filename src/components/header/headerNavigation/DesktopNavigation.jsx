// DesktopNavigation
import Link from "next/link";
import { ChevronDown } from "lucide-react";
// start
export default function DesktopNavigation({ isHomeOpen, setIsHomeOpen }) {
  return (
    <div className="hidden lg:flex">
      <ul
        className="flex items-center gap-8 text-foreground
"
      >
        {/* Home Dropdown */}
        <li className="relative">
          <button
            type="button"
            onClick={() => setIsHomeOpen(!isHomeOpen)}
            className="flex items-center gap-1 font-medium 
             transition-colors hover:text-primary"
          >
            خانه
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                isHomeOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isHomeOpen && (
            <div
              className="absolute right-0 top-full mt-8 w-48 rounded-md
             bg-white p-2 shadow-lg"
            >
              <Link
                href="/#about-us"
                className="block rounded-md px-4 py-3 text-sm transition-colors hover:bg-primary hover:text-white"
              >
                درباره ما
              </Link>

              <Link
                href="/#cases"
                className="block rounded-md px-4 py-3 text-sm transition-colors hover:bg-primary hover:text-white"
              >
                پرونده‌های ما
              </Link>

              <Link
                href="/#faq"
                className="block rounded-md px-4 py-3 text-sm transition-colors hover:bg-primary hover:text-white"
              >
                سوالات متداول
              </Link>
            </div>
          )}
        </li>

        {/* Services */}
        <li>
          <Link
            href="/#services"
            className="font-medium transition-colors hover:text-primary"
          >
            خدمات ما
          </Link>
        </li>

        {/* Blog */}
        <li>
          <Link
            href="/blog"
            className="font-medium transition-colors hover:text-primary"
          >
            وبلاگ
          </Link>
        </li>

        {/* Contact */}
        <li>
          <Link
            href="/#contact"
            className="font-medium transition-colors hover:text-primary"
          >
            تماس با ما
          </Link>
        </li>
      </ul>
    </div>
  );
}
