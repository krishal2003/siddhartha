import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import Services from "./pages/Service";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Admission from "./pages/Admission";
import Research from "./pages/Research";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />{" "}
        {/* Your existing home component */}
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/career" element={<Career />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/research" element={<Research />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
