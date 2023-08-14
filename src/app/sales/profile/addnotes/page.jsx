"use client";
import React, { useState } from "react";
import MobileHeader from "@/app/partails/MobileHeader";
import Link from "next/link";



const AddNotes = () => {
  return (
    <>
      <MobileHeader backTo={""} headerTitle={"Sale Notes"} />
      <div className="pt-2">
        <div className="text-right mt-2">
          <Link href={"/sales/profile"}>
            <button className="bg-tatto-dark-blue text-white py-1 px-10 rounded-full">
              Save
            </button>
          </Link>
        </div>
        {/* Content */}
        <div className="px-4">
          <h1 className="text-md font-bold my-4">Sale Note</h1>

          <div>
            <input
              type="text"
              className="border outline-none w-full h-12 appearance-none px-4 rounded-full placeholder:text-sm"
              placeholder="Enter sale notes...."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNotes;
