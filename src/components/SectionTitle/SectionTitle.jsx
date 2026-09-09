import React from "react";
import ScrambleText from "../ScrambleText/ScrambleText.jsx";
import "./sectionTitle.css";

// Definición de las rutas de iconos por defecto, mapeadas por el título.
const ICON_MAP = {
  "experience": "/titleIcons/briefcase-svgrepo-com.svg",
  "projects": "/titleIcons/boost-for-reddit-svgrepo-com.svg",
  "tools": "/titleIcons/code-editor-svgrepo-com.svg",
  "contact": "/titleIcons/envelope-svgrepo-com.svg",
};

/**
 * Componente modular para el título de la sección
 * Se centra y aplica un estilo de tarjeta de vidrio esmerilado
 * * @param {string} title - El texto del título (e.g., "Proyectos")
 * @param {React.ReactNode} [icon] - Icono ya renderizado (SVG inline). Si se
 * proporciona, anula tanto el mapeo automatico como iconPath.
 * @param {string} [iconPath] - Ruta opcional al archivo de ícono SVG o PNG.
 * Si se proporciona, anula la selección automática
 * @param {string} [iconAlt] - Texto alternativo para el ícono
 */
const SectionTitle = ({ id, title, icon, iconPath, iconAlt = "Section Icon" }) => {

  const finalIconPath = !icon ? (ICON_MAP[id] || iconPath || "") : "";
  const hasIcon = !!icon || !!finalIconPath;

  return (
    <div className="section-title-wrapper">
      <div className={`section-title-layout ${hasIcon ? 'has-icon' : ''}`}>
        {hasIcon && (
          <div className="section-title-icon-wrapper">
            {icon ? (
              <span className="section-title-image section-title-image--svg" aria-hidden="true">
                {icon}
              </span>
            ) : (
              <img
                src={finalIconPath}
                alt={iconAlt}
                className="section-title-image"
              />
            )}
          </div>
        )}

        <div className="section-title-card">
          <ScrambleText as="h2" stableWidth className="section-title-text" text={title} />
        </div>
      </div>
    </div>
  );
};


export default SectionTitle;
