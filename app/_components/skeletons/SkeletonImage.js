export default function ImageSkeleton({ isLoaded }) {
  return (
    <div
      className={`absolute inset-0 bg-gray-200 animate-pulse rounded-global transition-opacity duration-500  ${
        isLoaded ? "opacity-0" : "opacity-100"
      }`}
    />
  );
}
