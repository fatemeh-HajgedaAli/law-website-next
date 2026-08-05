import Link from "next/link";

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
        <Link
          href="/cta"
          className="text-primary font-medium transition-colors hover:text-primary-dark underline"
        >
          دریافت مشاوره
        </Link>
      </div>
    </header>
  );
}
