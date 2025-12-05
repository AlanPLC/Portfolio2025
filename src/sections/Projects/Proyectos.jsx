import { projectsData } from "../../data/profile.js";
import useActiveSection from "../../contexts/useActiveSection.js"
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import useLanguage from "../../contexts/useLanguage.js";
import "./proyectos.scss"

export default function Projects() {
  const { translation } = useLanguage();
  const translatedProjects = translation.projects;
  const { sectionsRefs } = useActiveSection()

  return (
    <>
    <section ref={el => sectionsRefs.current["projects"] = el} id="projects">
      <SectionTitle title="Proyectos"/>
      <div className="projects"> 
        <div className="projects-wrapper">
          {Object.entries(translatedProjects).map(([projectId, proj], index) => {
            
            const staticData = projectsData[projectId];

            return (
              <ProjectCard
                key={index}
                title={proj.role}
                desc={proj.description}
                image={staticData.img}
                techs={staticData.tech}
                achievements={proj.achievements}
                live={staticData.liveUrl}
                code={staticData.codeUrl}
              />
            );
          })}
        </div>
      </div>
    </section>
    </>
  );
}
