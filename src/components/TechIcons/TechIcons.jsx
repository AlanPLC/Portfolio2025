import "./techIcons.scss";
import { getTechIcon } from "../../utils/simpleIconsMap.js";

export default function TechIcons({ techs = [], action }) {
  return (
    <div className="tech-icons" aria-hidden="false">
      {techs.map((t) => {
        const name = t.trim();
        const icon = getTechIcon(name);
        return (
          <span key={name} className="tech-icons__pill">
            {icon && (
              <svg viewBox="0 0 24 24" className="tech-icons__icon" aria-hidden="true">
                <path d={icon.path} fill="currentColor" />
              </svg>
            )}
            <span className="tech-icons__label">{name}</span>
          </span>
        );
      })}
      {action}
    </div>
  );
}
