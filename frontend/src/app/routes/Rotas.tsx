import {BrowserRouter,Routes,Route} from "react-router-dom"
import Avistamento from "../pages/Avistamento/Avistamento"
import Home from "../pages/Home/Home"
import InfoBird from "../pages/InfoBird/InfoBird"
import SearchBirds from "../pages/SearchBird/SearchBirds"


const Rotas = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/avistamento" element={<Avistamento/>}/>
            <Route path="/InfoBird/:id" element={<InfoBird/>}/>
            <Route path="/SearchBird" element={<SearchBirds/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Rotas