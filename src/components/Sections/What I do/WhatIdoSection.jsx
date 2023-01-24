import React from "react";
import Card from "./Card";
import HumanityIcon from "../../../assests/icons/charity_icon.svg";
import UIUXicon from "../../../assests/icons/UI_UX_Icon.svg";
const DUMMY_DATA = [
  {
    icon: HumanityIcon,
    title: "Humanity",
    description:
      "Founder of a non-profit organization in Nigeria that helps less-privilege children",
    externalLink: "https://instagram.com/ngcfoundation_?igshid=YmMyMTA2M2Y=",
    color: "bg-[#343434]/40",
  },
  {
    icon: UIUXicon,
    title: "UI/UX design",
    description:
      "I create user centered designs that solves users problems and converts.",
    internalLink: "/UIUX",
    color: "bg-[#FF8762]",
  },
];

const WhatIdoSection = () => {
  return (
    <section>
      <div className="max-w-7xl p-8 mx-auto">
        <h1 className="text-white font-bold text-2xl sm:text-3xl lg:text-[48px] mt-5 mb-9">
          What i <span className=" text-[#FF8762]">do</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {DUMMY_DATA.map((data, index) => {
            return (
              <Card
                key={index}
                icon={data.icon}
                title={data.title}
                description={data.description}
                externalLink={data.externalLink}
                internalLink={data.internalLink}
                color={data.color}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatIdoSection;
