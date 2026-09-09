import "./tools.scss";
import { toolsData } from "../../data/dataSource.js";
import useActiveSection from "../../contexts/useActiveSection.js"
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import TechIconsTools from "../../components/TechIcons/techIconsTools.jsx";
import LightRays from "../../components/LightRays/LightRays.jsx";
import useLanguage from "../../contexts/useLanguage.js";
import Reveal from "../../components/Reveal/Reveal.jsx";
import { getTechIcon } from "../../utils/simpleIconsMap.js";
import ScrambleText from "../../components/ScrambleText/ScrambleText.jsx";

export default function Tools() {
  const { setRef } = useActiveSection()
  const { translation } = useLanguage();
  const translatedTools = translation.tools;

  // Cada tecnologia se individualiza como su propio badge (deduplicada por
  // categoria). Se deduplica por el icono resuelto, no por el nombre: "React"
  // y "React Native" comparten el mismo logo de Simple Icons y mostrarian el
  // mismo icono dos veces.
  const grouped = Object.entries(toolsData).reduce((acc, [toolId, staticInfo]) => {
    const toolTranslation = translatedTools[toolId] || {};
    const category = toolTranslation.category || "Otros";
    if (!acc[category]) acc[category] = [];
    staticInfo.techs.forEach((tech) => {
      const icon = getTechIcon(tech);
      const alreadyShown = acc[category].some(
        (existing) => existing === tech || (icon && getTechIcon(existing) === icon)
      );
      if (!alreadyShown) acc[category].push(tech);
    });
    return acc;
  }, {});

  return (
    <section ref={setRef("tools")} id="tools">
      <section className="tools">
        <Reveal sectionId="tools">
          <SectionTitle id="tools" title={translation.sections.tools} />
        </Reveal>

        <div className="tools__rays" aria-hidden="true">
          <LightRays
            raysOrigin="top-center"
            raysColor="#ff4d4f"
            raysSpeed={1}
            lightSpread={1}
            rayLength={2}
            pulsating={false}
            fadeDistance={1}
            saturation={1}
            followMouse
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
          />
        </div>

        {/* Envolvemos el contenedor principal para que aparezca suavemente */}
        <Reveal sectionId="tools" delay={0.2}>
          <div className="tools-grid">
            {Object.entries(grouped).map(([category, items], catIndex) => (
              <div key={catIndex} className="tools-category">

                {/* Reveal para el título de la categoría */}
                <Reveal sectionId="tools" delay={0.3 + (catIndex * 0.1)}>
                  <ScrambleText as="h3" text={category} />
                </Reveal>

                <div className="tools-category__icons">
                  {items.map((tech, toolIndex) => (
                    /* Reveal para cada badge individual con delay acumulativo */
                    <Reveal
                      key={`${category}-${tech}`}
                      sectionId="tools"
                      delay={0.4 + (catIndex * 0.1) + (toolIndex * 0.05)}
                    >
                      <div className="tool-badge" title={tech}>
                        <TechIconsTools techs={[tech]} />
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </section>
  );
}
