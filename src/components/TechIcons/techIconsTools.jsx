import "./techIconsTools.scss"
import { getTechIcon } from "../../utils/simpleIconsMap.js";

export default function TechIconsTools({ techs = [] }) {
  return (
    <div className="tech-icons-tools" aria-hidden="false">
      {techs.map((tech) => {
        const name = tech.trim();
        const icon = getTechIcon(name);
        if (!icon) return null;

        return (
          <svg
            key={name}
            viewBox="0 0 24 24"
            className="tech-icons-tools__icon"
            role="img"
            aria-label={name}
          >
            <path d={icon.path} fill="currentColor" />
          </svg>
        );
      })}
    </div>
  );
}
