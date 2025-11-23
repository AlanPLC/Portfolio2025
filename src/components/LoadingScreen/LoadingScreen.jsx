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

  useEffect(() => {
    const lockScroll = () => {
      document.body.classList.add('no-scroll');
      document.documentElement.classList.add('no-scroll');
    };

    const unlockScroll = () => {
        document.body.classList.remove('no-scroll');
        document.documentElement.classList.remove('no-scroll');
    };
    
    lockScroll();

    if (loaded) {
      const timeoutId = setTimeout(() => {
        unlockScroll();
      }, 0);

      return () => clearTimeout(timeoutId);
    }
    
    return () => unlockScroll(); 
    
  }, [loaded]);

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
