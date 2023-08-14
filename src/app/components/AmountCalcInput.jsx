"use client";
import React from "react";

const AmountCalcInput = ({
  id,
  active,
  placeHolder,
  footText,
  handleActive,
}) => {
  return (
    <div className=" w-1/2 flex flex-col">
      <div className="w-3/4 relative">
        <input
          type="text"
          id={id}
          className="w-full border rounded-md h-10 px-4 py-1.5 focus-visible:outline-none"
          placeholder={placeHolder}
        />

        <div className="flex justify-center items-center w-fit top-1 right-1 absolute overflow-hidden rounded-lg">
          <div
            className={`h-8 w-14 flex justify-center items-center cursor-pointer ${
              active === "dollar"
                ? "bg-tatto-opacity-blue text-white"
                : "bg-body-pink"
            }`}
            onClick={() => handleActive("dollar")}
          >
            $
          </div>
          <div
            className={`h-8 w-14 flex justify-center items-center cursor-pointer ${
              active === "percentage"
                ? "bg-tatto-opacity-blue text-white"
                : "bg-body-pink"
            }`}
            onClick={() => handleActive("percentage")}
          >
            %
          </div>
        </div>
      </div>
      <span className="text-sm text-gray-500">{footText}</span>
    </div>
  );
};

export default AmountCalcInput;
