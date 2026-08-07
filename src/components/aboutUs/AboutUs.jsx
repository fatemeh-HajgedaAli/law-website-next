import AboutContent from "./AboutContent";
import AboutGallery from "./AboutGallery";

export default function AboutUs() {
  return (
    <section
      className="relative overflow-hidden bg-[#F8F5EF] py-20 lg:py-8"
      dir="rtl"
    >
      <div className="container mx-auto max-w-7xl px-5">
        <div
          className="
          grid
          items-center
          gap-14
          lg:grid-cols-[1fr_1fr]
          lg:gap-20
          "
        >
          <AboutContent />
          <AboutGallery />
        </div>
      </div>
    </section>
  );
}
