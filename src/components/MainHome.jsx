import Container from "@/ui/container";

import Hero from "@/components/hero/Hero";
import PracticeAreas from "./practiceAreas/PracticeAreas";

export default function MainHome() {
  return (
    <>
      {/* Full Width */}
      <Hero />

      {/* Main Content Container */}
      <Container>
        <PracticeAreas/>
      </Container>
    </>
  );
}
