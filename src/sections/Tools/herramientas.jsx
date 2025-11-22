import "./herramientas.scss";
import { useEffect, useRef } from "react";
import { tools } from "../../data/profile.js";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";

export default function Tools() {
  const progressRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.width =
              entry.target.style.getPropertyValue("--percent");
            observer.unobserve(entry.target); // Solo animar una vez
          }
        });
      },
      { threshold: 0.5 } // Se activa cuando el 50% es visible
    );

    progressRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
  }, []);

  return (
    <>
      <SectionTitle title="Herramientas" />
      <section className="tools">
        <div className="progressbar-container">
          {tools.map((tool, index) => (
            <div className="tool-container" key={index}>
              <img src={tool.img} alt={tool.name} />
              <div
                className="progressbar"
                style={{ "--percent": `${tool.percentage}%` }}
                ref={(el) => (progressRefs.current[index] = el)}
              >
                <div className="inner-progressbar"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
