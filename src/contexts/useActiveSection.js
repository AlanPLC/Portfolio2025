import { useContext } from "react";
import ActiveSectionContext from "./ActiveSectionContext.jsx";

const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);
  
  if (!context) {
    throw new Error("useActiveSection debe usarse dentro de un ActiveSectionProvider");
  }
  
  return context;
};

export default useActiveSection;