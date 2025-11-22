import React from "react";
import { profile } from "../../data/profile.js";
import "./presentation.scss";

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
            <span className="presentation__role" aria-hidden="true">
              {role}
            </span>
          </div>

          <p className="presentation__desc">{description}</p>
          <div className="presentation__actions">
            <a
              className="btn btn--primary"
              href={links.cv}
              target="_blank"
              rel="noopener noreferrer"
            >
              Descargar CV
            </a>
          </div>
        </div>

        <div className="presentation__avatar-wrap" aria-hidden="false">
          <div
            className="presentation__avatar-frame"
            role="img"
            aria-label={`Avatar de ${name}`}
          >
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
