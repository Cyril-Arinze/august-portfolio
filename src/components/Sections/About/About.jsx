import React from "react";
import AB1 from "../../../assests/images/AB1.jpg";
import AB2 from "../../../assests/images/AB2.png";
import AB3 from "../../../assests/images/AB3.png";

const isMobile = window.innerWidth < 640;
const About = () => {
  return (
    <div className="text-white space-y-6">
      {isMobile ? (
        <h1 className="text-[#FF8762] text-xl">A little details about me</h1>
      ) : (
        <h1 className="sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center my-9 tracking-wider ">
          About <span className="text-[#FF8762]">Me</span>
        </h1>
      )}

      <article className="sm:grid sm:grid-cols-2 sm:items-center sm:gap-16 xl:gap-20">
        <p className="xl:text-lg">
          <span className="text-[#FF8762] "> Birth and Education:</span> I was
          born and raised in the northern part of Nigeria. I moved to Lagos
          State to continue my senior secondary school education. After that, I
          stayed at home for a year before heading to the university. <br />
          <br /> During my one-year stay at home, I got the opportunity to teach
          at a school; this was the beginning of my love for children and the
          need to impact them positively. I got admission into the university in
          the eastern part of Nigeria and graduated with a BSc in Microbiology.
        </p>
        <img
          src={AB1}
          alt="/"
          className="hidden w-full h-full object-cover object-left-top sm:block rounded-xl"
        />
      </article>
      <article className="sm:grid sm:grid-cols-2 sm:items-center sm:gap-16 xl:gap-20">
        <img
          src={AB2}
          alt=""
          className="hidden w-full h-full object-cover object-right-top sm:block rounded-xl"
        />
        <p className="xl:text-lg">
          <span className="text-[#FF8762] "> Humanitarian Services:</span> Due
          to my love for children, I founded an NGO in 2020 that helps children
          in low-income communities have access to a good education, manage
          their health and general well-being, and feed the homeless. <br />
          <br /> So far, I and my team have been able to feed over 400 homeless
          children, give scholarships to over 20 children, serve as substitute
          teachers in public schools without teachers, clothe the less
          fortunate, counsel rape victims, and so much more with the help of
          donors and sponsors.
        </p>
      </article>
      <article className="sm:grid sm:grid-cols-2 sm:items-center sm:gap-16 xl:gap-20">
        <div className="space-y-4">
          <p className="xl:text-lg">
            <span className="text-[#FF8762] "> Product design: </span> I finally
            transitioned into product design as I have always loved creating
            beautiful designs. I attended Perxels School of Design, where I
            recieved intensive instructions about creating functional products
            that solve users' problems. I then got the opportunity to work with
            other designers, developers, and product managers to create a live
            product. I also went ahead and designed this website from scratch.
          </p>
          <p className="xl:text-lg">
            <span className="text-[#FF8762] "> Hobbies:</span> I like traveling,
            trying out new cuisines from different cultures, and singing, even
            though I am aware I have a terrible voice.
          </p>
        </div>
        <img
          src={AB3}
          alt=""
          className="hidden w-full h-full object-cover object-left-top sm:block rounded-xl"
        />
      </article>
      <article className="sm:grid sm:grid-cols-2 sm:items-center sm:gap-16 xl:gap-20">
        <p className="col-start-2 w-3/4 xl:text-lg">
          <span className="text-[#FF8762] "> Dreams: </span> I hope to make more
          significant changes in my community, create amazing products that are
          useful, and work from anywhere.
        </p>
      </article>
    </div>
  );
};

export default About;
