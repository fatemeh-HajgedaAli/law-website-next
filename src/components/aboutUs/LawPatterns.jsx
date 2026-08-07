export const LawPatterns = () => {
  return (
    <div className="absolute inset-0 pointer-events-none 
    flex items-center justify-center overflow-hidden">
      <span className="absolute text-[110px] 
      font-black uppercase text-[#1C1D1A]/[0.03]
       select-none tracking-widest z-0 -rotate-90 sm:rotate-0">
        JUSTICE
      </span>

      <svg
        className="absolute w-[130%] h-[130%] opacity-30 stroke-[#A39783]"
        viewBox="0 0 500 500"
        fill="none"
      >
        <path d="M 50, 250 Q 150, 100 250, 250 T 450, 250" strokeWidth="1.2" />
        <path d="M 20, 320 Q 180, 180 300, 320 T 480, 200" strokeWidth="1" />
        <path d="M 80, 150 Q 220, 380 380, 180" strokeWidth="1" />
      </svg>
    </div>
  );
};
