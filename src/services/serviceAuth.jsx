import { createUser, getUser } from '../API/userApi'
export const LoginUser = async(user) =>{
    try {
    const result = await createUser(user)
    if(!result.ok) throw new Error("Error al iniciar sesion")
    const data = await result.json()
    return data
        
    } catch (error) {
        throw new Error(error.message)
    }
}

export const getUsuarios = async () =>{
    try {
    const usuarios = await getUser()
    if(!usuarios.ok) throw new Error("Error al obtener los usuarios")
    const data = await usuarios.json()
    return data
    } catch (error) {

        console.error(error)
        return []
    }
}
