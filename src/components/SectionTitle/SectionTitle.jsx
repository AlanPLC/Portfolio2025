import React from "react";
import "./sectionTitle.css";

// Definición de las rutas de iconos por defecto, mapeadas por el título.
const ICON_MAP = {
  "experience": "/titleIcons/briefcase-svgrepo-com.svg",
  "projects": "/titleIcons/boost-for-reddit-svgrepo-com.svg",
  "tools": "/titleIcons/code-editor-svgrepo-com.svg",
  "about": "/titleIcons/eventim-svgrepo-com.svg",
  "contact": "/titleIcons/envelope-svgrepo-com.svg",
};

/**
 * Componente modular para el título de la sección
 * Se centra y aplica un estilo de tarjeta de vidrio esmerilado
 * * @param {string} title - El texto del título (e.g., "Proyectos")
 * @param {string} [iconPath] - Ruta opcional al archivo de ícono SVG o PNG.
 * Si se proporciona, anula la selección automática
 * @param {string} [iconAlt] - Texto alternativo para el ícono
 */
const SectionTitle = ({ id, title, iconPath, iconAlt = "Section Icon" }) => {

  const finalIconPath = ICON_MAP[id] || iconPath || "";
  const hasIcon = !!finalIconPath;

  return (
    <div className="section-title-wrapper">
      <div className={`section-title-layout ${hasIcon ? 'has-icon' : ''}`}>
        {hasIcon && (
          <div className="section-title-icon-wrapper">
            <img 
              src={finalIconPath} 
              alt={iconAlt} 
              className="section-title-image" 
            />
          </div>
        )}

        <div className="section-title-card">
          <h2 className="section-title-text">{title}</h2>
        </div>
      </div>
    </div>
  );
};


export default SectionTitle;