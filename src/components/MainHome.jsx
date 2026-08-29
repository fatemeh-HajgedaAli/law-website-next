import Container from "@/ui/container";

import Hero from "@/components/hero/Hero";
import PracticeAreas from "./practiceAreas/PracticeAreas";
import AboutUs from "./aboutUs/AboutUs";
import CTA from "./CTA/CTA";
import Counter from "./Counter/Counter";
import LegalPracticeAreas from "./LegalPracticeAreas/LegalPracticeAreas";
import Testimonials from "./Testimonials/Testimonials";
import Cases from "./cases/Cases";
import FAQ from "./FAQ/FAQ";

export default function MainHome() {
  return (
    <>
      {/* Hero */}
      <Hero />
      {/* PracticeAreas */}
      <section id="practiceAreas" className="scroll-mt-20">
        <PracticeAreas />
      </section>
      {/* AboutUs */}
      <section id="aboutUs" className="scroll-mt-20">
        <AboutUs />
      </section>

      {/* Cases */}
      <section id="cases" className="scroll-mt-24">
        <Cases />
      </section>
      {/* CTA+ Counter*/}
      <div className="relative">
        <CTA />
        <Counter />
      </div>
      <section>
        <FAQ  />
      </section>
      {/* LegalPracticeAreas */}
      <section id="services" className="scroll-mt-20">
        <LegalPracticeAreas />
      </section>

      {/* Testimonials */}
      <section>
        <Testimonials />
      </section>
    </>
  );
}
