"use client";

export default function PageLoading() {
  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-[#101B2E]/70 backdrop-blur-md">
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-[#C9A15F]/60 bg-white shadow-2xl">
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

        <p className="mt-6 text-sm tracking-[0.2em] text-white/80">
          در حال بارگذاری...
        </p>
      </div>
    </div>
  );
}
