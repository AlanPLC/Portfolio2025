import { useEffect, useState } from "react";
import "./nav.scss";
import useActiveSection from "../../contexts/useActiveSection.js";
import useLanguage from "../../contexts/useLanguage.js";

function Nav() {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const { active, sectionsRefs } = useActiveSection();
  const [underlineStyle, setUnderlineStyle] = useState({});
  const { toogleLang, lang, translation } = useLanguage();
  const link = "https://www.youtube.com/watch?v=QxqiI50WPoM";
  const [showModal, setShowModal] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const email = "tuemail@ejemplo.com";

  const toggleMenu = () => {
    if (!isOpen && window.scrollY > 10) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      const checkScroll = () => {
        if (window.scrollY <= 10) {
          setIsOpen(true);
          window.removeEventListener("scroll", checkScroll);
        }
      };
      window.addEventListener("scroll", checkScroll);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setShowModal(true);
    setIsExiting(false);
    setTimeout(() => setIsExiting(true), 1000);
    setTimeout(() => {
      setShowModal(false);
      setIsExiting(false);
    }, 1500);
  };

  const NAV_ITEMS = [
    { key: "home", section: "home" },
    { key: "about", section: "about" },
    { key: "experience", section: "experience" },
    { key: "projects", section: "projects" },
    { key: "tools", section: "tools" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 880) {
        document.body.style.paddingTop = "0px";
        setIsOpen(false);
      }
    };

    if (isOpen && window.innerWidth <= 880) {
      document.body.style.paddingTop = "320px";
    } else {
      document.body.style.paddingTop = "0px";
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.paddingTop = "0px";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScrollVisibility = () => {
      const currentScroll = window.scrollY;

      if (isOpen && Math.abs(currentScroll - lastScroll) > 5) {
        setIsOpen(false);
      }

      if (currentScroll > lastScroll && currentScroll > 50) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScrollVisibility);
    return () => window.removeEventListener("scroll", handleScrollVisibility);
  }, [lastScroll, isOpen]);

useEffect(() => {
    const updatePosition = () => {
      const activeItem = document.querySelector(`.nav2 ul li.active`);
      const navContainer = document.querySelector(".nav2");
  
      if (activeItem && navContainer) {
        const rect = activeItem.getBoundingClientRect();
        const parentRect = navContainer.getBoundingClientRect();
        setUnderlineStyle({
          width: rect.width,
          left: rect.left - parentRect.left,
        });
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition); 

    return () => window.removeEventListener("resize", updatePosition);
}, [active, translation]); 

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
      <nav className={`${visible ? "nav show" : "nav hide"} ${isOpen ? "menu-open" : ""}`}>
          <div className="nav1" onClick={() => toogleLang()}>
            <div className="icon-wrapper">
              <img src="/project-icons/naver-dictionary-svgrepo-com.svg" className="icon icon-front" alt="lang" />
              <img src="/project-icons/davx5-svgrepo-com.svg" className="icon icon-back" alt="lang" />
            </div>
            <p key={lang}>{lang === "es" ? "Español" : "English"}</p>
          </div>
          <button className={`burger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`nav2 ${isOpen ? "open" : ""}`}>
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
              <img src="/project-icons/github-svgrepo-com.svg" alt="github" />
            </a>
            <button onClick={handleCopy}>
              <img src="/project-icons/fairemail-svgrepo-com.svg" alt="email" />
            </button>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img src="/project-icons/linkedin-svgrepo-com.svg" alt="linkedin" />
            </a>

          {showModal && (
            <div className={`copy-toast ${isExiting ? 'exit' : ''}`}>
              <p>¡Correo copiado!</p>
              <div className="progress-bar"></div>
            </div>
          )}
        </div>
      </nav>

    </>
  );
}

export default Nav;