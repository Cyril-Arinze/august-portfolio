import React from "react";
import About from "./About";
import AboutGallery from "./AboutGallery";

const AboutMeSection = () => {
  return (
    <section>
      <div className="mex-w-7xl p-8">
        <About />
        <AboutGallery />
      </div>
    </section>
  );
};

export default AboutMeSection;
