"use client";

import { useEffect, useState } from "react";
// icons
import { ArrowLeft, ArrowRight } from "lucide-react";
// parts
import HeroSlide from "./HeroSlide";
import { slides } from "./hero-data";
// start
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
    <section className="relative overflow-hidden top-[-80px] w-full">
      <HeroSlide
        image={slides[currentSlide].image}
        position={slides[currentSlide].position}
        subtitle={slides[currentSlide].subtitle}
        title={slides[currentSlide].title}
        description={slides[currentSlide].description}
      />

      {/* Previous */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-5 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-black/40 text-white hover:bg-primary"
      >
        <ArrowLeft className="h-6 w-6" />
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-5 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-black/40 text-white hover:bg-primary"
      >
        <ArrowRight className="h-6 w-6" />
      </button>
    </section>
  );
}
