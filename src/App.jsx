import React from "react";
import "./App.css";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import BlobsBackground from "./components/Background/BlobsBackground";
import Nav from "./components/Navbar/nav.jsx";
import Presentation from "./sections/Presentation/Presentation";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Proyectos.jsx"
import Tools from "./sections/Tools/herramientas.jsx"
import Experience from "./sections/Experience/Experience.jsx";
import Footer from "./components/Footer/Footer.jsx"
import { LanguageProvider } from "./hooks/languageContext.jsx";

function App() {
  return (
    <LanguageProvider>
      <LoadingScreen />
      <BlobsBackground />
      <Nav />
      <Presentation />
      <Experience />
      <About />
      <Projects />
      <Tools />
      <Footer />
    </LanguageProvider>
  );
}

export default App;
