import "./tools.scss";
import { useEffect, useRef } from "react";
import { toolsData } from "../../data/dataSource.js";
import useActiveSection from "../../contexts/useActiveSection.js"
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import TechIconsTools from "../../components/TechIcons/techIconsTools.jsx";
import useLanguage from "../../contexts/useLanguage.js";
import Reveal from "../../components/Reveal/Reveal.jsx";

export default function Tools() {
  const progressRefs = useRef([]);
  const { setRef } = useActiveSection()
  const { translation } = useLanguage();
  const translatedTools = translation.tools;

  const grouped = Object.entries(toolsData).reduce((acc, [toolId, staticInfo]) => {
    const toolTranslation = translatedTools[toolId] || {};
    const fullTool = {
      id: toolId,
      ...staticInfo,    
      category: toolTranslation.category || "Otros"
    };
    const category = fullTool.category;
    if (!acc[category]) acc[category] = [];
    acc[category].push(fullTool);
    return acc;
  }, {});

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
    <section ref={setRef("tools")} id="tools">
      <Reveal sectionId="tools">
        <SectionTitle id="tools" title={translation.sections.tools} />
      </Reveal>

      <section className="tools">
        <Reveal sectionId="tools" delay={0.2}>
          <div className="progressbar-container">
            {Object.entries(grouped).map(([category, items], catIndex) => (
              <div key={catIndex} className="tools-category">
                
                <Reveal sectionId="tools" delay={0.3 + (catIndex * 0.1)}>
                  <h3>{category}</h3>
                </Reveal>

                {items.map((tool, toolIndex) => {
                  const id = `${category}-${tool.id}`;
                  return (
                    <Reveal 
                      key={id} 
                      sectionId="tools" 
                      delay={0.4 + (catIndex * 0.1) + (toolIndex * 0.05)}
                    >
                      <div className="tool-container">
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
                    </Reveal>
                  );
                })}
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </section>
  );
}