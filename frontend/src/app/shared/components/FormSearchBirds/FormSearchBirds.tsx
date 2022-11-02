
import { ChangeEvent, FormEvent, useState } from "react";
import useAxios from "../../hooks/useAxios";
import style from "./FormSearchBirds.module.css"
import Slider from "../Slider/Slider";
import { SwiperSlide } from "swiper/react";
import CardSlider from "../Slider/CardSlider/CardSlider";
import img from "../../images/charremove.png"


const FormSearchBirds = () => {
    const {birds} = useAxios()
    const [value,setValue] = useState("");
    const [verificator,setVerificator] = useState(false);
    const [filtro,setFiltro] = useState("")

    const largura = window.screen.width;

    const settings = {
      spaceBetween:10,
      navigation: true,
      draggable:true,
      pagination: {
        clickable:true,
      }
    };

    
    const loading = () =>{
      setVerificator(true)
      setTimeout(()=>{
        setVerificator(false)
      },3000)
    }
    
    const arrayFilter = filter(value,filtro)

  function filter(value:string,filtro?:string){
    const arrayFiltrado = birds?.filter((item)=>{
      if(filtro){
        return item.portugueseName.includes(value) && item.habitats.includes(filtro)
      }
      else{
        return item.portugueseName.includes(value)
      }

    })
    return arrayFiltrado
  }    




  return (
    <>
    
    <form className={style.form} >

      <header>
        <h1>Procure o seu pássaro</h1>
      </header>

      <article>

      <input className={style.input} type="text" value={value} onChange={(event) => (setValue(event.target.value))} />

      <select className={style.select} value={filtro} onChange={(event)=>{setFiltro(event.target.value)}}>
      <option value="campo alagado">Campo Alagado</option>
      <option value="campo seco baixo">Campo Seco Baixo</option>
      <option value="florestas subtropicais">Florestas Subtropicais</option>
      <option value="banhado com vegetação alta">Banhado Com Vegetação Alta</option>
      <option value="áreas semiurbanizadas">Áreas Semiurbanizadas</option>
      <option value="banhado com espelho d´água">Banhado Com Espelho D´água</option>
      </select>
      
      </article>


    </form>
    
    {!verificator?  
    <>

      <section className={style.begginer}>

        <article> 
          <img src={img} alt="" />
        </article>

          <article>
          <p>O que vamos procurar hoje?</p>
        </article>
      </section>

    </>

    : null}

    {verificator ? <iframe className={style.iframe} src="https://giphy.com/embed/Ex1w4IdYJDfa0"></iframe> : null }

    {!verificator && birds ? 

    <Slider settings={{...settings,loop: arrayFilter && arrayFilter.length > 3 ? true : false ,slidesPerView: largura<=600 ? 1 : 3  }}>
        {arrayFilter?.map((item)=>{
          return(
            <SwiperSlide key={item._id} >
              <CardSlider identifier={item._id} img={item.image} title={item.portugueseName}/>
            </SwiperSlide>
          )
        })}
      </Slider>
    : 
    null
    
    }


    </>
  )

}

export default FormSearchBirds
