//DesktopSideModal
// icons
import { X, Phone, MapPin } from "lucide-react";
// utlis
import { toPersianDigits } from "@/utils/toPersianDigits";
// start
export default function DesktopSideModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  // jsx
  return (
    <div className="fixed inset-0 z-[100]">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white p-8 shadow-xl">
        {/* Close Button */}
        <div className="flex justify-end">
          <button type="button" onClick={onClose} aria-label="Close menu">
            <X className="h-7 w-7" />
          </button>
        </div>

        {/* About Us */}
        <div className="mt-10">
          <h2 className="mb-4 text-2xl font-bold"> درباره ما</h2>

          <p className="leading-7 text-gray-600">
            گروه وکلای رهیاب با همکاری جمعی از فارغ‌التحصیلان برتر حقوق و وکلای
            پایه یک دادگستری خانم و آقا، خدمات حقوقی تخصصی ارائه می‌دهد. ما با
            پذیرش وکالت و ارائه‌ی مشاوره، همراه ایرانیان سراسر جهان و خارجیان
            مقیم ایران هستیم. دانش، دقت و پایبندی به اصول حرفه‌ای، اساس کار
            ماست.
          </p>
        </div>

        {/* Contact Us */}
        <div className="mt-10">
          <h2 className="mb-5 text-2xl font-bold"> تماس با ما</h2>

          {/* Address */}
          <div className="mb-4 flex flex-col gap-3">
            <div className="flex flex-row gap-2 ">
              {" "}
              <MapPin className="mt-1 h-5 w-5 text-primary" />
              <p className="text-gray-600">تهران- پردیس فاز۴-خیابان فردوس</p>
            </div>

            <div className="flex flex-row gap-2">
              <MapPin className="mt-1 h-5 w-5 text-primary" />

              <p className="text-gray-600">
                مازندران- نکا- جنب بانک ملّی مرکزی
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-3">
            <Phone className="mt-1 h-5 w-5 text-primary" />

            <div className="text-gray-600">
              <p>{toPersianDigits("09902190109")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
