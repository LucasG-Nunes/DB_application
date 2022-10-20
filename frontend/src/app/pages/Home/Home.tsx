import CarroselBirds from "../../shared/components/CarroselBirds/CarroselBirds"
import FirstContainer from "../../shared/components/FirstContainer/FirstContainer"
import Footer from "../../shared/components/Footer/Footer"
import Navbar from "../../shared/components/Navbar/Navbar"

type Props = {}

function Home({}: Props) {
  return (
    <>
    <Navbar/>
      <FirstContainer 
      title={"Bem vindo, Ornitólogos"} 
      paragraph={"Quer cadastrar algum avistamento ou pesquisar mais sobre alguma espécie?"} />
      <CarroselBirds/>
      <Footer/>
    </>
  )
}

export default Home 