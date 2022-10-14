import FirstContainer from "../../shared/components/FirstContainer/FirstContainer"
import SearchBirds from "../../shared/components/searchBirds/SearchBirds"

type Props = {}

function Home({}: Props) {
  return (
    <>
      <FirstContainer 
      title={"Bem vindo, Ornitólogos"} 
      paragraph={"Quer cadastrar algum avistamento ou pesquisar mais sobre alguma especie?"} />
      <SearchBirds />
    </>
  )
}

export default Home 