import React from "react";
import BackButton from "../components/Buttons/BackButton";
import AboutMeSection from "../components/Sections/About/AboutMeSection";

const AboutPage = () => {
  return (
    <div className="slideIn absolute md:relative w-full bg-[#080707]">
      <BackButton />
      <AboutMeSection />
    </div>
  );
};

export default AboutPage;
