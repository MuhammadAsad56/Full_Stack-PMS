import { redirect } from "next/navigation"
import { auth } from "../../../../auth"
import { getRequest } from "@/actions/doctorRequest"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CgGenderFemale } from "react-icons/cg";
import { MdLocalHospital } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import Link from "next/link"
import { Button } from "@/components/ui/button";
import DoctorDetailSheet from "@/components/DoctorDetailSheet";
import DoctorRequests from "@/components/DoctorRequests";
export default async function AdminRequests() {
  const session = await auth()
  if (session?.user?.role != "admin") redirect('/')
  const response = await getRequest()
console.log("requests>",response);

  return (
    <div className="container mx-auto px-10 my-10">
      <h1 className="text-2xl font-bold">Doctor Requests</h1>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-5">
        {requests.map(request => {
          return (
            <Card key={request._id}>
              <CardHeader>
                <CardTitle>
                  {request.user.firstName + " " + request.user.lastName }
                </CardTitle>
                <CardDescription>{request.status}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className='flex items-center justify-between my-2'>
                  <div className='flex items-center gap-2'>
                    <CgGenderFemale />
                    <h1 className='font-semibold text-sm'>Gender</h1>
                  </div>
                  <p className='text-sm'> {request.gender}</p>
                </div>
                <div className='flex items-center justify-between my-2'>
                  <div className='flex items-center gap-2'>
                    <MdLocalHospital />
                    <h1 className='font-semibold text-sm'>Hospital</h1>
                  </div>
                  <p className='text-sm'>{request.hospital}</p>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <CiClock2 />
                    <h1 className='font-semibold text-sm'>Appointment Time</h1>
                  </div>
                  <p className='text-sm'>{request.appointmentTime}</p>
                </div>
              </CardContent>
              <CardFooter>
               <DoctorDetailSheet requestData={request}/>
              </CardFooter>
            </Card>
          )
        })}
      </div> */}
      <DoctorRequests requests={response.requests}/>
    </div >
  )
}