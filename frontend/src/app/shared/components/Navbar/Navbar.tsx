import style from "./Navbar.module.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <h1>LOGO</h1>

    <article>
      <Link className={style.Link} to="/">Home</Link>
      <Link className={style.Link} to="/avistamento">Cadastrar Avistamento</Link>
      <Link className={style.Link} to="/SearchBird">Procure um passaro</Link>
    </article>


    </nav>
  )
}

export default Navbar