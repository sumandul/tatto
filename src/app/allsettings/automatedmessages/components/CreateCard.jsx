import React from "react";
import { SlSettings } from "react-icons/sl";
import Image from "next/image";

const CreateCard = ({ icons, text, dotsStatus, remove, handleClick }) => {
  return (
    <div className="flex items-center gap-4 cursor-pointer">
      <div
        className="flex justify-between items-center rounded-md border border-gray-300 py-3 px-3 gap-2 w-full hover:bg-[#fff7ef]"
        onClick={handleClick}
      >
        <div className="flex items-center gap-3">
          <span className="text-xl text-tatto-muted">{icons}</span>
          <h1 className="text-sm text-tatto-muted">{text}</h1>
        </div>
        <span className="text-lg">
          <SlSettings />
        </span>
      </div>
      <button
        className={` ${
          dotsStatus ? "text-tatto-muted" : " cursor-pointer"
        } text-xl relative`}
        disabled={dotsStatus ? "disabled" : ""}
      >
        <Image
          src="/png_icons/delete.png"
          className={`w-8 ${dotsStatus ? "grayscale cursor-not-allowed" : ""}`}
          width={"20"}
          height={"20"}
          alt="delete Icon"
          onClick={() => remove()}
        />
      </button>
    </div>
  );
};

export default CreateCard;
