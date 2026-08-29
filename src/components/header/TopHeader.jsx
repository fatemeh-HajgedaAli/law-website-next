import Link from "next/link";
import LoadingLink from "../loadingScreen/LoadingLink";

export default function TopHeader() {
  return (
    <header className="bg-brand-gray text-dark  ">
      <div
        className="container mx-auto flex flex-col 
      items-center justify-center gap-3 text-sm 
      lg:px-20 py-3 lg:flex-row"
      >
        {/* Legal consultation message */}
        <p className="font-light">
          نیاز به مشاوره حقوقی دارید؟ همین امروز با ما تماس بگیرید.
        </p>
        {/* Consultation CTA */}
        <LoadingLink
          href="/consultation"
          className="text-primary font-medium transition-colors hover:text-primary-dark underline"
        >
          دریافت مشاوره
        </LoadingLink>
      </div>
    </header>
  );
}
