import { useState } from "react";
import "./about.scss";
import { aboutImgs } from "../../data/staticData.js"
import useActiveSection from "../../contexts/useActiveSection.js"
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import useLanguage from "../../contexts/useLanguage.js";

export default function About() {
  const [active, setActive] = useState(0); // Primer acordeón abierto
  aboutImgs
  const { sectionsRefs } = useActiveSection()
  const { translation } = useLanguage();
  const translatedAbout = Object.values(translation.about);
  return (
    <>
    <section ref={el=>sectionsRefs.current["about"] = el} id="about">
      <SectionTitle id="experience" title={translation.sections.about}/>
      <div className="about-accordion">
        {/* Imagen que cambia según el activo */}
        <div className="about-accordion-image">
          <img src={aboutImgs[active].img} alt={aboutImgs[active].title} />
        </div>

        <div className="about-accordion-list">
          {translatedAbout.map((item, index) => (
            <div key={index} className="accordion-item">
              
              {/* Título del acordeón */}
              <button
                className={`accordion-title ${active === index ? "active" : ""}`}
                onClick={() => setActive(index)}
              >
                {item.title}
              </button>

              {/* Contenido del acordeón */}
              <div
                className="accordion-content"
                style={{
                  maxHeight: active === index ? "200px" : "0px",
                  opacity: active === index ? 1 : 0
                }}
              >
                <p>{item.description}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}