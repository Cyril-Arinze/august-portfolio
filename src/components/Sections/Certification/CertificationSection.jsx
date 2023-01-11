import React from "react";
import UdemyLogo from "../../../assests/images/udemy_.png";
import PixelLogo from "../../../assests/images/Perxels.png";
import Projects from "./Projects";

const CertificationSection = () => {
  return (
    <section>
      <div className=" max-w-7xl text-white p-8">
        <h1 className="text-2xl font-bold text-center inline-block mb-6">
          My <br /> <span className="text-[#FF8762] "> Certification</span>
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#343434]/30 flex items-center justify-center rounded-xl h-[60px] overflow-hidden">
            <img src={PixelLogo} alt="/" className="" />
          </div>
          <div className="bg-[#343434]/30 flex items-center justify-center rounded-xl h-[60px]">
            <img src={UdemyLogo} alt="/" />
          </div>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default CertificationSection;
