export default function LegalPracticeAreasImage() {
  return (
    <div className="relative flex justify-center lg:col-span-5">
      {/* Image Glow */}
      <div
        className="absolute bottom-0 left-1/2 h-3/4 w-3/4 -translate-x-1/2 
      rounded-full bg-[#c59d5f]/10 blur-[90px]"
      />

      {/* Image */}
      <div
        className="group relative overflow-hidden border border-white/70
       bg-[#d7d4d2] shadow-[0_25px_70px_-20px_rgba(0,0,0,0.22)] mt-[-40px]"
      >
        <img
          src="/images/lawyer/lawyer02.png"
          alt="خدمات حقوقی"
          loading="lazy"
          className="h-[350px] w-auto max-w-full object-contain transition-transform
           duration-700 ease-out  sm:h-[450px] md:h-[550px] lg:h-[700px]"
        />

        {/* Image Shine */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/[0.04] via-transparent to-white/20" />
      </div>

      {/* Gold Corners */}
      <div
        className="absolute -bottom-5 -left-5 hidden h-28 w-28 border-b-2
       border-l-2 border-[#c59d5f]/40 sm:block"
      />

      <div
        className="absolute -right-5 -top-5 hidden h-20 w-20 border-r 
      border-t border-[#c59d5f]/30 sm:block"
      />
    </div>
  );
}
