// components/LawPatterns.jsx
import { PatternLayer } from "./PatternLayer";

export const LawPatterns = () => {
  return (
    <>
      <PatternLayer size="450px" border="20" opacity="30" type="dot" />
      <PatternLayer size="500px" border="30" opacity="20" type="law" />
      <PatternLayer size="550px" border="20" opacity="10" type="line" />
      <div className="absolute h-[420px] w-[420px] rounded-full bg-primary/40 blur-3xl" />
    </>
  );
};
