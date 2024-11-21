import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    user : {type: mongoose.Schema.Types.ObjectId, ref: "Users"},
    request : {type: mongoose.Schema.Types.ObjectId, ref: "Requests"},
    date: Date,
    status: {type: String, default: "pending" , enum: ["pending", "accepted", "visited", "review"]},

},{timestamps: true})

export const AppointmentModal = mongoose.models.Appointments || mongoose.model("Appointments", appointmentSchema)
