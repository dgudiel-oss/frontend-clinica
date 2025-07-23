const URL = import.meta.env.VITE_URL_API

export const createUser = async(user)=>{
    const response = await fetch(`${URL}api/userLogin/login`, 
        {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }
    )
    return response
}

export const getUser = async ()=>{
    const get = await fetch(`${URL}api/user/user`)
    return get
}