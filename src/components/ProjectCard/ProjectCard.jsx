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
    results,
    achievements = []
}) {
  return (
    <article className="project-card">
      <div className="project-card__thumb">
        <img src={image} alt={`${title} preview`} loading="lazy" />

        <div className="project-card__actions">
          {code && (
            <a href={code} target="_blank" rel="noreferrer" className="action-btn" title="View Code">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
              <span>Code</span>
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noreferrer" className="action-btn action-btn--primary" title="Live Demo">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              <span>Live</span>
            </a>
          )}
        </div>
        
        <div className="project-card__fill" aria-hidden="true" />
      </div>

      <div className="project-card__meta">
        <div className="project-card__content-split">
            <div className="project-card__left">
                <h3 className="project-card__title">{title}</h3>
                <p className="project-card__desc">{desc}</p>

                <div className="project-card__bottom">
                    <TechIcons techs={techs} />
                </div>
            </div>

            <div className="project-card__separator"></div>

            <div className="project-card__right">
                <h4 className="project-card__section-title">{results}</h4>
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