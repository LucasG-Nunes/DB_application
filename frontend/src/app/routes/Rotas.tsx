import {BrowserRouter,Routes,Route} from "react-router-dom"
import Avistamento from "../pages/Avistamento/Avistamento"
import Home from "../pages/Home/Home"
type Props = {}

const Rotas = (props: Props) => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/avistamento" element={<Avistamento/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Rotas