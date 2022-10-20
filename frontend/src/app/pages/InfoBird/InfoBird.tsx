import axios from "axios"
import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import Footer from "../../shared/components/Footer/Footer"
import Navbar from "../../shared/components/Navbar/Navbar"
import { IBird } from "../../shared/interfaces/IBird"
import CardInfoBird from "../../shared/components/CardInfoBird/CardInfoBird"

const InfoBird = () => {
  const {id} = useParams()
  const [data,setData] = useState<IBird>()

  useEffect(()=>{
    const dataBird = async () =>{
      await axios.get(`http://localhost:3000/bird/${id}`)
      .then((response)=>{
        setData(response.data)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
    dataBird()
  },[])

  return (
    <>
    <Navbar/>

    <CardInfoBird 
    scientificName={data?.scientificName}
    portuguesName={data?.portugueseName}
    size={data?.size}
    habitats={data?.habitats}
    threatened={data?.threatened}
    rare={data?.rare}
    image={data?.image}
    />

    <Footer/>
    </>
  )
}

export default InfoBird
