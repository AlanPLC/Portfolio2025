import "./proyectos.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { experience } from "../../data/profile.js";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";

export default function Projects() {
  return (
    <section className="projects">
      <SectionTitle title="Proyectos" />

      <div className="projects-wrapper">
        {experience.map((proj, index) => (
          <ProjectCard
            key={index}
            title={proj.role}
            desc={proj.description}
            image={proj.img}
            techs={proj.tech}
            achievements={proj.achievements}
            live={proj.liveUrl}
            code={proj.codeUrl}
          />
        ))}
      </div>
    </section>
  );
}
