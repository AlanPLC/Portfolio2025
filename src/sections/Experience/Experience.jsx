import { useState } from "react";
import "./experience.scss";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import { experienceData } from "../../data/dataSource.js";
import useActiveSection from "../../contexts/useActiveSection.js"
import useLanguage from "../../contexts/useLanguage.js";
import Reveal from "../../components/Reveal/Reveal.jsx";
import TechIcons from "../../components/TechIcons/TechIcons.jsx";

export default function Experience() {
  const { setRef } = useActiveSection();
  const { translation } = useLanguage();
  const translatedExperience = Object.entries(translation.experience);
  const [openAchievements, setOpenAchievements] = useState(() => new Set());

  const toggleAchievements = (experienceId) => {
    setOpenAchievements((prev) => {
      const next = new Set(prev);
      if (next.has(experienceId)) {
        next.delete(experienceId);
      } else {
        next.add(experienceId);
      }
      return next;
    });
  };

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
            const hasAchievements = exp.achievements && exp.achievements.length > 0;
            const isOpen = openAchievements.has(experienceId);

            return (
              <div key={experienceId}>
                {index > 0 && <div className="experience-divider" aria-hidden="true" />}
                <Reveal sectionId="experience" delay={index * 0.2}>
                  <div className="experience-item">
                    <div className={`experience-details${hasAchievements && !isOpen ? " is-collapsed" : ""}`}>
                      <h3>{exp.role}</h3>

                      <div className="experience-meta-row">
                        <div className="experience-company">
                          <img src="/titleIcons/briefcase-svgrepo-com.svg" alt="" className="experience-company__logo" />
                          <h4>{exp.company}</h4>
                        </div>
                        <div className="experience-date">
                          <svg viewBox="0 0 24 24" className="experience-date__icon" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                          <span>{exp.date}</span>
                        </div>
                      </div>

                      <p>{exp.description}</p>

                      {(staticExperience.tech?.length > 0 || staticExperience.githubUrl) && (
                        <TechIcons
                          techs={staticExperience.tech || []}
                          action={staticExperience.githubUrl && (
                            <a
                              href={staticExperience.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="tech-icons__pill repo-link"
                            >
                              <img src="/project-icons/code-editor-svgrepo-com.svg" alt="" className="tech-icons__icon" />
                              <span className="tech-icons__label">{translation.labels.viewRepo}</span>
                            </a>
                          )}
                        />
                      )}

                      {exp.achievements && exp.achievements.length > 0 && (
                        <>
                          <button
                            type="button"
                            className="achievements-toggle"
                            onClick={() => toggleAchievements(experienceId)}
                            aria-expanded={isOpen}
                          >
                            <span>{translation.labels.keyResults}</span>
                            <svg
                              className={`achievements-toggle__chevron ${isOpen ? "is-open" : ""}`}
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </button>

                          <div className={`achievements-collapse ${isOpen ? "is-open" : ""}`}>
                            <ul className="achievements-list">
                              {exp.achievements.map((achievement, idx) => (
                                <li key={idx}>{achievement}</li>
                              ))}
                            </ul>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}