import React from "react";
import profile from "../../data/profileSimon";
import "./Presentation.scss";

export default function Presentation() {
  const { greeting, name, role, description, avatar, links } = profile;

  return (
    <section className="presentation" aria-labelledby="presentation-heading">
      <div className="presentation__card">
        <div className="presentation__left">
          <p className="presentation__greeting">{greeting}</p>
          <h1 id="presentation-heading" className="presentation__name">
            {name}
          </h1>
          <div className="presentation__meta">
            <span className="presentation__role" aria-hidden="true">{role}</span>
            <div className="presentation__actions">
              <a
                className="btn btn--primary"
                href={links.cv}
                target="_blank"
                rel="noopener noreferrer"
              >
                Descargar CV
              </a>
              <a
                className="btn btn--ghost"
                href={links.contact}
              >
                Contactar
              </a>
            </div>
          </div>

          <p className="presentation__desc">{description}</p>

          <nav className="presentation__social" aria-label="Enlaces sociales">
            {links.github && (
              <a className="presentation__social-link" href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            )}
            {links.linkedin && (
              <a className="presentation__social-link" href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            )}
          </nav>
        </div>

        <div className="presentation__avatar-wrap" aria-hidden="false">
          <div className="presentation__avatar-frame" role="img" aria-label={`Avatar de ${name}`}>
            <img
              className="presentation__avatar"
              src={avatar}
              alt={`Avatar de ${name}`}
              loading="lazy"
              width="640"
              height="640"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
