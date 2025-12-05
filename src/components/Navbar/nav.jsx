import { useEffect, useState } from "react";
import './nav.scss'
import { profile } from "../../data/profile.js"
import useActiveSection from "../../contexts/useActiveSection.js";

function Nav() {
  const { name } = profile
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const {active, sectionsRefs} = useActiveSection()
  const [underlineStyle, setUnderlineStyle] = useState({});
  var link = "https://www.youtube.com/watch?v=QxqiI50WPoM"
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
        left: rect.left - parentRect.left
      });
    }
  }, [active]);

  //Scroll a section
  const handleScroll = (id) => {
    const section = sectionsRefs.current[id];
    if (!section) return;

    const closeNav = () => {
      setVisible(false);
      window.removeEventListener("scrollend", closeNav);
    };

    // Si el navegador soporta scrollend
    window.addEventListener("scrollend", closeNav, { once: true });

    section.scrollIntoView({ behavior: "smooth" });
  };



  return (
    <>
      <nav className={visible ? "nav show" : "nav hide"}>
        <div className='nav1'>
            <h2>{name}.</h2>
        </div>
        <div className='nav2'>
            <ul>
                <li
                className={active === "home" ? "active" : ""}
                onClick={()=>handleScroll("home")}
                >Inicio</li>
                <li
                className={active === "experience" ? "active" : ""}
                onClick={()=>handleScroll("experience")}
                >Experiencia</li>
                <li
                className={active === "about" ? "active" : ""}
                onClick={()=>handleScroll("about")}
                >Sobre Mí</li>
                <li
                className={active === "projects" ? "active" : ""}
                onClick={()=>handleScroll("projects")}
                >Proyectos</li>
                <li
                className={active === "tools" ? "active" : ""}
                onClick={()=>handleScroll("tools")}
                >Herramientas</li>
            </ul>
            <span className="underline" style={underlineStyle}></span>
        </div>
        <div className='nav3'>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img src="among-us-svgrepo-com.svg" alt="amongus"/>
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
  )
}

export default Nav