// logOut
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const response = NextResponse.json({
      success: true,
      message: "با موفقیت خارج شدید.",
    });

    // =========================
    // Delete Session Cookie
    // =========================

    response.cookies.set("admin_session", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      expires: new Date(0),
    });

    return response;
  } catch (error) {
    console.error("Admin Logout Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "خطایی در خروج رخ داد.",
      },
      {
        status: 500,
      },
    );
  }
}
