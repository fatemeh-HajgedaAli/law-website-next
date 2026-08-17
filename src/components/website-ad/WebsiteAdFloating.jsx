"use client";

import { useState } from "react";
import WebsiteAdCard from "./WebsiteAdCard";
import WebsiteAdTrigger from "./WebsiteAdTrigger";

export default function WebsiteAdFloating() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div dir="rtl" className="fixed bottom-10 right-5 z-[9999] font-sans">
      {isOpen && <WebsiteAdCard onClose={() => setIsOpen(false)} />}

      <WebsiteAdTrigger onClick={() => setIsOpen((prev) => !prev)} />
    </div>
  );
}
