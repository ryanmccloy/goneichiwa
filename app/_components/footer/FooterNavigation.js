import Link from "next/link";
import Logo from "../navigation/Logo";

export default function FooterNavigation() {
  return (
    <div className="flex flex-col gap-30 items-start">
      <div className="w-[100px] md:w-[150px]">
        <Logo footer={true} />
      </div>
      <ul className="flex flex-col gap-15" aria-label="Footer navigation">
        <li>
          <Link href="/">Home</Link>
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
