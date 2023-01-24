import React from "react";
import Navbar from "../Navigation/Navbar";

const Layout = ({ children }) => {
  return (
    <div className=" bg-[#080707] min-h-screen font-[Poppins]">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
