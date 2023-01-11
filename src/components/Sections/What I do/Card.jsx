import React from "react";
import { Link } from "react-router-dom";

const Card = ({
  icon,
  title,
  description,
  internalLink,
  externalLink,
  color,
}) => {
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
      {internalLink && (
        <Link
          to={internalLink ? internalLink : "/"}
          className="text-sm font-normal"
        >
          Read More &gt;
        </Link>
      )}
      {externalLink && (
        <a
          href={externalLink ? externalLink : "/"}
          className="text-sm font-normal"
          target="_blank"
          rel="noreferrer noopener"
        >
          Read More &gt;
        </a>
      )}
    </article>
  );
};

export default Card;
