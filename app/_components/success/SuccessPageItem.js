import Image from "next/image";
import DownloadIcon from "../ui/icons/DownloadIcon";

function SuccessPageItem({ title }) {
  return (
    <li className="flex flex-col gap-15 items-start w-[150px]">
      <div className="relative h-[150px] w-full">
        <Image
          src="/images/bestsellers/canada.webp"
          alt="alt"
          fill
          className="object-cover rounded object-top"
        />
      </div>

      <div className="flex gap-30 justify-between">
        <p className="text-sm text-start">{title} Travel Guide</p>

        <DownloadIcon />
      </div>
    </li>
  );
}

export default SuccessPageItem;
