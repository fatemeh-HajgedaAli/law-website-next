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

    // جلوگیری از ارسال چندباره
    if (isLoading) {
      return;
    }

    setIsLoading(true);
    setIsSuccess(false);
    setErrorMessage("");

    console.log("=================================");
    console.log("🚀 CONSULTATION SUBMIT");
    console.log("📦 Form Data:", formData);
    console.log("=================================");

    try {
      // =========================
      // API Request
      // =========================

      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      // =========================
      // Debug Response
      // =========================

      console.log("📡 API RESPONSE");
      console.log("Status:", response.status);
      console.log("Status Text:", response.statusText);
      console.log("Content-Type:", response.headers.get("content-type"));

      // =========================
      // Read Response Safely
      // =========================

      const responseText = await response.text();

      console.log("📄 Raw Response:");
      console.log(responseText);

      // =========================
      // Parse JSON Safely
      // =========================

      let result = {};

      if (responseText.trim()) {
        try {
          result = JSON.parse(responseText);
        } catch (parseError) {
          console.error("❌ JSON Parse Error:", parseError);

          throw new Error(
            `پاسخ سرور JSON معتبر نیست. Status: ${response.status}`,
          );
        }
      } else {
        console.error("❌ Empty Response Body");

        throw new Error(`سرور پاسخ خالی برگرداند. Status: ${response.status}`);
      }

      console.log("✅ Parsed API Result:", result);

      // =========================
      // Handle API Error
      // =========================

      if (!response.ok) {
        throw new Error(
          result?.message || result?.error || `خطای سرور (${response.status})`,
        );
      }

      // =========================
      // Success
      // =========================

      console.log("✅ Consultation submitted successfully");

      setIsSuccess(true);

      setFormData({
        name: "",
        phone: "",
        subject: "",
        consultationType: "",
        description: "",
      });
    } catch (error) {
      // =========================
      // Catch Error
      // =========================

      console.error("=================================");
      console.error("❌ CONSULTATION ERROR");
      console.error(error);
      console.error("=================================");

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
        h-screen
        min-h-[600px]
        overflow-hidden
        bg-[#F5F7FA]
        py-14
      "
    >
      {/* =========================
          Background
      ========================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-10
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#C9A15F]/10
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-10
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#243447]/10
          blur-[120px]
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
          h-full
          w-full
          max-w-[1400px]
          flex-col
          px-5
          py-4
          sm:px-8
          sm:py-5
          lg:px-10
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
              items-center
              gap-3
              rounded-full
              border
              border-[#D9DEE5]
              bg-white/80
              px-4
              py-2.5
              text-sm
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
            "
          >
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

            <span>بازگشت به صفحه اصلی</span>
          </button>
        </div>

        {/* =========================
            Main Area
        ========================== */}

        <div
          className="
            flex
            min-h-0
            flex-1
            items-center
            justify-center
            py-4
            sm:py-5
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
              "
            >
              <div
                className="
                  mb-2
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#C9A15F]/20
                  bg-[#C9A15F]/10
                  px-3
                  py-1.5
                  text-[11px]
                  font-bold
                  text-[#8F6D36]
                "
              >
                <CalendarCheck2 className="h-3.5 w-3.5" />
                درخواست مشاوره حقوقی
              </div>

              <p
                className="
                  mx-auto
                  mt-2
                  max-w-xl
                  text-xs
                  leading-6
                  text-[#69747E]
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
                max-w-5xl
                overflow-hidden
                rounded-[1.5rem]
                border
                border-[#DCE2E8]
                bg-white/90
                shadow-[0_25px_70px_-35px_rgba(30,45,60,0.35)]
                backdrop-blur-xl
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

                <div className="p-5 sm:p-7 lg:p-8">
                  <div className="mb-5">
                    <h3
                      className="
                        font-['Vazirmatn']
                        text-lg
                        font-black
                        text-[#202B34]
                      "
                    >
                      اطلاعات درخواست
                    </h3>

                    <p
                      className="
                        mt-1
                        text-[11px]
                        leading-5
                        text-[#89939B]
                      "
                    >
                      لطفاً اطلاعات را با دقت وارد کنید.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="grid gap-3.5 sm:grid-cols-2">
                      {/* Name */}

                      <div>
                        <label
                          htmlFor="name"
                          className="
                            mb-1.5
                            block
                            text-xs
                            font-bold
                            text-[#3C4852]
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
                            w-full
                            rounded-lg
                            border
                            border-[#DCE2E7]
                            bg-[#FAFBFC]
                            px-3.5
                            py-2.5
                            text-xs
                            text-[#26333D]
                            outline-none
                            transition
                            placeholder:text-[#AAB2B8]
                            focus:border-[#C9A15F]
                            focus:bg-white
                            focus:ring-4
                            focus:ring-[#C9A15F]/10
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
                            text-xs
                            font-bold
                            text-[#3C4852]
                          "
                        >
                          شماره تماس
                        </label>

                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          dir="ltr"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="09123456789"
                          required
                          className="
                            w-full
                            rounded-lg
                            border
                            border-[#DCE2E7]
                            bg-[#FAFBFC]
                            px-3.5
                            py-2.5
                            text-left
                            text-xs
                            text-[#26333D]
                            outline-none
                            transition
                            placeholder:text-[#AAB2B8]
                            focus:border-[#C9A15F]
                            focus:bg-white
                            focus:ring-4
                            focus:ring-[#C9A15F]/10
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
                            text-xs
                            font-bold
                            text-[#3C4852]
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
                            w-full
                            rounded-lg
                            border
                            border-[#DCE2E7]
                            bg-[#FAFBFC]
                            px-3.5
                            py-2.5
                            text-xs
                            text-[#26333D]
                            outline-none
                            transition
                            placeholder:text-[#AAB2B8]
                            focus:border-[#C9A15F]
                            focus:bg-white
                            focus:ring-4
                            focus:ring-[#C9A15F]/10
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
                            text-xs
                            font-bold
                            text-[#3C4852]
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
                            w-full
                            rounded-lg
                            border
                            border-[#DCE2E7]
                            bg-[#FAFBFC]
                            px-3.5
                            py-2.5
                            text-xs
                            text-[#26333D]
                            outline-none
                            transition
                            focus:border-[#C9A15F]
                            focus:bg-white
                            focus:ring-4
                            focus:ring-[#C9A15F]/10
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
                            text-xs
                            font-bold
                            text-[#3C4852]
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
                            w-full
                            resize-none
                            rounded-lg
                            border
                            border-[#DCE2E7]
                            bg-[#FAFBFC]
                            px-3.5
                            py-2.5
                            text-xs
                            leading-6
                            text-[#26333D]
                            outline-none
                            transition
                            placeholder:text-[#AAB2B8]
                            focus:border-[#C9A15F]
                            focus:bg-white
                            focus:ring-4
                            focus:ring-[#C9A15F]/10
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
                          text-xs
                          leading-6
                          text-red-600
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
                          text-xs
                          leading-6
                          text-emerald-700
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
                        px-4
                        py-2.5
                        font-['Vazirmatn']
                        text-xs
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
                        text-[10px]
                        text-[#9AA3AA]
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
