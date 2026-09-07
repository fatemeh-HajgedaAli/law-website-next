"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  ArrowRight,
  ArrowLeft,
  CalendarCheck2,
  Clock3,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function Consultation() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    consultationType: "",
    description: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // =========================
  // Handle Input Changes
  // =========================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (isSuccess) {
      setIsSuccess(false);
    }

    if (errorMessage) {
      setErrorMessage("");
    }
  };

  // =========================
  // Handle Submit
  // =========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLoading) {
      return;
    }

    setIsLoading(true);
    setIsSuccess(false);
    setErrorMessage("");

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseText = await response.text();

      let result = {};

      if (responseText.trim()) {
        try {
          result = JSON.parse(responseText);
        } catch (parseError) {
          console.error("JSON Parse Error:", parseError);

          throw new Error(
            `پاسخ سرور JSON معتبر نیست. Status: ${response.status}`,
          );
        }
      } else {
        throw new Error(`سرور پاسخ خالی برگرداند. Status: ${response.status}`);
      }

      if (!response.ok) {
        throw new Error(
          result?.message || result?.error || `خطای سرور (${response.status})`,
        );
      }

      console.log("Consultation submitted:", result);

      setIsSuccess(true);

      setFormData({
        name: "",
        phone: "",
        subject: "",
        consultationType: "",
        description: "",
      });
    } catch (error) {
      console.error("Consultation error:", error);

      setErrorMessage(
        error?.message || "خطایی رخ داد. لطفاً دوباره تلاش کنید.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  // =========================
  // Trust Items
  // =========================

  const trustItems = [
    {
      icon: Clock3,
      title: "پاسخگویی سریع",
      desc: "هماهنگی در کوتاه‌ترین زمان",
    },
    {
      icon: ShieldCheck,
      title: "مشاوره تخصصی",
      desc: "بررسی دقیق شرایط پرونده",
    },
  ];

  return (
    <main
      dir="rtl"
      className="
        relative
        min-h-screen
        overflow-x-hidden
        overflow-y-auto
        bg-[#F5F7FA]
        px-3
        py-5
        sm:px-5
        sm:py-8
        lg:px-8
        lg:py-12
      "
    >
      {/* =========================
          Background
      ========================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-0
          h-[260px]
          w-[260px]
          rounded-full
          bg-[#C9A15F]/10
          blur-[90px]
          sm:-right-40
          sm:top-10
          sm:h-[400px]
          sm:w-[400px]
          sm:blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-20
          -left-32
          h-[250px]
          w-[250px]
          rounded-full
          bg-[#243447]/10
          blur-[90px]
          sm:-left-40
          sm:bottom-10
          sm:h-[350px]
          sm:w-[350px]
          sm:blur-[120px]
        "
      />

      {/* =========================
          Page Wrapper
      ========================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-[1400px]
          flex-col
        "
      >
        {/* =========================
            Back Button
        ========================== */}

        <div className="shrink-0">
          <button
            type="button"
            onClick={() => router.push("/")}
            className="
              group
              inline-flex
              min-h-[42px]
              items-center
              gap-2
              rounded-full
              border
              border-[#D9DEE5]
              bg-white/80
              px-3.5
              py-2
              text-xs
              font-medium
              text-[#243447]
              shadow-sm
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-x-1
              hover:border-[#C9A15F]/50
              hover:bg-white
              hover:shadow-md
              sm:min-h-[44px]
              sm:gap-3
              sm:px-4
              sm:py-2.5
              sm:text-sm
            "
          >
            <ArrowRight
              className="
                h-3.5
                w-3.5
                transition-transform
                duration-300
                group-hover:translate-x-1
                sm:h-4
                sm:w-4
              "
            />

            <span>بازگشت به صفحه اصلی</span>
          </button>
        </div>

        {/* =========================
            Main Area
        ========================== */}

        <div
          className="
            flex
            w-full
            items-center
            justify-center
            py-5
            sm:py-7
            lg:py-10
          "
        >
          <div className="w-full">
            {/* =========================
                Header
            ========================== */}

            <div
              className="
                mx-auto
                mb-5
                max-w-2xl
                text-center
                sm:mb-6
                lg:mb-7
              "
            >
              {/* Badge */}

              <div
                className="
                  mb-2
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-full
                  border
                  border-[#C9A15F]/20
                  bg-[#C9A15F]/10
                  px-2.5
                  py-1.5
                  text-[10px]
                  font-bold
                  text-[#8F6D36]
                  sm:gap-2
                  sm:px-3
                  sm:text-[11px]
                "
              >
                <CalendarCheck2 className="h-3.5 w-3.5" />
                درخواست مشاوره حقوقی
              </div>

              {/* Description */}

              <p
                className="
                  mx-auto
                  mt-2
                  max-w-[330px]
                  text-[11px]
                  leading-6
                  text-[#69747E]
                  sm:max-w-xl
                  sm:text-sm
                "
              >
                اطلاعات خود را در فرم زیر وارد کنید تا کارشناسان ما پس از بررسی
                درخواست، در اولین فرصت برای هماهنگی مشاوره با شما تماس بگیرند.
              </p>
            </div>

            {/* =========================
                Main Card
            ========================== */}

            <div
              className="
                mx-auto
                w-full
                max-w-5xl
                overflow-hidden
                rounded-[1.25rem]
                border
                border-[#DCE2E8]
                bg-white/90
                shadow-[0_20px_60px_-30px_rgba(30,45,60,0.35)]
                backdrop-blur-xl
                sm:rounded-[1.5rem]
                sm:shadow-[0_25px_70px_-35px_rgba(30,45,60,0.35)]
              "
            >
              <div
                className="
                  grid
                  lg:grid-cols-[0.72fr_1.28fr]
                "
              >
                {/* =========================
                    Side Info
                ========================== */}

                <div
                  className="
                    relative
                    hidden
                    overflow-hidden
                    bg-[#17202A]
                    p-7
                    text-white
                    lg:block
                    lg:p-8
                  "
                >
                  {/* Decoration */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -left-24
                      -top-24
                      h-64
                      w-64
                      rounded-full
                      bg-[#C9A15F]/15
                      blur-[80px]
                    "
                  />

                  <div className="relative z-10">
                    <span
                      className="
                        font-['Space_Grotesk']
                        text-[9px]
                        tracking-[0.3em]
                        text-white/40
                      "
                    >
                      LEGAL CONSULTATION
                    </span>

                    <h2
                      className="
                        mt-4
                        font-['Vazirmatn']
                        text-xl
                        font-black
                        leading-[1.7]
                        xl:text-2xl
                      "
                    >
                      پرونده شما،
                      <span className="block text-[#D7B77A]">
                        نیازمند توجه تخصصی است.
                      </span>
                    </h2>

                    <p
                      className="
                        mt-4
                        text-xs
                        leading-7
                        text-white/60
                      "
                    >
                      با ارائه اطلاعات اولیه پرونده، امکان بررسی بهتر شرایط و
                      انتخاب مسیر مناسب برای دریافت مشاوره فراهم می‌شود.
                    </p>

                    {/* Trust Items */}

                    <div className="mt-6 space-y-3">
                      {trustItems.map((item) => {
                        const Icon = item.icon;

                        return (
                          <div
                            key={item.title}
                            className="
                              flex
                              items-center
                              gap-3
                              rounded-xl
                              border
                              border-white/10
                              bg-white/[0.04]
                              p-3
                            "
                          >
                            <span
                              className="
                                flex
                                h-10
                                w-10
                                shrink-0
                                items-center
                                justify-center
                                rounded-lg
                                bg-[#C9A15F]/10
                                text-[#D7B77A]
                              "
                            >
                              <Icon className="h-4.5 w-4.5" />
                            </span>

                            <div>
                              <p className="text-xs font-bold">{item.title}</p>

                              <p className="mt-1 text-[10px] text-white/40">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Bottom */}

                    <div
                      className="
                        mt-6
                        border-t
                        border-white/10
                        pt-5
                      "
                    >
                      <div
                        className="
                          flex
                          items-center
                          gap-2
                          text-[10px]
                          text-white/40
                        "
                      >
                        <Sparkles className="h-3.5 w-3.5 text-[#C9A15F]" />
                        اطلاعات شما با حفظ محرمانگی بررسی خواهد شد.
                      </div>
                    </div>
                  </div>
                </div>

                {/* =========================
                    Form
                ========================== */}

                <div
                  className="
                    p-4
                    sm:p-7
                    lg:p-8
                  "
                >
                  <div className="mb-5 sm:mb-6">
                    <h3
                      className="
                        font-['Vazirmatn']
                        text-base
                        font-black
                        text-[#202B34]
                        sm:text-lg
                      "
                    >
                      اطلاعات درخواست
                    </h3>

                    <p
                      className="
                        mt-1
                        text-[10px]
                        leading-5
                        text-[#89939B]
                        sm:text-[11px]
                      "
                    >
                      لطفاً اطلاعات را با دقت وارد کنید.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    {/* =========================
                        Fields
                    ========================== */}

                    <div
                      className="
                        grid
                        grid-cols-1
                        gap-3
                        sm:grid-cols-2
                        sm:gap-3.5
                      "
                    >
                      {/* Name */}

                      <div>
                        <label
                          htmlFor="name"
                          className="
                            mb-1.5
                            block
                            text-[11px]
                            font-bold
                            text-[#3C4852]
                            sm:text-xs
                          "
                        >
                          نام و نام خانوادگی
                        </label>

                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="نام و نام خانوادگی"
                          required
                          className="
                            min-h-[44px]
                            w-full
                            rounded-lg
                            border
                            border-[#DCE2E7]
                            bg-[#FAFBFC]
                            px-3.5
                            py-2.5
                            text-[11px]
                            text-[#26333D]
                            outline-none
                            transition
                            placeholder:text-[#AAB2B8]
                            focus:border-[#C9A15F]
                            focus:bg-white
                            focus:ring-4
                            focus:ring-[#C9A15F]/10
                            sm:min-h-[46px]
                            sm:text-xs
                          "
                        />
                      </div>

                      {/* Phone */}

                      <div>
                        <label
                          htmlFor="phone"
                          className="
                            mb-1.5
                            block
                            text-[11px]
                            font-bold
                            text-[#3C4852]
                            sm:text-xs
                          "
                        >
                          شماره تماس
                        </label>

                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          dir="ltr"
                          inputMode="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="09123456789"
                          required
                          className="
                            min-h-[44px]
                            w-full
                            rounded-lg
                            border
                            border-[#DCE2E7]
                            bg-[#FAFBFC]
                            px-3.5
                            py-2.5
                            text-left
                            text-[11px]
                            text-[#26333D]
                            outline-none
                            transition
                            placeholder:text-[#AAB2B8]
                            focus:border-[#C9A15F]
                            focus:bg-white
                            focus:ring-4
                            focus:ring-[#C9A15F]/10
                            sm:min-h-[46px]
                            sm:text-xs
                          "
                        />
                      </div>

                      {/* Subject */}

                      <div>
                        <label
                          htmlFor="subject"
                          className="
                            mb-1.5
                            block
                            text-[11px]
                            font-bold
                            text-[#3C4852]
                            sm:text-xs
                          "
                        >
                          موضوع پرونده
                        </label>

                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="مثلاً: پرونده ملکی"
                          required
                          className="
                            min-h-[44px]
                            w-full
                            rounded-lg
                            border
                            border-[#DCE2E7]
                            bg-[#FAFBFC]
                            px-3.5
                            py-2.5
                            text-[11px]
                            text-[#26333D]
                            outline-none
                            transition
                            placeholder:text-[#AAB2B8]
                            focus:border-[#C9A15F]
                            focus:bg-white
                            focus:ring-4
                            focus:ring-[#C9A15F]/10
                            sm:min-h-[46px]
                            sm:text-xs
                          "
                        />
                      </div>

                      {/* Consultation Type */}

                      <div>
                        <label
                          htmlFor="consultationType"
                          className="
                            mb-1.5
                            block
                            text-[11px]
                            font-bold
                            text-[#3C4852]
                            sm:text-xs
                          "
                        >
                          نوع مشاوره
                        </label>

                        <select
                          id="consultationType"
                          name="consultationType"
                          value={formData.consultationType}
                          onChange={handleChange}
                          required
                          className="
                            min-h-[44px]
                            w-full
                            rounded-lg
                            border
                            border-[#DCE2E7]
                            bg-[#FAFBFC]
                            px-3.5
                            py-2.5
                            text-[11px]
                            text-[#26333D]
                            outline-none
                            transition
                            focus:border-[#C9A15F]
                            focus:bg-white
                            focus:ring-4
                            focus:ring-[#C9A15F]/10
                            sm:min-h-[46px]
                            sm:text-xs
                          "
                        >
                          <option value="">انتخاب نوع مشاوره</option>

                          <option value="phone">مشاوره تلفنی</option>

                          <option value="online">مشاوره آنلاین</option>

                          <option value="in-person">مشاوره حضوری</option>
                        </select>
                      </div>

                      {/* Description */}

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="description"
                          className="
                            mb-1.5
                            block
                            text-[11px]
                            font-bold
                            text-[#3C4852]
                            sm:text-xs
                          "
                        >
                          توضیحات پرونده
                        </label>

                        <textarea
                          id="description"
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          placeholder="موضوع پرونده خود را به صورت خلاصه توضیح دهید..."
                          rows={4}
                          required
                          className="
                            min-h-[105px]
                            w-full
                            resize-none
                            rounded-lg
                            border
                            border-[#DCE2E7]
                            bg-[#FAFBFC]
                            px-3.5
                            py-2.5
                            text-[11px]
                            leading-6
                            text-[#26333D]
                            outline-none
                            transition
                            placeholder:text-[#AAB2B8]
                            focus:border-[#C9A15F]
                            focus:bg-white
                            focus:ring-4
                            focus:ring-[#C9A15F]/10
                            sm:min-h-[120px]
                            sm:text-xs
                          "
                        />
                      </div>
                    </div>

                    {/* =========================
                        Error
                    ========================== */}

                    {errorMessage && (
                      <div
                        role="alert"
                        className="
                          mt-3
                          rounded-lg
                          border
                          border-red-200
                          bg-red-50
                          px-3
                          py-2
                          text-[10px]
                          leading-6
                          text-red-600
                          sm:text-xs
                        "
                      >
                        {errorMessage}
                      </div>
                    )}

                    {/* =========================
                        Success
                    ========================== */}

                    {isSuccess && (
                      <div
                        role="status"
                        className="
                          mt-3
                          flex
                          items-start
                          gap-2
                          rounded-lg
                          border
                          border-emerald-200
                          bg-emerald-50
                          px-3
                          py-2
                          text-[10px]
                          leading-6
                          text-emerald-700
                          sm:text-xs
                        "
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />

                        <span>
                          درخواست شما با موفقیت ثبت شد. کارشناسان ما به‌زودی با
                          شما تماس خواهند گرفت.
                        </span>
                      </div>
                    )}

                    {/* =========================
                        Submit
                    ========================== */}

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="
                        group
                        mt-4
                        flex
                        min-h-[48px]
                        w-full
                        items-center
                        justify-between
                        rounded-lg
                        bg-[#17202A]
                        px-3.5
                        py-2.5
                        font-['Vazirmatn']
                        text-[11px]
                        font-black
                        text-white
                        shadow-[0_12px_30px_-12px_rgba(23,32,42,0.5)]
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:bg-[#222F3A]
                        hover:shadow-[0_16px_35px_-12px_rgba(23,32,42,0.55)]
                        disabled:cursor-not-allowed
                        disabled:opacity-60
                        disabled:hover:translate-y-0
                        sm:px-4
                        sm:text-xs
                      "
                    >
                      <span>
                        {isLoading
                          ? "در حال ارسال درخواست..."
                          : "ارسال درخواست مشاوره"}
                      </span>

                      <span
                        className="
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-md
                          border
                          border-[#C9A15F]/30
                          bg-[#C9A15F]/10
                        "
                      >
                        <ArrowLeft
                          className="
                            h-4
                            w-4
                            text-[#D7B77A]
                            transition-transform
                            duration-300
                            group-hover:-translate-x-1
                          "
                        />
                      </span>
                    </button>

                    <p
                      className="
                        mt-2
                        text-center
                        text-[9px]
                        text-[#9AA3AA]
                        sm:text-[10px]
                      "
                    >
                      تکمیل فرم کمتر از یک دقیقه زمان می‌برد.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
