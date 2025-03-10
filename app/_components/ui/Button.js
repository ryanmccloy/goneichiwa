import Link from "next/link";

export default function Button({ children, href }) {
  return (
    <Link className="button" href={href}>
      {children}
    </Link>
  );
}
