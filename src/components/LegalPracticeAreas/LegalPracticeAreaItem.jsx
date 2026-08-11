export default function LegalPracticeAreaItem({ service }) {
  const Icon = service.icon;

  return (
    <article
      className=" group relative flex items-start gap-5 rounded-xl border border-transparent
       bg-white/40 p-5 backdrop-blur-sm transition-all shadow-[0_20px_50px_-20px_rgba(0,0,0,0.18)]
       duration-300 hover:-translate-y-1 
       hover:border-[#c59d5f]/15 hover:bg-white 
       hover:border-r-4  
       hover:border-r-[#c59d5f] sm:gap-7 sm:p-7
      "
    >
      {/* Icon */}
      <div
        className=" flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#c59d5f]/10 bg-[#c59d5f]/[0.06] text-[#b38b4d] transition-all duration-300 group-hover:scale-105 group-hover:border-[#c59d5f]/20 group-hover:bg-[#c59d5f] group-hover:text-white sm:h-20 sm:w-20
        "
      >
        <Icon
          size={42}
          strokeWidth={1.25}
          className="transition-transform duration-300 group-hover:scale-95"
        />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <h3
          className="
            mb-2
            text-lg
            font-bold
            tracking-tight
            text-gray-900
            transition-colors
            duration-300
            group-hover:text-[#b38b4d]
            sm:text-xl
            lg:text-2xl
          "
        >
          {service.title}
        </h3>

        <p className="max-w-2xl text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
          {service.description}
        </p>
      </div>

      {/* Arrow */}
      <div className="hidden shrink-0 self-center text-[#c59d5f]/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#c59d5f] sm:block">
        ←
      </div>
    </article>
  );
}
