import "./footer.scss"
import { profile } from "../../data/dataSource.js";
import useLanguage from "../../contexts/useLanguage.js"
import ScrambleText from "../ScrambleText/ScrambleText.jsx";
export default function Footer() {
    const { name } = profile
    const { translation } = useLanguage();

    return(
        <footer>
            <h3>{name}</h3>
            <ScrambleText as="p" text={translation.footer.copyright} />
        </footer>
    )
}