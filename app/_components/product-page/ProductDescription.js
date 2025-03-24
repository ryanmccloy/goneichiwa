import Button from "../ui/Button";
import TickIcon from "../ui/icons/TickIcon";
import ProductDestinationHeading from "../ui/ProductDestinationHeading";

export default function ProductDescription({ destination }) {
  const included = [
    " Day-by-Day Itinerary (Optimized routes to maximize your time)",
    " Top Hikes & Scenic Spots",

    "Google Maps Links for every location",

    "Local Hidden Gems & Wildlife Tips",
    "Food & Drink destination (Best local restaurants & cozy cafes)",

    "Packing Checklist & Travel Essentials",
    "Offline-Friendly PDF (Access anywhere, anytime!)",

    "BONUS: Exclusive Banff sunrise & sunset photography guide!",
  ];
  return (
    <div className="flex flex-col gap-30">
      <ProductDestinationHeading>{destination}</ProductDestinationHeading>

      <div className="flex flex-col gap-15">
        <p>
          Discover the breathtaking landscapes of Banff National Park with this
          expertly crafted 5-day itinerary. From crystal-clear lakes and epic
          hiking trails to hidden hot springs and wildlife spotting, this guide
          ensures you experience the best of the Canadian Rockies—stress-free!
          Perfect for:{" "}
        </p>

        <ul className="list-disc list-inside">
          <li>Outdoor lovers</li>
          <li>Photographers</li>
          <li>Solo travellers</li>
          <li>Couples & adventure seekers.</li>
        </ul>
      </div>

      <div>
        <p>
          <span className="font-medium">Destination: </span>Banff National Park,
          Canada
        </p>
        <p>
          <span className="font-medium">Format: </span>Instant PDF download
        </p>
      </div>

      <ul className="">
        <span>
          <span className="icon-gap">📍</span>What&apos;s Included?
        </span>

        {included.map((feature, index) => {
          return (
            <li key={index} className="flex items-center gap-[5px] mt-2">
              <TickIcon />
              <span>{feature}</span>
            </li>
          );
        })}
      </ul>

      <div className="flex justify-center mt-30 lg:justify-start">
        <Button>Add To Cart</Button>
      </div>
    </div>
  );
}
