import { Skeleton } from "@/components/ui/skeleton";

export default function DoctorDetailSkeleton() {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="py-3">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {/* Image */}
          <Skeleton className="lg:w-1/2 w-full h-64 lg:h-[500px] rounded-lg" />

          {/* Details */}
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col">
            {/* Name */}
            <Skeleton className="h-9 w-3/4 mb-3" />

            {/* Specialization */}
            <Skeleton className="h-5 w-1/3 mb-6" />

            {/* Description */}
            <div className="space-y-2 mb-6">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-11/12" />
              <Skeleton className="h-4 w-5/6" />
            </div>

            {/* Details */}
            <div className="space-y-4">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between"
                >
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="h-5 w-24" />
                </div>
              ))}

              {/* Date Picker */}
              <div className="pt-3">
                <Skeleton className="h-5 w-40 mb-3" />
                <Skeleton className="h-10 w-full rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}