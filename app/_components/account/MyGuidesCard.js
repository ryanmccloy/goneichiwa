import Image from "next/image";
import Link from "next/link";
import DownloadIcon from "../ui/icons/DownloadIcon";

function MyGuidesCard() {
  return (
    <Link href="/catalogue" className="flex flex-col gap-15">
      <div className="relative h-[225px]">
        <Image
          src="/images/guides/dolomites.webp"
          alt="image alt"
          fill
          className="object-cover rounded-global"
        />
      </div>
      <div className="flex justify-between flex-wrap">
        <span className="text-xs sm:text-sm uppercase">Dolomites</span>
        <DownloadIcon />
      </div>
    </Link>
  );
}

export default MyGuidesCard;
