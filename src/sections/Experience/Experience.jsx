import "./experience.scss";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import { experienceData } from "../../data/staticData.js"; 
import useActiveSection from "../../contexts/useActiveSection.js"
import useLanguage from "../../contexts/useLanguage.js";
import Reveal from "../../components/Reveal/Reveal.jsx";

export default function Experience() {
  const { setRef } = useActiveSection();
  const { translation } = useLanguage();
  const translatedExperience = Object.entries(translation.experience);

  return (
    <section id="experience" ref={setRef("experience")}>
      <Reveal sectionId="experience">
        <SectionTitle 
          id="experience" 
          title={translation.sections.experience} 
        />
      </Reveal>

      <div className="experience">
        <div className="experience-container">
          {translatedExperience.map(([experienceId, exp], index) => {
            const staticExperience = experienceData[experienceId];
            
            return (
              <div key={experienceId}>
                <Reveal sectionId="experience" delay={index * 0.2}>
                  <div className="experience-item">
                    <div className="experience-details">
                      <h3>{exp.role}</h3>
                      <h4>{exp.company}</h4>
                      <span className="experience-date">{staticExperience.date}</span>
                      <p>{exp.description}</p>
                      
                      {exp.achievements && exp.achievements.length > 0 && (
                        <ul className="achievements-list">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      )}
                      
                      {staticExperience.tech && staticExperience.tech.length > 0 && (
                        <div className="experience-techs">
                          {staticExperience.tech.map((techItem, idx) => (
                            <span key={idx} className="tech-tag">{techItem}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Reveal>
                
                {index < translatedExperience.length - 1 && (
                  <Reveal sectionId="experience" delay={index * 0.2 + 0.1}>
                    <hr />
                  </Reveal>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}