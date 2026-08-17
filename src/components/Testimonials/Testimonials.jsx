import { testimonials } from "./testimonialData";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section dir="rtl" className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-semibold text-orange-500">
            نظرات موکلین
          </span>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            تجربه موکلین ما
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
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
