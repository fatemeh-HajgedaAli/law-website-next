import { PATTERNS } from "./constants/patterns";

export const PatternLayer = ({ size, opacity, type }) => {
  return (
    <div
      className="
      absolute
      rounded-full
      border
      border-primary/30
      "
      style={{
        height: size,

        width: size,

        opacity: opacity / 100,

        ...PATTERNS[type],
      }}
    />
  );
};
