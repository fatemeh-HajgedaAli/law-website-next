import PhoneIcon from "./PhoneIcon";
import TelegramIcon from "./TelegramIcon";

export default function WebsiteAdCard({ onClose }) {
  return (
    <div className="absolute bottom-[72px] right-0 w-[300px] overflow-hidden rounded-3xl border border-white/40 bg-white/40 p-5 shadow-2xl shadow-sky-950/15 backdrop-blur-xl transition-all animate-in fade-in slide-in-from-bottom-3 sm:w-[340px]">
      {/* Top Gradient */}
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-600 opacity-80" />

      {/* Close Button */}
      <button
        onClick={onClose}
        aria-label="بستن"
        className="absolute left-3 top-3 z-20 flex h-7 w-7 items-center justify-center rounded-full border border-white/50 bg-white/30 text-slate-600 backdrop-blur-md transition hover:bg-white/60 hover:text-slate-900 active:scale-95"
      >
        ✕
      </button>

      {/* ================= Brand ================= */}
      <div className="flex items-center gap-3 pt-1">
        {/* Logo */}
        <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950/80 font-mono text-[11px] font-black tracking-tighter text-cyan-400 shadow-lg shadow-slate-900/20 backdrop-blur-md">
          <span className="absolute inset-0 rounded-2xl bg-cyan-400/20 blur-md" />

          <span className="relative">{"</>"}</span>
        </div>

        <div>
          <span className="block text-[10px] font-medium tracking-widest text-slate-500">
            WEB DEVELOPMENT
          </span>

          <span className="mt-0.5 block text-sm font-black tracking-wide text-slate-900">
            ASK<span className="text-cyan-600">.DEV</span>
          </span>
        </div>
      </div>

      {/* ================= Title ================= */}
      <h3 className="mt-4 text-base font-extrabold leading-8 text-slate-900 sm:text-lg">
        <span className="relative inline-block">
          <span className="bg-gradient-to-r from-sky-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent">
            وب‌سایت حرفه‌ای
          </span>

          <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 opacity-50" />
        </span>
      </h3>

      {/* ================= Description ================= */}
      <p className="mt-2 text-xs leading-6 font-medium text-slate-700">
        طراحی وب‌سایت حرفه‌ای و مدرن، متناسب با برند و نیازهای کسب‌وکار شما با
        تجربه کاربری سریع و جذاب.
      </p>

      {/* ================= Contact ================= */}
      <div className="mt-4 space-y-2.5">
        {/* Telegram */}
        <a
          href="https://t.me/Ask_cod"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="ارتباط در تلگرام"
          className="group flex items-center justify-between rounded-2xl border border-sky-300/40
           bg-gradient-to-r from-sky-500/90 to-sky-900/80 p-3 text-white shadow-lg
            shadow-sky-500/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/25 backdrop-blur-sm">
              <TelegramIcon />
            </span>

            <div>
              <span className="block text-[10px] text-white/80">
                مشاوره و سفارش
              </span>

              <span className="block text-xs font-bold">گفتگو در تلگرام</span>
            </div>
          </div>

          <span className="text-lg transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
        </a>

        {/* Phone */}
        <a
          href="tel:+989351680236"
          aria-label="تماس مستقیم"
          className="group flex items-center justify-between rounded-2xl border border-white/60 bg-white/40 p-3 backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white/60"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/50 bg-white/60 text-sky-600 shadow-sm transition group-hover:scale-105">
              <PhoneIcon />
            </span>

            <div>
              <span className="block text-[10px] font-medium text-slate-500">
                تماس مستقیم
              </span>

              <span
                dir="ltr"
                className="block text-xs font-bold text-slate-900"
              >
                0935 168 0236
              </span>
            </div>
          </div>

          <span className="text-sky-600 transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
        </a>
      </div>

      {/* ================= Footer ================= */}
      <div className="mt-3 flex items-center justify-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />

        <span className="text-[10px] font-medium text-slate-500">
          آماده شروع یک پروژه حرفه‌ای
        </span>
      </div>
    </div>
  );
}
