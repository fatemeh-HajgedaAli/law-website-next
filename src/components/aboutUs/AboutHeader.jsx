import { FaBalanceScale } from "react-icons/fa";

export default function AboutHeader() {
  return (
    <div className="max-w-2xl space-y-6">
      {/* Badge */}

      <div className="inline-flex items-center gap-3 rounded-full border border-[#D6C29B]/40 bg-[#F8F5EF] px-5 py-2 shadow-sm">
        <FaBalanceScale className="text-[#B08B57]" />

        <span className="text-xs font-semibold uppercase tracking-[4px] text-[#7D6744]">
          About Rahyab Vakil
        </span>
      </div>

      {/* Heading */}

      <h2 className="text-4xl font-bold leading-tight text-[#20231D] lg:text-6xl">
        همراه مطمئن شما
        <br />
        در
        <span className="mx-2 text-[#B08B57]">مسیر عدالت</span>
      </h2>

      {/* Paragraph */}

      <p className="max-w-xl text-lg leading-9 text-gray-600">
        ما با بهره‌گیری از تجربه، دانش حقوقی و تعهد حرفه‌ای، در کنار شما هستیم
        تا بهترین راهکارهای حقوقی را برای اشخاص و کسب‌وکارها ارائه دهیم.
      </p>
    </div>
  );
}
