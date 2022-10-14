    import  { useState, ChangeEvent, FormEvent } from 'react'
    import { SwiperSlide } from 'swiper/react';
    import useAxios from '../../hooks/useAxios';
    import Slider from '../Slider/Slider';
    import style from "./SearchBirds.module.css";
    import CardSlider from '../Slider/CardSlider/CardSlider';

    const SearchBirds = () => {
        const [value,setValue] = useState("");
        const {birds} = useAxios();

        const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
            setValue(e.target.value)
        }

        const handleSubmit = (event:FormEvent<HTMLFormElement>) =>{
            event.preventDefault()
            setValue("")
        }

        const settings = {
            spaceBetween:50,
            slidesPerView:3,
            navigation: true,
            loop:true,
            draggable:true,
            pagination: {
              clickable:true,
            }
          };

        return (

        <>
        <form className={style.form} onSubmit={ handleSubmit} >
            <input className={style.input} type="text" value={value} onChange={handleChange} />
            <button className={style.button} type='submit'>Procurar</button>
        </form>


        {!value && birds 
        ?
 
        <Slider settings={settings}>

            {birds.map((bird)=>
            <SwiperSlide>
                <CardSlider img={bird.image} title={bird.portugueseName}/>
            </SwiperSlide> 
        )}
        </Slider>
        
        : 
        null}
        
        {value && <p>tem algo</p>}
        </>     


    )
    }

    export default SearchBirds