import { UserAppointmentTable } from "@/components/dataTable/UserAppointmentTable";
import Header from "@/components/Header";
import { auth } from "../../../auth";
import { getAppointment } from "@/actions/appointment";
import { DoctorAppointmentTable } from "@/components/dataTable/DoctorAppointmentTable";
import { AdminPanel } from "@/components/dataTable/AdminPanel";

export default async function Appointment(){
    const session = await auth()
    const {appointments} = await getAppointment(session.user.role == "doctor" ? 'doctor' : 'user', session.user._id)
    
    return(
        <div className="min-h-screen container mx-auto px-10">
            <Header/>
            {session.user.role == 'user' ?
            <UserAppointmentTable appointments={appointments}/>
            : session.user.role == 'doctor' ?
            <DoctorAppointmentTable appointments={appointments}/>
            : session.user.role == 'admin' ?
            <AdminPanel/> : ""
            }

        </div>
    )
}