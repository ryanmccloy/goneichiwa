export default function RightArrow({ color = "black", size = "normal" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke={color === "black" ? "#333333" : "#fdfdfd"}
      className={`${size === "normal" ? "size-7" : "size-9"} z-30`}
      role="img"
      aria-label="right arrow"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}
