export default function LegalPracticeAreasBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
      {/* 1. Ambient Soft Glows */}
      <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#c59d5f]/10 blur-[150px]" />
      <div className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-[#c59d5f]/10 blur-[150px]" />
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 blur-[130px]" />

      {/* 2. Dot Matrix Pattern (Deep Perspective Layer) */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, #c59d5f 1.2px, transparent 1.2px)",
          backgroundSize: "20px 20px",
          maskImage:
            "radial-gradient(ellipse at center, black 10%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 10%, transparent 70%)",
        }}
      />

      {/* 3. Luxury Corner Accent Patterns */}
      <div
        className="absolute -right-20 top-1/4 h-96 w-96 opacity-15"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40' fill='%23c59d5f' fill-opacity='0.6'/%3E%3C/svg%3E")`,
          maskImage: "linear-gradient(to left, black, transparent)",
          WebkitMaskImage: "linear-gradient(to left, black, transparent)",
        }}
      />

      {/* 5. Animated Decorative Rings */}
      {/* big-animated-circle */}
      <div className="absolute left-5 top-6 lg:top-[5%] lg:left-[5%] block">
        <div className="relative flex items-center justify-center">
          <div className="h-44 w-44 rounded-full border border-[#c59d5f]/20" />
          <div
            className="absolute h-28 w-28 rounded-full border border-[#c59d5f]/35 animate-ping"
            style={{ animationDuration: "4s" }}
          />
          <div className="absolute h-3 w-3 rounded-full bg-[#c59d5f]/50" />
        </div>
      </div>
      {/* smal-static-circle */}
      <div className="absolute right-[5%] top-[15%] block">
        <div className="relative flex items-center justify-center">
          <div className="h-36 w-36 rounded-full border border-[#c59d5f]/25 animate-pulse" />
          <div className="absolute h-24 w-24 rounded-full border border-[#c59d5f]/40 border-dashed" />
          <div className="absolute h-2 w-2 rounded-full bg-[#c59d5f]/60" />
        </div>
      </div>
      {/* 6. Glowing Accent Lines with Gradient */}
      <div className="absolute right-[7%] top-[30%] hidden h-px w-48 bg-gradient-to-l from-[#c59d5f]/40 via-[#c59d5f]/15 to-transparent lg:block" />
      <div className="absolute bottom-[14%] left-[7%] hidden h-px w-56 bg-gradient-to-r from-[#c59d5f]/40 via-[#c59d5f]/15 to-transparent lg:block" />

      {/* Vertical Tech-Line Accents */}
      <div className="absolute left-[12%] top-[20%] hidden h-32 w-px bg-gradient-to-b from-[#c59d5f]/30 to-transparent lg:block" />
      <div className="absolute right-[12%] bottom-[20%] hidden h-32 w-px bg-gradient-to-t from-[#c59d5f]/30 to-transparent lg:block" />
    </div>
  );
}
