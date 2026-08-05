// HeaderNavigation.jsx

"use client";

import Link from "next/link";
import { Search, Menu, MoveRight } from "lucide-react";
import { useState } from "react";

// Components
import DesktopNavigation from "./DesktopNavigation";
import DesktopSideModal from "./DesktopSideModal";
import MobileMenu from "./MobileMenu";

// Start
export default function HeaderNavigation() {
  // States
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 mx-auto w-full max-w-5xl bg-background shadow-md">
        <div className="flex h-20 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* ================= RIGHT NAVIGATION ================= */}
          <div className="flex items-center gap-4">
            {/* ================= DESKTOP MENU ================= */}
            <button
              type="button"
              aria-label="Open desktop menu"
              onClick={() => setIsDesktopMenuOpen(true)}
              className="hidden lg:block"
            >
              <Menu className="h-8 w-8" />
            </button>

            {/* ================= MOBILE MENU ================= */}
            <button
              type="button"
              aria-label="Open mobile menu"
              onClick={() => setIsMobileMenuOpen(true)}
              className="block lg:hidden"
            >
              <Menu className="h-8 w-8" />
            </button>

            {/* ================= FREE CONSULTATION ================= */}
            <Link
              href="/cta"
              className="hidden items-center gap-2 rounded-lg bg-primary px-4 py-4 text-sm font-medium text-white transition-colors hover:bg-foreground sm:inline-flex"
            >
              <MoveRight className="h-5 w-5" />
              دریافت مشاوره
            </Link>

            {/* ================= SEARCH ================= */}
            <button
              type="button"
              aria-label="Search"
              className="transition-colors hover:text-primary"
            >
              <Search className="h-6 w-6" />
            </button>
          </div>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <DesktopNavigation
            isHomeOpen={isHomeOpen}
            setIsHomeOpen={setIsHomeOpen}
          />
        </div>
      </nav>

      {/* ================= DESKTOP SIDE MODAL ================= */}
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
