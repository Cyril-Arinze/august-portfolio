import React from "react";

const ContactSection = () => {
  return (
    <section>
      <div className="max-w-7xl text-white">
        <div className="bg-[#343434]/40 p-8 space-y-5">
          <p className="text-2xl font-bold">Let’s work together as a team.</p>
          <button className="bg-[#FF8762] py-3 px-5 rounded-2xl text-sm">
            Contact me
          </button>
        </div>
        <div className="px-8 py-12 text-center space-y-5">
          <p className="text-base font-normal">About Me</p>
          <div className="flex justify-center">
            <svg
              width="30"
              height="20"
              viewBox="0 0 30 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.2857 17.1429V4.28571C29.2857 4.28571 16.2857 13.3571 15.0214 13.8279C13.7786 13.3786 0.714287 4.28571 0.714287 4.28571V17.1429C0.714287 18.9286 1.09286 19.2857 2.85714 19.2857H27.1429C28.9493 19.2857 29.2857 18.9721 29.2857 17.1429ZM29.265 1.765C29.265 0.464286 28.8857 0 27.1429 0H2.85714C1.06429 0 0.714287 0.557143 0.714287 1.85714L0.735715 2.05714C0.735715 2.05714 13.6421 10.9429 15.0214 11.4286C16.4786 10.8643 29.2857 1.85714 29.2857 1.85714L29.265 1.765Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
