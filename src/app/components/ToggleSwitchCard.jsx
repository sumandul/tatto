"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ToggleSwitchCard = ({
  id,
  icon,
  title,
  description,
  learnMoreLink,
  status,
  handleSwitch,
  padding,
}) => {
  const [isChecked, setIsChecked] = useState(status);

  function handleCheckboxChange(event) {
    setIsChecked(event.target.checked);
    handleSwitch();
  }

  return (
    <div
      className={`w-full flex justify-between ${
        padding ? padding : "p-4"
      } rounded-lg border ${!status ? `bg-body-pink` : `bg-white`}`}
    >
      {/* Left Side */}
      <div className="flex flex-col gap-0.5 w-3/4">
        <div className="flex items-center gap-2">
          <div className={`${icon ? "block" : "hidden"}`}>
            <Image
              width={40}
              height={40}
              className="w-5"
              src={icon === "" ? "" : icon}
              alt=""
            />
          </div>
          <h1 className="font-bold text-lg">{title}</h1>
        </div>
        <div>
          <p className="text-gray-500 font-light text-sm">{description}</p>
        </div>
        <div className={`${learnMoreLink ? "visible" : "hidden"}`}>
          <Link href={learnMoreLink}>
            <span className="text-green-600 text-sm underline">Learn more</span>
          </Link>
        </div>
      </div>
      {/* Right Side */}
      <div className="w-1/4">
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

export default ToggleSwitchCard;
