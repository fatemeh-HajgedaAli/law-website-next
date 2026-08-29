"use client";

export default function ConsultationLoading() {
  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-[#101B2E]/70 backdrop-blur-md">
      {/* Background Blur */}
      <div className="absolute inset-0 bg-[#101B2E]/40 backdrop-blur-md" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Video */}
        <div className="relative h-32 w-32 overflow-hidden rounded-full border border-[#C9A15F]/60 bg-white/10 shadow-2xl">
          <video
            autoPlay
            muted
            playsInline
            preload="auto"
            loop
            className="h-full w-full object-cover"
          >
            <source src="/videos/logoVideo.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Text */}
        <p className="mt-6 text-sm tracking-[0.2em] text-white/70">
          در حال ارسال درخواست...
        </p>

        {/* Loading line */}
        <div className="mt-4 h-[2px] w-32 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 animate-[loading_1s_ease-in-out_infinite] bg-[#C9A15F]" />
        </div>
      </div>
    </div>
  );
}
