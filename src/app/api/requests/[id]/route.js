import { connectDB } from "@/lib/connectDB"
import { RequestModal } from "@/lib/modals/Request.modal"
import { UserModal } from "@/lib/modals/User.modal"

export async function GET(request, {params}) {
    await connectDB()
    try {
        const request = await RequestModal.find({_id: params.id}).populate("user");
        return Response.json({
            error: "false",
            msg: "request fetched Successfully",
            request: request
        }, {status: 200})
    } catch (error) {
        return Response.json({
            error: "true",
            msg: "requests not fetched",
            details: error
        }, {status: 401})   
    }
}
 