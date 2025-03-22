import Button from "../ui/Button";
import ProductDestinationHeading from "../ui/ProductDestinationHeading";

export default function ProductDescription() {
  return (
    <div className="flex flex-col gap-30">
      <ProductDestinationHeading>Banff</ProductDestinationHeading>

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

      <ul>
        <span>
          <span className="icon-gap">📍</span>What&apos;s Included?
        </span>
        <li>
          <span className="icon-gap">✅</span>Day-by-Day Itinerary (Optimized
          routes to maximize your time)
        </li>
        <li>
          <span className="icon-gap">✅</span>
          Top Hikes & Scenic Spots (Lake Louise, Moraine Lake, Johnston Canyon &
          more)
        </li>
        <li>
          <span className="icon-gap">✅</span>Google Maps Links for every
          location
        </li>
        <li>
          <span className="icon-gap">✅</span>Local Hidden Gems & Wildlife Tips
        </li>
        <li>
          <span className="icon-gap">✅</span>Food & Drink Guide (Best local
          restaurants & cozy cafes)
        </li>
        <li>
          <span className="icon-gap">✅</span>Packing Checklist & Travel
          Essentials
        </li>
        <li>
          <span className="icon-gap">✅</span>Offline-Friendly PDF (Access
          anywhere, anytime!)
        </li>
        <li>
          <span className="icon-gap">✅</span>BONUS: Exclusive Banff sunrise &
          sunset photography guide!
        </li>
      </ul>

      <div className="flex justify-center mt-30 lg:justify-start">
        <Button>Add To Cart</Button>
      </div>
    </div>
  );
}
