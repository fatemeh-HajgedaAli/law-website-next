import Image from "next/image";

import { Phone, Mail } from "lucide-react";

import { toPersianDigits } from "@/utils/toPersianDigits";

export default function HeaderContact() {
  const phoneNumber = "099002190109";

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-3
          py-2
          sm:px-4
          sm:py-3
        "
      >
        {/* Contact Information */}
        <div>
          <ul className="flex items-center gap-2 sm:gap-4">
            {/* Phone */}
            <li className="flex items-center gap-2 sm:gap-3">
              <a
                href={`tel:${phoneNumber}`}
                aria-label="Call us"
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-primary/10
                  text-primary
                  transition-colors
                  hover:bg-primary
                  hover:text-white
                  sm:h-10
                  sm:w-10
                "
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>

              <div className="hidden flex-col sm:flex">
                <span className="text-xs font-light text-gray-500">
                  تعیین وقت
                </span>

                <a
                  href={`tel:${phoneNumber}`}
                  className="
                    text-sm
                    font-medium
                    text-dark
                    transition-colors
                    hover:text-primary
                  "
                >
                  {toPersianDigits(phoneNumber)}
                </a>
              </div>
            </li>

            {/* Email */}
            <li
              className="
                flex
                items-center
                gap-2
                border-r
                border-gray-300
                pr-2
                sm:gap-3
                sm:pr-4
              "
            >
              <a
                href="mailto:support@gmail.com"
                aria-label="Send us an email"
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-primary/10
                  text-primary
                  transition-colors
                  hover:bg-primary
                  hover:text-white
                  sm:h-10
                  sm:w-10
                "
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>

              <div className="hidden flex-col sm:flex">
                <span className="text-xs font-light text-gray-500">ایمیل</span>

                <a
                  href="mailto:support@gmail.com"
                  className="
                    text-sm
                    font-medium
                    text-dark
                    transition-colors
                    hover:text-primary
                  "
                >
                  support@gmail.com
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* Brand Logo */}
        <div className="shrink-0">
          <Image
            src="/logos/mainLogo.png"
            alt="Law Firm Logo"
            width={80}
            height={60}
            priority
            className="h-auto w-[55px] sm:w-[70px] lg:w-[80px]"
          />
        </div>
      </div>
    </header>
  );
}
