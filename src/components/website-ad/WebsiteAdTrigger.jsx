import WebsiteAdIcon from "./WebsiteAdIcon";

export default function WebsiteAdTrigger({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="مشاهده خدمات ASK.DEV"
      className="group relative flex h-14 w-14 items-center 
      justify-center rounded-full border
       border-[#b08d57]/30 bg-[#171717] text-[#d3b183]
        shadow-xl shadow-black/30 transition-all duration-300
         hover:-translate-y-1 hover:scale-105 hover:border-[#b08d57]/60 hover:bg-[#211d17] active:scale-95"
    >
      <span className="absolute -inset-1 animate-ping rounded-2xl bg-[#b08d57]/10 duration-1000" />

      <WebsiteAdIcon />

      <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center">
        <span
          className="absolute inline-flex h-full w-full 
        animate-ping rounded-full bg-green-400 opacity-75"
        />

        <span className="relative inline-flex h-2.5 w-2.5 rounded-full border-2 border-[#080809] bg-emerald-500" />
      </span>
    </button>
  );
}
