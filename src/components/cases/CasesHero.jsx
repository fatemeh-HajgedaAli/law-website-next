export default function CasesHero() {
  return (
    <header className="mb-10 max-w-3xl md:mb-14">
      <div className="mb-4 flex items-center gap-3 md:mb-5">
        <span className="h-px w-8 bg-[#B08B57] md:w-10 mr-[20%] lg:mr-[3%]" />

        <span
          className="
            text-[10px]
            font-semibold
            tracking-[0.15em]
            text-[#B08B57]
            md:text-xs md:tracking-[0.2em]
          "
        >
          پرونده‌های ما
        </span>
      </div>

      <h1
        className="
          mb-5
          text-3xl font-bold
          leading-[1.4]
          text-[#20231D]
          sm:text-4xl
          md:mb-6 md:text-6xl md:leading-tight
        "
      >
        تجربه‌ای که
        <br />
        <span className="text-[#B08B57]">نتیجه می‌سازد.</span>
      </h1>

      <p
        className="
          max-w-2xl
          text-sm
          leading-7
          text-[#20231D]/60
          md:text-base md:leading-8
        "
      >
        مجموعه‌ای از پرونده‌های حقوقی و کیفری که با رویکردی تخصصی، دقیق و
        متعهدانه پیگیری شده‌اند.
      </p>
    </header>
  );
}
