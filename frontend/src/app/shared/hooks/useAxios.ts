import axios from "axios";
import { useEffect,useState } from "react";
import {IBird} from "../interfaces/IBird"


const useAxios = () =>{
    const [birds,setBirds] = useState<IBird[]>()
    useEffect(()=>{
        const resData = async () => {
            try {
                await axios.get("http://localhost:3000/bird")
                .then((response)=>{
                    setBirds(response.data)
                })
            } catch (error) {
                console.log(error)
            }
        }   
        resData()
    },[])
    return {birds};
}

export default useAxios