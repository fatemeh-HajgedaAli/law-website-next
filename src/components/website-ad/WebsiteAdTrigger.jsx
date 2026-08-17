import WebsiteAdIcon from "./WebsiteAdIcon";

export default function WebsiteAdTrigger({ onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="مشاهده خدمات ASK.DEV"
      className="group relative flex h-14 w-14 items-center justify-center 
      rounded-2xl bg-slate-800 text-cyan-400 shadow-xl shadow-slate-900/30
       transition-all duration-300 hover:-translate-y-1 
       hover:scale-105 active:scale-95"
    >
      <span className="absolute -inset-1 animate-ping rounded-2xl bg-cyan-400/20 duration-1000" />

      <span className="absolute inset-0 rounded-2xl bg-cyan-400/10 blur-sm transition group-hover:bg-cyan-400/20" />

      <WebsiteAdIcon />

      <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

        <span className="relative inline-flex h-2.5 w-2.5 rounded-full border-2 border-slate-950 bg-emerald-500" />
      </span>
    </button>
  );
}
