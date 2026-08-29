import CaseCard from "./CaseCard";

export default function CasesGrid({ cases }) {
  if (!cases.length) {
    return (
      <div
        className="
          rounded-3xl
          border border-[#20231D]/10
          bg-white
          px-5 py-16
          text-center
          md:px-6 md:py-20
        "
      >
        <p className="text-sm text-[#20231D]/50">
          پرونده‌ای با این مشخصات پیدا نشد.
        </p>
      </div>
    );
  }

  return (
    <div
      className="
        grid gap-4
        sm:gap-5
        md:grid-cols-2 md:gap-6
        xl:grid-cols-3
      "
    >
      {cases.map((item) => (
        <CaseCard key={item.id} item={item} />
      ))}
    </div>
  );
}
