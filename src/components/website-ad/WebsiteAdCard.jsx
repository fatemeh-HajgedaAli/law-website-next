import PhoneIcon from "./PhoneIcon";
import TelegramIcon from "./TelegramIcon";

export default function WebsiteAdCard({ onClose }) {
  return (
    <div className="absolute bottom-[72px] left-0 w-[300px] overflow-hidden rounded-3xl border border-[#b08d57]/25 bg-[#f8f6f2]/95 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl transition-all animate-in fade-in slide-in-from-bottom-3 sm:w-[340px]">
      {/* Top Gradient */}

      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#8c6d3f] via-[#b08d57] to-[#d3b183] opacity-90" />

      {/* Close Button */}

      <button
        type="button"
        onClick={onClose}
        aria-label="بستن"
        className="absolute left-3 top-3 z-20 flex h-7 w-7 items-center justify-center rounded-full border border-[#b08d57]/20 bg-white/60 text-[#6f665a] backdrop-blur-md transition hover:bg-[#b08d57] hover:text-white active:scale-95"
      >
        ✕
      </button>

      {/* Brand */}

      <div className="flex items-center gap-3 pt-1">
        {/* Logo */}

        <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-[#b08d57]/30 bg-[#171717] font-mono text-[11px] font-black tracking-tighter text-[#d3b183] shadow-lg shadow-black/15">
          <span className="absolute inset-0 rounded-2xl bg-[#b08d57]/15 blur-md" />

          <span className="relative">{"</>"}</span>
        </div>

        <div>
          <span className="block text-[10px] font-medium tracking-widest text-[#8d8579]">
            WEB DEVELOPMENT
          </span>

          <span className="mt-0.5 block text-sm font-black tracking-wide text-[#171717]">
            ASK<span className="text-[#b08d57]">.DEV</span>
          </span>
        </div>
      </div>

      {/* Title */}

      <h3 className="mt-4 text-base font-extrabold leading-8 text-[#171717] sm:text-lg">
        <span className="relative inline-block">
          <span className="bg-gradient-to-r from-[#8c6d3f] via-[#b08d57] to-[#d3b183] bg-clip-text text-transparent">
            وب‌سایت حرفه‌ای
          </span>

          <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-[#8c6d3f] to-[#d3b183] opacity-60" />
        </span>
      </h3>

      {/* Description */}

      <p className="mt-2 text-xs font-medium leading-6 text-[#66615b]">
        طراحی وب‌سایت حرفه‌ای و مدرن، متناسب با برند و نیازهای کسب‌وکار شما با
        تجربه کاربری سریع و جذاب.
      </p>

      {/* Contact */}

      <div className="mt-4 space-y-2.5">
        {/* Telegram */}

        <a
          href="https://t.me/Ask_cod"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="ارتباط در تلگرام"
          className="group flex items-center justify-between rounded-2xl border border-[#b08d57]/30 bg-gradient-to-r from-[#b08d57] to-[#8c6d3f] p-3 text-white shadow-lg shadow-[#8c6d3f]/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#8c6d3f]/25 active:scale-[0.98]"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
              <TelegramIcon />
            </span>

            <div>
              <span className="block text-[10px] text-white/75">
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
          className="group flex items-center justify-between rounded-2xl border border-[#b08d57]/20 bg-white/60 p-3 backdrop-blur-md transition-all duration-300 hover:border-[#b08d57]/40 hover:bg-white"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#b08d57]/20 bg-[#f5eee4] text-[#8c6d3f] shadow-sm transition group-hover:scale-105 group-hover:bg-[#b08d57] group-hover:text-white">
              <PhoneIcon />
            </span>

            <div>
              <span className="block text-[10px] font-medium text-[#999286]">
                تماس مستقیم
              </span>

              <span
                dir="ltr"
                className="block text-xs font-bold text-[#171717]"
              >
                0935 168 0236
              </span>
            </div>
          </div>

          <span className="text-[#8c6d3f] transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
        </a>
      </div>

      {/* Footer */}

      <div className="mt-4 flex items-center justify-center gap-1.5 border-t border-[#b08d57]/10 pt-3">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />

        <span className="text-[10px] font-medium text-[#8d8579]">
          آماده شروع یک پروژه حرفه‌ای
        </span>
      </div>
    </div>
  );
}
