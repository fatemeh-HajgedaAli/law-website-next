const avatarColors = {
  blue: "bg-blue-100 text-blue-600",
  purple: "bg-purple-100 text-purple-600",
  green: "bg-emerald-100 text-emerald-600",
};

export default function TestimonialCard({ testimonial }) {
  return (
    <article className="group relative flex flex-col items-center text-center">
      {/* ================= Card ================= */}
      <div
        className="
          relative
          flex
          min-h-[420px]
          w-full
          max-w-[340px]
          flex-col
          items-center
          rounded-[2rem]
          border
          border-orange-200/70
          bg-white
          px-8
          pb-8
          pt-10
          shadow-lg
          shadow-slate-900/5
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-orange-300
          hover:shadow-2xl
          hover:shadow-orange-900/10
        "
      >
        {/* ================= Quote ================= */}
        <span
          className="
            pointer-events-none
            absolute
            right-7
            top-4
            font-serif
            text-6xl
            leading-none
            text-orange-400/20
          "
        >
          "
        </span>

        {/* ================= Avatar ================= */}
        <div className="relative mb-5">
          <div
            className={`
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-full
              border-4
              border-white
              shadow-xl
              ring-1
              ring-slate-100
              ${avatarColors[testimonial.avatarColor]}
            `}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-9 w-9">
              <path
                d="
                  M12 12
                  a5 5 0 1 0 0-10
                  5 5 0 0 0 0 10
                  Z
                  M12 14
                  c-5 0-9 2.5-9 6
                  v2h18v-2
                  c0-3.5-4-6-9-6Z
                "
              />
            </svg>
          </div>

          {/* Verified */}
          <span
            className="
              absolute
              bottom-0
              left-0
              flex
              h-6
              w-6
              items-center
              justify-center
              rounded-full
              border-2
              border-white
              bg-green-500
              text-xs
              font-bold
              text-white
              shadow-md
            "
          >
            ✓
          </span>
        </div>

        {/* ================= User Info ================= */}
        <div>
          <h3 className="text-base font-bold text-slate-900">
            {testimonial.name}
          </h3>

          <p className="mt-1 text-xs font-medium text-orange-500">
            {testimonial.position}
          </p>
        </div>

        {/* ================= Divider ================= */}
        <div
          className="
            my-6
            h-px
            w-16
            bg-gradient-to-r
            from-transparent
            via-orange-300
            to-transparent
          "
        />

        {/* ================= Comment ================= */}
        <p
          className="
            text-sm
            font-medium
            leading-8
            text-slate-600
            sm:text-base
          "
        >
          {testimonial.text}
        </p>

        {/* ================= Bottom Accent ================= */}
        <div
          className="
            absolute
            bottom-0
            left-1/2
            h-1
            w-20
            -translate-x-1/2
            rounded-full
            bg-gradient-to-r
            from-orange-400
            to-amber-400
            opacity-70
            transition-all
            duration-500
            group-hover:w-32
            group-hover:opacity-100
          "
        />
      </div>
    </article>
  );
}
