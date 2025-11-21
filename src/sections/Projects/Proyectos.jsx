import "./proyectos.scss";
import { experience } from "../../data/profile.js"
// img, role, company, period, description, achievements, tech
export default function Projects() {
    return (
        <section className="projects">
            <div className="projects-title">
                <img src="./boost-for-reddit-svgrepo-com.svg" alt="project-icon" />
                <h2>Proyectos</h2>
            </div>
            <div>
                {experience.map((proj, index)=>(
                    <div className="proyecto" key={index}>
                        <img src={proj.img} alt="project-img" className="project-img"/>
                        <div className="right-project">
                            <h3>{proj.role}</h3>
                            <p>{proj.company}</p>
                            <p>{proj.period}</p>
                            <p>{proj.description}</p>
                            
                        <ul className="achievements-list">
                                {proj.achievements.map((item, i) => (
                                <li key={i}>{item}</li>
                                ))}
                            </ul>

                            <div className="tech-list">
                                {proj.tech.map((t, i) => (
                                <span className="tech-pill" key={i}>
                                    {t}
                                </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}