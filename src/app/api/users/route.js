import { connectDB } from "@/lib/connectDB"
import { UserModal } from "@/lib/modals/User.modal"

export async function GET(request) {
    await connectDB()
    const user = await UserModal.find()
    return Response.json({
        msg: "users fetched Successfully",
        user
    }, {status: 200})
}

export async function POST(request) {
    await connectDB()
    const obj = await request.json()
    let newUser = await new UserModal({...obj})
    newUser = await newUser.save()
    return Response.json({
        error: false,
        newUser: newUser
    },{status:201})
}
 
export async function PUT(request) {}
 
export async function DELETE(request) {}
 