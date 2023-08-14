"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const ServicesToggleCard = ({
  id,
  title,
  status,
  handleSwitch,
  additionalOptions,
  showAO,
  AmountCalcType,
  handleAmountCalcType,
  onlineId,
  onlineBookingStatus,
  handleOnlineBookingStatus,
  onlineBookingLink,
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
            className={` flex flex-col gap-3 ${
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
              <label htmlFor="FinishingTime" className="text-sm">
                Finishing Time
              </label>
              <div className="flex items-center relative">
                <select
                  name=""
                  id="FinishingTime"
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
              <label htmlFor="Commission" className="text-sm">
                Commission
              </label>
              <div className="w-60 flex flex-col">
                <div className="w-full relative">
                  <input
                    type="text"
                    id={"Commission"}
                    className="w-full border rounded-md h-10 px-4 py-1.5 focus-visible:outline-none"
                    placeholder={""}
                  />

                  <div className="flex justify-center items-center w-fit top-1 right-1 absolute overflow-hidden rounded-lg">
                    <div
                      className={`h-8 w-14 flex justify-center items-center cursor-pointer ${
                        AmountCalcType === "dollar"
                          ? "bg-tatto-opacity-blue text-white"
                          : "bg-body-pink"
                      }`}
                      onClick={() => handleAmountCalcType("dollar")}
                    >
                      $
                    </div>
                    <div
                      className={`h-8 w-14 flex justify-center items-center cursor-pointer ${
                        AmountCalcType === "percentage"
                          ? "bg-tatto-opacity-blue text-white"
                          : "bg-body-pink"
                      }`}
                      onClick={() => handleAmountCalcType("percentage")}
                    >
                      %
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="flex justify-between h-8 items-center">
              <label htmlFor="Commission" className="text-sm">
                Enable in Online booking
              </label>
              <div className="w-60 flex flex-col">
                <label
                  htmlFor={onlineId}
                  className="flex gap-4 justify-end mr-2 items-center cursor-pointer text-sm"
                >
                  <div className="relative">
                    <input
                      type="checkbox"
                      id={onlineId}
                      checked={onlineBookingStatus}
                      className="sr-only"
                      onChange={handleOnlineBookingStatus}
                    />

                    <div
                      className={`block ${
                        !onlineBookingStatus
                          ? `bg-tatto-disabled`
                          : `bg-tatto-dark-blue`
                      } w-11 h-6 rounded-full`}
                    ></div>

                    <div
                      className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition`}
                    ></div>
                  </div>
                </label>
              </div>
            </div>
            {/*  */}
            <div className="flex justify-between h-8 items-center">
              <label htmlFor="Commission" className="text-sm">
                Enable in Online booking
              </label>
              <div className="w-60 flex flex-col text-right mr-2">
                <Link className="underline text-sm" href={onlineBookingLink}>
                  Direct Link
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesToggleCard;
