import { NextResponse } from "next/server";

import { mongooseConnect } from "@/lib/mongodb";
import Consultation from "@/models/Consultation";
import { isAuthenticated } from "@/lib/auth";

// =========================
// GET - دریافت درخواست‌ها
// =========================

export async function GET() {
  try {
    // بررسی احراز هویت
    const authenticated = await isAuthenticated();

    if (!authenticated) {
      return NextResponse.json(
        {
          success: false,
          message: "دسترسی غیرمجاز",
        },
        {
          status: 401,
        },
      );
    }

    await mongooseConnect();

    const consultations = await Consultation.find()
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({
      success: true,
      consultations,
    });
  } catch (error) {
    console.error("Admin Consultations GET Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "خطا در دریافت درخواست‌های مشاوره",
      },
      {
        status: 500,
      },
    );
  }
}

// =========================
// DELETE - حذف درخواست
// =========================

export async function DELETE(request) {
  try {
    // بررسی احراز هویت
    const authenticated = await isAuthenticated();

    if (!authenticated) {
      return NextResponse.json(
        {
          success: false,
          message: "دسترسی غیرمجاز",
        },
        {
          status: 401,
        },
      );
    }

    // دریافت ID
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: "شناسه درخواست ارسال نشده است.",
        },
        {
          status: 400,
        },
      );
    }

    // اتصال به MongoDB
    await mongooseConnect();

    // حذف درخواست
    const deletedConsultation = await Consultation.findByIdAndDelete(id);

    // اگر درخواست پیدا نشد
    if (!deletedConsultation) {
      return NextResponse.json(
        {
          success: false,
          message: "درخواست موردنظر پیدا نشد.",
        },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json({
      success: true,
      message: "درخواست با موفقیت حذف شد.",
    });
  } catch (error) {
    console.error("Admin Consultations DELETE Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "خطا در حذف درخواست.",
      },
      {
        status: 500,
      },
    );
  }
}
