import {Swiper} from "swiper/react"
import {Navigation,Pagination,A11y} from "swiper"
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';

interface configurations{
    settings: object,
    children: any
}

const Slider = ({settings,children}: configurations) => {
  return (
    <Swiper  modules={[Navigation,Pagination,A11y]} {...settings} >
        {children}
    </Swiper>
  )
}

export default Slider