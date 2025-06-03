import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import Services from "./pages/Service";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

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
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
