import React from "react";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link
      to="/home"
      className="bg-[#FF8762] text-white text-xl px-6 m-4 inline-block rounded-lg"
    >
      <i className="bi bi-arrow-left"></i>
    </Link>
  );
};

export default BackButton;
