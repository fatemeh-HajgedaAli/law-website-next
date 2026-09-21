import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
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

    const consultations = await prisma.consultation.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      consultations,
    });
  } catch (error) {
    console.error("GET CONSULTATIONS ERROR:", error);

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

    const consultationId = Number(id);

    if (!Number.isInteger(consultationId)) {
      return NextResponse.json(
        {
          success: false,
          message: "شناسه درخواست نامعتبر است",
        },
        {
          status: 400,
        },
      );
    }

    await prisma.consultation.delete({
      where: {
        id: consultationId,
      },
    });

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

    if (error?.code === "P2025") {
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
        success: false,
        message: "خطا در حذف درخواست",
      },
      {
        status: 500,
      },
    );
  }
}
