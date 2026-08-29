import AboutStats from "./AboutStats";
import { LawPatterns } from "./LawPatterns";

export default function AboutContent() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}

      <div
        className="absolute inset-0 z-0
      opacity-80 pointer-events-none"
      >
        <LawPatterns />
      </div>

      <div className="relative z-10 space-y-8 ">
        <span className="text-xs font-semibold tracking-[3px] text-[#7D6744]">
          LEGAL SERVICES
        </span>

        <div className="space-y-4">
          <h2 className="text-4xl font-bold leading-tight text-[#20231D] lg:text-5xl">
            راهکارهای حقوقی
            <span className="text-[#B08B57]"> مطمئن</span>
            <br />
            برای آینده‌ای امن‌تر
          </h2>

          <p className="max-w-xl text-lg leading-9 text-gray-600">
            گروه وکلای رهیاب با بهره‌گیری از تجربه و دانش تخصصی وکلای دادگستری،
            خدمات حقوقی دقیق و حرفه‌ای را برای اشخاص و کسب‌وکارها ارائه می‌دهد.
          </p>

          <p className="max-w-xl text-lg leading-9 text-gray-600">
            هدف ما ارائه راهکارهایی شفاف، اصولی و نتیجه‌محور برای حل چالش‌های
            حقوقی شما و ایجاد آرامش در مسیر پرونده است.
          </p>
        </div>

        <AboutStats />
      </div>
    </div>
  );
}
