import { useContext } from "react";
import LanguageContext from "./languageContext.jsx";

export default function useLanguage() {
  return useContext(LanguageContext);
}
