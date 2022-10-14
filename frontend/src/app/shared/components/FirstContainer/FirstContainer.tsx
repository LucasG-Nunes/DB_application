    import style from "./FirstContainer.module.css"
    import { IContainer } from "../../interfaces/IContainer"


    const FirstContainer = ({ title, paragraph }: IContainer) => {
        return (
            <section className={style.section}>
                <article className={style.texts}>
                   <h4> {title} </h4>
                    <p>{paragraph}</p>
                </article>

                <article>
                    <img className={style.img} src="https://images.unsplash.com/photo-1613891188927-14c2774fb8d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="imgBirdInicial" />
                </article>
            </section>
        )
    }

    export default FirstContainer