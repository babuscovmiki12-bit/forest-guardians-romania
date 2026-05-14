const LEAVES = Array.from({ length: 18 }, (_, i) => i);

export function Leaves() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {LEAVES.map((i) => {
        const left = (i * 53) % 100;
        const duration = 14 + ((i * 7) % 18);
        const delay = (i * 1.3) % 12;
        const size = 10 + ((i * 5) % 18);
        const hue = i % 3 === 0 ? 130 : i % 3 === 1 ? 90 : 60;
        return (
          <span
            key={i}
            className="absolute top-0 animate-fall"
            style={{
              left: `${left}%`,
              animationDuration: `${duration}s`,
              animationDelay: `-${delay}s`,
            }}
          >
            <svg
              width={size}
              height={size}
              viewBox="0 0 24 24"
              style={{
                filter: `drop-shadow(0 0 6px oklch(0.7 0.18 ${hue} / 0.6))`,
              }}
            >
              <path
                d="M12 2C7 6 4 10 4 14a8 8 0 0 0 16 0c0-4-3-8-8-12Z"
                fill={`oklch(0.7 0.18 ${hue} / 0.85)`}
              />
              <path
                d="M12 4v16"
                stroke="oklch(0.3 0.08 145 / 0.6)"
                strokeWidth="0.6"
                fill="none"
              />
            </svg>
          </span>
        );
      })}
    </div>
  );
}
