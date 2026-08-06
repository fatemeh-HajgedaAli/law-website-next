import Container from "@/ui/container";

import Hero from "@/components/hero/Hero";
import PracticeAreas from "./practiceAreas/PracticeAreas";
import AboutUs from "./aboutUs/AboutUs";

export default function MainHome() {
  return (
    <>
      {/* Full Width */}
      <Hero />

      {/* Main Content Container */}
      <Container>
        {/* PracticeAreas */}
        <PracticeAreas />
        {/* AboutUs */}
        <AboutUs />
      </Container>
    </>
  );
}
