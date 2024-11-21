"use server"

import { revalidatePath } from "next/cache"

export async function addAppointment(data) {
    let add = await fetch(`${process.env.BASE_URL}api/appointment`,{
        method: "POST",
        body: JSON.stringify(data)
    })
    add = await add.json()
    return add
}
export async function getAppointment(role = "", id){
    let url;
    if(role == "user"){
        url = `${process.env.BASE_URL}api/appointment${role && '?user='+id}`
    }else{
        url = `${process.env.BASE_URL}api/appointment${role && '?doctor='+id}`
    }
    let appointments = await fetch(url)
    appointments = await appointments.json()
    return appointments
}