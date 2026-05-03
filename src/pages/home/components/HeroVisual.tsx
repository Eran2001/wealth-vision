const HeroVisual = () => (
  <div className="relative flex h-full w-full items-center justify-center">
    <svg
      viewBox="0 0 400 300"
      className="w-full max-w-3xl opacity-90"
      fill="none"
    >
      {/* Chart base */}
      <rect
        x="40"
        y="220"
        width="320"
        height="2"
        rx="1"
        fill="white"
        opacity="0.2"
      />
      {/* Bar chart */}
      <rect
        x="60"
        y="160"
        width="36"
        height="60"
        rx="4"
        fill="white"
        opacity="0.15"
      />
      <rect
        x="114"
        y="120"
        width="36"
        height="100"
        rx="4"
        fill="white"
        opacity="0.25"
      />
      <rect
        x="168"
        y="80"
        width="36"
        height="140"
        rx="4"
        fill="white"
        opacity="0.35"
      />
      <rect
        x="222"
        y="100"
        width="36"
        height="120"
        rx="4"
        fill="white"
        opacity="0.3"
      />
      <rect
        x="276"
        y="60"
        width="36"
        height="160"
        rx="4"
        fill="#60a5fa"
        opacity="0.7"
      />
      {/* Trend line */}
      <polyline
        points="78,155 132,115 186,75 240,95 294,55"
        stroke="#93c5fd"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      {/* Dots on line */}
      {[
        [78, 155],
        [132, 115],
        [186, 75],
        [240, 95],
        [294, 55],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="4" fill="white" opacity="0.9" />
      ))}
      {/* ESG badge */}
      <rect
        x="130"
        y="16"
        width="80"
        height="28"
        rx="14"
        fill="white"
        opacity="0.12"
      />
      <text
        x="170"
        y="34"
        textAnchor="middle"
        fill="white"
        fontSize="11"
        fontWeight="600"
        opacity="0.9"
      >
        ESG Score
      </text>
      {/* Decorative ring */}
      <circle
        cx="330"
        cy="40"
        r="28"
        stroke="white"
        strokeWidth="1.5"
        opacity="0.1"
      />
      <circle
        cx="330"
        cy="40"
        r="18"
        stroke="#60a5fa"
        strokeWidth="2"
        opacity="0.3"
      />
    </svg>
  </div>
);

export default HeroVisual;
