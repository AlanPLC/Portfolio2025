import React from "react";
import useActiveSection from "../../contexts/useActiveSection.js"
import useLanguage from "../../contexts/useLanguage.js";
import "./presentation.scss";
import { profile } from "../../data/dataSource.js";

export default function Presentation() {
  const { name, avatar, links } = profile;
  const { setRef } = useActiveSection()
  const { translation } = useLanguage();

  return (
    <section className="presentation" aria-labelledby="presentation-heading" id="home" ref={setRef("home")}>
      <div className="presentation__card">
        <div className="presentation__left">
          <p className="presentation__greeting">{translation.presentation.greeting}</p>
          <h1 id="presentation-heading" className="presentation__name">
            {name}
          </h1>

          <p className="presentation__desc">{translation.presentation.description}</p>
          <div className="p__actions">
            <div className="presentation__meta">
              <span className="presentation__meta-item presentation__role" aria-hidden="true">
                {translation.presentation.role[0]}
              </span>
              <a
                className="presentation__meta-item presentation__cv-btn"
                href={links.cv}
                target="_blank"
                rel="noopener noreferrer"
              >
                {translation.presentation.cvButton}
              </a>
            </div>
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
