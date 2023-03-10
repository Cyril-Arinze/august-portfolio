import React from "react";
import AIA from "../../../assests/images/AIA_UIUX.png";

const UIUX = () => {
  return (
    <section>
      <div className="max-w-7xl p-8 text-white mx-auto sm:grid sm:grid-cols-2 items-center">
        <h1 className="font-bold text-3xl sm:text-4xl xl:text-5xl text-center mb-9 col-span-full">
          <span className="text-[#FF8762]">UI/UX</span> Design
        </h1>
        <div>
          <h1 className="text-[#FF8762] text-lg mb-4">
            Hey, i am Ambrose Ijeoma Augustina
          </h1>
          <article>
            <p>
              With a year of experience and rigorous training, I am adapt in
              working collaboratively with teams, receptive to feedback and
              carry out research. I am dedicated to contributing to the success
              of your business, company or idea.
            </p>
          </article>
          <article className="flex flex-col gap-6 mt-4">
            <p className="text-[#FF8762]">
              Some notable qualifications include:
            </p>
            <p className="flex gap-2 items-start">
              <span className="text-[#FF8762] text-4xl leading-[1.5rem]">
                •
              </span>
              Good experience providing user research.
            </p>
            <p className="flex gap-2 items-start">
              <span className="text-[#FF8762] text-4xl leading-[1.5rem]">
                •
              </span>
              Researched, designed and published a case study on a fintech
              mobile app with over 50 screens.
            </p>
            <p className="flex gap-2 items-start">
              <span className="text-[#FF8762] text-4xl leading-[1.5rem]">
                •
              </span>
              Researched and designed a market place mobile app for a client.
            </p>
            <p className="flex gap-2 items-start">
              <span className="text-[#FF8762] text-4xl leading-[1.5rem]">
                •
              </span>
              Worked closely with other designers, developers and product
              manager to deliver a live product.
            </p>
            <p className="flex gap-2 items-start">
              <span className="text-[#FF8762] text-4xl leading-[1.5rem]">
                •
              </span>
              Consistent focus on user needs in other to create usable products.
            </p>
          </article>
        </div>
        <div className="hidden sm:block justify-self-end">
          <img src={AIA} alt="" />
        </div>
      </div>
    </section>
  );
};

export default UIUX;
