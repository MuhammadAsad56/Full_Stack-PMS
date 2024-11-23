import { connectDB } from "@/lib/connectDB";
import { AppointmentModal } from "@/lib/modals/Appointment.modal";
import { UserModal } from "@/lib/modals/User.modal";
import { RequestModal } from "@/lib/modals/Request.modal";

export async function GET(request) {
    await connectDB()
    try {
        const query = {}
        const doctor = request?.nextUrl?.searchParams?.get("doctor")
        const user = request?.nextUrl?.searchParams?.get("user")
        if(doctor){
            const doctorRequset = await RequestModal.findOne({user: doctor})
            query.request = doctorRequset._id
        }
        if(user) query.user = user
       const appointments = await AppointmentModal.find(query)
       .populate('user')
       .populate('request')
       .populate({
        path: "request",
        populate: { path : "user"},
       })
       return Response.json({
        msg: "Appointments fetched Successfully",
        appointments
       }, {status: 200})
    } catch (error) {
        return Response.json({
            error: true,
            msg: "something went wrong",
           },{status: 400})
    }
}
export async function POST(request) {
    await connectDB()
    try {
        const obj = await request.json()
        const doctor = await RequestModal.findOne({_id: obj.request})
        const isDoctor = await AppointmentModal.findOne({user: doctor.user})
        if(isDoctor) return Response.json({
            error: true,
            msg: "You cannot book your appointment",
        })
        const isBooked = await AppointmentModal.findOne({request: obj.request, user: obj.user, status: 'pending',});        
        if(isBooked) return Response.json({
            error: true,
            msg: "you are already booked a appointment",
        })
        let newAppointment = await new AppointmentModal(obj)
        newAppointment = await newAppointment.save()
        return Response.json({
            error: false,
            msg: "Appointment booked Successfully",
            appointment: newAppointment
           }, {status: 201})
    } catch (error) {
        return Response.json({
            error: true,
            msg: "something went wrong",
           },{status: 400})
    }
}
 
export async function PUT(request) {
    await connectDB()
    try {
        const obj = await request.json()
        const {id, status} = obj
        const updatedAppointment = await AppointmentModal.findOneAndUpdate({_id: id}, {status: status})
        return Response.json({
            error: false,
            msg: "Appointment updated Successfully",
            appointment: updatedAppointment
           }, {status: 203})
    } catch (error) {
        return Response.json({
            error: true,
            msg: "something went wrong",
           },{status: 400})
    }
}
 