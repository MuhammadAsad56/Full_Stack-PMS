import { ApplyDoctorForm } from "@/components/ApplyDoctorForm";
import { auth } from "../../../../auth";

export default async function ApplyAsDoctor(){
    const session = await auth()
    return(
        <div className="container mx-auto px-10 mt-10">
            <h1 className="font-bold text-2xl">Apply as a Doctor in our platform</h1>
            <p className="leading-relaxed">Apply as a Doctor in our platformApply as a Doctor in our platformApply as a Doctor in our platformApply as a Doctor in our platformApply as a Doctor in our platform</p>
            <ApplyDoctorForm session={session}/>
        </div>
    )
}