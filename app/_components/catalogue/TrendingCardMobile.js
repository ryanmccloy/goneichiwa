import Link from "next/link";
import Image from "next/image";
import TravelGuideCardIcons from "./TravelGuideCardIcons";

export default function TrendingCardMobile({ id, title, url, alt }) {
  return (
    <Link
      href={`/catalogue/${id}`}
      className="group min-w-[300px] rounded-global relative h-[450px] snap-start lg:hidden"
    >
      <Image
        src={url}
        alt={alt}
        fill
        sizes="(max-width: 768px) 300px, 100vw"
        className="rounded-global object-cover"
      />

      <div className=" flex flex-col justify-between h-full p-15">
        <div className=" bg-off-white rounded-global w-fit p-15 uppercase font-semibold z-30">
          {title}
        </div>

        <div className="self-end z-30">
          <TravelGuideCardIcons />
        </div>
      </div>
    </Link>
  );
}
