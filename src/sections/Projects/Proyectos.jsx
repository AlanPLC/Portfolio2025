import { projectsData } from "../../data/profile.js";
import { sectionRefs } from "../../hooks/useActiveSection.jsx"
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import useLanguage from "../../hooks/useLanguage";
import "./proyectos.scss"

export default function Projects() {
  const { translation } = useLanguage();
  const translatedProjects = translation.projects;

  return (
    <>
      <SectionTitle title="Proyectos" id="projects"/>
      <section className="projects" ref={el => sectionRefs.current["projects"] = el}> 
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
      </section>
    </>
  );
}
