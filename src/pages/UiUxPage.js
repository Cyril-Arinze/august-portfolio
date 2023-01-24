import React, { useEffect } from "react";
import UIUX from "../components/Sections/UI_UX/UIUX";

const UiUxPage = () => {
  useEffect(() => {
    document.querySelector("html").scrollTop = 0;
  }, []);
  return (
    <div className="slideIn absolute w-full md:relative bg-[#080707]">
      <UIUX />
    </div>
  );
};

export default UiUxPage;
