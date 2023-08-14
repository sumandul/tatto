"use client";
import React from "react";

import Link from "next/link";
const MobileHeader = dynamic(()=>import("@/app/partails/MobileHeader"),{
  ssr:false
   
 })


const sendreceipt = () => {
  return (
    <>
      <MobileHeader backTo={""} headerTitle={"Send Receipt"} />
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
          <h1 className="text-md font-bold my-4">
            An Email with the receipt will be sent to :
          </h1>

          <div className="flex flex-col gap-4 mt-10">
            <input
              type="text"
              className="border outline-none w-full h-12 appearance-none px-6 rounded-full placeholder:text-sm"
              placeholder="Email...."
            />
            <span className="text-md font-bold px-6">
              Email was sent successfully.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default sendreceipt;
