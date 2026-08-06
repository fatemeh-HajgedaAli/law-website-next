// HeaderContact.jsx

import Image from "next/image";
import { Phone, Mail } from "lucide-react";

import mainLogo from "../../../public/logos/mainLogo.jpg";

import { toPersianDigits } from "@/utils/toPersianDigits";

export default function HeaderContact() {
  const phoneNumber = "099002190109";

  return (
    <header className=" w-full bg-gray-200/30 shadow-sm ">
      <div
        className="mx-auto flex h-20 w-full max-w-7xl items-center 
      justify-center px-4 sm:px-6 lg:justify-between lg:px-8"
      >
        {/* Contact Information */}
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-8 ">
            {/* Phone */}
            <li className="flex items-center gap-3">
              <a
                href={`tel:${phoneNumber}`}
                aria-label="Call us"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-white"
              >
                <Phone className="h-5 w-5" />
              </a>

              <div className="flex flex-col  ">
                <span className="text-xs font-light text-gray-500">
                  تعیین وقت
                </span>

                <a
                  href={`tel:${phoneNumber}`}
                  className="text-sm  font-medium text-dark transition-colors hover:text-primary"
                >
                  {toPersianDigits(phoneNumber)}
                </a>
              </div>
            </li>

            {/* Email */}
            <li className="flex items-center gap-3 border-r-1 border-gray-300 pr-4">
              <a
                href="mailto:support@gmail.com"
                aria-label="Send us an email"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-white"
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
            src={mainLogo}
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
