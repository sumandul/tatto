"use client";
import React, { useState } from "react";

import Link from "next/link";
import dynamic from "next/dynamic";
const MobileHeader = dynamic(()=>import("@/app/partails/MobileHeader"),{
  ssr:false
   
 })


const Void = () => {
  return (
    <>
      <MobileHeader backTo={""} headerTitle={"Void"} />
      <div className="pt-2">
        <div className="text-right mt-2">
          <Link href={"/sales/profile"}>
            <button className="bg-tatto-dark-blue text-white py-1 px-10 rounded-full">
              Confirm
            </button>
          </Link>
        </div>
        {/* Content */}
        <div className="px-4 text-center flex flex-col gap-6">
          <h1 className="text-md font-semibold my-4">
            Voiding this sale will mark its completed payments as voided.
          </h1>

          <div>
            <h1 className="text-md font-bold">
              Do you want to continue voiding this sale?
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Void;
