import { NextResponse } from "next/server";

import { mongooseConnect } from "@/lib/mongodb";

import Consultation from "@/models/Consultation";

import { isAuthenticated } from "@/lib/auth";

// =========================
// GET ALL CONSULTATIONS
// =========================

export async function GET() {
  try {
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
      .sort({
        createdAt: -1,
      })
      .lean();

    return NextResponse.json({
      success: true,
      consultations,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "خطا در دریافت درخواست‌ها",
      },
      {
        status: 500,
      },
    );
  }
}

// =========================
// DELETE CONSULTATION
// =========================

export async function DELETE(request) {
  try {
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

    const { searchParams } = new URL(request.url);

    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: "شناسه درخواست ارسال نشده",
        },
        {
          status: 400,
        },
      );
    }

    await mongooseConnect();

    const deletedConsultation = await Consultation.findByIdAndDelete(id);

    if (!deletedConsultation) {
      return NextResponse.json(
        {
          success: false,
          message: "درخواست پیدا نشد",
        },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "درخواست با موفقیت حذف شد",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("DELETE CONSULTATION ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "خطا در حذف درخواست",
      },
      {
        status: 500,
      },
    );
  }
}
