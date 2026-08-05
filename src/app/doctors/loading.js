import Header from "@/components/Header";
import SkeletonCard from "@/components/skeletons/Skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto px-10">
      <Header />

      <div className="py-5 flex items-center justify-between">
        <div className="h-8 w-32 rounded bg-muted animate-pulse" />
        <div className="h-10 w-44 rounded bg-muted animate-pulse" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-5">
        {Array.from({ length: 6 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </div>
  );
}