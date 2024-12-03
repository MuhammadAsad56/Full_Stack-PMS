"use server"

import { revalidatePath } from "next/cache"

export async function addRequest(data) {
    let add = await fetch(`${process.env.BASE_URL}api/requests`,{
        method: "POST",
        body: JSON.stringify(data)
    })
    add = await add.json()
    return add
}
export async function getRequest(status) {
    try {
    let requests  = await fetch(`${process.env.BASE_URL}api/requests${status &&'?status='+status}`)
        requests = await requests.json()
        if(!requests) return [] 
        return requests  
    } catch (error) {
        console.log("error " ,error.message);
    }
}
export async function getSingleRequest(id){
    try {
    let request  = await fetch(`${process.env.BASE_URL}api/requests/${id}`)
        request = await request.json()
        if(!request) return [] 
        return request  
    } catch (error) {
        console.log("error " ,error.message);
    }
}
export async function updateRequest(id, status) {
    try {
        let requests  = await fetch(`${process.env.BASE_URL}api/requests`,{
            method: 'PUT',
            body: JSON.stringify({id, status})
        })
        requests = await requests.json()
        revalidatePath('/admin/requests')
        return requests  
    } catch (error) {
        console.log("error " ,error.message);
    }
}