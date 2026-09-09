import React, { useState } from "react";
import useActiveSection from "../../contexts/useActiveSection.js"
import useLanguage from "../../contexts/useLanguage.js";
import ScrambleText from "../../components/ScrambleText/ScrambleText.jsx";
import "./presentation.scss";
import { profile } from "../../data/dataSource.js";

export default function Presentation() {
  const { name, avatar, links } = profile;
  const { setRef } = useActiveSection()
  const { translation } = useLanguage();
  const [showModal, setShowModal] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(links.contact);
    setShowModal(true);
    setIsExiting(false);
    setTimeout(() => setIsExiting(true), 1000);
    setTimeout(() => {
      setShowModal(false);
      setIsExiting(false);
    }, 1500);
  };

  return (
    <section className="presentation" aria-labelledby="presentation-heading" id="home" ref={setRef("home")}>
      <div className="presentation__card">
        <div className="presentation__left">
          <ScrambleText as="p" className="presentation__greeting" text={translation.presentation.greeting} />
          <h1 id="presentation-heading" className="presentation__name">
            {name}
          </h1>

          <ScrambleText as="p" className="presentation__desc" text={translation.presentation.description} />
          <div className="p__actions">
            <div className="presentation__meta">
              <span className="presentation__meta-item presentation__role" aria-hidden="true">
                <ScrambleText as="span" stableWidth text={translation.presentation.role[0]} />
              </span>
              <a
                className="presentation__meta-item presentation__cv-btn"
                href={links.cv}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ScrambleText as="span" stableWidth text={translation.presentation.cvButton} />
              </a>
            </div>

            <div className="presentation__social">
              <a
                className="presentation__social-link"
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <img src="/project-icons/github-svgrepo-com.svg" alt="" />
              </a>
              <button
                type="button"
                className="presentation__social-link"
                onClick={handleCopy}
                aria-label="Copiar correo electrónico"
              >
                <img src="/project-icons/fairemail-svgrepo-com.svg" alt="" />
              </button>
              <a
                className="presentation__social-link"
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <img src="/project-icons/linkedin-svgrepo-com.svg" alt="" />
              </a>

              {showModal && (
                <div className={`presentation__copy-toast ${isExiting ? "exit" : ""}`}>
                  <p>Correo Copiado</p>
                  <div className="progress-bar"></div>
                </div>
              )}
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
              width="1254"
              height="1254"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
