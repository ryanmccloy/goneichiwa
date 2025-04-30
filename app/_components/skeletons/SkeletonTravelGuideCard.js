export default function SkeletonTravelGuideCard() {
  return (
    <div className="flex flex-col gap-15 animate-pulse">
      {/* Image Placeholder */}
      <div className="w-full h-[300px] bg-gray-200 rounded-global"></div>

      {/* Content Placeholder */}
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <div className="w-24 h-4 bg-gray-200 rounded"></div> {/* Title */}
          <div className="w-16 h-4 bg-gray-200 rounded"></div> {/* Price */}
        </div>

        {/* Icon Placeholder */}
        <div className="w-6 h-6 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}
