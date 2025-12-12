import "./footer.scss"
import { profile } from "../../data/staticData.js"
export default function Footer() {
    const { name } = profile

    return(
        <footer>
            <h3>{name}</h3>
            <p>Copyright © Todos los derechos reservados.</p>
        </footer>
    )
}