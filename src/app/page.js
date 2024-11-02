import DoctorSection from "@/components/DoctorSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen container mx-auto px-10">
      <Header />
      <HeroSection />
      <DoctorSection isHome={true} />
    </div>
  );
}
