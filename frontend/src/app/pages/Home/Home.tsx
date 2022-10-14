import FirstContainer from "../../shared/components/FirstContainer/FirstContainer"
import Footer from "../../shared/components/Footer/Footer"
import Navbar from "../../shared/components/Navbar/Navbar"
import SearchBirds from "../../shared/components/searchBirds/SearchBirds"

type Props = {}

function Home({}: Props) {
  return (
    <>
    <Navbar/>
      <FirstContainer 
      title={"Bem vindo, Ornitólogos"} 
      paragraph={"Quer cadastrar algum avistamento ou pesquisar mais sobre alguma espécie?"} />
      <SearchBirds />
      <Footer/>
    </>
  )
}

export default Home 