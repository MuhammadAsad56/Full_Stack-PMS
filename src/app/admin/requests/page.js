import { redirect } from "next/navigation"
import { auth } from "../../../../auth"
import { getRequest } from "@/actions/doctorRequest"

import DoctorRequests from "@/components/DoctorRequests";
export default async function AdminRequests() {
  const session = await auth()
  if (session?.user?.role != "admin") redirect('/')
  const {requests} = await getRequest()

  return (
    <div className="container mx-auto px-10 my-10">
      <h1 className="text-2xl font-bold">Doctor Requests</h1>
      <DoctorRequests requests={requests}/>
    </div >
  )
}