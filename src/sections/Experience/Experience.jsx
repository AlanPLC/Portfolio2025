import { useState } from "react";
import "./experience.scss";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import { experienceData } from "../../data/dataSource.js";
import useActiveSection from "../../contexts/useActiveSection.js"
import useLanguage from "../../contexts/useLanguage.js";
import Reveal from "../../components/Reveal/Reveal.jsx";
import TechIcons from "../../components/TechIcons/TechIcons.jsx";
import ScrambleText from "../../components/ScrambleText/ScrambleText.jsx";

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
                      <ScrambleText as="h3" text={exp.role} />

                      <div className="experience-meta-row">
                        <div className="experience-company">
                          <img src="/titleIcons/briefcase-svgrepo-com.svg" alt="" className="experience-company__logo" />
                          {staticExperience.companyUrl ? (
                            <a
                              href={staticExperience.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="experience-company__link"
                            >
                              <ScrambleText as="h4" text={exp.company} />
                            </a>
                          ) : (
                            <ScrambleText as="h4" text={exp.company} />
                          )}
                        </div>
                        <div className="experience-date">
                          <svg viewBox="0 0 24 24" className="experience-date__icon" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                          <ScrambleText as="span" text={exp.date} />
                        </div>
                      </div>

                      <ScrambleText as="p" text={exp.description} />

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
                              <ScrambleText as="span" stableWidth className="tech-icons__label" text={translation.labels.viewRepo} />
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
                            <ScrambleText as="span" stableWidth text={translation.labels.keyResults} />
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
                                <li key={idx}><ScrambleText as="span" text={achievement} /></li>
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