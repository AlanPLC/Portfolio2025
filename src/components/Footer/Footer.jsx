import "./footer.scss"
import { profile } from "../../data/profile"
export default function Footer() {
    const { name } = profile

    return(
        <footer>
            <h3>{name}</h3>
            <p>Copyright © Todos los derechos reservados.</p>
        </footer>
    )
}