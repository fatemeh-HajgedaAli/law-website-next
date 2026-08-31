// logIn
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    const { username, password } = body;

    // =========================
    // Validation
    // =========================

    if (!username || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "نام کاربری و رمز عبور را وارد کنید.",
        },
        {
          status: 400,
        },
      );
    }

    // =========================
    // Environment Variables
    // =========================

    const adminUsername = process.env.ADMIN_USERNAME;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminUsername || !adminPassword) {
      console.error("ADMIN_USERNAME or ADMIN_PASSWORD is not defined");

      return NextResponse.json(
        {
          success: false,
          message: "تنظیمات ورود مدیر انجام نشده است.",
        },
        {
          status: 500,
        },
      );
    }

    // =========================
    // Check Credentials
    // =========================

    if (username !== adminUsername || password !== adminPassword) {
      return NextResponse.json(
        {
          success: false,
          message: "نام کاربری یا رمز عبور اشتباه است.",
        },
        {
          status: 401,
        },
      );
    }

    // =========================
    // Create Session
    // =========================

    const response = NextResponse.json({
      success: true,
      message: "ورود موفق بود.",
    });

    response.cookies.set("admin_session", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 8,
    });

    return response;
  } catch (error) {
    console.error("Admin Login Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "خطایی در ورود رخ داد.",
      },
      {
        status: 500,
      },
    );
  }
}
