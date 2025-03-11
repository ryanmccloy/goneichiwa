import MapIcon from "./MapIcon";
import MoneyIcon from "./MoneyIcon";
import PointIcon from "./PointIcon";

export default function AboutUsProcess() {
  return (
    <div className="flex flex-col gap-15 w-full md:w-fit lg:min-w-fit">
      <div className="process-point">
        <PointIcon />
        <div>Choose your destination & trip style</div>
      </div>
      <div className="process-point">
        <MoneyIcon />
        <div>2: Purchase & instantly download your itinerary</div>
      </div>
      <div className="process-point">
        <MapIcon />
        <div>3: Follow your plan and enjoy stress-free travel!</div>
      </div>
    </div>
  );
}
