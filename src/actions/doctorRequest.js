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
  const url = `${process.env.BASE_URL}api/requests${status ? `?status=${status}` : ""}`;

  console.log("Fetching:", url);

  const res = await fetch(url, {
    cache: "no-store",
  });

  console.log("Status:", res.status);
  console.log("Content-Type:", res.headers.get("content-type"));

  const text = await res.text();

  console.log(text);

  return JSON.parse(text);
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