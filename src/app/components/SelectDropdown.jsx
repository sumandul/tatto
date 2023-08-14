"use client";
import Image from "next/image";
import React, { useState } from "react";

const SelectDrodown = ({ options, value, handleOnChange }) => {
  const [openSelect, setOpenSelect] = useState(false);
  return (
    <div className="relative h-10 w-full bg-white">
      <div
        className={`w-full ${
          openSelect
            ? "h-auto rounded-md absolute top-0 shadow-xl"
            : "h-10 rounded-full sm:rounded relative"
        } border focus-visible:outline-none bg-white z-10 sm:transition-all`}
      >
        <div className={``}>
          <div
            onClick={() =>
              openSelect ? setOpenSelect(false) : setOpenSelect(true)
            }
            className="h-10 flex items-center pl-4 w-full"
          >
            <div className="">
              <h1>{value}</h1>
            </div>
            <Image
              width={40}
              height={40}
              className={`w-5 absolute right-3 top-2 pointer-events-none cursor-pointer transition ${
                openSelect ? "rotate-180" : "rotate-0"
              }`}
              src="/png_icons/arrow-down.png"
              alt=""
            />
          </div>
          <div className={`pl-4 border-t ${openSelect ? "block" : "hidden"} `}>
            {options?.map((opt, idx) => (
              <div
                className="py-2"
                key={idx}
                onClick={() => {
                  handleOnChange(opt);
                  setOpenSelect(false);
                }}
              >
                {opt}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectDrodown;
