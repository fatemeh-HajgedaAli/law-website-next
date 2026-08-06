// components/AboutText.jsx
export const AboutText = () => {
  return (
    <div className="space-y-6">
      <span className="block text-sm font-semibold text-primary">
        درباره ما
      </span>

      <h2 className="text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
        همراه شما برای رسیدن به
        <span className="text-primary"> عدالت و راهکارهای حقوقی</span>
      </h2>

      <h6 className="text-xl font-semibold text-gray-800">
        بیش از ۲۵ سال تجربه در ارائه خدمات تخصصی حقوقی
      </h6>

      <p className="leading-8 text-gray-600">
        مجموعه حقوقی ما با بهره‌گیری از وکلای متخصص و باتجربه، آماده ارائه
        مشاوره و دفاع حرفه‌ای در پرونده‌های حقوقی، کیفری، خانواده و تجاری است.
        هدف ما ارائه راهکارهایی دقیق، شفاف و قابل اعتماد برای حفظ حقوق و منافع
        موکلانمان است.
      </p>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="text-4xl font-bold text-primary">315+</h3>
          <span className="text-gray-600">پرونده موفق</span>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-primary">952+</h3>
          <span className="text-gray-600">رضایت موکلان</span>
        </div>
      </div>

      <a
        href="/about"
        className="inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-3 font-semibold text-white transition hover:opacity-90"
      >
        بیشتر درباره ما →
      </a>
    </div>
  );
};
