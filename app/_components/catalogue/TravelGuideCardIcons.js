import dynamic from "next/dynamic";

const AddToCartIcon = dynamic(() => import("../ui/icons/AddToCartIcon"));
const ArrowRightSimpleIcon = dynamic(() =>
  import("../ui/icons/ArrowRightSimpleIcon")
);

export default function TravelGuideCardIcons({ item, isActive }) {
  if (!item) return null;

  return (
    <div className="flex gap-15">
      <ArrowRightSimpleIcon id={item.id} destination={item.title} />
      <AddToCartIcon isActive={isActive} item={item} />
    </div>
  );
}
