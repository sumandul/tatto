import React from "react";
import { FiX } from "react-icons/fi";

const SendTestModal = ({ status, closeModal, value, setValue }) => {
  return (
    <>
      <div
        className={`w-full h-full fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-50 ${
          status ? "visible" : "hidden"
        }`}
        style={{ background: "#00000090" }}
        onClick={() => closeModal()}
      >
        <div
          className="w-1/2 bg-white rounded-2xl p-3 z-50"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Head */}
          <div className="flex justify-end pt-1 pb-4 items-center relative">
            {/* close button */}
            <div
              className="absolute right-0 top-0.5"
              onClick={() => closeModal()}
            >
              <FiX className="text-2xl" />
            </div>
          </div>
          {/* Modal Body */}
          <div className="px-4 py-4">
            {/* Body */}
            <div className="flex flex-col gap-6 px-10">
              {/*  */}
              <div className="text-center">
                <h1 className="text-xl">Send example email</h1>
                <span className="text-tatto-muted">
                  Enter an email address below
                </span>
              </div>
              {/*  */}
              <div className="flex flex-col gap-1">
                <label className="text-tatto-muted text-sm">
                  Email address:
                </label>
                <div>
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus-visible:outline-none placeholder:text-tatto-muted placeholder:italic"
                    placeholder="Enter email address"
                  />
                </div>
              </div>
              {/* Button */}
              <div className="justify-center flex flex-row gap-2">
                <button
                  className="px-6 py-2 border rounded-md border-tatto-dark-blue text-tatto-dark-blue"
                  onClick={() => closeModal()}
                >
                  Cancel
                </button>
                <button
                  className="px-6 py-2 border rounded-md bg-tatto-dark-blue text-white"
                  onClick={() => closeModal()}
                >
                  Send example
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SendTestModal;
