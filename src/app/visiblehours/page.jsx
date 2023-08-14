"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { FiX } from "react-icons/fi";

const MobileHeader = dynamic(()=>import("../partails/MobileHeader"),{
  ssr:false
   
 })
 const  MobileFooter = dynamic(()=>import("../partails/MobileFooter"),{
  ssr:false
   
 })


const VisibleHours = () => {
  const [editModal, setEditModal] = useState(false);

  const times = [
    "7:00 AM",
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
  ];

  return (
    <>
      <MobileHeader backTo={""} headerTitle={"Visible Hours"} />

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
              Select the hours that are visible on the calender. these hours are
              usually different from business hours and only determine when your
              calender starts and ends.
            </span>
          </div>
          {/*  */}
          <div className="flex justify-between">
            {/* Text */}
            <div>
              <span className="text-sm text-gray-500">Visible hours</span>
            </div>
            {/*  */}
            <div>
              <span className="text-sm font-semibold">7.00 AM - 10:00 PM</span>
            </div>
          </div>
        </div>
      </div>
      <MobileFooter />

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
          <div className="flex justify-between pt-1 pb-4 items-center">
            {/* Title */}
            <div className="text-md font-semibold">
              <h1>Visible Hours</h1>
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
              <div className="mb-3">
                <span className="text-xs text-gray-500">
                  Select the hours that are visible on the calender. these hours
                  are usually different from business hours and only determine
                  when your calender starts and ends.
                </span>
              </div>
              {/*  */}
              <div className="flex flex-col gap-2">
                <div className="form-group flex flex-col gap-2">
                  <label htmlFor="fromDate" className="text-gray-500  text-sm">
                    From
                  </label>
                  <select
                    name=""
                    id="fromDate"
                    className="border rounded-full px-2 py-1 focus-visible:outline-none"
                  >
                    {times.map((time, idx) => {
                      return (
                        <option key={idx} value={time}>
                          {time}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="form-group flex flex-col gap-2">
                  <label htmlFor="untilDate" className="text-gray-500  text-sm">
                    Until
                  </label>
                  <select
                    name=""
                    id="fromDate"
                    className="border rounded-full px-2 py-1 focus-visible:outline-none"
                  >
                    {times.map((time, idx) => {
                      return (
                        <option key={idx} value={time}>
                          {time}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="pt-4 flex justify-end">
                <button
                  className="bg-tatto-dark-blue text-white py-1 px-10 rounded-full"
                  onClick={() => {
                    setEditModal(false);
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

export default VisibleHours;
