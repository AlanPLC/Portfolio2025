import React, { useEffect, useRef, useMemo } from "react";
import BLOBS from "../../data/blobs";
import "./blobsBackground.scss";

/**
 * Props:
 *  - enabled: boolean (default true) -> permite activar/desactivar el fondo desde el padre
 *  - disableOnMobile: boolean (default true) -> no renderiza/activa en pantallas < 768px
 */
export default function BlobsBackground({ enabled = true, disableOnMobile = true }) {
  const rafRef = useRef(null);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const active = enabled && !(disableOnMobile && isMobile);

  const blobs = useMemo(() => BLOBS, []);

  useEffect(() => {
    if (!active) {
      document.documentElement.style.setProperty("--scroll", `${window.scrollY || 0}px`);
      return;
    }

    document.documentElement.style.setProperty("--scroll", `${window.scrollY || 0}px`);

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        const s = window.scrollY || window.pageYOffset || 0;
        document.documentElement.style.setProperty("--scroll", `${s}px`);
        rafRef.current = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [active]);

  if (!active) return null;

  return (
    <div id="blobs-container" aria-hidden="true">
      {blobs.map((b) => (
        <div
          key={b.id}
          className="blob"
          style={{
            top: b.top,
            left: b.left,
            width: b.width,
            height: b.height,
            opacity: b.opacity,
            background: b.background,
            ["--speed"]: b.speed,
          }}
        />
      ))}
    </div>
  );
}
