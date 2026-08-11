// HeaderContact.jsx

import Image from "next/image";
import { Phone, Mail } from "lucide-react";

import { toPersianDigits } from "@/utils/toPersianDigits";

export default function HeaderContact() {
  const phoneNumber = "099002190109";

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div
        className="mx-auto flex max-w-7xl items-center
       justify-between px-4"
      >
        {/* Contact Information */}
        <div>
          <ul className="flex items-center gap-4">
            {/* Phone */}
            <li className="flex items-center gap-3">
              <a
                href={`tel:${phoneNumber}`}
                aria-label="Call us"
                className="flex h-10 w-10 items-center 
                justify-center rounded-full bg-primary/10
                 text-primary transition-colors 
                 hover:bg-primary hover:text-white"
              >
                <Phone className="h-5 w-5" />
              </a>

              <div className="flex flex-col">
                <span className="text-xs font-light text-gray-500">
                  تعیین وقت
                </span>

                <a
                  href={`tel:${phoneNumber}`}
                  className="text-sm font-medium text-dark 
                  transition-colors hover:text-primary"
                >
                  {toPersianDigits(phoneNumber)}
                </a>
              </div>
            </li>

            {/* Email */}
            <li
              className="flex items-center gap-3 border-r 
            border-gray-300 pr-4"
            >
              <a
                href="mailto:support@gmail.com"
                aria-label="Send us an email"
                className="flex h-10 w-10 items-center 
                justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-white"
              >
                <Mail className="h-5 w-5" />
              </a>

              <div className="flex flex-col">
                <span className="text-xs font-light text-gray-500">ایمیل</span>

                <a
                  href="mailto:support@gmail.com"
                  className="text-sm font-medium text-dark transition-colors hover:text-primary"
                >
                  support@gmail.com
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* Brand Logo */}
        <div>
          <Image
            src="/logos/mainLogo.png"
            alt="Law Firm Logo"
            width={80}
            height={60}
            priority
          />
        </div>
      </div>
    </header>
  );
}
