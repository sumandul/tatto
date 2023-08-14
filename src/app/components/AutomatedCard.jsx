import React from "react";
import { PiPencilLineLight } from "react-icons/pi";

const AutomatedCard = ({
  headTitle,
  headIcon,
  children,
  editStatus,
  handleEditButton,
  dotTop,
  dotBottom,
  index,
}) => {
  return (
    <div>
      {dotTop ? (
        <div className="flex justify-center items-center relative -mb-3 bg-transparent">
          <div className="w-6 h-6 rounded-full bg-head-pink border-t-2  flex justify-center items-center ">
            <div className="w-3 h-3 bg-[#ADB5BD] rounded-full"></div>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="bg-white w-full shadow-md border-2 rounded-lg  overflow-visible">
        {/* Head */}
        <div className="w-full bg-head-pink flex justify-center py-6 border-b border-black">
          {/* Head inner capsule */}
          <div
            className={`flex items-center justify-center gap-4 bg-white rounded-full py-3 w-11/12 sm:w-10/12 shadow-sm ${
              editStatus ? "cursor-pointer" : "cursor-default"
            } `}
            onClick={handleEditButton}
          >
            <span className="text-xl">{headIcon}</span>
            <h1 className="text-sm sm:text-md font-semibold">{headTitle}</h1>
            <div className={editStatus ? "visible" : "hidden"}>
              <PiPencilLineLight />
            </div>
          </div>
        </div>
        {/* Body */}
        <div className="px-8 py-6 flex flex-col">{children}</div>
      </div>
      {dotBottom ? (
        <div className="flex justify-center items-center relative -mt-3 bg-transparent">
          <div className="w-6 h-6 rounded-full bg-white border-b-2 shadow-md flex justify-center items-center ">
            <div className="w-3 h-3 bg-[#ADB5BD] rounded-full"></div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AutomatedCard;
