import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import HowItWorks from "./pages/HowItWorks";
import PaidProjects from "./pages/PaidProjects";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import RefundPolicy from "./pages/RefundPolicy";

function App() {
  const [navVariant, setNavVariant] = useState("blue");

  useEffect(() => {
    const onScroll = () => {
      const services = document.getElementById("services");
      if (!services) return;

      const trigger =
        services.getBoundingClientRect().top + window.scrollY - 120;

      setNavVariant(window.scrollY >= trigger ? "light" : "blue");
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar variant={navVariant} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Services />
              <HowItWorks />
              <PaidProjects />
              <FAQ />
              <Contact />
            </>
          }
        />

        <Route path="/paid-projects" element={<PaidProjects page />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/ai-beginners-guide" element={<BlogDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
