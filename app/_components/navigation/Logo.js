import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="font-display text-regular lg:text-heading-small  flex-1 flex justify-center lg:justify-start lg:order-first "
    >
      HERE & THERE
    </Link>
  );
}
