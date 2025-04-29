import Link from "next/link";
import Image from "next/image";
import TravelGuideCardIcons from "./TravelGuideCardIcons";

function TrendingCardDesktop({ id, title, url, alt, sizes = "" }) {
  console.log(url, alt);
  return (
    <Link
      href={`/catalogue/${id}`}
      className="hidden group relative rounded-global lg:flex flex-col justify-between p-15"
    >
      <Image
        src={url}
        alt={alt}
        sizes={`${sizes === "" ? "(min-width: 1024px) 40vw, 100vw" : sizes} `}
        fill
        className="rounded-global object-cover"
      />

      <div className="z-30 bg-off-white rounded-global w-fit p-15 uppercase font-semibold ">
        {title}
      </div>

      <div className="self-end z-30">
        <TravelGuideCardIcons />
      </div>
    </Link>
  );
}

export default TrendingCardDesktop;
