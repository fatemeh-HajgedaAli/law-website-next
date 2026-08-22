import { NextResponse } from "next/server";
import { mongooseConnect } from "@/lib/mongodb";
import Consultation from "@/models/Consultation";

export async function POST(request) {
  try {
    // دریافت اطلاعات فرم
    const body = await request.json();

    const { name, phone, subject, consultationType, description } = body;

    // اعتبارسنجی اولیه
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

    // اتصال به MongoDB
    await mongooseConnect();

    // ذخیره درخواست مشاوره
    const consultation = await Consultation.create({
      name,
      phone,
      subject,
      consultationType,
      description,
    });

    console.log("SAVED TO MONGODB:", consultation);

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
