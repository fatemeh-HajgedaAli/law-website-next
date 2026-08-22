"use client";

import { useEffect, useState } from "react";

export default function AdminConsultations() {
  const [consultations, setConsultations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getConsultations() {
      try {
        const response = await fetch("/api/admin/consultations");

        const data = await response.json();

        if (data.success) {
          setConsultations(data.consultations);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getConsultations();
  }, []);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">در حال دریافت درخواست‌ها...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            درخواست‌های مشاوره
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            مدیریت درخواست‌های ارسال‌شده توسط مشتریان
          </p>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">تعداد درخواست‌ها</p>

            <p className="mt-2 text-3xl font-bold text-gray-900">
              {consultations.length}
            </p>
          </div>
        </div>

        {/* Consultations */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          {consultations.length === 0 ? (
            <div className="p-10 text-center">
              <p className="text-gray-500">
                هنوز درخواست مشاوره‌ای ثبت نشده است.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] text-right">
                <thead className="border-b bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold">نام</th>

                    <th className="px-6 py-4 text-sm font-semibold">
                      شماره تماس
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold">موضوع</th>

                    <th className="px-6 py-4 text-sm font-semibold">
                      نوع مشاوره
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold">توضیحات</th>

                    <th className="px-6 py-4 text-sm font-semibold">تاریخ</th>
                  </tr>
                </thead>

                <tbody>
                  {consultations.map((consultation) => (
                    <tr
                      key={consultation._id}
                      className="border-b last:border-0 hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {consultation.name}
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-600" dir="ltr">
                        {consultation.phone}
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-600">
                        {consultation.subject}
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-600">
                        {consultation.consultationType}
                      </td>

                      <td className="max-w-xs px-6 py-4 text-sm text-gray-600">
                        <p className="truncate">{consultation.description}</p>
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-600">
                        {new Date(consultation.createdAt).toLocaleDateString(
                          "fa-IR",
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
