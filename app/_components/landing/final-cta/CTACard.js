import Link from "next/link";
import CardHeadings from "../../ui/CardHeadings";
import RightArrow from "../bestsellers/RightArrow";
import Image from "next/image";

export default function CTACard({ title, url, href }) {
  return (
    <Link href={href} className="group flex flex-col gap-30 flex-1">
      <div className="flex gap-15 items-center">
        <CardHeadings>{title}</CardHeadings>
        <span className="group-hover:ml-3 transition-all duration-300">
          <RightArrow />
        </span>
      </div>
      <div className="relative h-[450px] w-full">
        <Image
          src={url}
          alt="Kyoto Pagoda"
          fill
          style={{
            objectFit: "cover",
          }}
          className="rounded-global"
          quality={100}
        />
      </div>
    </Link>
  );
}
