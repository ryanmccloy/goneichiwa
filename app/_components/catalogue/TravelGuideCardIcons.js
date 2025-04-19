import AddToCartIcon from "../ui/icons/AddToCartIcon";
import ArrowRightSimpleIcon from "../ui/icons/ArrowRightSimpleIcon";

export default function TravelGuideCardIcons({ destination, isActive }) {
  return (
    <div className="flex gap-15">
      <ArrowRightSimpleIcon route={destination} />
      <AddToCartIcon isActive={isActive} />
    </div>
  );
}
