import DoctorDetailSkeleton from "@/components/skeletons/DoctorDetailSkeleton";
import Header from "@/components/Header";

export default function Loading() {
  return (
    <div className="container mx-auto px-10">
      <Header />
      <DoctorDetailSkeleton />
    </div>
  );
}