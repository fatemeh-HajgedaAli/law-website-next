"use client";

import { useState } from "react";
import Link from "next/link";

import { practiceAreas } from "./practiceData";

export default function PracticeAreas() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="relative mt-[20px] w-full py-2" id="practiceAreas">
      <div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 lg:grid-cols-5 lg:gap-0">
          {practiceAreas.map((item) => {
            const Icon = item.icon;
            const isActive = activeCard === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setActiveCard(isActive ? null : item.id)}
                className="group relative h-[380px] cursor-pointer overflow-hidden border border-gray-200 bg-white shadow-xl transition-all duration-300"
              >
                {/* Background Image */}
                <div
                  className={`
                    absolute
                    inset-0
                    scale-110
                    bg-cover
                    bg-center
                    opacity-0
                    transition-all
                    duration-700
                    group-hover:scale-100
                    group-hover:opacity-100
                    ${isActive ? "scale-100 opacity-100" : ""}
                  `}
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                />

                {/* Overlay */}
                <div
                  className={`
                    absolute
                    inset-0
                    bg-foreground/60
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:opacity-100
                    ${isActive ? "opacity-100" : ""}
                  `}
                />

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col items-center justify-center p-6 text-center">
                  {/* Icon */}
                  <div
                    className={`
                      mb-6
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      text-5xl
                      text-primary
                      transition-colors
                      duration-500
                      group-hover:text-white
                      ${isActive ? "text-white" : ""}
                    `}
                  >
                    <Icon />
                  </div>

                  {/* Title */}
                  <h4
                    className={`
                      mb-4
                      text-2xl
                      font-bold
                      text-gray-900
                      transition-colors
                      duration-500
                      group-hover:text-white
                      ${isActive ? "text-white" : ""}
                    `}
                  >
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p
                    className={`
                      mb-6
                      leading-7
                      text-gray-500
                      transition-colors
                      duration-500
                      group-hover:text-white
                      ${isActive ? "text-white" : ""}
                    `}
                  >
                    {item.description}
                  </p>

                  {/* Button */}
                  <Link
                    href={`/practiceArea/${item.slug}`}
                    onClick={(e) => e.stopPropagation()}
                    className={`
                      relative
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-full
                      border-2
                      border-gray-300
                      text-gray-700
                      transition-colors
                      duration-300
                      before:absolute
                      before:inset-0
                      before:-translate-y-full
                      before:bg-primary
                      before:transition-transform
                      before:duration-300
                      group-hover:border-primary
                      group-hover:text-white
                      group-hover:before:translate-y-0
                      ${isActive ? "border-primary text-white before:translate-y-0" : ""}
                    `}
                  >
                    <span className="relative z-10">→</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
