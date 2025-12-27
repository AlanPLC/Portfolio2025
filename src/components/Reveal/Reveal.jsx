// components/Reveal/Reveal.jsx
import { useEffect, useState } from "react";
import useActiveSection from "../../contexts/useActiveSection";

const Reveal = ({ children, sectionId, delay = 0 }) => {
  const { active } = useActiveSection();
  const [hasAppeared, setHasAppeared] = useState(false);

  useEffect(() => {
    if (active === sectionId) {
      setHasAppeared(true);
    }
  }, [active, sectionId]);

  return (
    <div 
      className={`reveal-wrapper ${hasAppeared ? "is-visible" : ""}`}
      style={{ 
        transitionDelay: hasAppeared ? `${delay}s` : "0s" 
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;