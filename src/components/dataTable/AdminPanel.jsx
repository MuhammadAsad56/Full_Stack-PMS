import { getAppointment } from "@/actions/appointment"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { format } from "date-fns"

export async function AdminPanel() {
  const { appointments } = await getAppointment()
  return (
    <div className="min-h-screen container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">All Appointments</h1>
      <Table>
        <TableCaption>A list of all appointments.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Patient Name</TableHead>
            <TableHead>Doctor Name</TableHead>
            <TableHead>Specialization</TableHead>
            <TableHead>Fees</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Hospital</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appointments.map((appointment) => (
            <TableRow key={appointment._id}>
              <TableCell>{`${appointment.user.firstName} ${appointment.user.lastName}`}</TableCell>
              <TableCell>{`Dr. ${appointment.request.user.firstName} ${appointment.request.user.lastName}`}</TableCell>
              <TableCell>{appointment.request.specialization}</TableCell>
              <TableCell>{appointment.request.fees}</TableCell>
              <TableCell>{format(new Date(appointment.date), 'MMM dd, yyyy')}</TableCell>
              <TableCell>{appointment.request.appointmentTime}</TableCell>
              <TableCell>{appointment.request.hospital}</TableCell>
              <TableCell className="capitalize">{appointment.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

