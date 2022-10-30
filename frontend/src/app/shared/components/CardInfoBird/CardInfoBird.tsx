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
    <section className={style.card}>
      

      <img src={image}></img>


      <article className={style.articleInfos}>

        <header>
          <h1 className={style.h1}>{portuguesName}</h1>
        </header>

          <span>Nome Cientifico: {scientificName}</span>
          <span>Tamanho: {size}</span>
          <span>Habitats: {habitats}</span>
          <span>Está em extição? {threatened === true ? "Sim, está em extinção" : "Não está em extinção"}</span>
          <span>É considerado raro? {rare === true ? "Sim, é considerada rara" : "Não é considerada rara"}</span>
      </article>
    </section>
  )
}

export default CardInfoBird

