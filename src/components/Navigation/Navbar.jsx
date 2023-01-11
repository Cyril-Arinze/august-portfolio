import React, { useState } from "react";
import { Link } from "react-router-dom";
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

const Navbar = () => {
  const [navIsShown, setNavIsShown] = useState(false);

  const toggleNavHandler = () => {
    setNavIsShown((oldState) => !oldState);
  };
  return (
    <header>
      <div className="max-w-7xl mx-auto flex justify-between p-8 ">
        <div>
          <img src={Logo} alt="" />
        </div>
        <nav>
          <button onClick={toggleNavHandler}>
            <Hamburger></Hamburger>
          </button>
          {navIsShown && (
            <div className=" fixed top-0 left-0 w-screen h-screen bg-[#080707] text-white flex flex-col justify-evenly items-center">
              <ul className="space-y-7 text-center font-medium text-xl">
                <li onClick={toggleNavHandler}>
                  <Link to="/about">About me</Link>
                </li>
                <li onClick={toggleNavHandler}>
                  <a href="#projects">Projects</a>
                </li>
                <li onClick={toggleNavHandler}>
                  <a
                    href="../../assests/Ambrose Ijeoma Augustina resume.pdf"
                    download
                  >
                    Resume(product design)
                  </a>
                </li>
              </ul>
              <div>
                <button onClick={toggleNavHandler}>
                  <CloseIcon></CloseIcon>
                </button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
