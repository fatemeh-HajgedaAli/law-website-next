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

        <div className="space-y-5">
          <h2 className="text-3xl font-extrabold leading-[1.3] text-[#20231D] sm:text-4xl lg:text-5xl">
            تجربه، دقت و شجاعت
            <br />
            در دفاع از <span className="text-[#B08B57]">حقوق شما</span>
          </h2>

          <p className="max-w-xl text-base leading-8 text-gray-600 sm:text-lg sm:leading-9">
            دفتر وکالت{" "}
            <strong className="font-bold text-[#20231D]">وکیل نصیری</strong> با
            بهره‌گیری از دانش تخصصی، سابقه درخشان در پیگیری پرونده‌های پیچیده و
            شناخت دقیق رویه‌های قضایی، بستری امن برای حل چالش‌های حقوقی اشخاص و
            کسب‌وکارها فراهم کرده است.
          </p>

          <p className="max-w-xl text-base leading-8 text-gray-600 sm:text-lg sm:leading-9">
            باور ما بر این است که هر پرونده نیازمند یک استراتژی هوشمندانه است.
            ما با ارائه راهکارهایی شفاف، اصولی و نتیجه‌محور، با قاطعیت در تمام
            مراحل همراه شما هستیم.
          </p>
        </div>

        <AboutStats />
      </div>
    </div>
  );
}
