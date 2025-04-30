export default function SkeletonTrendingCard({ desktop = false }) {
  if (!desktop) {
    // Mobile skeleton
    return (
      <div className="group min-w-[300px] rounded-global relative h-[450px] lg:hidden bg-gray-200 animate-pulse"></div>
    );
  } else {
    // Desktop skeleton
    return (
      <div className="hidden lg:flex flex-col justify-between p-15 relative rounded-global bg-gray-200 animate-pulse h-full w-full"></div>
    );
  }
}
