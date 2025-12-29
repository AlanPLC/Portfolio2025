import { useState, createContext } from "react";

// Estos siempre deben existir
import esExample from "../data/lang/es.example.json";
import enExample from "../data/lang/en.example.json";

// Usamos import.meta.glob para buscar archivos opcionales.
// 'eager: true' hace que la carga sea inmediata.
const locales = import.meta.glob("../data/lang/*.json", { eager: true });

// Intentamos obtener los reales, si no, usamos los example.
// locales["ruta"] devolverá el módulo si existe, o undefined si no.
const es = locales["../data/lang/es.json"]?.default || esExample;
const en = locales["../data/lang/en.json"]?.default || enExample;

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