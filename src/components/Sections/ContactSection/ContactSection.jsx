import React from "react";

const ContactSection = () => {
  return (
    <section>
      <div className="max-w-7xl text-white mx-auto">
        <div className="bg-[#343434]/40 p-8 grid grid-cols-1 sm:grid-cols-2 items-center gap-y-5 sm:p-10 lg:p-20">
          <div>
            <p className="text-2xl font-bold sm:text-3xl lg:text-4xl lg:leading-[50px] xl:text-5xl xl:leading-[72px] ">
              Let’s work together as a team.
            </p>
            <p className="hidden sm:block">
              Hire me in your company or as a freelance agent and lets put
              creativity together to create problem solving products.
            </p>
          </div>
          <a
            href="mailto:Augustdesigns18@gmail.com"
            className="bg-[#FF8762] py-3 px-5 rounded-2xl text-sm w-fit justify-self-end sm:px-9 sm:py-5 lg:px-11 lg:py-6"
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
