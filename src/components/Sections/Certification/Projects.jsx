import React from "react";
import CommunityReachImg from "../../../assests/images/CommuintyReach.png";
import BetaSaverImg from "../../../assests/images/betterSaver.png";
import NGOWeb from "../../../assests/images/NGOweb.png";
import ProjectCard from "./ProjectCard";

const DUMMY_PROJECTS = [
  {
    image: CommunityReachImg,
    title: "Community outreaches",
    link: "https://instagram.com/ngcfoundation_?igshid=YmMyMTA2M2Y=",
    expandText: "See more",
  },
  {
    image: BetaSaverImg,
    title: "Beta saver (fintech app)",
    link: "https://www.behance.net/gallery/159819639/Case-study-for-a-fintech-app-%28betasaver%29",
    expandText: "View case study",
  },
  {
    image: NGOWeb,
    title: "Connect (NGO website)",
    link: "https://www.behance.net/gallery/159813029/CASE-STUDY-%28NGO-embedded-website%29",
    expandText: "View case study",
  },
];

const Projects = () => {
  return (
    <>
      <h2
        className="mt-14 sm:mt-16 mb-6 text-xl sm:text-3xl lg:text-4xl xl:text-5xl text-center font-bold "
        id="projects"
      >
        Featured <span className="text-[#FF8762]">projects</span>
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-5">
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
      <a
        href="https://www.behance.net/augustdesigns18"
        target="_blank"
        rel="noreferrer noopener"
        className="flex justify-center mt-12"
      >
        <button className="capitalize border border-[#FF8762] px-8 py-2 rounded-2xl text-base sm:text-lg font-normal">
          {" "}
          View more
        </button>
      </a>
    </>
  );
};

export default Projects;
