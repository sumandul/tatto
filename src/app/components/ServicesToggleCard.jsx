"use client";
import Image from "next/image";
import React from "react";

const ServicesToggleCard = ({
  id,
  title,
  status,
  handleSwitch,
  additionalOptions,
  showAO,
  extras,
}) => {
  return (
    <>
      <div
        className={`border-2 py-3 px-5 rounded-lg`}
        style={{ background: `${status ? "white" : "#F7F7F9"}` }}
      >
        {/* Head */}
        <div className="border-b py-1.5 flex justify-between w-full">
          <div>
            <h1 className="text-lg font-bold">{title}</h1>
          </div>
          <div className="flex items-center justify-start gap-4">
            <label
              htmlFor={id}
              className="flex gap-4 items-center cursor-pointer text-sm"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  id={id}
                  checked={status}
                  className="sr-only"
                  onChange={handleSwitch}
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
        {/* Body */}
        <div className="pt-4 flex flex-col gap-3">
          {/*  */}
          <div className="flex justify-between items-center">
            <label htmlFor="Duration" className="text-sm">
              Duration
            </label>
            <div className="flex items-center relative">
              <select
                name=""
                id="Duration"
                className="appearance-none bg-transparent border-2 rounded-lg w-60 px-4 py-1.5 focus-visible:outline-none"
              >
                <option value="">15 minutes</option>
                <option value="">30 minutes</option>
                <option value="">45 minutes</option>
                <option value="">1 hour</option>
              </select>
              <Image
                width={40}
                height={40}
                className="w-4 absolute right-2.5"
                src="/png_icons/arrow-down.png"
                alt=""
              />
            </div>
          </div>
          {/*  */}
          <div className="flex justify-between items-center">
            <label htmlFor="price" className="text-sm">
              price
            </label>
            <div className="relative flex  items-center">
              <span className="absolute text-lg top-1.5 bottom-0 left-4">
                $
              </span>
              <input
                type="number"
                name=""
                id="price"
                className="appearance-none bg-transparent border-2 rounded-lg w-60 px-8 py-1.5 focus-visible:outline-none"
              />
            </div>
          </div>
          {/*  */}
          <div
            className={`text-right w-full ${
              additionalOptions ? "hidden" : "visible"
            }`}
          >
            <span
              onClick={showAO}
              className="underline text-green-500 text-sm cursor-pointer text-right mr-14"
            >
              Additional Options
            </span>
          </div>
          {/*  */}

          <div
            className={`pb-4 flex flex-col gap-3 ${
              additionalOptions ? "visible" : "hidden"
            }`}
          >
            {/*  */}
            <div className="flex justify-between items-center">
              <label htmlFor="ProcessingTime1" className="text-sm">
                Processing Time
              </label>
              <div className="flex items-center relative">
                <select
                  name=""
                  id="ProcessingTime1"
                  className="appearance-none bg-transparent border-2 rounded-lg w-60 px-4 py-1.5 focus-visible:outline-none"
                >
                  <option value="">15 minutes</option>
                  <option value="">30 minutes</option>
                  <option value="">45 minutes</option>
                  <option value="">1 hour</option>
                </select>
                <Image
                  width={40}
                  height={40}
                  className="w-4 absolute right-2.5"
                  src="/png_icons/arrow-down.png"
                  alt=""
                />
              </div>
            </div>
            {/*  */}
            <div className="flex justify-between items-center">
              <label htmlFor="ProcessingTime2" className="text-sm">
                Processing Time
              </label>
              <div className="flex items-center relative">
                <select
                  name=""
                  id="ProcessingTime2"
                  className="appearance-none bg-transparent border-2 rounded-lg w-60 px-4 py-1.5 focus-visible:outline-none"
                >
                  <option value="">15 minutes</option>
                  <option value="">30 minutes</option>
                  <option value="">45 minutes</option>
                  <option value="">1 hour</option>
                </select>
                <Image
                  width={40}
                  height={40}
                  className="w-4 absolute right-2.5"
                  src="/png_icons/arrow-down.png"
                  alt=""
                />
              </div>
            </div>
            {/*  */}
            <div className="flex justify-between items-center">
              <label htmlFor="ProcessingTime3" className="text-sm">
                Processing Time
              </label>
              <input
                name=""
                id="ProcessingTime3"
                className="bg-transparent border-2 rounded-lg w-60 px-4 py-1.5 focus-visible:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesToggleCard;
