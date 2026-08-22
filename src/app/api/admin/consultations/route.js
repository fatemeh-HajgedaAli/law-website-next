import { NextResponse } from "next/server";

import { mongooseConnect } from "@/lib/mongodb";
import Consultation from "@/models/Consultation";

export async function GET() {
  try {
    await mongooseConnect();

    const consultations = await Consultation.find()
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({
      success: true,
      consultations,
    });
  } catch (error) {
    console.error("Admin Consultations API Error:", error);

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
