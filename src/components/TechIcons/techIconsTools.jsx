import "./techIconsTools.scss"

export default function TechIconsTools({ techs = [] }) {
  return (
    <div className="tech-icons-tools" aria-hidden="false">
      {techs.map((tech, index) => (
        <div key={index} className="tech-icons-tools__group">
          <span className="tech-icons-tools__pill">{tech}</span>

          {index < techs.length - 1 && (
            // <img 
            //   src="./code-editor-svgrepo-com.svg" 
            //   alt="plus-icon" 
            //   className="tech-plus"
            // />
            <div className="tech-plus">
              +
            </div>
          )}
        </div>
      ))}
    </div>
  );
}