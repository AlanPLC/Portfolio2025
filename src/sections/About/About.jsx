import { useState } from "react";
import "./about.scss";
import { about } from "../../data/profile.js"
import useActiveSection from "../../contexts/useActiveSection.js"
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";

export default function About() {
  const [active, setActive] = useState(0); // Primer acordeón abierto
  const items = about
  const { sectionsRefs } = useActiveSection()
  
  return (
    <>
    <section ref={el=>sectionsRefs.current["about"] = el} id="about">
      <SectionTitle title="Sobre mí"/>
      <div className="about-accordion">
        {/* Imagen que cambia según el activo */}
        <div className="about-accordion-image">
          <img src={items[active].img} alt={items[active].title} />
        </div>

        <div className="about-accordion-list">
          {items.map((item, index) => (
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