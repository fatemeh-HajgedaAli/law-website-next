"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import HeroSlide from "./HeroSlide";
import { slides } from "./hero-data";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full">
      {/* Hero */}
      <HeroSlide
        image={slides[currentSlide].image}
        position={slides[currentSlide].position}
        subtitle={slides[currentSlide].subtitle}
        title={slides[currentSlide].title}
        description={slides[currentSlide].description}
      />

      {/* Navigation Buttons */}
      <div className="pointer-events-none absolute inset-0 z-30">
        {/* Previous */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="
            pointer-events-auto
            absolute
            left-2
            top-[30%]
            flex
            h-11
            w-11
            -translate-y-1/2
            touch-manipulation
            items-center
            justify-center
            rounded-full
            bg-black/70
            text-white
            transition-all
            duration-200
            hover:bg-primary
            active:scale-90

          "
        >
          <ArrowLeft className="pointer-events-none h-5 w-5" />
        </button>

        {/* Next */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="
            pointer-events-auto
            absolute
            right-2
            top-[30%]
            flex
            h-11
            w-11
            -translate-y-1/2
            touch-manipulation
            items-center
            justify-center
            rounded-full
            bg-black/70
            text-white
            transition-all
            duration-200
            hover:bg-primary
            active:scale-90
          "
        >
          <ArrowRight className="pointer-events-none h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
