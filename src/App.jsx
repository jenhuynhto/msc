import Nav from "./components/Nav"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import ForYourVisit from "./pages/ForYourVisit"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/ForYourVisit" element={<ForYourVisit />}/>
        </Routes>
      </div>
        
    </>
  )
}

export default App
