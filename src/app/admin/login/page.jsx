"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, HomeIcon } from "lucide-react";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

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

    if (data.success) {
      window.location.href = "/admin/consultations";
      return;
    }

    alert(data.message);
  };

  return (
    <main className="relative min-h-screen bg-gray-100 px-4 py-8 sm:px-6 lg:px-8">
      {/* برگشت به خانه */}
      <Link
        href="/"
        aria-label="بازگشت به خانه"
        className="
          absolute right-4 top-4
          flex h-11 w-11 items-center justify-center
          rounded-full bg-white
          text-gray-700 shadow-md
          transition-all duration-200
          hover:-translate-y-0.5
          hover:bg-gray-50
          hover:text-blue-600
          hover:shadow-lg
          sm:right-6 sm:top-6
        "
      >
        <HomeIcon size={21} />
      </Link>

      {/* Login Card */}
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg sm:p-8">
          <h1 className="mb-2 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
            ورود مدیر
          </h1>

          <p className="mb-6 text-center text-sm leading-6 text-gray-500">
            برای مشاهده درخواست‌های مشاوره وارد شوید.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                نام کاربری
              </label>

              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="
                  w-full rounded-xl
                  border border-gray-300
                  px-4 py-3
                  text-sm
                  outline-none
                  transition
                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-100
                "
                placeholder="نام کاربری"
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                رمز عبور
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="
                  w-full rounded-xl
                  border border-gray-300
                  px-4 py-3
                  text-sm
                  outline-none
                  transition
                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-100
                "
                placeholder="رمز عبور"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="
                w-full rounded-xl
                bg-blue-600
                py-3
                text-sm font-medium text-white
                transition-all duration-200
                hover:bg-blue-700
                active:scale-[0.98]
              "
            >
              ورود به پنل
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
