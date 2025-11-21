import { useEffect, useState } from "react";
import "./loadingScreen.scss";

export default function LoadingScreen() {
  const [loaded, setLoaded] = useState(false);

  const MIN_DURATION = 1200;

  useEffect(() => {
    const start = performance.now();

    const finish = () => {
      const elapsed = performance.now() - start;
      const remaining = Math.max(0, MIN_DURATION - elapsed);
      setTimeout(() => setLoaded(true), remaining);
    };

    if (document.readyState === "complete") finish();
    else {
      window.addEventListener("load", finish);
      return () => window.removeEventListener("load", finish);
    }
  }, []);

  return (
    <div className={`loading-screen ${loaded ? "loaded" : ""}`}>
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>

      <div className="loader">
      </div>
    </div>
  );
}
