// CTACard.jsx

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function CTACard({
  subtitle,
  title,
  description,
  buttonText,
  href,
  image,
}) {
  return (
    <div
      className="
     group
     relative
     min-h-[480px]
     overflow-hidden
     bg-white
     transition-all
     duration-500
     hover:shadow-2xl
   "
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="
    object-cover

    opacity-0
    transition-all
    duration-700
    ease-out

    group-active:scale-105
    group-active:opacity-100

    md:group-hover:scale-105
    md:group-hover:opacity-100
  "
      />
      {/* Image Overlay */}
      <div
        className="
    absolute
    inset-0
    bg-black/50

    opacity-0
    transition-opacity
    duration-500

    group-active:opacity-100

    md:group-hover:opacity-100
  "
      />
      {/* Content */}
      <div
        className="
    relative
    z-10
    flex
    min-h-[480px]
    flex-col
    items-center
    justify-center
    px-6
    py-12
    text-center

    text-foreground

    transition-colors
    duration-500

    group-active:text-white

    sm:px-12

    md:group-hover:text-white
  "
      >
        {/* Subtitle */}
        <span
          className="
      mb-5
      text-xs
      font-semibold
      uppercase
      tracking-[0.25em]

      text-primary

      transition-colors
      duration-500

      group-active:text-white/80

      md:group-hover:text-white/80
    "
        >
          {subtitle}
        </span>

        {/* Title */}
        <h2
          className="
      max-w-md
      text-3xl
      font-semibold
      leading-tight

      transition-colors
      duration-500

      sm:text-4xl

      group-active:text-white

      md:group-hover:text-white
    "
        >
          {title}
        </h2>

        {/* Description */}
        <p
          className="
      mt-5
      max-w-lg
      text-sm
      leading-8
      text-gray-500

      transition-colors
      duration-500

      sm:text-base

      group-active:text-white/75

      md:group-hover:text-white/75
    "
        >
          {description}
        </p>

        {/* Button */}
        <Link
          href={href}
          className="
      group/button
      relative
      mt-8
      inline-flex
      items-center
      gap-3
      overflow-hidden

      border
      border-foreground
      bg-white

      px-7
      py-4

      text-sm
      font-medium
      text-foreground

      transition-all
      duration-300

      group-active:border-white
      group-active:bg-transparent
      group-active:text-white

      md:group-hover:border-white
      md:group-hover:bg-transparent
      md:group-hover:text-white

      before:absolute
      before:inset-0
      before:-translate-y-full
      before:bg-foreground
      before:transition-transform
      before:duration-500
      before:ease-out

      hover:text-white
      hover:before:translate-y-0

      sm:px-7
      sm:py-4
    "
        >
          <span className="relative z-10">{buttonText}</span>

          <ArrowLeft
            className="
        relative
        z-10
        h-4
        w-4
        transition-transform
        duration-300

        group-hover/button:-translate-x-1
      "
          />
        </Link>
      </div>
    </div>
  );
}
