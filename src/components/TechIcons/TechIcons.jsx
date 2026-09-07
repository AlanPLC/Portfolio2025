import React from "react";
import "./techIcons.scss";

export default function TechIcons({ techs = [] }) {
  return (
    <div className="tech-icons" aria-hidden="false">
      {" "}
      {techs.map((t) => (
        <span key={t} className="tech-icons__pill">
          {t}{" "}
        </span>
      ))}{" "}
    </div>
  );
}