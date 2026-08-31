"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  HomeIcon,
  LockKeyhole,
  User,
  ShieldCheck,
  Scale,
  Loader2,
} from "lucide-react";

export default function AdminLogin() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setErrorMessage(data?.message || "نام کاربری یا رمز عبور اشتباه است.");
        return;
      }

      // ورود موفق
      router.replace("/admin/consultations");
      router.refresh();
    } catch (error) {
      console.error("Admin Login Error:", error);

      setErrorMessage("ارتباط با سرور برقرار نشد. لطفاً دوباره تلاش کنید.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main
      dir="rtl"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#0D141B]
        px-4
        py-8
        sm:px-6
      "
    >
      {/* =========================
          Background Effects
      ========================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#C9A15F]/15
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#31506A]/20
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[300px]
          w-[300px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#C9A15F]/5
          blur-[100px]
        "
      />

      {/* =========================
          Home Button
      ========================== */}

      <Link
        href="/"
        aria-label="بازگشت به خانه"
        className="
          group
          absolute
          right-5
          top-5
          z-20
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-white/[0.06]
          text-white/70
          shadow-lg
          backdrop-blur-xl
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-[#C9A15F]/40
          hover:bg-[#C9A15F]/10
          hover:text-[#D7B77A]
          sm:right-7
          sm:top-7
        "
      >
        <HomeIcon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
      </Link>

      {/* =========================
          Main Wrapper
      ========================== */}

      <div className="relative z-10 flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <div className="w-full max-w-[1050px]">
          <div
            className="
              overflow-hidden
              rounded-[2rem]
              border
              border-white/10
              bg-white/[0.04]
              shadow-[0_30px_100px_-30px_rgba(0,0,0,0.7)]
              backdrop-blur-2xl
              lg:grid
              lg:grid-cols-[0.9fr_1.1fr]
            "
          >
            {/* =========================
                Left Information
            ========================== */}

            <div
              className="
                relative
                hidden
                overflow-hidden
                bg-[#17202A]
                p-10
                text-white
                lg:flex
                lg:flex-col
                lg:justify-between
              "
            >
              {/* Decorative Circle */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-72
                  w-72
                  rounded-full
                  border
                  border-[#C9A15F]/10
                  bg-[#C9A15F]/5
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-32
                  -left-32
                  h-80
                  w-80
                  rounded-full
                  bg-[#C9A15F]/5
                  blur-3xl
                "
              />

              <div className="relative z-10">
                {/* Logo */}

                <div className="mb-10 flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-[#C9A15F]/30
                      bg-[#C9A15F]/10
                      text-[#D7B77A]
                    "
                  >
                    <Scale className="h-6 w-6" />
                  </div>

                  <div>
                    <p className="text-sm font-black">پنل مدیریت</p>

                    <p className="mt-0.5 text-[10px] tracking-wider text-white/40">
                      LEGAL ADMIN PANEL
                    </p>
                  </div>
                </div>

                {/* Heading */}

                <p className="mb-3 text-[10px] font-bold tracking-[0.25em] text-[#C9A15F]">
                  SECURE ACCESS
                </p>

                <h2
                  className="
                    text-3xl
                    font-black
                    leading-[1.8]
                    xl:text-4xl
                  "
                >
                  مدیریت
                  <span className="block text-[#D7B77A]">
                    درخواست‌های مشاوره
                  </span>
                </h2>

                <p className="mt-5 max-w-sm text-sm leading-8 text-white/50">
                  از طریق پنل مدیریت می‌توانید درخواست‌های مشاوره ثبت‌شده توسط
                  مراجعین را مشاهده و مدیریت کنید.
                </p>

                {/* Security Box */}

                <div
                  className="
                    mt-8
                    flex
                    items-start
                    gap-3
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-4
                  "
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#C9A15F]/10
                      text-[#D7B77A]
                    "
                  >
                    <ShieldCheck className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-bold">محیط امن مدیریت</p>

                    <p className="mt-1 text-[10px] leading-5 text-white/40">
                      اطلاعات این بخش فقط برای مدیر سیستم قابل دسترسی است.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom */}

              <div
                className="
                  relative
                  z-10
                  flex
                  items-center
                  gap-2
                  border-t
                  border-white/10
                  pt-5
                  text-[10px]
                  text-white/30
                "
              >
                <LockKeyhole className="h-3.5 w-3.5 text-[#C9A15F]" />
                دسترسی محافظت‌شده توسط سیستم احراز هویت
              </div>
            </div>

            {/* =========================
                Login Section
            ========================== */}

            <div className="bg-[#F8F9FB] p-6 sm:p-10 lg:p-12">
              <div className="mx-auto max-w-md">
                {/* Mobile Logo */}

                <div className="mb-8 flex items-center justify-center lg:hidden">
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#17202A]
                      text-[#D7B77A]
                      shadow-lg
                    "
                  >
                    <Scale className="h-7 w-7" />
                  </div>
                </div>

                {/* Header */}

                <div className="mb-8 text-center">
                  <div
                    className="
                      mx-auto
                      mb-4
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#17202A]
                      text-[#D7B77A]
                      shadow-md
                    "
                  >
                    <LockKeyhole className="h-5 w-5" />
                  </div>

                  <h1 className="text-2xl font-black text-[#17202A] sm:text-3xl">
                    ورود مدیر
                  </h1>

                  <p className="mt-2 text-xs leading-6 text-[#7B858D]">
                    برای دسترسی به پنل مدیریت وارد حساب کاربری شوید.
                  </p>
                </div>

                {/* Form */}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Username */}

                  <div>
                    <label
                      htmlFor="username"
                      className="
                        mb-2
                        block
                        text-xs
                        font-bold
                        text-[#37424C]
                      "
                    >
                      نام کاربری
                    </label>

                    <div className="relative">
                      <User
                        className="
                          pointer-events-none
                          absolute
                          right-4
                          top-1/2
                          h-4
                          w-4
                          -translate-y-1/2
                          text-[#9AA3AA]
                        "
                      />

                      <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => {
                          setUsername(e.target.value);
                          setErrorMessage("");
                        }}
                        placeholder="نام کاربری خود را وارد کنید"
                        autoComplete="username"
                        required
                        className="
                          w-full
                          rounded-xl
                          border
                          border-[#DCE1E6]
                          bg-white
                          py-3.5
                          pr-11
                          pl-4
                          text-sm
                          text-[#26333D]
                          outline-none
                          transition-all
                          duration-200
                          placeholder:text-[#B2B9BE]
                          focus:border-[#C9A15F]
                          focus:ring-4
                          focus:ring-[#C9A15F]/10
                        "
                      />
                    </div>
                  </div>

                  {/* Password */}

                  <div>
                    <label
                      htmlFor="password"
                      className="
                        mb-2
                        block
                        text-xs
                        font-bold
                        text-[#37424C]
                      "
                    >
                      رمز عبور
                    </label>

                    <div className="relative">
                      <LockKeyhole
                        className="
                          pointer-events-none
                          absolute
                          right-4
                          top-1/2
                          h-4
                          w-4
                          -translate-y-1/2
                          text-[#9AA3AA]
                        "
                      />

                      <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          setErrorMessage("");
                        }}
                        placeholder="رمز عبور خود را وارد کنید"
                        autoComplete="current-password"
                        required
                        className="
                          w-full
                          rounded-xl
                          border
                          border-[#DCE1E6]
                          bg-white
                          py-3.5
                          pr-11
                          pl-4
                          text-sm
                          text-[#26333D]
                          outline-none
                          transition-all
                          duration-200
                          placeholder:text-[#B2B9BE]
                          focus:border-[#C9A15F]
                          focus:ring-4
                          focus:ring-[#C9A15F]/10
                        "
                      />
                    </div>
                  </div>

                  {/* Error */}

                  {errorMessage && (
                    <div
                      role="alert"
                      className="
                        rounded-xl
                        border
                        border-red-200
                        bg-red-50
                        px-4
                        py-3
                        text-xs
                        leading-6
                        text-red-600
                      "
                    >
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit */}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="
                      group
                      flex
                      min-h-[52px]
                      w-full
                      items-center
                      justify-center
                      gap-3
                      rounded-xl
                      bg-[#17202A]
                      px-5
                      py-3
                      text-sm
                      font-black
                      text-white
                      shadow-[0_15px_35px_-15px_rgba(23,32,42,0.6)]
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-[#222F3A]
                      hover:shadow-[0_20px_40px_-15px_rgba(23,32,42,0.7)]
                      active:translate-y-0
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                      disabled:hover:translate-y-0
                    "
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        در حال ورود...
                      </>
                    ) : (
                      <>
                        ورود به پنل
                        <ArrowRight
                          className="
                            h-4
                            w-4
                            transition-transform
                            duration-300
                            group-hover:-translate-x-1
                          "
                        />
                      </>
                    )}
                  </button>
                </form>

                {/* Footer */}

                <div className="mt-7 text-center">
                  <div className="flex items-center justify-center gap-2 text-[10px] text-[#9AA3AA]">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#C9A15F]" />
                    اطلاعات ورود شما محرمانه و محافظت‌شده است.
                  </div>

                  <Link
                    href="/"
                    className="
                      mt-5
                      inline-flex
                      items-center
                      gap-2
                      text-xs
                      font-medium
                      text-[#69747E]
                      transition-colors
                      hover:text-[#B08B57]
                    "
                  >
                    <ArrowRight className="h-3.5 w-3.5" />
                    بازگشت به سایت
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
