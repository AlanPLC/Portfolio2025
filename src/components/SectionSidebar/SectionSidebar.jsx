import { useEffect, useRef, useState } from "react";
import useActiveSection from "../../contexts/useActiveSection.js";
import useLanguage from "../../contexts/useLanguage.js";
import { HomeIcon, AboutIcon } from "../icons/sectionIcons.jsx";
import ScrambleText from "../ScrambleText/ScrambleText.jsx";
import "./sectionSidebar.scss";

const SECTIONS = [
  { key: "home", icon: <HomeIcon /> },
  { key: "about", icon: <AboutIcon /> },
  { key: "experience", icon: <img src="/titleIcons/briefcase-svgrepo-com.svg" alt="" /> },
  { key: "projects", icon: <img src="/titleIcons/boost-for-reddit-svgrepo-com.svg" alt="" /> },
  { key: "tools", icon: <img src="/titleIcons/code-editor-svgrepo-com.svg" alt="" /> },
];

const TAP_FLASH_MS = 1400;

export default function SectionSidebar() {
  const { active, sectionsRefs } = useActiveSection();
  const { toogleLang, lang, translation } = useLanguage();
  const labels = translation.nav.navItems;

  // En touch (mobile/tablet) no hay :hover que revele el label, asi que al
  // tocar un boton lo mostramos igual, brevemente, y se oculta solo.
  const [tappedKey, setTappedKey] = useState(null);
  const tapTimeoutRef = useRef(null);

  useEffect(() => () => clearTimeout(tapTimeoutRef.current), []);

  const flashLabel = (key) => {
    setTappedKey(key);
    clearTimeout(tapTimeoutRef.current);
    tapTimeoutRef.current = setTimeout(() => setTappedKey(null), TAP_FLASH_MS);
  };

  const handleClick = (id) => {
    sectionsRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
    flashLabel(id);
  };

  return (
    <nav className="section-sidebar" aria-label="Secciones">
      <button
        type="button"
        className={`section-sidebar__item section-sidebar__item--lang ${tappedKey === "lang" ? "is-tapped" : ""}`}
        onClick={() => {
          toogleLang();
          flashLabel("lang");
        }}
        aria-label={lang === "es" ? "Cambiar a inglés" : "Switch to Spanish"}
      >
        <ScrambleText
          as="span"
          className="section-sidebar__label"
          text={lang === "es" ? "Español" : "English"}
        />
        <span className="section-sidebar__icon">
          <img
            src="/project-icons/naver-dictionary-svgrepo-com.svg"
            className="section-sidebar__lang-icon section-sidebar__lang-icon--front"
            alt=""
          />
          <img
            src="/project-icons/davx5-svgrepo-com.svg"
            className="section-sidebar__lang-icon section-sidebar__lang-icon--back"
            alt=""
          />
        </span>
      </button>

      {SECTIONS.map((section, index) => (
        <button
          key={section.key}
          type="button"
          className={`section-sidebar__item ${active === section.key ? "is-active" : ""} ${tappedKey === section.key ? "is-tapped" : ""}`}
          onClick={() => handleClick(section.key)}
          aria-label={labels[index]}
          aria-current={active === section.key}
        >
          <ScrambleText as="span" className="section-sidebar__label" text={labels[index]} />
          <span className="section-sidebar__icon">{section.icon}</span>
        </button>
      ))}
    </nav>
  );
}
