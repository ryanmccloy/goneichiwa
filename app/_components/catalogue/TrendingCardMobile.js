import Link from "next/link";
import Image from "next/image";
import TravelGuideCardIcons from "./TravelGuideCardIcons";
import ComingSoonOverlay from "./ComingSoonOverlay";

export default function TrendingCardMobile({ guide }) {
  const item = {
    id: guide.id,
    title: guide.title,
    price: guide.price,
    image: guide.coverImageUrl,
    quantity: 1,
  };
  return (
    <div className="group min-w-[300px] rounded-global relative h-[450px] snap-start lg:hidden overflow-hidden">
      {/* Image and Link only */}
      <Link
        href={`/catalogue/${guide.id}`}
        className="absolute inset-0 z-10 rounded-global"
      >
        <Image
          src={guide.coverImageUrl}
          alt={guide.coverImageAlt}
          fill
          sizes="(max-width: 768px) 300px, 100vw"
          className="rounded-global object-cover"
        />

        {!guide.isActive && <ComingSoonOverlay />}
      </Link>

      {/* Title */}
      <div className="absolute top-15 left-15 z-20 bg-off-white rounded-global w-fit p-15 uppercase font-semibold">
        {guide.title}
      </div>

      {/* Cart Icons */}
      <div className="absolute bottom-15 right-15 z-20">
        <TravelGuideCardIcons item={item} isActive={guide.isActive} />
      </div>
    </div>
  );
}
