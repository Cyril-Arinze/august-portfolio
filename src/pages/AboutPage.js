import React, { useEffect } from "react";
import AboutMeSection from "../components/Sections/About/AboutMeSection";

const AboutPage = () => {
  useEffect(() => {
    document.querySelector("html").scrollTop = 0;
  }, []);

  return (
    <div className="slideIn absolute md:relative w-full bg-[#080707]">
      <AboutMeSection />
    </div>
  );
};

export default AboutPage;
