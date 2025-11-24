import React from "react";
import "./sectionTitle.css";

// Definición de las rutas de iconos por defecto, mapeadas por el título.
const ICON_MAP = {
  "Proyectos": "/assets/icons/titleIcons/boost-for-reddit-svgrepo-com.svg", // Cohete
  "Herramientas": "/assets/icons/titleIcons/code-editor-svgrepo-com.svg", // Ejemplo: Ícono de Llave/Herramienta
  "Sobre mí": "/assets/icons/titleIcons/eventim-svgrepo-com.svg", // Ejemplo: Ícono de Perfil
  "Contacto": "/assets/icons/titleIcons/envelope-svgrepo-com.svg", // Ejemplo: Ícono de Correo
  "Experiencia":"/assets/icons/titleIcons/briefcase-svgrepo-com.svg",
};

/**
 * Componente modular para el título de la sección.
 * Se centra y aplica un estilo de tarjeta de vidrio esmerilado.
 * * @param {string} title - El texto del título (e.g., "Proyectos").
 * @param {string} [iconPath] - Ruta opcional al archivo de ícono SVG o PNG. 
 * Si se proporciona, anula la selección automática.
 * @param {string} [iconAlt] - Texto alternativo para el ícono.
 */
const SectionTitle = ({ title, iconPath, iconAlt = "Section Icon" }) => {
  
  const normalizedTitle = title ? title.trim() : "";
  
  const finalIconPath = ICON_MAP[normalizedTitle] || iconPath || "";
  
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