"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLeaving(true);

      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 700);

      return () => clearTimeout(hideTimer);
    }, 9300);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`
        fixed inset-0 z-[999999]
        flex items-center justify-center
        overflow-hidden
        bg-[#101B2E]
        transition-opacity duration-700
        ${isLeaving ? "opacity-0" : "opacity-100"}
      `}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#101B2E]" />

      {/* Pattern */}
      <div
        className="
          absolute inset-0
          opacity-[0.08]
          [background-image:linear-gradient(45deg,#C9A15F_1px,transparent_1px),linear-gradient(-45deg,#C9A15F_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Video */}
        <div
          className="
            relative
            h-48 w-48
            overflow-hidden
            rounded-full
            border-2 border-[#C9A15F]/60
            bg-white
            shadow-2xl
          "
        >
          <video
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
            className="h-full w-full object-cover"
          >
            <source src="/videos/logoVideo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
