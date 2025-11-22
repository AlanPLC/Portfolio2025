import React from "react";
import "./App.css";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import BlobsBackground from "./components/Background/BlobsBackground";
import Nav from "./components/Navbar/nav.jsx";
import Presentation from "./sections/Presentation/Presentation";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Proyectos.jsx"
import Tools from "./sections/Tools/herramientas.jsx"

function App() {
  return (
    <>
      <LoadingScreen />
      <BlobsBackground />
      <Nav />
      <Presentation />
      <Projects />
      <Tools />
      <About />
    </>
  );
}

export default App;
