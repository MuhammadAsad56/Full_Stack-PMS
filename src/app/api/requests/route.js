import { connectDB } from "@/lib/connectDB"
import { RequestModal } from "@/lib/modals/Request.modal"
import { UserModal } from "@/lib/modals/User.modal"

export async function GET(request) {
    await connectDB()
    // pehla tarika 
    const query = {}
    const status = request?.nextUrl?.searchParams?.get("status")
    if(status && status != "all"){
        query.status = status
    }
    // dosra tarika
    // const requestUrl = request.url
    // const {searchParams} = new URL(requestUrl)
    // const query = {}
    // if(searchParams.get('status') && searchParams.get('status') != "all"){
    //     query.status = searchParams.get('status')
    // } 
    try {
        const requests = await RequestModal.find(query).populate("user");
        return Response.json({
            error: "false",
            msg: "requests fetched Successfully",
            requests: requests
        }, {status: 200})
    } catch (error) {
        return Response.json({
            error: "true",
            msg: "requests not fetched",
            details: error
        }, {status: 401})   
    }
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

export async function PUT(request) {
    await connectDB()
    try {
      const obj = await request.json()
      const {id , status} = obj
      const selectedRequest = await RequestModal.findOne({_id : id})
      await UserModal.findOneAndUpdate({_id: selectedRequest.user}, {role: "doctor"})
      const updated = await RequestModal.findOneAndUpdate({_id: id},{status: status}).exec()
      return Response.json({
        error: "false",
        msg: "requests updated Successfully",
        updated
    }, {status: 200})
    } catch (error) {
        return Response.json({
            error: "true",
            msg: "Something went wrong",
        }, {status: 500})
    }
}
 