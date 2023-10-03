import axios from "axios"

export const api = axios.create({
    baseURL: "http://localhost:4000"
})

export const buscar = async (url, setData) =>{
    const respuesta = await api.get(url)
    // console.log(respuesta)
    setData(respuesta.data)
}