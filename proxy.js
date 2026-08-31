import { NextResponse } from "next/server";

export function proxy(request) {
  const { pathname } = request.nextUrl;

  // Cookie احراز هویت
  const session = request.cookies.get("admin_session")?.value;

  // =========================
  // محافظت از تمام /admin/*
  // =========================

  if (pathname.startsWith("/admin")) {
    // صفحه login آزاد است
    if (pathname === "/admin/login") {
      // اگر قبلاً لاگین کرده، دوباره صفحه login را نشان نده
      if (session === "authenticated") {
        return NextResponse.redirect(
          new URL("/admin/consultations", request.url),
        );
      }

      return NextResponse.next();
    }

    // تمام صفحات دیگر admin محافظت می‌شوند
    if (session !== "authenticated") {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return NextResponse.next();
}

// =========================
// Proxy Matcher
// =========================

export const config = {
  matcher: ["/admin/:path*"],
};
