import { Hospital } from "lucide-react";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    picture: String,
    role: {type: String, enum: ["user","doctors", "admin"],  default: "user"},
    doctorInfo: {
        fees: String,
        hospital: String,
        time: String,
        bio: String,
        specialization: String,
        gender: String
    }
})

export const UserModal = mongoose.models.Users || mongoose.model("Users", userSchema)