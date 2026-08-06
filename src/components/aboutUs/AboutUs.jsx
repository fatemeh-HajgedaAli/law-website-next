import { AboutText } from "./AboutText";
import { AboutPngImage } from "./AboutPngImage";
import { AboutImage } from "./AboutImage";

export default function AboutUs() {
  return (
    <section className="overflow-hidden py-20">
      <div className="container mx-auto px-4">
        <div
          className="
          grid
          grid-cols-1
          items-center
          gap-10
          lg:grid-cols-[1.1fr_0.8fr_0.8fr]
          "
        >
          <AboutText />

          <AboutPngImage />

          <AboutImage />
        </div>
      </div>
    </section>
  );
}
