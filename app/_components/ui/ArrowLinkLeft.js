import Link from "next/link";
import LeftArrow from "./icons/LeftArrow";

export default function ArrowLinkLeft({ children }) {
  return (
    <Link
      href="/catalogue"
      className={`flex gap-15 items-center cursor-pointer `}
    >
      <LeftArrow />
      <h4 className={`uppercase  text-regular  z-10 `}>{children}</h4>
    </Link>
  );
}
