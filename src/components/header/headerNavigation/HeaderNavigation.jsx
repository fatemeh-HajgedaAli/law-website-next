"use client";

import Link from "next/link";
import { Menu, MoveRight } from "lucide-react";
import { useState } from "react";

import DesktopNavigation from "./DesktopNavigation";
import DesktopSideModal from "./DesktopSideModal";
import MobileMenu from "./MobileMenu";

export default function HeaderNavigation({ scrolled }) {
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`
          relative
          z-40
          w-full
          transition-all
          duration-300
          shadow-xl
          lg:mx-24
          lg:w-auto

          ${
            scrolled
              ? `
                bg-background/40
                text-foreground
                backdrop-blur-md
                shadow-sm
              `
              : `
                bg-white/70
                text-foreground
              `
          }
        `}
      >
        <div className="mx-auto w-full max-w-6xl">
          <div
            className="
              flex
              h-20
              w-full
              items-center
              justify-between
              px-4
              sm:px-6
              lg:px-2
            "
          >
            {/* ================= RIGHT ================= */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Desktop Menu */}
              <button
                type="button"
                aria-label="Open desktop menu"
                onClick={() => setIsDesktopMenuOpen(true)}
                className="
                  hidden
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-lg
                  lg:flex
                  touch-manipulation
                "
              >
                <Menu className="pointer-events-none h-7 w-7" />
              </button>

              {/* Mobile Menu */}
              <button
                type="button"
                aria-label="Open mobile menu"
                aria-expanded={isMobileMenuOpen}
                onClick={() => {
                  alert("CLICK");
                  setIsMobileMenuOpen(true);
                }}
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-lg
                  touch-manipulation
                  text-foreground
                  active:scale-95
                  active:bg-gray-200
                  lg:hidden
                "
              >
                <Menu className="pointer-events-none h-8 w-8" />
              </button>

              {/* Consultation */}
              <Link
                href="/cta"
                className="
                  flex
                  items-center
                  gap-2
                  rounded-lg
                  bg-primary
                  px-3
                  py-2.5
                  text-xs
                  font-medium
                  text-white
                  sm:px-4
                  sm:py-3
                  sm:text-sm
                "
              >
                <MoveRight className="h-5 w-5" />
                <span>دریافت مشاوره</span>
              </Link>
            </div>

            {/* ================= DESKTOP NAV ================= */}
            <DesktopNavigation
              isHomeOpen={isHomeOpen}
              setIsHomeOpen={setIsHomeOpen}
            />
          </div>
        </div>
      </nav>

      {/* ================= DESKTOP MODAL ================= */}
      <DesktopSideModal
        isOpen={isDesktopMenuOpen}
        onClose={() => setIsDesktopMenuOpen(false)}
      />

      {/* ================= MOBILE MENU ================= */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
