import AddToCartIcon from "../ui/icons/AddToCartIcon";
import ArrowRightSimpleIcon from "../ui/icons/ArrowRightSimpleIcon";

export default function TravelGuideCardIcons({ item, isActive }) {
  if (!item) return null;

  return (
    <div className="flex gap-15">
      <ArrowRightSimpleIcon id={item.id} destination={item.title} />
      <AddToCartIcon isActive={isActive} item={item} />
    </div>
  );
}
