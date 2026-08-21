import { testimonials } from "./testimonialData";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-[#FAF7F1] py-20 sm:py-24 lg:py-28"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#A87C3E]/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#101B2E]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#A87C3E]" />

            <span className="text-xs font-semibold tracking-[0.25em] text-[#A87C3E]">
              نظرات موکلین
            </span>

            <span className="h-px w-12 bg-[#A87C3E]" />
          </div>

          <h2 className="text-3xl font-bold leading-tight text-[#101B2E] sm:text-4xl lg:text-5xl">
            تجربه موکلین ما
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[#4A5568]">
            رضایت و اعتماد موکلین، مهم‌ترین سرمایه ما در ارائه خدمات حقوقی
            حرفه‌ای است.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
