import { redirect } from "next/navigation"
import { auth } from "../../../../auth"
import { getRequest } from "@/actions/doctorRequest"

export default async function AdminRequests() {
    const session = await auth()
    if(session?.user?.role != "admin") redirect('/')

        const response = await getRequest()
        console.log("response in admin>>", response);
    return(
      <div className="container mx-auto px-10 my-10">
        <h1 className="text-2xl font-bold">Doctor Requests</h1>
      </div>
    )  
}