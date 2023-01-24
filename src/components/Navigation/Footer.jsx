import React from "react";
import Logo from "../../assests/images/AIA.png";
import instagram from "../../assests/icons/InstagramIcon.svg";
import twitter from "../../assests/icons/icon _twitter_.svg";
import facebook from "../../assests/icons/icon _facebook_.svg";
import email from "../../assests/icons/icon _email_.svg";
import location from "../../assests/icons/location_icon.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white bg-[#343434]/40 mt-20">
      <div className="grid grid-cols-5 max-w-7xl mx-auto p-8">
        <div className="hidden sm:block">
          <img src={Logo} alt="/" />
        </div>
        <div className="hidden sm:flex sm:flex-col gap-6">
          <Link to="/about">About Me</Link>
          <a href="https://www.behance.net/augustdesigns18">My Works</a>
        </div>
        <div className="flex justify-center gap-3 col-span-full sm:col-span-1 sm:flex-col sm:justify-evenly">
          <a href="https://instagram.com/ijeoma_amb?igshid=YmMyMTA2M2Y=">
            <div className="bg-[#FF8762] flex items-center justify-center h-[30px] w-[30px] sm:hidden rounded-full">
              <img src={instagram} alt="" />
            </div>

            <p className="hidden sm:block">Instagram</p>
          </a>
          <a href="https://twitter.com/ijeoma_Amb?t=qcrwXYTA32IA5yslyH3LbQ&s=09">
            <div className="bg-[#FF8762] flex items-center justify-center h-[30px] w-[30px] sm:hidden rounded-full">
              <img src={twitter} alt="" />
            </div>

            <p className="hidden sm:block">Twitter</p>
          </a>
          <a href="https://www.facebook.com/ijeoma.ambrose">
            <div className="bg-[#FF8762] flex items-center justify-center h-[30px] w-[30px] sm:hidden rounded-full">
              <img src={facebook} alt="" />
            </div>

            <p className="hidden sm:block">Facebook</p>
          </a>
          <a href="mailto:Augustdesigns18@gmail.com">
            <div className="bg-[#FF8762] flex items-center justify-center h-[30px] w-[30px] sm:hidden rounded-full">
              <img src={email} alt="" />
            </div>

            <p className="hidden sm:block">Email</p>
          </a>
        </div>
        <div className="hidden col-span-2 sm:grid grid-cols-3">
          <div className="col-start-2 col-span-2 flex">
            <img src={location} alt="/" className="h-10 aspect-square" />
            <p>Raji Rasaki, Amuwo Odofin, Lagos state, Nigeria.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
