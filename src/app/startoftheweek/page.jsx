"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiX } from "react-icons/fi";

const MobileHeader = dynamic(()=>import("../partails/MobileHeader"),{
  ssr:false
   
 })

const StartOfTheWeek = () => {
  const [editZoomLevel, setEditZoomLevel] = useState(false);

  const [editModal, setEditModal] = useState(false);

  const [weekSelected, setWeekSelected] = useState("Monday");

  const [weekStartsOn, setWeekStartsOn] = useState("");

  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];

  return (
    <>
      <MobileHeader backTo={""} headerTitle={"Start Of The Week"} />
      <div className="pt-2">
        <div className="text-right mt-2">
          <button
            className="bg-tatto-dark-blue text-white py-1 px-10 rounded-full"
            onClick={() => setEditModal(true)}
          >
            Edit
          </button>
        </div>
        {/* Cards */}
        <div className="rounded-xl bg-white px-6 py-4 mt-4 border-2">
          <div className="mb-6">
            <span className="text-sm text-gray-500">
              Specify whether the business week starts on Sunday or Monday. The
              selected week start day will also be used for reporting purposes.
            </span>
          </div>
          {/*  */}

          <>
            <div className="flex justify-between">
              {/* Text */}
              <div>
                <span className="text-sm text-gray-500">Week starts on</span>
              </div>
              {/*  */}
              <div>
                <span className="text-sm font-semibold">{weekSelected}</span>
              </div>
            </div>
          </>
        </div>
      </div>

      {/*  */}
      {/* edit Modal */}
      <div
        className={`w-full h-full fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-40 ${
          editModal ? "visible" : "hidden"
        }`}
        style={{ background: "#00000090" }}
      >
        {/* Modal Inner */}
        <div className="w-11/12 bg-white rounded-2xl p-3">
          {/* Modal Head */}
          <div className="flex justify-between pt-2 pl-2 pb-4 items-center">
            {/* Title */}
            <div className="text-md font-semibold">
              <h1>Zoom Level</h1>
            </div>
            {/* close button */}
            <div onClick={() => setEditModal(false)}>
              <FiX className="text-2xl" />
            </div>
          </div>
          {/* Modal Body */}
          <div className="px-4 py-4 border rounded-2xl">
            {/* Body */}
            <div className="">
              {/*  */}
              <div className="flex flex-col gap-2">
                <div className="form-group flex flex-col gap-2">
                  <label className="text-gray-500  text-sm">
                    Week starts on
                  </label>
                  <div className="flex flex-col gap-2">
                    {weekDays.map((week, idx) => {
                      return (
                        <div key={idx}>
                          <label
                            htmlFor={week}
                            className="flex items-center gap-2"
                          >
                            <input
                              type="radio"
                              className="appearance-none"
                              name="weekname"
                              id={week}
                              onChange={(e) => setWeekStartsOn(week)}
                            />
                            <div
                              className={`w-5 h-5 rounded-full overflow-hidden ${
                                weekStartsOn === week ? "" : "border"
                              }`}
                            >
                              <Image
                                width={40}
                                height={40}
                                className="w-full"
                                src={`${
                                  weekStartsOn === week
                                    ? "/png_icons/check.png"
                                    : "/png_icons/white.jpg"
                                } `}
                                alt=""
                              />
                            </div>
                            <span>{week}</span>
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="pt-4 flex justify-end">
                <button
                  className="bg-tatto-dark-blue text-white py-1 px-10 rounded-full"
                  onClick={() => {
                    setEditModal(false);
                    setWeekSelected(weekStartsOn);
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartOfTheWeek;
