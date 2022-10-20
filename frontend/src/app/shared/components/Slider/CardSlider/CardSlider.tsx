import style from "./CardSlider.module.css"
import {NavLink as Link} from "react-router-dom"

interface Props{
    img: string
    title: string
    identifier: string 
}

const CardSlider = ({img, title, identifier}:Props) => {
  const url = `InfoBird/${identifier}`
    return (
      <article  className={style.card}>   
            <h1 className={style.title}>{title}</h1>
            <img className={style.img} src={img} alt="" />
            <Link className={style.Link} to={url}>Saiba mais</Link>
      </article>
    )
  }
  
  export default CardSlider