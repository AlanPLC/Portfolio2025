import React from "react";
import "./App.css";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import BlobsBackground from "./components/Background/BlobsBackground";
import Nav from "./components/Navbar/Nav.jsx";
import Presentation from "./sections/Presentation/Presentation";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects.jsx"
import Tools from "./sections/Tools/Tools.jsx"
import Experience from "./sections/Experience/Experience.jsx";
import Footer from "./components/Footer/Footer.jsx"
import { LanguageProvider } from "./contexts/languageContext.jsx";
import { ActiveSectionProvider } from "./contexts/activeSectionContext.jsx";

function App() {
  return (
    <ActiveSectionProvider>
      <LanguageProvider>
        <LoadingScreen />
        <BlobsBackground />
        <Nav />
        <Presentation />
        <About />
        <Experience />
        <Projects />
        <Tools />
        <Footer />
      </LanguageProvider>
    </ActiveSectionProvider>
  );
}

export default App;
