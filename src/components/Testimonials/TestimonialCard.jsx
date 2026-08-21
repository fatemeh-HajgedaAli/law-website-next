import { UserRound, Check } from "lucide-react";

export default function TestimonialCard({ testimonial }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#E7E0D2] bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#A87C3E]/40 hover:shadow-[0_20px_50px_rgba(16,27,46,0.10)]">
      <div className="absolute right-0 top-0 h-24 w-1 bg-gradient-to-b from-[#C9A15F] to-transparent" />

      <div className="mb-7 flex items-start justify-between">
        <span className="font-bold text-6xl leading-none text-[#A87C3E]/20">
          “
        </span>

        <div className="flex gap-1 pt-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <span
              key={index}
              className="text-sm text-[#C9A15F]"
              aria-hidden="true"
            >
              ★
            </span>
          ))}
        </div>
      </div>

      <blockquote className="flex-1">
        <p className="text-[15px] leading-8 text-[#4A5568]">
          {testimonial.text}
        </p>
      </blockquote>

      <div className="my-7 h-px w-full bg-[#E7E0D2]" />

      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#C9A15F]/40 bg-[#101B2E] text-[#C9A15F] transition-all duration-500 group-hover:border-[#A87C3E] group-hover:bg-[#A87C3E] group-hover:text-[#101B2E]">
          <UserRound size={25} strokeWidth={1.7} />
        </div>

        <div className="min-w-0">
          <h3 className="truncate text-sm font-bold text-[#101B2E]">
            {testimonial.name}
          </h3>

          <p className="mt-1 text-xs text-[#A87C3E]">{testimonial.position}</p>
        </div>

        <div className="mr-auto flex h-9 w-9 items-center justify-center rounded-full border border-[#A87C3E]/20 text-[#A87C3E] transition-all duration-300 group-hover:border-[#A87C3E] group-hover:bg-[#A87C3E] group-hover:text-white">
          <Check size={17} strokeWidth={2} />
        </div>
      </div>
    </article>
  );
}
