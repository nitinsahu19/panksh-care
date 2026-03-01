import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Centres from "./pages/Centres"
import Franchise from "./pages/Franchise"
import Blogs from "./pages/Blogs"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/centres" element={<Centres />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/blogs" element={<Blogs />} />


      </Routes>
    </Router>
  )
}

export default App