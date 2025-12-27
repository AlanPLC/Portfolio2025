import { useState, useRef, useEffect, createContext, useCallback } from "react";

const ActiveSectionContext = createContext();

export function ActiveSectionProvider({ children }) {
  const [active, setActive] = useState('home');
  const sectionsRefs = useRef({});

  const setRef = useCallback((id) => (el) => {
    if (el) {
      sectionsRefs.current[id] = el;
    }
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "-80px 0px 0px 0px",
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    }, observerOptions);
    const currentRefs = sectionsRefs.current;
    Object.values(currentRefs).forEach((sec) => {
      if (sec) sectionObserver.observe(sec);
    });

    return () => sectionObserver.disconnect();
  }, []); 

  return (
    <ActiveSectionContext.Provider value={{ active, sectionsRefs, setRef }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export default ActiveSectionContext;