import "./proyectos.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import { projectsData } from "../../data/profile.js";
import useLanguage from "../../hooks/useLanguage.js"
console.log(projectsData)

export default function Projects() {

  const { translation } = useLanguage()

  return (
    <section className="projects">
      <SectionTitle title="Proyectos" />

      <div className="projects-wrapper">
        {projectsData.map((proj, index) => (
          <ProjectCard
            key={index}
            title={translation[proj.roleKey]}
            desc={translation[proj.descriptionKey]}
            image={proj.img}
            techs={proj.tech}
            achievements={translation[proj.achievementsKey]}
            live={proj.liveUrl}
            code={proj.codeUrl}
          />
        ))}
      </div>
    </section>
  );
}
