import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { CgGenderFemale } from "react-icons/cg";
import { MdLocalHospital } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";

import { categories, doctors } from '@/lib/data'
import { Button } from './ui/button'
import Link from 'next/link'
import { DatePicker } from './DatePicker';

export const DoctorSection = ({ isHome }) => {
    const filterdeDoctors = isHome ? doctors.slice(0, 6) : doctors
    return (
        <>
            <div className='flex items-center justify-between'>
                <h1 className='text-2xl font-semibold m-0'>Doctors</h1>

                {isHome ?
                    <Link href={'/doctors'}>
                        <Button>Show All</Button>
                    </Link>
                    :
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Selet Category" />
                        </SelectTrigger>
                        <SelectContent>
                            {
                                categories.map(category => <SelectItem key={category} value={category}>{category}</SelectItem>)
                            }
                        </SelectContent>
                    </Select>
                }

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10'>
                {
                    filterdeDoctors.map(doctor => <Card key={doctor.id}>
                        <CardHeader>
                            <CardTitle>{doctor.name}</CardTitle>
                            <CardDescription>{doctor.category}</CardDescription>
                        </CardHeader>
                        {isHome && 
                        <CardContent>
                          <Link  href={`/doctors/${doctor.id}`}><Button variant="outline">See Details</Button></Link> 
                        </CardContent>
                        }
                        {!isHome &&
                            <>
                                <CardContent>
                                    <div className='flex items-center justify-between my-2'>
                                        <div className='flex items-center gap-2'>
                                            <CgGenderFemale />
                                            <h1 className='font-semibold text-sm'>Gender</h1>
                                        </div>
                                        <p className='text-sm'> {doctor.gender}</p>
                                    </div>
                                    <div className='flex items-center justify-between my-2'>
                                        <div className='flex items-center gap-2'>
                                            <MdLocalHospital />
                                            <h1 className='font-semibold text-sm'>Hospital</h1>
                                        </div>
                                        <p className='text-sm'>{doctor.hospital}</p>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center gap-2'>
                                            <CiClock2 />
                                            <h1 className='font-semibold text-sm'>Appointment Time</h1>
                                        </div>                            <p className='text-sm'>{doctor.appointmentTime}</p>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Link href={`/doctors/${doctor.id}`}><Button>Book Apoointment</Button></Link>
                                </CardFooter>
                            </>
                        }
                    </Card>)
                }
            </div>
        </>
    )
}

export default DoctorSection
