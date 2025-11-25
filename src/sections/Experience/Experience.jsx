import "./experience.scss";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import { experienceData } from "../../data/profile.js"; 

export default function Experience() {
  return (
    <>
      {/*
          - 'title' prop para el texto del título
          - 'icon' prop para el icono
      */}
      <SectionTitle title="Experiencia"/> 

      <section className="experience">
        <div className="experience-container">
          {experienceData.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-details">
                {/* 'role' y 'company' */}
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
                {exp.achievements && exp.achievements.length > 0 && (
                  <ul className="achievements-list">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>⚡ {achievement}</li>
                    ))}
                  </ul>
                )}
                {exp.tech && exp.tech.length > 0 && (
                  <div className="experience-techs">
                    {exp.tech.map((techItem, idx) => (
                      <span key={idx} className="tech-tag">{techItem}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}