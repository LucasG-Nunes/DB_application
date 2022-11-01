import {Swiper} from "swiper/react"
import {Navigation,Pagination,A11y} from "swiper"
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';
import style from "./Slider.module.css"
interface configurations{
    settings: object,
    children: any
}

const Slider = ({settings,children}: configurations) => {
  return (
    <Swiper className={style.background} modules={[Navigation,Pagination,A11y]} {...settings} >
        {children}
    </Swiper>
  )
}

export default Slider