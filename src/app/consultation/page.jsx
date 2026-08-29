"use client";

import { useState } from "react";

export default function Consultation() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    consultationType: "",
    description: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      console.log(result);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Loading */}
      {isLoading && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-[#101B2E]/70 backdrop-blur-md">
          {/* Blur Overlay */}
          <div className="absolute inset-0 bg-[#101B2E]/40 backdrop-blur-md" />

          {/* Loading Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Video */}
            <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-[#C9A15F]/60 bg-white shadow-2xl">
              <video
                autoPlay
                muted
                playsInline
                loop
                preload="auto"
                className="h-full w-full object-cover"
              >
                <source src="/videos/logoVideo.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Text */}
            <p className="mt-6 text-sm tracking-[0.2em] text-white/80">
              در حال ارسال درخواست...
            </p>

            {/* Loading Line */}
            <div className="mt-4 h-[2px] w-32 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-1/2 animate-loading bg-[#C9A15F]" />
            </div>
          </div>
        </div>
      )}

      {/* Page */}
      <main className="min-h-screen bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          {/* Header */}
          <div className="mb-10 text-center">
            <h1 className="mb-4 text-3xl font-bold text-gray-900">
              دریافت مشاوره حقوقی
            </h1>

            <p className="text-gray-600">
              فرم زیر را تکمیل کنید تا کارشناسان ما در اولین فرصت با شما تماس
              بگیرند.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-white p-8 shadow-sm"
          >
            <div className="grid gap-6 md:grid-cols-2">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-700"
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
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-600"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  شماره تماس
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="09123456789"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-600"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-700"
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
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-600"
                />
              </div>

              {/* Consultation Type */}
              <div>
                <label
                  htmlFor="consultationType"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  نوع مشاوره
                </label>

                <select
                  id="consultationType"
                  name="consultationType"
                  value={formData.consultationType}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-blue-600"
                >
                  <option value="">انتخاب کنید</option>
                  <option value="phone">مشاوره تلفنی</option>
                  <option value="online">مشاوره آنلاین</option>
                  <option value="in-person">مشاوره حضوری</option>
                </select>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label
                  htmlFor="description"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  توضیحات پرونده
                </label>

                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="موضوع پرونده خود را به صورت خلاصه توضیح دهید..."
                  rows={6}
                  required
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-600"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="mt-8 w-full rounded-xl bg-blue-700 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isLoading ? "در حال ارسال..." : "ارسال درخواست مشاوره"}
            </button>
          </form>
        </div>
      </main>

      {/* Animation */}
      <style jsx global>{`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }

          100% {
            transform: translateX(300%);
          }
        }

        .animate-loading {
          animation: loading 1s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
