import React from "react";
import "./projectCard.scss";
import TechIcons from "../TechIcons/TechIcons";

export default function ProjectCard({ 
    title, 
    desc, 
    image, 
    techs = [], 
    live, 
    code,
    achievements = []
}) {
  return (
    <article className="project-card">
      <div className="project-card__thumb">
        <img src={image} alt={`${title} preview`} loading="lazy" />
        <div className="project-card__fill" aria-hidden="true" />
      </div>

      <div className="project-card__meta">
        
        {/* INICIO: CONTENEDOR DE DIVISIÓN IZQUIERDA/DERECHA */}
        <div className="project-card__content-split">
            
            {/* LADO IZQUIERDO: DESCRIPCIÓN Y BOTONES */}
            <div className="project-card__left">
                <h3 className="project-card__title">{title}</h3>
                <p className="project-card__desc">{desc}</p>

                <div className="project-card__bottom">
                    <TechIcons techs={techs} />
                    <div className="project-card__buttons">
                        {code && <a className="btn btn--ghost" href={code} target="_blank" rel="noreferrer">Code</a>}
                        {live && <a className="btn btn--primary" href={live} target="_blank" rel="noreferrer">Live</a>}
                    </div>
                </div>
            </div>

            {/* ESPACIO PARA LA LÍNEA VERTICAL*/}
            <div className="project-card__separator"></div>

            {/* LADO DERECHO: LOGROS Y METADATA */}
            <div className="project-card__right">
                <h4 className="project-card__section-title">Resultados Clave</h4>
                <ul className="project-card__achievements-list">
                    {achievements.map((item, index) => (
                        <li key={index}>
                            <span className="achievement-icon">⚡</span> {item}
                        </li>
                    ))}
                </ul>
            </div>

        </div>

      </div>
    </article>
  );
}