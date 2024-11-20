import { doctors } from "@/lib/data"
import { CgGenderFemale } from "react-icons/cg";
import { MdLocalHospital } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { MdAttachMoney } from "react-icons/md";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/DatePicker";
import { MdDateRange } from "react-icons/md";
import { getSingleRequest } from "@/actions/doctorRequest";

export default async function DoctorDetail({ params }) {
    
    const {request} = await getSingleRequest(params.id)
    console.log("single request>" , request);
    
    const {user:{ firstName, lastName }, appointmentTime, specialization, hospital, gender, fees } = request[0]
    console.log("firstname>", firstName, lastName);
    
    
    return (
        <div className="container mx-auto px-10">
            <Header/>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="py-10">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img
                            alt="ecommerce"
                            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                            src={gender == "Male" ? "https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yfGVufDB8fDB8fHww" : "https://plus.unsplash.com/premium_photo-1664475450083-5c9eef17a191?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdG9yJTIwZmVtYWxlfGVufDB8fDB8fHww"}
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col justify-center">
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                {firstName + " " + lastName}
                            </h1>
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                {specialization}
                            </h2>
                            <p className="leading-relaxed my-3">
                                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps
                                cornhole raw denim forage brooklyn.
                            </p>
                            <div className="flex flex-col my-3">
                                <div className='flex items-center justify-between my-1'>
                                    <div className='flex items-center gap-2'>
                                        <CgGenderFemale />
                                        <h1 className='font-semibold text-sm'>Gender</h1>
                                    </div>
                                    <p className='text-sm'> {gender}</p>
                                </div>
                                <div className='flex items-center justify-between my-1'>
                                    <div className='flex items-center gap-2'>
                                        <MdLocalHospital />
                                        <h1 className='font-semibold text-sm'>Hospital</h1>
                                    </div>
                                    <p className='text-sm'>{hospital}</p>
                                </div>
                                <div className='flex items-center justify-between my-1'>
                                    <div className='flex items-center gap-2'>
                                        <CiClock2 />
                                        <h1 className='font-semibold text-sm'>Appointment Time</h1>
                                    </div><p className='text-sm'>{appointmentTime}</p>
                                </div>
                                <div className='flex items-center justify-between my-1'>
                                    <div className='flex items-center gap-2'>
                                        <MdAttachMoney />
                                        <h1 className='font-semibold text-sm'>Fees</h1>
                                    </div><p className='text-sm'>{fees}</p>
                                </div>
                                <div className='flex items-center justify-between my-1'>
                                    <div className='flex items-center gap-2'>
                                        <MdDateRange />
                                        <h1 className='font-semibold text-sm'>Pick a date</h1>
                                    </div>
                                    <DatePicker/>
                                </div>
                            </div>
                                <Button className={'w-full'}>Book Appointment</Button>                           
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}