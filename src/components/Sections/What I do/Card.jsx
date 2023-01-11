import React from "react";
import { Link } from "react-router-dom";

const Card = ({ icon, title, description, link, color }) => {
  return (
    <article
      className={`text-white my-8 ${color} rounded-3xl p-6 text-center flex flex-col gap-6`}
    >
      <div>
        <img src={icon} alt="" className="mx-auto" />
      </div>
      <div>
        <p className=" font-semibold text-xl mb-3">{title}</p>
        <p className=" font-normal text-base ">{description}</p>
      </div>
      <Link to={link} className="text-sm font-normal">
        Read More &gt;
      </Link>
    </article>
  );
};

export default Card;
