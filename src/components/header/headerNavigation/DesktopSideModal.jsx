import { X, Phone, MapPin, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { toPersianDigits } from "@/utils/toPersianDigits";

export default function DesktopSideModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-black/40 backdrop-blur-[3px] transition-opacity duration-500"
      />

      <aside
        dir="rtl"
        className="absolute right-0 top-0 flex h-full w-full max-w-lg flex-col overflow-y-auto bg-[#f7f5f0] shadow-2xl animate-in slide-in-from-right duration-500"
      >
        <div className="flex items-center justify-between border-b border-black/10 px-8 py-7 lg:px-10">
          <div>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.35em] text-primary">
              Rahyab Law Firm
            </span>

            <span className="mt-1 block text-xs text-black/40">
              مشاوره و خدمات تخصصی حقوقی
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
          >
            <X className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />
          </button>
        </div>

        <div className="flex-1 px-8 py-10 lg:px-10">
          <section>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
                درباره ما
              </span>
            </div>

            <h2 className="mb-6 text-3xl font-semibold leading-tight tracking-tight text-[#171717]">
              همراه شما در
              <br />
              مسیر عدالت
            </h2>

            <p className="text-[15px] leading-8 text-[#66615b]">
              ما جمعی از فارغ‌التحصیلان برتر حقوق و وکلای پایه یک دادگستری،
              خدمات حقوقی تخصصی ارائه می‌دهیم. ما با پذیرش وکالت و ارائه مشاوره،
              همراه ایرانیان سراسر جهان و خارجیان مقیم ایران هستیم.
            </p>

            <p className="mt-4 text-[15px] leading-8 text-[#66615b]">
              دانش، دقت و پایبندی به اصول حرفه‌ای، اساس فعالیت ماست.
            </p>
          </section>

          <div className="my-10 h-px bg-black/10" />
          <section className="mt-10">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
                تماس با ما
              </span>
            </div>
            <Link
              href="tel:09902190109"
              className="group flex items-center justify-between rounded-2xl bg-[#171717] p-5 text-white transition-all duration-300 hover:bg-primary"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                  <Phone className="h-5 w-5" />
                </div>

                <div>
                  <span className="mb-1 block text-[10px] text-white/50">
                    تماس مستقیم
                  </span>

                  <span className="text-lg font-medium tracking-wide">
                    {toPersianDigits("09112864596")}
                  </span>
                </div>
              </div>

              <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
            </Link>
          </section>

          <div className="mt-10 text-center">
            <p className="text-[10px] uppercase tracking-[0.3em] text-black/30">
              Professional • Confidential • Experienced
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}
