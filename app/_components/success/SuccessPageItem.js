import Image from "next/image";
import DownloadIcon from "../ui/icons/DownloadIcon";

function SuccessPageItem() {
  return (
    <li className="flex flex-col gap-15 items-start">
      <div className="relative h-[150px] w-full">
        <Image
          src="/images/bestsellers/canada.webp"
          alt="alt"
          fill
          className="object-cover rounded object-top"
        />
      </div>

      <div className="flex gap-30 justify-between">
        <p className="text-sm">Canada</p>

        <DownloadIcon />
      </div>
    </li>
  );
}

export default SuccessPageItem;
