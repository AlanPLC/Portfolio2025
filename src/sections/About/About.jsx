import { useState } from "react";
import "./about.scss";
import useActiveSection from "../../contexts/useActiveSection.js";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import useLanguage from "../../contexts/useLanguage.js";

export default function About() {
  const [active, setActive] = useState(0); 
  const { sectionsRefs } = useActiveSection();
  const { translation } = useLanguage();
  const translatedAbout = Object.values(translation.about);

  return (
    <section ref={(el) => (sectionsRefs.current["about"] = el)} id="about">
      <SectionTitle id="experience" title={translation.sections.about} />
      
      <div className="about-accordion-container">
        <div className="about-accordion">
          <div className="about-accordion-list">
            {translatedAbout.map((item, index) => (
              <div
                key={index}
                className={`accordion-item ${active === index ? "active" : ""}`}
              >
                <button
                  className="accordion-title"
                  onClick={() => setActive(active === index ? -1 : index)}
                >
                  <span className="title-number">0{index + 1}</span>
                  {item.title}
                </button>

                <div
                  className="accordion-content"
                  style={{
                    maxHeight: active === index ? "400px" : "0px",
                    opacity: active === index ? 1 : 0,
                  }}
                >
                  {item.isList ? (
                    <div className="education-list">
                      {item.items.map((edu, i) => (
                        <div key={i} className="education-item">
                          <div className="edu-header">
                            <span className="edu-title">{edu.title}</span>
                            <span className="edu-year">{edu.year}</span>
                          </div>
                          <p className="edu-institution">{edu.institution}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="description-text">{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}