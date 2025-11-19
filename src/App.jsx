import './App.css'
import Presentation from './sections/Presentation/Presentation'
import About from './sections/About/About'
import Nav from "./components/Navbar/nav.jsx"

function App() {

  return (
    <>
      <h1>Portfolio Inicial</h1>
      <Nav/>
      <Presentation/>
      <About/>
    </>
  )
}

export default App