import React from "react";
import "./projectCard.scss";
import TechIcons from "../TechIcons/TechIcons";

// sample props: { title, desc, image, techs, live, code }
export default function ProjectCard({ title, desc, image, techs = [], live, code }) {
  return (
    <article className="project-card" tabIndex={0}>
      <div className="project-card__thumb">
        <img src={image} alt={`${title} preview`} loading="lazy" />
        <div className="project-card__fill" aria-hidden="true" />
      </div>

      <div className="project-card__meta">
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
    </article>
  );
}
