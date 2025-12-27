import "./experience.scss";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import { experienceData } from "../../data/staticData.js"; 
import useActiveSection from "../../contexts/useActiveSection.js"
import useLanguage from "../../contexts/useLanguage.js";

export default function Experience() {
  const { sectionsRefs } = useActiveSection()
  const { translation } = useLanguage();
  const translatedExperience = Object.entries(translation.experience)

  return (
    <>
    <section id="experience" ref={el => sectionsRefs.current["experience"] = el}>
      <SectionTitle 
        id="experience" 
        title={translation.sections.experience} 
      />
      <div className="experience" >
        <div className="experience-container">
          {translatedExperience.map(([experienceId, exp], index) => {

            const staticExperience = experienceData[experienceId];
            
            return(
              <div key={index} className="experience-item">
                <div className="experience-details">
                  {/* 'role' y 'company' */}
                  <h3>{exp.role}</h3>
                  <h4>{exp.company}</h4>
                  <p>{exp.description}</p>
                  {exp.achievements && exp.achievements.length > 0 && (
                    <ul className="achievements-list">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                  {exp.tech && exp.tech.length > 0 && (
                    <div className="experience-techs">
                      {staticExperience.tech.map((techItem, idx) => (
                        <span key={idx} className="tech-tag">{techItem}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
    </>
  );
}