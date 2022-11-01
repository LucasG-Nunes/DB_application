import style from "./Navbar.module.css"
import { Link } from "react-router-dom"
import Logo from "../../images/Logo.png"
const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <img className={style.logo} src={Logo} alt="" />

    <article>
      <Link className={style.Link} to="/">Home</Link>
      <Link className={style.Link} to="/avistamento">Cadastrar Avistamento</Link>
      <Link className={style.Link} to="/SearchBird">Procure um passaro</Link>
    </article>


    </nav>
  )
}

export default Navbar