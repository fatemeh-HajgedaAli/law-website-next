"use client";

import { usePathname } from "next/navigation";

import Header from "@/components/header/Header";
import WebsiteAdFloating from "@/components/website-ad/WebsiteAdFloating";

export default function ConditionalHeader() {
  const pathname = usePathname();

  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return null;
  }

  return (
    <>
      <Header />
      <WebsiteAdFloating />
    </>
  );
}
