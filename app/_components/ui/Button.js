import Link from "next/link";

export default function Button({ children, href, onClick, isActive = "true" }) {
  if (href) {
    return (
      <Link className="button" href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={!isActive} className="button" onClick={onClick}>
      {children}
    </button>
  );
}
