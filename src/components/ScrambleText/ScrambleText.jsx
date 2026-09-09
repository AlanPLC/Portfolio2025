import { useEffect, useRef, useState } from "react";

// Set mas angosto y parejo que A-Za-z0-9: evita letras muy anchas (M, W) o
// muy angostas (i, l, 1) que hacen "saltar" el ancho del texto frame a frame.
const SCRAMBLE_CHARS = "abcdenorstuvxyzABCDENORSTUVXYZ2345789";

let measureCanvas = null;
function measureTextWidth(font, text) {
  if (!measureCanvas) measureCanvas = document.createElement("canvas");
  const ctx = measureCanvas.getContext("2d");
  ctx.font = font;
  return ctx.measureText(text).width;
}

// Anima el texto "decodificandose" (caracteres al azar que se van resolviendo
// de izquierda a derecha) cada vez que cambia `text` -- pensado para el
// cambio de idioma, para que no sea un reemplazo brusco de palabras.
//
// `stableWidth`: reserva el ancho final del texto (medido con canvas) durante
// la animacion, para que pills/tarjetas que se ajustan al contenido no se
// agranden/achiquen mientras dura el efecto. Solo tiene sentido en textos
// cortos de una sola linea (labels, botones, titulos) -- NO usar en parrafos
// que puedan ocupar varias lineas, ya que el ancho medido es el de una sola
// linea y rompería el ajuste de texto.
export default function ScrambleText({ text, as, className, stableWidth = false, ...rest }) {
  const Tag = as || "span";
  const [display, setDisplay] = useState(text);
  const elRef = useRef(null);
  const isFirstRun = useRef(true);
  const prevTextRef = useRef(text);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      prevTextRef.current = text;
      return undefined;
    }
    if (prevTextRef.current === text) return undefined;
    prevTextRef.current = text;

    clearTimeout(timeoutRef.current);

    if (stableWidth && elRef.current && text) {
      const cs = getComputedStyle(elRef.current);
      const font = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
      const width = measureTextWidth(font, text);
      // Ancho fijo (no min-width): el min-width solo evita que la caja se
      // achique, pero un frame con caracteres al azar mas anchos igual la
      // agranda. Con ancho fijo, en ese caso rarisimo el texto desborda
      // visualmente en vez de mover el layout de alrededor. nowrap es
      // obligatorio: sin el, si la medicion con canvas queda un pelo corta
      // (redondeo, fuente no cargada aun), el texto salta a una segunda
      // linea y agranda el contenedor en altura -- el mismo problema que
      // esto busca evitar, pero en el otro eje.
      elRef.current.style.display = "inline-block";
      elRef.current.style.width = `${Math.ceil(width) + 2}px`;
      elRef.current.style.whiteSpace = "nowrap";
      elRef.current.style.overflow = "visible";
    }

    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const length = text ? text.length : 0;
    // Sin animacion (reduced-motion o texto vacio): una sola pasada que
    // revela todo de inmediato, en vez de llamar setState directo en el
    // cuerpo del efecto.
    const totalFrames = reducedMotion || !length ? 1 : Math.min(28, Math.max(10, Math.round(length / 1.5)));
    let frame = 0;

    const tick = () => {
      frame += 1;
      const revealCount = Math.floor((length * frame) / totalFrames);
      let out = "";
      for (let i = 0; i < length; i++) {
        const ch = text[i];
        if (i < revealCount || ch === " " || ch === "\n") {
          out += ch;
        } else {
          out += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        }
      }
      setDisplay(out);

      if (frame < totalFrames) {
        timeoutRef.current = setTimeout(tick, 28);
      }
    };
    tick();

    return () => clearTimeout(timeoutRef.current);
  }, [text, stableWidth]);

  return (
    <Tag ref={elRef} className={className} {...rest}>
      {display}
    </Tag>
  );
}
