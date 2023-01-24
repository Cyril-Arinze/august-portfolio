import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assests/images/AIA.png";

function CloseIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.76471 1.76465L26.7214 26.7214"
        stroke="#FF8762"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M26.4706 1.76465L1.76471 26.4705"
        stroke="#FF8762"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Hamburger() {
  return (
    <>
      <span className=" sr-only">menu</span>
      <svg
        width="30"
        height="20"
        viewBox="0 0 30 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M3 4H27C28.656 4 30 3.105 30 2C30 0.895 28.6575 0 27 0H3C1.3425 0 0 0.895 0 2C0 3.105 1.3425 4 3 4ZM27 8H3C1.3425 8 0 8.895 0 10C0 11.105 1.3425 12 3 12H27C28.656 12 30 11.105 30 10C30 8.895 28.6575 8 27 8ZM27 16H3C1.3425 16 0 16.895 0 18C0 19.105 1.3425 20 3 20H27C28.656 20 30 19.105 30 18C30 16.895 28.6575 16 27 16Z"
          fill="#FF8762"
        />
      </svg>
    </>
  );
}

const initialNavState = window.innerWidth >= 640 ? true : false;
const isMobile = window.innerWidth < 640;
const Navbar = () => {
  const [navIsShown, setNavIsShown] = useState(initialNavState);

  const toggleNavHandler = () => {
    setNavIsShown((oldState) => !oldState);
  };
  return (
    <header>
      <div className="max-w-7xl mx-auto flex justify-between items-center p-8 ">
        <div>
          <img
            src={Logo}
            alt=""
            className="sm:aspect-auto sm:w-16 xl:w-20 object-cover"
          />
        </div>
        <nav>
          <button onClick={toggleNavHandler} className="sm:hidden">
            <Hamburger></Hamburger>
          </button>
          {navIsShown && (
            <div className=" fixed top-0 left-0 w-screen h-screen bg-[#080707] text-white flex flex-col justify-evenly z-50 items-center sm:relative sm:h-fit sm:w-fit sm:flex-row sm:top-auto sm:left-auto sm:gap-8 lg:gap-16">
              <ul className="text-center font-medium text-xl flex flex-col sm:flex-row gap-8 lg:gap-16 sm:items-center sm:text-base sm:font-normal">
                <li onClick={isMobile ? toggleNavHandler : null}>
                  <NavLink
                    className={(a) =>
                      a.isActive ? "text-[#FF8762]" : "text-white"
                    }
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>
                <li onClick={isMobile ? toggleNavHandler : null}>
                  <NavLink
                    className={(a) =>
                      a.isActive ? "text-[#FF8762]" : "text-white"
                    }
                    to="/about"
                  >
                    About me
                  </NavLink>
                </li>
                <li onClick={isMobile ? toggleNavHandler : null}>
                  <a href="https://www.behance.net/augustdesigns18">Projects</a>
                </li>
                <li onClick={isMobile ? toggleNavHandler : null}>
                  <a
                    href="../../assests/Ambrose Ijeoma Augustina resume.pdf"
                    download
                  >
                    Resume <span className="sm:hidden">(product design)</span>
                  </a>
                </li>
              </ul>
              <div>
                <button onClick={toggleNavHandler} className="sm:hidden">
                  <CloseIcon></CloseIcon>
                </button>
                <a
                  href="mailto:Augustdesigns18@gmail.com"
                  className="bg-[#FF8762] py-3 px-5 rounded-2xl text-sm w-fit justify-self-end hidden sm:block"
                >
                  Contact me
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
