"use client";
import React, { useState } from "react";

const SmallToggleSwitch = ({
  id,
  title,
  status,
  handleSwitch,
  description,
}) => {
  const [isChecked, setIsChecked] = useState(status);

  function handleCheckboxChange(event) {
    setIsChecked(event.target.checked);
    handleSwitch();
  }

  return (
    <div
      className={`w-full flex justify-between p-3 rounded-lg border ${
        !status ? `bg-body-pink` : `bg-white`
      }`}
    >
      {/* Left Side */}
      <div className="flex flex-col justify-center gap-0.5 w-5/6">
        <div className="flex items-center gap-2">
          {title ? (
            <h1 className="font-bold text-md">{title}</h1>
          ) : description ? (
            <span className="text-sm text-gray-500">{description}</span>
          ) : (
            ""
          )}
        </div>
      </div>
      {/* Right Side */}
      <div className="w-1/6">
        <div className="flex items-center justify-end w-full">
          <label htmlFor={id} className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                id={id}
                checked={isChecked}
                className="sr-only"
                onChange={handleCheckboxChange}
              />

              <div
                className={`block ${
                  !status ? `bg-tatto-disabled` : `bg-tatto-dark-blue`
                } w-11 h-6 rounded-full`}
              ></div>

              <div
                className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition`}
              ></div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SmallToggleSwitch;
