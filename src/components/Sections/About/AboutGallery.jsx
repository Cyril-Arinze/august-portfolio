import React from "react";
import CMSImage1 from "../../../assests/images/CMS1.png";
import CMSImage2 from "../../../assests/images/CMS2.png";
import CMSImage3 from "../../../assests/images/CMS3.png";
import CMSImage4 from "../../../assests/images/CMS4.png";
import CMSImage5 from "../../../assests/images/CMS5.png";

const AboutGallery = () => {
  return (
    <div className="relative h-[400px] mt-8">
      <div className="w-[110px] absolute right-[10%]">
        <img
          src={CMSImage1}
          alt=""
          className="rounded-full w-full object-cover"
        />
      </div>
      <div className="w-[110px] absolute right-[38%] top-[20%]">
        <img
          src={CMSImage2}
          alt=""
          className="rounded-full w-full object-cover"
        />
      </div>
      <div className="w-[110px] absolute right-1 top-28">
        <img
          src={CMSImage3}
          alt=""
          className="rounded-full w-full object-cover"
        />
      </div>
      <div className="w-[110px] absolute right-[50%] top-[190px]">
        <img
          src={CMSImage4}
          alt=""
          className="rounded-full w-full object-cover"
        />
      </div>
      <div className="w-[110px] absolute right-[12%] top-[220px]">
        <img
          src={CMSImage5}
          alt=""
          className="rounded-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default AboutGallery;
