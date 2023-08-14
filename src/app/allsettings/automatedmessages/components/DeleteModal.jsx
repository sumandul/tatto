import React, { useEffect } from "react";
import { FiX } from "react-icons/fi";

const DeleteModal = ({ status, handleClose }) => {
  useEffect(() => {
    if (status) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [status]);
  return (
    <>
      <div
        className={`w-full h-full fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-40 ${
          status ? "visible" : "hidden"
        }`}
        style={{ background: "#00000090" }}
      >
        <div className="w-1/2 bg-white rounded-2xl p-3">
          {/* Modal Head */}
          <div className="flex justify-end pt-1 pb-4 items-center relative">
            {/* close button */}
            <div
              className="absolute right-0 top-0.5"
              onClick={() => handleClose()}
            >
              <FiX className="text-2xl" />
            </div>
          </div>
          {/* Modal Body */}
          <div className="px-4 py-4">
            {/* Body */}
            <div className="flex flex-col gap-10 px-10">
              {/*  */}
              <div className="text-center">
                <h1 className="text-xl">Remove message</h1>
                <span className="text-tatto-muted">
                  Are you sure you want to remove this message?
                </span>
              </div>

              {/* Button */}
              <div className="justify-center flex flex-row gap-2">
                <button
                  className="px-6 py-2 border rounded-md border-tatto-dark-blue text-tatto-dark-blue"
                  onClick={() => handleClose()}
                >
                  Cancel
                </button>
                <button
                  className="px-6 py-2 border rounded-md bg-tatto-dark-blue text-white"
                  onClick={() => handleClose()}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
