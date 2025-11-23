import "./herramientas.scss";
import { useEffect, useRef } from 'react'
import { tools } from "../../data/profile.js"

export default function Tools() {
  const progressRefs = useRef([]);
  const grouped = tools.reduce((acc, item)=>{
    acc[item.category] = acc[item.category] || [];

    acc[item.category].push({
      name: item.name,
      img: item.img,
      complement: item.complement,
      complement_img: item.complement_img,
      percentage: item.percentage
    })
    return acc;
  }, {})

  console.log(grouped)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.width = entry.target.style.getPropertyValue("--percent");
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
    <section className="tools">
      <div className="progressbar-container">
        {Object.entries(grouped).map(([category, items], index) => (
          <div key={index} className="tools-category">
            <h3>{category}</h3>
            {items.map((tool, idx) => (
              <div className="tool-container" key={idx}>
                <div className="tecnology-table">
                  <div className="tecnology">
                    <img src={tool.img} alt={tool.name} />
                    <p>{tool.name}</p>
                  </div>
                  <img src="./erste-hilfe-svgrepo-com.svg" alt="plus-img"/>
                  <div className="complement">
                    <img src={tool.complement_img} alt="complement-img" />
                    <p>{tool.complement}</p>
                  </div>
                </div>
                <div
                  className="progressbar"
                  style={{ "--percent": `${tool.percentage}%` }}
                  ref={(el) => (progressRefs.current[idx] = el)}
                >
                  <div className="inner-progressbar"></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
