import Container from "@/ui/container";

import Hero from "@/components/hero/Hero";
import PracticeAreas from "./practiceAreas/PracticeAreas";
import AboutUs from "./aboutUs/AboutUs";
import CTA from "./CTA/CTA";
import Counter from "./Counter/Counter";
import LegalPracticeAreas from "./LegalPracticeAreas/LegalPracticeAreas";

export default function MainHome() {
  return (
    <>
      {/* Main Content */}

      {/* Hero */}
      <Hero />
      {/* Practice Areas */}
      <PracticeAreas />

      {/* About Us */}
      <AboutUs />

      {/* CTA + Counter */}
      <div className="relative">
        <CTA />
        <Counter />
      </div>
      {/* LegalPracticeAreas */}
      <LegalPracticeAreas />
    </>
  );
}
