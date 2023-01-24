import React from "react";
import { Link } from "react-router-dom";
import aboutImage from "../../../assests/images/AboutMe.png";

const HeroAbout = () => {
  return (
    <div className="grid grid-cols-2 gap-10">
      <div>
        <img
          src={aboutImage}
          alt="/"
          className="w-full h-full object-cover object-top rounded-xl"
        />
      </div>
      <div className="flex flex-col justify-evenly gap-y-4">
        <p>
          I was born and raised in the northern part of Nigeria. I moved to
          Lagos State to continue my senior secondary school education. After
          that, I stayed at home for a year before heading to the university.
          <br />
          <br />
          During my one-year stay at home, I got the opportunity to teach at a
          school; this was the beginning of my love for children and the need to
          impact them positively. I got admission into the university in the
          eastern part of Nigeria and graduated with a BSc in Microbiology.
        </p>

        <Link to="/about" className="bg-[#FF8762] px-5 py-3 w-fit rounded-lg">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default HeroAbout;
