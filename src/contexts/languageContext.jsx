import { useState, createContext } from "react";
import es from "../data/lang/es.json";
import en from "../data/lang/en.json";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("es");

  const translation = lang === "es" ? es : en;

  const toogleLang = () => {
    setLang((prev) => (prev === "es" ? "en" : "es"));
  };

  return (
    <LanguageContext.Provider value={{ lang, translation, toogleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageContext;
