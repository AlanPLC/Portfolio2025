import { useEffect, useState } from "react";
import './nav.scss'
import { profile } from "../../data/profile.js"


function Nav() {
  const { name } = profile
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  var link = "https://www.youtube.com/watch?v=QxqiI50WPoM"
  //Efecto ocultar navbar scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // si baja → ocultar
      if (currentScroll > lastScroll) {
        setVisible(false);
      } 
      // si sube → mostrar
      else {
        setVisible(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <>
      <nav className={visible ? "nav show" : "nav hide"}>
        <div className='nav1'>
            <h2>{name}.</h2>
        </div>
        <div className='nav2'>
            <ul>
                <li>Inicio</li>
                <li>Sobre mí</li>
                <li>Proyectos</li>
                <li>Herramientas</li>
            </ul>
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