import React from "react";
import "./App.scss";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen.jsx";
import BlobsBackground from "./components/Background/BlobsBackground.jsx";
import Nav from "./components/Navbar/nav.jsx";
import Presentation from "./sections/Presentation/Presentation.jsx";
import Stats from "./sections/Stats/Stats.jsx";
import About from "./sections/About/About.jsx";
import Projects from "./sections/Projects/Projects.jsx"
import Tools from "./sections/Tools/Tools.jsx"
import Experience from "./sections/Experience/Experience.jsx";
import Footer from "./components/Footer/Footer.jsx"
import { LanguageProvider } from "./contexts/languageContext.jsx";
import { ActiveSectionProvider } from "./contexts/ActiveSectionContext.jsx";

function App() {
  return (
    <ActiveSectionProvider>
      <LanguageProvider>
        <LoadingScreen />
        <BlobsBackground />
        <Nav />
        <Presentation />
        <Stats />
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
