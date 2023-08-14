"use client";
import React, { useState } from "react";
import MobileHeader from "@/app/partails/MobileHeader";
import Link from "next/link";

const ChnageSaleDate = () => {
  return (
    <>
      <MobileHeader backTo={""} headerTitle={"Change Sale Date"} />
      <div className="pt-2">
        <div className="text-right mt-2">
          <Link href={"/sales/profile"}>
            <button className="bg-tatto-dark-blue text-white py-1 px-10 rounded-full">
              Save
            </button>
          </Link>
        </div>
        {/* Content */}
        <div className="">
          <h1 className="text-md font-bold text-center my-4">
            This Date is being for reporting purposes, such as payroll, sales
            summary, elc,
          </h1>

          <div>
            <input
              type="date"
              className="border outline-none w-full h-12 appearance-none px-4 rounded-full"
              name=""
              id=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChnageSaleDate;
