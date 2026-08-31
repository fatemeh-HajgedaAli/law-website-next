"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  LogOut,
  Users,
  Phone,
  FileText,
  MessageSquare,
  CalendarDays,
  RefreshCw,
  Scale,
  Trash2,
} from "lucide-react";

export default function AdminConsultations() {
  const router = useRouter();

  const [consultations, setConsultations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [logoutLoading, setLogoutLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(null);

  // =========================
  // Fetch Consultations
  // =========================

  useEffect(() => {
    async function getConsultations() {
      try {
        const response = await fetch("/api/admin/consultations", {
          cache: "no-store",
        });

        const data = await response.json();

        if (response.status === 401) {
          router.replace("/admin/login");
          return;
        }

        if (data.success) {
          setConsultations(data.consultations);
        }
      } catch (error) {
        console.error("Get Consultations Error:", error);
      } finally {
        setLoading(false);
      }
    }

    getConsultations();
  }, [router]);

  // =========================
  // Logout
  // =========================

  const handleLogout = async () => {
    try {
      setLogoutLoading(true);

      const response = await fetch("/api/admin/logout", {
        method: "POST",
      });

      const data = await response.json();

      if (data.success) {
        router.replace("/admin/login");
        router.refresh();
      }
    } catch (error) {
      console.error("Logout Error:", error);
    } finally {
      setLogoutLoading(false);
    }
  };

  // =========================
  // Delete Consultation
  // =========================

  const handleDelete = async (id) => {
    const confirmDelete = confirm("آیا از حذف این درخواست مطمئن هستید؟");

    if (!confirmDelete) return;

    try {
      const response = await fetch(`/api/admin/consultations?id=${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (data.success) {
        setConsultations((prev) => prev.filter((item) => item._id !== id));

        alert("درخواست حذف شد");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("DELETE ERROR:", error);
    }
  };

  // =========================
  // Consultation Type
  // =========================

  const getConsultationType = (type) => {
    switch (type) {
      case "phone":
        return "تلفنی";

      case "online":
        return "آنلاین";

      case "in-person":
        return "حضوری";

      default:
        return "نامشخص";
    }
  };

  // =========================
  // Loading
  // =========================

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-100">
        <p className="text-gray-500">در حال دریافت درخواست‌ها...</p>
      </main>
    );
  }

  return (
    <main
      dir="rtl"
      className="
      min-h-screen
      bg-[#F5F7FA]
      p-4
      sm:p-6
      lg:p-8
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}

        <header className="mb-8">
          <div
            className="
          flex
          flex-col
          gap-5
          sm:flex-row
          sm:items-center
          sm:justify-between
          "
          >
            <div
              className="
            flex
            items-center
            gap-4
            "
            >
              <div
                className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-[#17202A]
              text-[#D7B77A]
              "
              >
                <Scale className="h-6 w-6" />
              </div>

              <div>
                <h1
                  className="
                text-2xl
                font-black
                text-[#17202A]
                "
                >
                  پنل مدیریت
                </h1>

                <p className="text-sm text-gray-500">
                  مدیریت درخواست‌های مشاوره حقوقی
                </p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              disabled={logoutLoading}
              className="
            flex
            items-center
            gap-2
            rounded-xl
            bg-red-500
            px-5
            py-3
            text-sm
            font-bold
            text-white
            transition
            hover:bg-red-600
            disabled:opacity-50
            "
            >
              <LogOut className="h-4 w-4" />

              {logoutLoading ? "در حال خروج..." : "خروج"}
            </button>
          </div>
        </header>

        {/* Stats */}

        <section
          className="
        mb-8
        grid
        grid-cols-1
        gap-5
        sm:grid-cols-3
        "
        >
          <div
            className="
          rounded-2xl
          bg-white
          p-6
          shadow-sm
          "
          >
            <FileText className="mb-3 text-[#C9A15F]" />

            <p className="text-sm text-gray-500">کل درخواست‌ها</p>

            <p className="text-3xl font-black">{consultations.length}</p>
          </div>

          <div
            className="
          rounded-2xl
          bg-white
          p-6
          shadow-sm
          "
          >
            <Phone className="mb-3 text-blue-600" />

            <p className="text-sm text-gray-500">تلفنی</p>

            <p className="text-3xl font-black">
              {
                consultations.filter(
                  (item) => item.consultationType === "phone",
                ).length
              }
            </p>
          </div>

          <div
            className="
          rounded-2xl
          bg-white
          p-6
          shadow-sm
          "
          >
            <Users className="mb-3 text-green-600" />

            <p className="text-sm text-gray-500">حضوری</p>

            <p className="text-3xl font-black">
              {
                consultations.filter(
                  (item) => item.consultationType === "in-person",
                ).length
              }
            </p>
          </div>
        </section>

        {/* Table */}

        <section
          className="
        overflow-hidden
        rounded-2xl
        bg-white
        shadow-sm
        "
        >
          <div
            className="
          flex
          items-center
          justify-between
          border-b
          px-6
          py-5
          "
          >
            <h2
              className="
            flex
            items-center
            gap-2
            font-black
            "
            >
              <MessageSquare className="text-[#C9A15F]" />
              درخواست‌های مشاوره
            </h2>

            <span
              className="
            rounded-lg
            bg-gray-100
            px-3
            py-2
            text-xs
            "
            >
              {consultations.length} مورد
            </span>
          </div>

          {consultations.length === 0 ? (
            <div
              className="
            p-12
            text-center
            text-gray-500
            "
            >
              هنوز درخواستی ثبت نشده است.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table
                className="
          w-full
          min-w-[1100px]
          text-right
          "
              >
                <thead className="bg-gray-50">
                  <tr>
                    {[
                      "نام",
                      "شماره تماس",
                      "موضوع",
                      "نوع مشاوره",
                      "توضیحات",
                      "تاریخ",
                      "عملیات",
                    ].map((item) => (
                      <th
                        key={item}
                        className="px-6 py-4 text-xs font-bold text-gray-500"
                      >
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {consultations.map((consultation) => (
                    <tr
                      key={consultation._id}
                      className="
          border-b
          hover:bg-gray-50
          "
                    >
                      <td className="px-6 py-5 font-bold">
                        {consultation.name}
                      </td>

                      <td dir="ltr" className="px-6 py-5">
                        {consultation.phone}
                      </td>

                      <td className="px-6 py-5">{consultation.subject}</td>

                      <td className="px-6 py-5">
                        {getConsultationType(consultation.consultationType)}
                      </td>

                      <td className="max-w-xs px-6 py-5">
                        <p className="truncate">{consultation.description}</p>
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex gap-2">
                          <CalendarDays className="h-4 w-4 text-[#C9A15F]" />

                          {new Date(consultation.createdAt).toLocaleDateString(
                            "fa-IR",
                          )}
                        </div>
                      </td>

                      <td className="px-6 py-5">
                        <button
                          onClick={() => handleDelete(consultation._id)}
                          disabled={deleteLoading === consultation._id}
                          className="
          flex
          items-center
          gap-2
          rounded-xl
          bg-red-50
          px-3
          py-2
          text-xs
          font-bold
          text-red-500
          hover:bg-red-100
          disabled:opacity-50
          "
                        >
                          <Trash2 className="h-4 w-4" />

                          {deleteLoading === consultation._id
                            ? "حذف..."
                            : "حذف"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <footer className="mt-8 text-center text-xs text-gray-400">
          پنل مدیریت سامانه مشاوره حقوقی
        </footer>
      </div>
    </main>
  );
}
