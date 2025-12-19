import "./herramientas.scss";
import { useEffect, useRef } from "react";
import { toolsData } from "../../data/staticData.js";
import useActiveSection from "../../contexts/useActiveSection.js"
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import TechIconsTools from "../../components/TechIcons/techIconsTools.jsx";
import useLanguage from "../../contexts/useLanguage.js";

export default function Tools() {
  const progressRefs = useRef([]);
  const { sectionsRefs } = useActiveSection()
  const { translation } = useLanguage();
  const translatedTools = translation.tools;

  // Agrupar herramientas por categoría
 const grouped = Object.entries(toolsData).reduce((acc, [toolId, staticInfo]) => {
  const toolTranslation = translatedTools[toolId] || {};

  const fullTool = {
    id: toolId,
    ...staticInfo,    
    category: toolTranslation.category || "Otros"
  };

  const category = fullTool.category;
  
  if (!acc[category]) {
    acc[category] = [];
  }
  
  acc[category].push(fullTool);
  
  return acc;
}, {});


  //Observer para cada barra cambiando su tamaño según porcentaje cuando entra al vp
  useEffect(() => {
  const allRefs = Object.values(progressRefs.current);
  if (!allRefs.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const percent = entry.target.style.getPropertyValue("--percent");
          entry.target.style.width = percent;
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  allRefs.forEach((ref) => ref && observer.observe(ref));

  return () => observer.disconnect();
}, [grouped]);

  return (
    <>
      <section ref={el => sectionsRefs.current["tools"] = el} id="tools">
        <SectionTitle id="tools" title={translation.sections.tools} />
        <section className="tools">
          <div className="progressbar-container">
          
            {Object.entries(grouped).map(([category, items], index) => (
              <div key={index} className="tools-category">
                <h3>{category}</h3>
                <hr />

                {items.map((tool) => {
                  const id = `${category}-${tool.id}`;

                  return (
                    <div className="tool-container" key={id}>
                      <div className="tecnology-table">
                        <TechIconsTools techs={tool.techs} className="techicons" />
                      </div>

                      <div className="progressbar">
                        <div
                          className="inner-progressbar"
                          style={{ "--percent": `${tool.percentage}%` }}
                          ref={(el) => (progressRefs.current[id] = el)}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}
