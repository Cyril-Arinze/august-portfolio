import React from "react";

const Layout = ({ children }) => {
  return (
    <div className=" bg-[#080707] min-h-screen font-[Poppins] max-w-[430px] mx-auto ">
      <main>{children}</main>
    </div>
  );
};

export default Layout;
