import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Updated import for v6
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
import ResearchDetail from "./pages/ResearchDetail"; // Import the new ResearchDetail page

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} /> {/* HomePage component */}
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/career" element={<Career />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/research" element={<Research />} /> {/* Research page */}
        <Route path="/research/:id" element={<ResearchDetail />} />{" "}
        {/* New route for research detail */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
