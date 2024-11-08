import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
    user : {type: mongoose.Schema.Types.ObjectId, ref: "Users"},
    status: {type : String, default: "pending", enum: ["pending", "accepted", "rejected"]},
    bio: String,
    hospital:String,
    fees: String,
    gender: String,
    appointmentTime: String,
    degree: String,
    specialization: String,
    experience: String,
    number: String,
    address: String,
})

export const RequestModal = mongoose.models.Requests || mongoose.model("Requests", requestSchema)
