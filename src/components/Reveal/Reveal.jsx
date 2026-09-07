// components/Reveal/Reveal.jsx
import { useState } from "react";
import useActiveSection from "../../contexts/useActiveSection";

const Reveal = ({ children, sectionId, delay = 0 }) => {
  const { active } = useActiveSection();
  const [hasAppeared, setHasAppeared] = useState(active === sectionId);

  if (active === sectionId && !hasAppeared) {
    setHasAppeared(true);
  }

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