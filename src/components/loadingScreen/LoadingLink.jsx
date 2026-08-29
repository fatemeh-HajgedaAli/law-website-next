"use client";

import Link from "next/link";
import { useState } from "react";
import PageLoading from "@/components/loadingScreen/PageLoading";

export default function LoadingLink({ href, children, className }) {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && <PageLoading />}

      <Link href={href} onClick={() => setLoading(true)} className={className}>
        {children}
      </Link>
    </>
  );
}
