"use server"

export async function addRequest(data) {
    let add = await fetch(`${process.env.BASE_URL}api/requests`,{
        method: "POST",
        body: JSON.stringify(data)
    })
    add = await add.json()
    return add
}
export async function getRequest() {
    let requests  = await fetch(`${process.env.BASE_URL}api/requests`)
    requests = await requests.json()
    return requests
}