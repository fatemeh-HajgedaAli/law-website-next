// CTA.jsx

import CTACard from "./CTACard";
import { ctaData } from "@/components/CTA/ctaData";

export default function CTA() {
  return (
    <section
      className="
    relative
    z-20
    -mb-20
    pt-4
    lg:-mb-52
    lg:pt-12
  "
    >
      {" "}
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-primary" />

            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-primary
              "
            >
              Legal Support
            </span>

            <span className="h-px w-10 bg-primary" />
          </div>

          <h2
            className="
              text-4xl
              font-semibold
              tracking-tight
              text-[#171717]
              sm:text-5xl
            "
          >
            همراه شما در تصمیم‌های مهم
          </h2>
        </div>

        {/* CTA Cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {ctaData.map((item) => (
            <CTACard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
