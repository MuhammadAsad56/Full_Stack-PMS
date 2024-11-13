'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { CgGenderFemale } from "react-icons/cg"
import { MdLocalHospital } from "react-icons/md"
import { CiClock2 } from "react-icons/ci"
import { Check, X } from "lucide-react"
import DoctorDetailSheet from './DoctorDetailSheet'
import { updateRequest } from '@/actions/doctorRequest'

export default function DoctorRequests({ requests }) {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [selectedRequest, setSelectedRequest] = useState({ requestId: null, actionType: null })
  const [filterStatus, setFilterStatus] = useState('all') // State for filter status

  const handleAction = (requestId, actionType) => {
    setSelectedRequest({ requestId, actionType })
    setDialogOpen(true)
  }

  const confirmAction = async () => {
    if (selectedRequest.actionType === 'accepted') {
      await updateRequest(selectedRequest.requestId, selectedRequest.actionType)
    } else if (selectedRequest.actionType === 'rejected') {
      await updateRequest(selectedRequest.requestId, selectedRequest.actionType)
    }
    setDialogOpen(false)
  }

  // Filter the requests based on the selected status
  const filteredRequests = filterStatus === 'all' ? requests : requests.filter(request => request.status === filterStatus)

  return (
    <>
      <div className="my-4 flex flex-wrap justify-center gap-4">
        <Button variant="outline" onClick={() => setFilterStatus('all')}>All</Button>
        <Button variant="outline" onClick={() => setFilterStatus('pending')}>Pending</Button>
        <Button variant="outline" onClick={() => setFilterStatus('accepted')}>Accepted</Button>
        <Button variant="outline" onClick={() => setFilterStatus('rejected')}>Rejected</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-5">
        {filteredRequests.map(request => (
          <Card key={request._id}>
            <CardHeader>
              <CardTitle>
                {request.user.firstName + " " + request.user.lastName}
              </CardTitle>
              <CardDescription>{request.status}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='flex items-center justify-between my-2'>
                <div className='flex items-center gap-2'>
                  <CgGenderFemale className="h-4 w-4" />
                  <h2 className='font-semibold text-sm'>Gender</h2>
                </div>
                <p className='text-sm'>{request.gender}</p>
              </div>
              <div className='flex items-center justify-between my-2'>
                <div className='flex items-center gap-2'>
                  <MdLocalHospital className="h-4 w-4" />
                  <h2 className='font-semibold text-sm'>Hospital</h2>
                </div>
                <p className='text-sm'>{request.hospital}</p>
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <CiClock2 className="h-4 w-4" />
                  <h2 className='font-semibold text-sm'>Appointment Time</h2>
                </div>
                <p className='text-sm'>{request.appointmentTime}</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <DoctorDetailSheet requestData={request} />
              {
                request.status === "accepted" ? (
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Accept request"
                  >
                    <Check className="h-4 w-4 text-green-500" />
                  </Button>
                ) : request.status === "rejected" ? (
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Reject request"
                  >
                    <X className="h-4 w-4 text-red-500" />
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleAction(request._id, 'accepted')}
                      aria-label="Accept request"
                    >
                      <Check className="h-4 w-4 text-green-500" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleAction(request._id, 'rejected')}
                      aria-label="Reject request"
                    >
                      <X className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                )
              }
            </CardFooter>
          </Card>
        ))}
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Action</DialogTitle>
            <DialogDescription>
              Are you sure you want to {selectedRequest.actionType} this {"doctor's"} request?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={confirmAction}>
              Confirm {selectedRequest.actionType}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
