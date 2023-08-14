import React, { useEffect, useState } from "react";
import { BiPencil } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";

const SendText = ({
  status,
  handleClose,
  title,
  customizeStatus,
  handleSendTest,
}) => {
  const [customizeTextSection, setCustomizeTextSection] = useState(false);

  useEffect(() => {
    if (status) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [status]);
  return (
    <>
      {/* Side Modal */}
      <div
        className={`w-full h-full fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-40 ${
          status ? "visible" : "hidden"
        }`}
        style={{ background: "#00000060" }}
        onClick={handleClose}
      ></div>
      {/* Modal Inner */}
      <div
        className={`w-2/4 bg-white ease-in-out  fixed top-0 h-screen overflow-hidden z-50 ${
          status ? "right-0" : "-right-full"
        } `}
        style={{ transition: "0.3s" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Head */}
        <div className="border-b-2 flex gap-4 items-center bg-head-pink px-2 py-3">
          <div>
            <RxCross1
              className="w-8 rotate-90 cursor-pointer"
              src="/png_icons/arrow-down.png"
              alt=""
              onClick={() => handleClose()}
              width={40}
              height={40}
            />
          </div>
          <div className="">
            <h1 className="text-md font-semibold">{title}</h1>
          </div>
        </div>
        {/* Modal Body */}
        <div className="px-6 py-6 relative hide-scrollbar overflow-y-scroll h-screen">
          {/* customize section */}
          <div className="flex justify-between">
            {/*  */}
            {customizeStatus ? (
              !customizeTextSection ? (
                <button
                  className="flex gap-2 items-center border-2 border-tatto-dark-blue py-2 text-sm px-3 text-tatto-dark-blue rounded-md"
                  onClick={() => setCustomizeTextSection(true)}
                >
                  <BiPencil /> Customize
                </button>
              ) : (
                <div className="flex gap-4">
                  <button
                    className="flex gap-2 items-center border-2 border-light-gray py-2.5 text-sm px-6 text-light-gray rounded-md"
                    onClick={() => setCustomizeTextSection(false)}
                  >
                    Cencel
                  </button>
                  <button
                    className="flex gap-2 items-center border-2 border-tatto-dark-blue py-2.5 text-sm px-6 text-white bg-tatto-dark-blue rounded-md"
                    onClick={() => setCustomizeTextSection(false)}
                  >
                    Save
                  </button>
                </div>
              )
            ) : (
              <span>This cannot be customized.</span>
            )}
            {/*  */}
            <div className="flex justify-end items-end">
              <span
                className="text-tatto-dark-blue cursor-pointer underline"
                onClick={handleSendTest}
              >
                Send a test
              </span>
            </div>
          </div>
          {/* Main Body */}
          <>
            {!customizeTextSection ? (
              <div className="border mt-8 h-96 rounded-xl p-4">
                <div className="">
                  <h1>Chat Box will be here</h1>
                </div>
              </div>
            ) : (
              <div className="border mt-8 h-96 rounded-xl p-4">
                <div className="">
                  <h1>text customie will be here</h1>
                </div>
              </div>
            )}
          </>
        </div>
      </div>
    </>
  );
};

export default SendText;
