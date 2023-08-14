"use client";
import React, { useState } from "react";
import { FiX } from "react-icons/fi";
const MobileHeader = dynamic(()=>import("../partails/MobileHeader"),{
  ssr:false
   
 })
 const  MobileFooter = dynamic(()=>import("../MobileFooter/MobileHeader"),{
  ssr:false
   
 })

const ZoomLevel = () => {
  const [ZoomLevel, setZoomLevel] = useState("XX-Large");

  const [editModal, setEditModal] = useState(false);

  const [zoomLevelValue, setZoomLevelValue] = useState("");

  const zoomLevels = ["Small", "Medium", "Large", "XX-Large", "XXX-large"];

  return (
    <>
      <MobileHeader backTo={""} headerTitle={"Zoom Level"} />
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

          <>
            <div className="flex justify-between">
              {/* Text */}
              <div>
                <span className="text-sm text-gray-500">Zoom Level</span>
              </div>
              {/*  */}
              <div>
                <span className="text-sm font-semibold">{ZoomLevel}</span>
              </div>
            </div>
          </>
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
              <div className="mb-3">
                <span className="text-xs text-gray-500">
                  Select a larger zoom level when your business provides mostly
                  short services (e.g. less then 30 minutes). this will ensure
                  that all the appointments info is visible on the calender.
                </span>
              </div>
              {/*  */}
              <div className="flex flex-col gap-2">
                <div className="form-group flex flex-col gap-2">
                  <label htmlFor="ZoomLevel" className="text-gray-500  text-sm">
                    Zoom Level
                  </label>
                  <select
                    name=""
                    id="ZoomLevel"
                    value={zoomLevelValue}
                    onChange={(e) => setZoomLevelValue(e.target.value)}
                    className=" w-full border rounded-full px-2 py-1 focus-visible:outline-none"
                  >
                    {zoomLevels.map((level, idx) => {
                      return (
                        <option key={idx} value={level}>
                          {level}
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
                    setZoomLevel(zoomLevelValue);
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

export default ZoomLevel;
