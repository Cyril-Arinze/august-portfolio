import React from "react";
import CommunityReachImg from "../../../assests/images/CommuintyReach.png";
import BetaSaverImg from "../../../assests/images/betterSaver.png";
import NGOWeb from "../../../assests/images/NGOweb.png";
import ProjectCard from "./ProjectCard";

const DUMMY_PROJECTS = [
  {
    image: CommunityReachImg,
    title: "Community outreaches",
    link: "/",
    expandText: "Read more",
  },
  {
    image: BetaSaverImg,
    title: "Beta saver (fintech app)",
    link: "/",
    expandText: "View case study",
  },
  {
    image: NGOWeb,
    title: "Connect (NGO website)",
    link: "/",
    expandText: "View case study",
  },
];

const Projects = () => {
  return (
    <>
      <h2 className="mt-14 mb-6 text-xl font-bold " id="projects">
        Featured <span className="text-[#FF8762]">projects</span>
      </h2>
      <ul className="flex flex-col gap-y-12">
        {DUMMY_PROJECTS.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              title={project.title}
              link={project.link}
              image={project.image}
              expandText={project.expandText}
            />
          );
        })}
      </ul>
      <div className="flex justify-center mt-12">
        <button className="capitalize border border-[#FF8762] px-8 py-2 rounded-2xl text-base font-normal">
          {" "}
          View more
        </button>
      </div>
    </>
  );
};

export default Projects;
