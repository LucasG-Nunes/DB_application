    import { SwiperSlide } from 'swiper/react';
    import useAxios from '../../hooks/useAxios';
    import Slider from '../Slider/Slider';
    import CardSlider from '../Slider/CardSlider/CardSlider';

    const CarroselBirds = () => {
        const {birds} = useAxios();


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


        { birds 
        ?
 
        <Slider settings={settings}>

            {birds.map((bird)=>
            <SwiperSlide>
                <CardSlider identifier={bird._id} img={bird.image} title={bird.portugueseName}/>
            </SwiperSlide> 
        )}
        </Slider>
        
        : 
        null}

        </>     


    )
    }

    export default CarroselBirds