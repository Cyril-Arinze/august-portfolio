import React, { useEffect } from "react";
import Footer from "../components/Navigation/Footer";
import CertificationSection from "../components/Sections/Certification/CertificationSection";
import ContactSection from "../components/Sections/ContactSection/ContactSection";
import Hero from "../components/Sections/HeroSection/Hero";
import WhatIdoSection from "../components/Sections/What I do/WhatIdoSection";

const Home = () => {
  useEffect(() => {
    document.querySelector("html").scrollTop = 0;
  }, []);
  return (
    <div className="slideOut absolute md:relative w-full bg-[#080707]">
      <Hero />
      <WhatIdoSection />
      <CertificationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
