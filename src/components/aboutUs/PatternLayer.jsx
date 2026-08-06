// components/PatternLayer.jsx
import { PATTERNS } from "./constants/patterns";

export const PatternLayer = ({
  size,
  border = "20",
  opacity = "30",
  type = "dot",
  className = "",
}) => {
  const pattern = PATTERNS[type];

  return (
    <div
      className={`absolute rounded-full border-2 border-primary/${border} opacity-${opacity} ${className}`}
      style={{
        height: size,
        width: size,
        ...pattern,
      }}
    />
  );
};
