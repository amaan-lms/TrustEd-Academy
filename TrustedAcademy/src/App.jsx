import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Membership from "./Pages/Membership";
import Pricing from "./Components/Pricing";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

// Page Components
import StartHere from "./Pages/StartHere";
import FreeTraining from "./Pages/FreeTraining";
import CourseCatalog from "./Pages/CourseCatalog";
import BusinessSolutions from "./Pages/BusinessSolutions";
import MemberLogin from "./Pages/MemberLogin";

// Scroll to top on route change and handle hash scrolling
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

// Home page with all sections
function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Membership />
      {/* <Pricing /> */}
      <Education />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/start" element={<StartHere />} />
        <Route path="/training" element={<FreeTraining />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/courses" element={<CourseCatalog />} />
        <Route path="/business" element={<BusinessSolutions />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<MemberLogin />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
