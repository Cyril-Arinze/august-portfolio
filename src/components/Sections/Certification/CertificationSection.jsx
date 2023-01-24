import React from "react";
import UdemyLogo from "../../../assests/images/udemy_.png";
import PixelLogo from "../../../assests/images/Perxels.png";
import Projects from "./Projects";

const CertificationSection = () => {
  return (
    <section className="my-12">
      <div className=" max-w-7xl text-white mx-auto p-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-5 gap-y-10 sm:gap-7 items-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl  font-bold w-fit  text-center inline-block  col-span-full sm:col-span-1">
            My <br /> <span className="text-[#FF8762] "> Certification</span>
          </h1>

          <div className="bg-[#343434]/30 flex items-center justify-center rounded-xl h-[60px] sm:h-full overflow-hidden">
            <img src={PixelLogo} alt="/" className="" />
          </div>
          <div className="bg-[#343434]/30 flex items-center justify-center rounded-xl h-[60px] sm:h-full">
            <img src={UdemyLogo} alt="/" />
          </div>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default CertificationSection;
