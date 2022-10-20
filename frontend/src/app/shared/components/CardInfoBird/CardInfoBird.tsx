import style from "./CardInfoBird.module.css"

type InfoBird = {
  scientificName?: string,
  portuguesName?: string,
  size?:number,
  habitats?: Array<string>,
  threatened?: boolean,
  rare?: boolean,
  image?: string
}

const CardInfoBird = ({scientificName,portuguesName,size,habitats,threatened,rare,image}:InfoBird ) => {
  return (
    <div className={style.card}>
      <h1>{portuguesName}</h1>
      <img src={image}></img>
      <span>{scientificName}</span>
      <span>{size}</span>
      <span>{habitats}</span>
      <span>{threatened}</span>
      <span>{rare}</span>
    </div>
  )
}

export default CardInfoBird

