import style from "./CardSlider.module.css"


interface Props{
    img: string
    title: string
}

const CardSlider = ({img, title}:Props) => {
    return (
      <article  className={style.card}>   
            <h1 className={style.title}>{title}</h1>
          <img className={style.img} src={img} alt="" />

      </article>
    )
  }
  
  export default CardSlider