import style from "./FormCadastrarAvistamento.module.css"
import {useEffect, useState} from "react"
import axios from "axios";


declare global {    
    interface Window {
      cloudinary: any;
    }
  }
export interface IBird {
    _id:string,
    scientificName: string,
    portugueseName: string,
    size: number,
    habitats: string,
    threatened: boolean,
    rare: boolean,
    image: string,
    avistamento:string
}


const FormCadastrarAvistamento = () => {

  const [images,setImages] = useState <string | undefined>()
  const [scientificName,setScientificName] = useState<string | undefined>()
  const [ portugueseName,setPortugueseName] = useState<string | undefined>()
  const [ size,setSize ] = useState<string | undefined>()
  const [habitats,setHabitats] = useState<string|undefined>()
  const [threatened,setThreatened] = useState<boolean | undefined>()
  const [rare, setRare] = useState<boolean | undefined>()
  const [avistamento,setAvistamento] = useState<string|undefined>()
  
  const bird= {
    scientificName: scientificName,
    portugueseName: portugueseName,
    size:size,
    habitats:habitats,
    threatened: threatened,
    rare: rare,
    image: images,
    avistamento : avistamento
  }
  
  const createBird =  async () =>{
    try{
      axios.post("http://localhost:3000/bird",bird).then((response)=> console.log(response))
    }catch(error){
      console.log(error)
    }
  }
  console.log(rare,threatened)

  const handleSubmit = (event:any) =>{
    event.preventDefault()
    setScientificName("")
    setPortugueseName("")
    setSize("")
    setHabitats("")
    setAvistamento("")
    createBird()

  }

    const handleOpenWidget = (event:any) =>{ 
      event.preventDefault()
      let myWidget = window.cloudinary.createUploadWidget({
        cloudName: 'db-upload', 
        uploadPreset: 'db-preset'}, (error:any, result:any) => { 
          if (!error && result && result.event === "success") { 
            setImages(result.info.url)
          }
        }   
      ) 
      myWidget.open()
    }

  return (
    <>
    <section className={style.background}>

        <form className={style.form} onSubmit={handleSubmit}>
        <header>
          <h1>Cadastre o seu avistamento</h1>
        </header>


        
        <label htmlFor="NomeCientifico"> Nome Cientifico:</label>
        <input className={style.input} type="text" value={scientificName} onChange={(event)=>{setScientificName(event.target.value)}} />

        <label htmlFor="NomePortugues"> Nome em português:</label>
        <input className={style.input} type="text" value={portugueseName} onChange={(event)=>{setPortugueseName(event.target.value)}} />

        <label htmlFor="Tamanho"> Tamanho:</label>
        <input className={style.input} type="text" value={size} onChange={(event)=>{setSize(event.target.value)}} />

        <label htmlFor="habitat"> Habitat:</label>
        <input className={style.input} type="text" value={habitats} onChange={(event)=>{setHabitats(event.target.value)}} />
        
        <label htmlFor="Avistamento"> Avistamento:</label>
        <input className={style.input} type="text" value={avistamento} onChange={(event)=>{setAvistamento(event.target.value)}} />

      <div>
        <input type="checkbox" onClick={()=>{setThreatened(prevCheck => !prevCheck)}}/>
        <label htmlFor="Extincao"> Está em extinção?</label>
      </div>

        <div>
        <input type="checkbox" onClick={()=>{setRare(prevCheck => !prevCheck)}} />
        <label htmlFor="Raro">É considerado raro?</label>
        </div>

        <button className={style.button} onClick={handleOpenWidget} >Adicionar Imagem</button>

        <button  className={style.button} type="submit">Cadastrar Avistamento</button>
        </form>
    </section>
    </>
  )
}

export default FormCadastrarAvistamento