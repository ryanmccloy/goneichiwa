import Link from "next/link";

export default function Button({
  children,
  href,
  onClick,
  isActive = true,
  textSize = "medium",
}) {
  if (href) {
    return (
      <Link
        className={`button ${
          textSize !== "medium" ? "text-reular" : "text-medium"
        }`}
        href={href}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      disabled={!isActive}
      className={`button ${
        textSize !== "medium" ? "text-reular" : "text-medium"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
