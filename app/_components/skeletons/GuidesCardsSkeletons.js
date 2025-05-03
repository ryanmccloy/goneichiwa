export default function GuidesCardsSkeleton() {
  return (
    <div className="flex gap-15 overflow-x-auto pb-30">
      {Array.from({ length: 4 }).map((_, idx) => (
        <div
          key={idx}
          className="min-w-[300px] h-[450px] rounded-global bg-neutral-200 animate-pulse"
        />
      ))}
    </div>
  );
}
