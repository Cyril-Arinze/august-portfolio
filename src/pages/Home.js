import React from "react";
import CertificationSection from "../components/Sections/Certification/CertificationSection";
import ContactSection from "../components/Sections/ContactSection/ContactSection";
import Hero from "../components/Sections/HeroSection/Hero";
import WhatIdoSection from "../components/Sections/What I do/WhatIdoSection";

const Home = () => {
  return (
    <div className="slideOut absolute md:relative w-full bg-[#080707]">
      <Hero />
      <WhatIdoSection />
      <CertificationSection />
      <ContactSection />
    </div>
  );
};

export default Home;
