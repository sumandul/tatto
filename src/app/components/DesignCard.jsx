"use client";
import React from "react";
import Image from "next/image";

const DesignCard = ({ radioBtnId, imagePath, handleRadio, status }) => {
  return (
    <>
      <input
        type="radio"
        className="hidden"
        id={radioBtnId}
        checked={status === radioBtnId}
        value={radioBtnId}
        name="radios"
        onChange={handleRadio}
      />
      <label htmlFor={radioBtnId} className="relative">
        <Image
          width={40}
          height={40}
          className={`border-3 w-full ${
            status === radioBtnId ? "border-green-600  " : "border-transparent"
          } rounded-xl`}
          src={imagePath}
          alt="Image 1"
        />
        <Image
          width={40}
          height={40}
          className={`w-5 absolute right-4 bottom-4 ${
            status === radioBtnId ? "visible" : "hidden"
          }`}
          src="/png_icons/check.png"
          alt=""
        />
      </label>
    </>
  );
};

export default DesignCard;
