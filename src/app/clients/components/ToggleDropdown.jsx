import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const ToggleDropdown = ({ title, children }) => {
  const [status, setStatus] = useState(false);
  return (
    <>
      <div>
        <div
          className="flex justify-between px-2 py-3 sm:px-2 sm:py-2 items-center cursor-pointer"
          onClick={() => setStatus(!status)}
        >
          <h1>{title}</h1>
          <MdKeyboardArrowRight
            className={` text-3xl transition-all ${status ? "rotate-90" : ""}`}
          />
        </div>
        <div
          className={`px-4 py-2 flex flex-col gap-3 ${
            status ? "flex" : "hidden"
          }`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default ToggleDropdown;
