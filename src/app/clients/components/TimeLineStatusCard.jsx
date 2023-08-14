import React from "react";
import { FaCheck } from "react-icons/fa";

const TimeLineStatusCard = ({ cardStatu, proccessStatus, children }) => {
  return (
    <div
      className={`w-full relative pl-8 pb-4 ${cardStatu ? "block" : "hidden"}`}
    >
      {/* Dot */}
      <div className="w-6 h-6 bg-tatto-dark-blue absolute -left-3 top-0 rounded-full flex justify-center items-center text-white text-sm">
        {proccessStatus && <FaCheck />}
      </div>
      <div className="auto w-fit">{children}</div>
    </div>
  );
};

export default TimeLineStatusCard;
