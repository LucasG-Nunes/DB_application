import style from "./FormCadastrarAvistamento.module.css"
import {useState} from "react"
declare global {    
    interface Window {
      cloudinary: any;
    }
  }


const FormCadastrarAvistamento = () => {
  const [images,setImages] = useState("")


  const handleSubmit = (event:any) =>{
    event.preventDefault()
  }

    const handleOpenWidget = () =>{ 
  
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
    console.log(images)
  return (
    <>
    <section className={style.background}>

        <form className={style.form} onClick={handleSubmit}>
        <header>
          <h1>Cadastre o seu avistamento</h1>
        </header>
        <input type="text" />
        <button  onClick={handleOpenWidget} >Cadastrar</button>
        </form>
    </section>
    </>
  )
}

export default FormCadastrarAvistamento