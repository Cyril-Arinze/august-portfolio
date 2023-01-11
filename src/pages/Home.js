import React from "react";
import CertificationSection from "../components/Sections/Certification/CertificationSection";
import ContactSection from "../components/Sections/ContactSection/ContactSection";
import Hero from "../components/Sections/HeroSection/Hero";
import WhatIdoSection from "../components/Sections/What I do/WhatIdoSection";

const Home = () => {
  return (
    <>
      <Hero />
      <WhatIdoSection />
      <CertificationSection />
      <ContactSection />
    </>
  );
};

export default Home;
