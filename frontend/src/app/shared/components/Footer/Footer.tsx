import style from "./Footer.module.css"

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className={style.footer}>
      <span> @2022 - Desenvolvido por Lucas Gabriel & Julia Cruz </span>
    </footer>
  )
}

export default Footer