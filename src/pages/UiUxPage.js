import React from "react";
import BackButton from "../components/Buttons/BackButton";
import UIUX from "../components/Sections/UI_UX/UIUX";

const UiUxPage = () => {
  return (
    <div className="slideIn absolute w-full md:relative bg-[#080707]">
      <BackButton />
      <UIUX />
    </div>
  );
};

export default UiUxPage;
