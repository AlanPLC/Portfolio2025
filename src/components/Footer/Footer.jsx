import "./footer.scss"
import { profile } from "../../data/staticData.js"
import useLanguage from "../../contexts/useLanguage.js"
export default function Footer() {
    const { name } = profile
    const { translation } = useLanguage();

    return(
        <footer>
            <h3>{name}</h3>
            <p>{translation.footer.copyright}</p>
        </footer>
    )
}