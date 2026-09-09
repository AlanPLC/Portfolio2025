import { useState } from "react";
import "./about.scss";
import useActiveSection from "../../contexts/useActiveSection.js";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import { AboutIcon } from "../../components/icons/sectionIcons.jsx";
import useLanguage from "../../contexts/useLanguage.js";
import Reveal from "../../components/Reveal/Reveal.jsx";
import ScrambleText from "../../components/ScrambleText/ScrambleText.jsx";
import { experienceData } from "../../data/dataSource.js";

const BANDS_URL = experienceData.experienceBands?.companyUrl;

// El texto menciona "BandS" en algunos parrafos: si esta presente, lo separa
// para que ese fragmento en particular sea un link (el resto sigue
// decodificandose normal via ScrambleText).
function AboutParagraph({ text }) {
  if (!BANDS_URL || !text.includes("BandS")) {
    return <ScrambleText as="p" className="description-text" text={text} />;
  }

  const parts = text.split(/(BandS)/);
  return (
    <p className="description-text">
      {parts.map((part, i) =>
        part === "BandS" ? (
          <a
            key={i}
            href={BANDS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="about-bands-link"
          >
            <ScrambleText as="span" text={part} />
          </a>
        ) : (
          <ScrambleText key={i} as="span" text={part} />
        )
      )}
    </p>
  );
}

export default function About() {
  const [active, setActive] = useState(0);
  const { setRef } = useActiveSection();
  const { translation } = useLanguage();
  const translatedAbout = Object.values(translation.about);

  return (
    <section ref={setRef("about")} id="about">
      <Reveal sectionId="about">
        <SectionTitle id="about" title={translation.sections.about} icon={<AboutIcon />} />
      </Reveal>
      
      <Reveal sectionId="about" delay={0.2}>
        <div className="about-accordion-container">
          <div className="about-accordion">
            <div className="about-accordion-list">
              {translatedAbout.map((item, index) => (
                <Reveal key={index} sectionId="about" delay={0.3 + (index * 0.15)}>
                  <div className={`accordion-item ${active === index ? "active" : ""}`}>
                    <button
                      className="accordion-title"
                      onClick={() => setActive(active === index ? -1 : index)}
                    >
                      <span className="title-number">0{index + 1}</span>
                      <ScrambleText as="span" text={item.title} />
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
                                <ScrambleText as="span" className="edu-title" text={edu.title} />
                                <ScrambleText as="span" className="edu-year" text={edu.year} />
                              </div>
                              <ScrambleText as="p" className="edu-institution" text={edu.institution} />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <AboutParagraph text={item.description} />
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}