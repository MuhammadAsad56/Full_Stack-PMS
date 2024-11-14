import { redirect } from "next/navigation"
import { auth } from "../../../../auth"
import { getRequest } from "@/actions/doctorRequest"

import DoctorRequests from "@/components/DoctorRequests";
export default async function AdminRequests({ searchParams }) {
  const {status} = searchParams
  const session = await auth()
  if (session?.user?.role != "admin") redirect('/')
  const response = await getRequest(status)
const requests = response.requests
// console.log('requests',response?.requests)
  return (
    requests ? 
      <div className="container mx-auto px-10 my-10">
      <h1 className="text-2xl font-bold">Doctor Requests</h1>
      <DoctorRequests requests={response?.requests}/>
    </div >:<p>sorry beta</p> 
  )
}