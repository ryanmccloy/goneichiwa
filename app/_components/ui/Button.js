import Link from "next/link";

export default function Button({ children, href, onClick }) {
  if (href) {
    return (
      <Link className="button" href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
