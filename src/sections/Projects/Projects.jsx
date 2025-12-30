import { projectsData } from "../../data/staticData.js";
import useActiveSection from "../../contexts/useActiveSection.js";
import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import Reveal from "../../components/Reveal/Reveal.jsx"; 
import useLanguage from "../../contexts/useLanguage.js";
import "./projects.scss";

export default function Projects() {
  const { translation, lang } = useLanguage();
  const translatedProjects = translation.projects;
  const { setRef } = useActiveSection();

  return (
    <section ref={setRef("projects")} id="projects">
      <Reveal sectionId="projects">
        <SectionTitle id="projects" title={translation.sections.projects}/>
      </Reveal>

      <div className="projects"> 
        <div className="projects-wrapper stagger">
          {Object.entries(translatedProjects).map(([projectId, proj], index) => {
            const staticData = projectsData[projectId];

            return (
              <Reveal 
                key={projectId} 
                sectionId="projects" 
                delay={index * 0.2} 
              >
                <ProjectCard
                  title={proj.role}
                  company={proj.company}
                  desc={proj.description}
                  image={staticData.img}
                  techs={staticData.tech}
                  results={lang === "es" ? "Resultados Clave" : "Key Results"}
                  achievements={proj.achievements}
                  live={staticData.liveUrl}
                  code={staticData.codeUrl}
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}