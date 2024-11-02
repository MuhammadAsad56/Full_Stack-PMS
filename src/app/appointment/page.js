import { AppointmentTable } from "@/components/dataTable/AppointmentTable";
import Header from "@/components/Header";

export default function Appointment(){
    return(
        <div className="min-h-screen container mx-auto px-10">
            <Header/>
            <AppointmentTable/>

        </div>
    )
}