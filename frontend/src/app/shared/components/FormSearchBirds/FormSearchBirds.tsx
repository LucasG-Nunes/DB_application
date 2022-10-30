
import { ChangeEvent, FormEvent, useState } from "react";
import useAxios from "../../hooks/useAxios";
import style from "./FormSearchBirds.module.css"
import Slider from "../Slider/Slider";
import { SwiperSlide } from "swiper/react";
import CardSlider from "../Slider/CardSlider/CardSlider";

const FormSearchBirds = () => {
    const {birds} = useAxios()
    const [value,setValue] = useState("");
    const [verificator,setVerificator] = useState("");

    const settings = {
      spaceBetween:50,
      slidesPerView:1,
      navigation: true,
      loop:true,
      draggable:true,
      pagination: {
        clickable:true,
      }
    };

     const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
        setValue(e.target.value)
        loading()
    }
    
    const loading = () =>{
      setVerificator("true")
      setTimeout(()=>{
        setVerificator("false")
      },6000)
    }
    
    const handleSubmit = (event:FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        loading()
    }

  return (
    <>
    
    <form className={style.form} onSubmit={ handleSubmit} >
    <input className={style.input} type="text" value={value} onChange={handleChange} />
    <button className={style.button} type='submit'>Procurar</button>
    </form>

    {verificator == "true" ? <iframe className={style.iframe} src="https://giphy.com/embed/Ex1w4IdYJDfa0"></iframe> : null }
    {verificator == "false" && birds ? 

      <Slider settings={settings}>

      {birds.map((bird)=>
         bird.portugueseName.includes(value) ?
         <SwiperSlide>
             <CardSlider identifier={bird._id} img={bird.image} title={bird.portugueseName}/>
         </SwiperSlide> 
         :
         null
          )}
         </Slider>

    
    : null}
    </>
  )

}

export default FormSearchBirds