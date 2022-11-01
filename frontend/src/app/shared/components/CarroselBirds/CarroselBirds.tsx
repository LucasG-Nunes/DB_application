    import { SwiperSlide } from 'swiper/react';
    import useAxios from '../../hooks/useAxios';
    import Slider from '../Slider/Slider';
    import CardSlider from '../Slider/CardSlider/CardSlider';


    const CarroselBirds = () => {
        const {birds} = useAxios();

        
    
        let largura = window.screen.width;

        
        const settings = {
            spaceBetween:50,
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
 
        <Slider settings={{...settings,slidesPerView: largura <=600 ? 1 : 3}}>

            {birds.map((bird)=>
            <SwiperSlide  key={bird._id}>
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