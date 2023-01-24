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
      className={`text-white ${color} rounded-3xl p-6 text-center flex flex-col gap-6 xl:p-[80px]`}
    >
      <div>
        <img src={icon} alt="/" className="mx-auto" />
      </div>
      <div>
        <p className=" font-semibold text-xl mb-3 sm:text-3xl">{title}</p>
        <p className=" font-normal text-base sm:text-lg">{description}</p>
      </div>
      {internalLink && (
        <Link
          to={internalLink ? internalLink : "/"}
          className="text-sm font-normal sm:text-lg"
        >
          Read More &gt;
        </Link>
      )}
      {externalLink && (
        <a
          href={externalLink ? externalLink : "/"}
          className="text-sm font-normal sm:text-lg"
          target="_blank"
          rel="noreferrer noopener"
        >
          See More &gt;
        </a>
      )}
    </article>
  );
};

export default Card;
