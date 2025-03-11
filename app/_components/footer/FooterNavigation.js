import Link from "next/link";
import Logo from "../navigation/Logo";

export default function FooterNavigation() {
  return (
    <div className="flex flex-col gap-regular items-start">
      <Logo />
      <ul className="flex flex-col gap-small" aria-label="Footer navigation">
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/catalogue">Catalogue</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/consultations">Consultations</Link>
        </li>
      </ul>
    </div>
  );
}
