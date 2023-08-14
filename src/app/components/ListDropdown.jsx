"use client";
import React from "react";
import Image from "next/image";

const LinkDropdown = ({
  toggleId,
  status,
  heading,
  list,
  addForm,
  handleStatus,
  handleAddService,
}) => {
  return (
    <div
      className={`h-auto ${
        status ? "bg-body-pink" : "bg-white"
      } transition-all ease-in-out border rounded-lg px-4 py-4`}
    >
      <div
        className={`flex justify-between items-center ${
          status ? "border-b pb-4" : ""
        }`}
      >
        <h1 className="font-semibold">
          {heading}
          <span className="bg-tatto-light-red text-xs px-1.5  py-0.5 ml-1 text-white text-center rounded-full">
            Demo
          </span>
        </h1>
        <Image
          width={40}
          height={40}
          className={`w-5  cursor-pointer ${
            status ? "animate-flip" : "animate-flip-reverse"
          }`}
          onClick={handleStatus}
          src="/png_icons/arrow-down.png"
          alt=""
        />
      </div>
      <ul className={`flex flex-col ${status ? `visible` : "hidden"}`}>
        {list.map((items, idx) => (
          <li className="py-2 text-sm" key={idx}>
            {items}
          </li>
        ))}
      </ul>
      <div
        className={`${
          status ? `visible` : "hidden"
        } cursor-pointer border-t flex items-center gap-3 pt-4`}
      >
        <Image
          width={40}
          height={40}
          className="w-4"
          src="/png_icons/add-red.png"
          alt=""
        />
        <h1 className="text-tatto-light-red text-xs" onClick={handleAddService}>
          Add Service
        </h1>
      </div>
    </div>
  );
};

export default LinkDropdown;
