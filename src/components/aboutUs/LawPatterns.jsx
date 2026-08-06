import { PatternLayer } from "./PatternLayer";

export const LawPatterns = () => {
  return (
    <>
      <div
        className="
        absolute
        h-[350px]
        w-[350px]
        rounded-full
        bg-primary/20
        blur-[90px]
        "
      />

      <PatternLayer size="450px" opacity={25} type="luxury" />

      <PatternLayer size="380px" opacity={20} type="grid" />

      <PatternLayer size="300px" opacity={15} type="line" />
    </>
  );
};
