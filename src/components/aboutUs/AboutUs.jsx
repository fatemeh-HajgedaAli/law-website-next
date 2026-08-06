// components/AboutUs.jsx
import { AboutText } from "./AboutText";
import { AboutPngImage } from "./AboutPngImage";
import { AboutImage } from "./AboutImage";

export default function AboutUs() {
  return (
    <section className="py-10 lg:py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-3">
          <AboutText />
          <AboutPngImage />
          <AboutImage />
        </div>
      </div>
    </section>
  );
}
