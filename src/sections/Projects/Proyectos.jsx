import "./proyectos.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard"; 
import { experience } from "../../data/profile.js";

export default function Projects() {
    return (
        <section className="projects">
            <div className="projects-title">
                <img src="./boost-for-reddit-svgrepo-com.svg" alt="project-icon" />
                <h2>Proyectos</h2>
            </div>

            <div className="projects-wrapper">
                {experience.map((proj, index) => (
                    <ProjectCard
                        key={index}
                        title={proj.role}
                        desc={proj.description}
                        image={proj.img}
                        techs={proj.tech}
                        live={proj.liveUrl}
                        code={proj.codeUrl}
                    />
                ))}
            </div>
        </section>
    );
}