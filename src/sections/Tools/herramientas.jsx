import "./herramientas.scss";
import { useEffect, useRef } from "react";
import { tools } from "../../data/profile.js";

export default function Tools() {
  const progressRefs = useRef([]);

  // Agrupar herramientas por categoría
  const grouped = tools.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push({
      name: item.name,
      img: item.img,
      complement: item.complement,
      complement_img: item.complement_img,
      percentage: item.percentage,
    });
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
}, []);

  return (
    <section className="tools">
      <div className="progressbar-container">
        {Object.entries(grouped).map(([category, items], index) => (
          <div key={index} className="tools-category">
            <h3>{category}</h3>

            {items.map((tool) => {
              const id = `${category}-${tool.name}`;

              return (
                <div className="tool-container" key={id}>
                  <div className="tecnology-table">
                    <div className="tecnology">
                      <img src={tool.img} alt={tool.name} />
                      <p>{tool.name}</p>
                    </div>
                    {tool.complement && (
                      <>
                      <img src="./code-editor-svgrepo-com.svg" alt="plus-img" />
                      <div className="complement">
                        <img src={tool.complement_img} alt="complement-img" />
                        <p>{tool.complement}</p>
                      </div>
                      </>
                    )}
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
  );
}
