import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Centres from "./pages/Centres";
import Franchise from "./pages/Franchise";
import Blogs from "./pages/Blogs";
import ServiceDetails from "./components/ServiceDetails";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar Always On Top */}

      <Navbar />
      {/* Important spacing because navbar is fixed */}
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/centres" element={<Centres />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
