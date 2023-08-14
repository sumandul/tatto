"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiClock } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import Image from "next/image";

const SalesProfile = () => {
  const [showManuBar, setShowManuBar] = useState(false);

  return (
    <>
      {/* Header */}
      <div
        className={`bg-tatto-dark-blue h-16 flex justify-between items-center px-6 py-4 rounded-lg `}
      >
        <>
          {/* Back Button */}
          <div className="w-20">
            <div>
              <Link href={""}>
                <Image
                  width={40}
                  height={40}
                  className="w-5"
                  src="/png_icons/back-arrow.png"
                  alt="back arrow icon"
                />
              </Link>
            </div>
          </div>
          {/* Page Title */}
          <div className="w-full text-center">
            <h1 className="text-1xl font-bold text-white">Sales</h1>
          </div>
          {/* SIde */}
          <div className="w-24 flex justify-end">
            <div className="relative">
              <Image
                width={40}
                height={40}
                src="/png_icons/three-dots-white.png"
                className="w-1.5"
                alt=""
                onClick={() => setShowManuBar(!showManuBar)}
              />

              <ul
                className={`absolute bg-white w-40 shadow-2xl -left-36 p-4 rounded-lg mt-2 ${
                  showManuBar ? "visible" : "hidden"
                }`}
              >
                <div className="border-b mb-4">
                  <li className="pb-4">
                    <Link href="/sales/profile/changesaledate">
                      Change Date
                    </Link>
                  </li>
                  <li className="pb-4">
                    <Link href="/sales/profile/addnotes">Add Notes</Link>
                  </li>
                </div>
                <div className="border-b mb-4">
                  <li className="pb-4">
                    <Link href="#">Reopen</Link>
                  </li>
                  <li className="pb-4">
                    <Link href="/sales/profile/voiding">Void</Link>
                  </li>
                </div>
                <div className="">
                  <li className="pb-4">
                    <Link href="#">Print Receipt</Link>
                  </li>
                  <li className="">
                    <Link href="/sales/profile/sendreceipt">Send Receipt</Link>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </>
      </div>

      {/* Card */}
      <div className="rounded-xl bg-white px-6 py-4 mt-4 border-2 ">
        {/* Location */}
        <div className="flex gap-1 border-b pt-2 pb-3">
          <span className="text-sm text-tatto-muted">Location:</span>
          <span className="text-sm"> Katewil</span>
        </div>
        {/* Profile */}
        <div className="flex flex-col gap-3 py-4 justify-center items-center text-center">
          {/* DP */}
          <div>
            <Image
              width={40}
              height={40}
              className="w-28"
              src="/png_icons/staff_members_dp/1.png"
              alt=""
            />
          </div>
          <div>
            {/* name */}
            <div>
              <h1 className="text-md">Sylvester Conrad</h1>
            </div>
            {/* created date */}
            <div>
              <span className="text-tatto-muted text-sm">
                Client since June 2023
              </span>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="">
          {/*  */}
          <div className="flex justify-between items-start border-b py-4 mt-4">
            <div>
              <h1 className="text-md font-semibold">Makeup Application</h1>
              <span className="text-md text-tatto-muted">With Hfs</span>
            </div>
            <div>
              <h1 className="text-md">$344</h1>
            </div>
          </div>
          <div className="border-b">
            {/*  */}
            <div className="flex justify-between items-start py-4">
              <div>
                <h1 className="text-md font-semibold">Subtotal</h1>
              </div>
              <div>
                <h1 className="text-md">$344</h1>
              </div>
            </div>
            {/*  */}
            <div className="flex justify-between items-start py-4">
              <div>
                <h1 className="text-md font-semibold">Tax</h1>
              </div>
              <div>
                <h1 className="text-md">$4</h1>
              </div>
            </div>
            {/*  */}
            <div className="flex justify-between items-start py-4">
              <div>
                <h1 className="text-md font-semibold">Total</h1>
              </div>
              <div>
                <h1 className="text-md font-bold">$234</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-start py-4">
            <div>
              <h1 className="text-md font-semibold">Cash</h1>
            </div>
            <div>
              <h1 className="text-md">$344</h1>
            </div>
          </div>
        </div>
      </div>
      {/* sales details */}
      <div className="py-2 px-1">
        <h1 className="text-lg font-semibold">Sales Details</h1>
        <div>
          <ul className="flex flex-col gap-2 text-tatto-muted pl-4 pt-3">
            <li className="flex gap-2 items-center">
              <FiClock className="text-xl" />
              <span className="text-md">June 15,2023</span>
            </li>
            <li className="flex gap-2 items-center">
              <FaRegUserCircle className="text-xl" />
              <span className="text-md">Create on Thu, Jun 1 at 08:23 PM</span>
            </li>
            <li className="flex gap-2 items-center">
              <FiClock className="text-xl" />
              <span className="text-md">Create on Thu, Jun 1 at 08:23 PM</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SalesProfile;
