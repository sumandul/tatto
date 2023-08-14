import Image from "next/image";
import React from "react";

const SideBar = ({ children, logo, title, description }) => {
  return (
    <>
      <div className="sticky hidden sm:flex flex-col w-full sm:w-1/4 h-full gap-4 bg-transparent top-10">
        {/*  */}
        <div className="flex-col rounded-xl hidden sm:flex">
          <div className="flex px-5 py-6 rounded-xl bg-mid-gray">
            <div className="mr-4">
              <Image
                className="w-28"
                src={logo}
                alt=""
                width={40}
                height={40}
              />
            </div>
            <div className="">
              <h1 className="mb-2 text-xl font-semibold">{title}</h1>
              <span className="text-gray-500">{description}</span>
            </div>
          </div>
        </div>
        {/* this is staff members list section  */}
        <div className="sm:px-6  rounded-2xl sm:rounded-lg">{children}</div>
      </div>
    </>
  );
};

export default SideBar;
