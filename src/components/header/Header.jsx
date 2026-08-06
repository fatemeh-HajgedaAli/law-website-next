"use client";

import { useEffect, useState } from "react";

import TopHeader from "./TopHeader";
import HeaderContact from "./HeaderContact";
import HeaderNavigation from "./headerNavigation/HeaderNavigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="relative">
      {/* Top + Contact */}
      <div
        className={`
          transition-all
          duration-300
          ${scrolled ? "h-0 overflow-hidden opacity-0" : "h-auto opacity-100"}
        `}
      >
        <TopHeader />

        <HeaderContact />
      </div>

      {/* Navigation */}
      <div
        className={`
    w-full
    ${
      scrolled
        ? `
          fixed
          top-0
          left-0
          z-50
          text-primary
          
        `
        : ""
    }
  `}
      >
        <HeaderNavigation scrolled={scrolled} />
      </div>
    </header>
  );
}
