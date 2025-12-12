import { useEffect, useState } from "react";
import "./nav.scss";
import { profile } from "../../data/staticData.js";
import useActiveSection from "../../contexts/useActiveSection.js";
import useLanguage from "../../contexts/useLanguage.js";

function Nav() {
  const { name } = profile;
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const { active, sectionsRefs } = useActiveSection();
  const [underlineStyle, setUnderlineStyle] = useState({});
  const { toogleLang, lang, translation } = useLanguage();
  var link = "https://www.youtube.com/watch?v=QxqiI50WPoM";

  const NAV_ITEMS = [
    { key: "home", section: "home" },
    { key: "experience", section: "experience" },
    { key: "about", section: "about" },
    { key: "projects", section: "projects" },
    { key: "tools", section: "tools" },
  ];

  //Efecto ocultar navbar scroll
  useEffect(() => {
    const handleScrollVisibility = () => {
      const currentScroll = window.scrollY;

      // si baja se oculta
      if (currentScroll > lastScroll) {
        setVisible(false);
      }
      // si sube se muestra
      else {
        setVisible(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScrollVisibility);
    return () => window.removeEventListener("scroll", handleScrollVisibility);
  }, [lastScroll]);

  useEffect(() => {
    const activeItem = document.querySelector(`.nav2 ul li.active`);
    if (activeItem) {
      const rect = activeItem.getBoundingClientRect();
      const parentRect = activeItem.parentNode.getBoundingClientRect();

      setUnderlineStyle({
        width: rect.width,
        left: rect.left - parentRect.left,
      });
    }
  }, [active]);

  //Scroll a section
  const handleScroll = (id) => {
    const section = sectionsRefs.current[id];
    if (!section) return;

    const closeNav = () => {
      setVisible(true);
      window.removeEventListener("scrollend", closeNav);
    };

    // Si el navegador soporta scrollend
    window.addEventListener("scrollend", closeNav, { once: true });

    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={visible ? "nav show" : "nav hide"}>
        <div className="nav1" onClick={() => toogleLang()}>
          <div className="icon-wrapper">
            <img
              src="naver-dictionary-svgrepo-com.svg"
              className="icon icon-front"
              alt="language-icon"
            />
            <img
              src="davx5-svgrepo-com.svg"
              className="icon icon-back"
              alt="language-icon"
            />
          </div>
          <p key={lang}>{lang === "es" ? "Español" : "English"}</p>
        </div>
        <div className="nav2">
          <ul>
            {NAV_ITEMS.map((item, i) => (
              <li
                key={item.key}
                className={active === item.section ? "active" : ""}
                onClick={() => handleScroll(item.section)}
              >
                {translation.nav.navItems[i]}
              </li>
            ))}
          </ul>
          <span className="underline" style={underlineStyle}></span>
        </div>
        <div className="nav3">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img src="among-us-svgrepo-com.svg" alt="amongus" />
          </a>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img src="github-svgrepo-com.svg" alt="github" />
          </a>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img src="linkedin-svgrepo-com.svg" alt="linkedin" />
          </a>
        </div>
      </nav>
    </>
  );
}

export default Nav;
