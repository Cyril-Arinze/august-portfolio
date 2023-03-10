import React from "react";

const ProjectCard = ({ title, link, image, expandText }) => {
  return (
    <li className="">
      <div className="h-[306px] mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
      <div>
        <p className="text-xl sm:text-2xl font-medium mb-2">{title}</p>

        <a
          href={link ? link : "/"}
          target="_blank"
          rel="noreferrer noopener"
          className="text-base text-[#FF8762]"
        >
          {expandText} &gt;
        </a>
      </div>
    </li>
  );
};

export default ProjectCard;
