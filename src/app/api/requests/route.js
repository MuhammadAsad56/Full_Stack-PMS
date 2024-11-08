import { connectDB } from "@/lib/connectDB"
import { RequestModal } from "@/lib/modals/Request.modal"

export async function GET(request) {
    await connectDB()
    const requests = await RequestModal.find().populate("user")
    return Response.json({
        msg: "requests fetched Successfully",
        requests: requests
    }, {status: 200})
}
export async function POST(request) {
    await connectDB()
    try {
        const obj = await request.json()
        const isUserRequested = await RequestModal.findOne({user: obj.user})
        if(isUserRequested){
            return Response.json({
                error: true,
                msg: "You had already applied as a doctor",
            },{status:403})
        }else{
            let newRequest = await new RequestModal({...obj})
            newRequest = await newRequest.save()
            return Response.json({
                error: false,
                msg: "requrst registered successfully",
                newRequest: newRequest
            },{status:201})
        }
        
    } catch (error) {
        return Response.json({
            error: true,
            msg: "something went wrong",
        },{status:400})
    }
}
 