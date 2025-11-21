import React from "react";
import { getTechIcon } from "../../utils/techMapper";
import "./techIcons.scss";

export default function TechIcons({ techs = [], size = 25 }) {
  return (
    <div className="tech-icons" aria-hidden="false">
      {techs.map((t) => {
        const iconSrc = getTechIcon(t);

        if (!iconSrc) {
          return (
            <span key={t} className="tech-icons__pill tech-icons__pill--missing" title={t}>
              {t}
            </span>
          );
        }

        return (
          <span key={t} className="tech-icons__item" title={t}>
            <img src={iconSrc} alt={t} width={size} height={size} className="tech-icon"/>
          </span>
        );
      })}
    </div>
  );
}