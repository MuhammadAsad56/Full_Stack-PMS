'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function DoctorDetailSheet({ requestData }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Show Detail</Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Doctor Detail</SheetTitle>
          <SheetDescription>
            <div className="flex items-center gap-2 flex-col">
              <Image 
                className="rounded-full" 
                width={60} 
                height={60} 
                src={requestData.user.picture}
                alt={`${requestData.user.firstName} ${requestData.user.lastName}`}
              />
              <h1 className="font-bold text-xl">
                {requestData.user.firstName} {requestData.user.lastName}
              </h1>
            </div>
          </SheetDescription>
        </SheetHeader>
        <div className="mt-6 space-y-4">
          <InfoItem label="Email" value={requestData.user.email} />
          <InfoItem label="Status" value={requestData.status} />
          <InfoItem label="Bio" value={requestData.bio} />
          <InfoItem label="Hospital" value={requestData.hospital} />
          <InfoItem label="Fees" value={`$${requestData.fees}`} />
          <InfoItem label="Gender" value={requestData.gender} />
          <InfoItem label="Appointment Time" value={requestData.appointmentTime} />
          <InfoItem label="Degree" value={requestData.degree} />
          <InfoItem label="Specialization" value={requestData.specialization} />
          <InfoItem label="Experience" value={`${requestData.experience} years`} />
          <InfoItem label="Phone Number" value={requestData.number} />
          <InfoItem label="Address" value={requestData.address} />
        </div>
      </SheetContent>
    </Sheet>
  )
}

function InfoItem({ label, value }) {
  return (
    <div>
      <span className="font-semibold">{label}:</span> {value}
    </div>
  )
}