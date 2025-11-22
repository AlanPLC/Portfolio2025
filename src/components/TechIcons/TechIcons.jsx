import React from "react";
import { getTechIcon } from "../../utils/techMapper";
import "./techIcons.scss";

/*
 * =========================================================================
 * AVISO IMPORTANTE:
 * La funcionalidad de mapeo de texto a ICONO ha sido temporalmente DESHABILITADA
 * para forzar que todas las tecnologías se muestren como TEXTO (píldoras).
 *
 * SI DESEAS VOLVER A MOSTRAR LOS ICONOS DE LAS TECNOLOGÍAS:
 * 1. Descomenta la línea: "const iconSrc = getTechIcon(t);"
 * 2. Vuelve a añadir el bloque de código que renderiza el <img> (el 'if' completo).
 *         if (!iconSrc) {

          return (
            <span key={t} className="tech-icons__pill tech-icons__pill--missing" title={t}>
              {t}
            </span>
          );
        }
 * =========================================================================
 */

export default function TechIcons({ techs = [], size = 25 }) {
  return (
    <div className="tech-icons" aria-hidden="false">
      {" "}
      {techs.map((t) => {
        // const iconSrc = getTechIcon(t);
        return (
          <span key={t} className="tech-icons__pill">
            {t}{" "}
          </span>
        );
      })}{" "}
    </div>
  );
}
