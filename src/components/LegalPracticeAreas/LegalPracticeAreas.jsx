// main

import { services } from "./legalPracticeArea-data";
import LegalPracticeAreasBackground from "./LegalPracticeAreasBackground";
import LegalPracticeAreasHeader from "./LegalPracticeAreasHeader";
import LegalPracticeAreasImage from "./LegalPracticeAreasImage";
import LegalPracticeAreaItem from "./LegalPracticeAreaItem";

export default function LegalPracticeAreas() {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-[#f8f8f6] py-6 sm:py-10 lg:py-20"
      id="services"
    >
      <LegalPracticeAreasBackground />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <LegalPracticeAreasHeader />

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Image */}
          <LegalPracticeAreasImage />

          {/* Services */}
          <div className="lg:col-span-7 mt-[-10%] mr-2">
            <div className="flex flex-col gap-4">
              {services.map((service) => (
                <LegalPracticeAreaItem key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
