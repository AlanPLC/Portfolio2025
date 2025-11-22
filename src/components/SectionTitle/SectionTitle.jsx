import React from "react";
import "./sectionTitle.css";

// Definición de las rutas de iconos por defecto, mapeadas por el título.
// NOTA: Asegúrate de que estas rutas coincidan con las carpetas de tus iconos.
const ICON_MAP = {
  "Proyectos": "/assets/icons/titleIcons/boost-for-reddit-svgrepo-com.svg", // Cohete
  "Herramientas": "/assets/icons/titleIcons/code-editor-svgrepo-com.svg", // Ejemplo: Ícono de Llave/Herramienta
  "Sobre mí": "/assets/icons/titleIcons/eventim-svgrepo-com.svg", // Ejemplo: Ícono de Perfil
  "Experiencia": "/assets/icons/titleIcons/briefcase-svgrepo-com.svg", // Ejemplo: Ícono de Maletín
  "Contacto": "/assets/icons/titleIcons/envelope-svgrepo-com.svg", // Ejemplo: Ícono de Correo
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
  
  // Normalizar el título para la búsqueda (útil si hay variaciones de capitalización)
  const normalizedTitle = title ? title.trim() : "";
  
  // 1. Intentar obtener la ruta del icono a partir del mapa.
  // 2. Si no está en el mapa, usar la ruta pasada por la prop 'iconPath'.
  const finalIconPath = ICON_MAP[normalizedTitle] || iconPath || "";
  
  const hasIcon = !!finalIconPath;

  return (
    // Contenedor principal para centrar el título en la página
    <div className="section-title-wrapper">
      
      {/* Ajuste CLAVE: Este div (`section-title-layout`) es ahora el contenedor relativo 
        que permite posicionar el icono de forma absoluta por encima de la tarjeta.
      */}
      <div className={`section-title-layout ${hasIcon ? 'has-icon' : ''}`}>
        
        {/* El ícono se renderiza *antes* de la tarjeta y se posicionará absolutamente */}
        {hasIcon && (
          <div className="section-title-icon-wrapper">
            {/* Se usa la etiqueta <img> para cargar la imagen desde la ruta */}
            <img 
              src={finalIconPath} 
              alt={iconAlt} 
              className="section-title-image" 
            />
          </div>
        )}

        {/* La "Tarjeta" del título (solo contiene el texto) */}
        <div className="section-title-card">
          {/* El Título H2 */}
          <h2 className="section-title-text">{title}</h2>
        </div>

      </div>
    </div>
  );
};

export default SectionTitle;