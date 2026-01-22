export default function BlogCardSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse rounded-lg border p-4 space-y-2"
        >
          <div className="h-3 w-20 bg-gray-200 rounded" />
          <div className="h-4 w-3/4 bg-gray-200 rounded" />
          <div className="h-3 w-full bg-gray-200 rounded" />
        </div>
      ))}
    </div>
  );
}
