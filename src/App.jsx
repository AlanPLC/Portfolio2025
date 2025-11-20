import React, { useEffect, useRef } from "react";
import "./App.css";
import Nav from "./components/Navbar/nav.jsx";
import Presentation from "./sections/Presentation/Presentation";
import About from "./sections/About/About";

function App() {
  const rafRef = useRef(null);

  useEffect(() => {
    document.documentElement.style.setProperty("--scroll", "0px");

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        const scroll = window.scrollY || window.pageYOffset || 0;
        document.documentElement.style.setProperty("--scroll", `${scroll}px`);
        rafRef.current = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Contenedor*/}
      <div id="blobs-container" aria-hidden="true">
        <div
          className="blob"
          style={{
            top: "10%",
            left: "30%",
            width: "60vmin",
            height: "60vmin",
            // velocidad parallax: número negativo -> sube al bajar; mayor valor = más movimiento
            ["--speed"]: "-1.50",
            background:
              "radial-gradient(closest-side, rgba(255,120,120,0.9) 0%, rgba(255,120,120,0.9) 40%, transparent 60%)",
            opacity: 0.55,
          }}
        />

        <div
          className="blob"
          style={{
            top: "40%",
            left: "60%",
            width: "60vmin",
            height: "60vmin",
            ["--speed"]: "-0.15",
            background:
              "radial-gradient(closest-side, rgba(255,120,120,0.9) 0%, rgba(255,120,120,0.9) 40%, transparent 60%)",
            opacity: 0.95,
          }}
        />

        <div
          className="blob"
          style={{
            top: "70%",
            left: "20%",
            width: "60vmin",
            height: "60vmin",
            ["--speed"]: "-0.15",
            background:
              "radial-gradient(closest-side, rgba(255,120,120,0.9) 0%, rgba(255,120,120,0.9) 40%, transparent 60%)",
            opacity: 0.95,
          }}
        />

        <div
          className="blob"
          style={{
            top: "10%",
            left: "80%",
            width: "80vmin",
            height: "80vmin",
            ["--speed"]: "-0.12",
            background:
              "radial-gradient(closest-side, rgba(255,120,120,0.9) 0%, rgba(255,120,120,0.9) 35%, transparent 60%)",
            opacity: 0.92,
          }}
        />

        <div
          className="blob"
          style={{
            top: "80%",
            left: "50%",
            width: "90vmin",
            height: "90vmin",
            ["--speed"]: "-0.10",
            background:
              "radial-gradient(closest-side, rgba(255,120,120,0.9) 0%, rgba(255,120,120,0.9) 30%, transparent 60%)",
            opacity: 0.88,
          }}
        />

      </div>

      <Nav />
      <Presentation />
      <About />
    </>
  );
}

export default App;
