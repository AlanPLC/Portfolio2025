import "./About.scss";
import { profile } from "../../data/profile.js"

export default function About() {
    const { about } = profile
return (
<section className="about">
    <div className="about-title">
        <img src="./eventim-svgrepo-com.svg" alt="about-icon" />
        <h2>Sobre mí</h2>
    </div>
    <p>{about}</p>
</section>
);
}