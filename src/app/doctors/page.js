import DoctorSection from "@/components/DoctorSection";
import Header from "@/components/Header";

export default function Doctors(){

    return(
      <div className="container mx-auto px-10">
        <Header/>
        <div className="mt-5">
        <DoctorSection/>
        </div>
      </div>
    )
}