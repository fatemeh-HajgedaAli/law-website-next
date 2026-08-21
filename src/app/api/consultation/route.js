// اطلاعات فرم مشاوره را بگیرد، اعتبارسنجی اولیه کند و پاسخ مناسب برگرداند.

import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    const { name, phone, subject, consultationType, description } = body;

    // اعتبارسنجی
    if (!name || !phone || !subject || !consultationType || !description) {
      return NextResponse.json(
        {
          success: false,
          message: "لطفاً تمام فیلدها را کامل کنید.",
        },
        {
          status: 400,
        },
      );
    }

    // فعلاً اطلاعات را در کنسول می‌بینیم
    console.log("Consultation Request:", {
      name,
      phone,
      subject,
      consultationType,
      description,
    });

    return NextResponse.json(
      {
        success: true,
        message: "درخواست مشاوره با موفقیت ثبت شد.",
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error("Consultation API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "خطایی در ثبت درخواست مشاوره رخ داد.",
      },
      {
        status: 500,
      },
    );
  }
}
