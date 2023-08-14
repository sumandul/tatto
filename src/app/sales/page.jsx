"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BiPlus } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";

const Sales = () => {
  return (
    <>
      {/* Header */}
      <div
        className={`bg-tatto-dark-blue h-16 flex justify-between items-center px-4 py-4 rounded-lg `}
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
            <div className="w-32 bg-white gap-2  px-1 py-1 rounded-full flex items-center">
              <Image
                src="/png_icons/staff_members_dp/1.png"
                className="w-6"
                alt=""
                width={40}
                height={40}
              />
              <h1 className="text-xs whitespace-nowrap overflow-hidden text-ellipsis">
                SomeOneisHere
              </h1>
              <FiChevronDown className="text-2xl" />
            </div>
          </div>
        </>
      </div>
      {/* body */}
      <div className="py-6">
        {/* Sales List */}
        <div className="bg-white rounded-2xl border">
          <ul>
            <Link href={"sales/profile"}>
              <li className="flex justify-between items-center py-3 px-5 border-b">
                <div className="flex items-start gap-4">
                  {/*  */}
                  <div>
                    <h1 className="text-lg font-bold">267676763</h1>
                    <span className="text-md text-tatto-muted">#34</span>
                  </div>
                  <span className="bg-tatto-dark-blue text-white rounded-full px-3 py-0.5">
                    Demo
                  </span>
                </div>
                {/*  */}
                <div>
                  <span className="text-tatto-muted text-md">$0.00</span>
                </div>
              </li>
            </Link>
            <Link href={""}>
              <li className="flex justify-between items-center py-3 px-5 border-b">
                <div className="flex items-start gap-4">
                  {/*  */}
                  <div>
                    <h1 className="text-lg font-bold">267676763</h1>
                    <span className="text-md text-tatto-muted">#34</span>
                  </div>
                  <span className="bg-tatto-dark-blue text-white rounded-full px-3 py-0.5">
                    Demo
                  </span>
                </div>
                {/*  */}
                <div>
                  <span className="text-tatto-muted text-md">$0.00</span>
                </div>
              </li>
            </Link>
            <Link href={""}>
              <li className="flex justify-between items-center py-3 px-5 border-b">
                <div className="flex items-start gap-4">
                  {/*  */}
                  <div>
                    <h1 className="text-lg font-bold">267676763</h1>
                    <span className="text-md text-tatto-muted">#34</span>
                  </div>
                  <span className="bg-tatto-dark-blue text-white rounded-full px-3 py-0.5">
                    Demo
                  </span>
                </div>
                {/*  */}
                <div>
                  <span className="text-tatto-muted text-md">$0.00</span>
                </div>
              </li>
            </Link>
            <Link href={""}>
              <li className="flex justify-between items-center py-3 px-5 border-b">
                <div className="flex items-start gap-4">
                  {/*  */}
                  <div>
                    <h1 className="text-lg font-bold">267676763</h1>
                    <span className="text-md text-tatto-muted">#34</span>
                  </div>
                  <span className="bg-tatto-dark-blue text-white rounded-full px-3 py-0.5">
                    Demo
                  </span>
                </div>
                {/*  */}
                <div>
                  <span className="text-tatto-muted text-md">$0.00</span>
                </div>
              </li>
            </Link>
            <Link href={""}>
              <li className="flex justify-between items-center py-3 px-5 border-b">
                <div className="flex items-start gap-4">
                  {/*  */}
                  <div>
                    <h1 className="text-lg font-bold">267676763</h1>
                    <span className="text-md text-tatto-muted">#34</span>
                  </div>
                  <span className="bg-tatto-dark-blue text-white rounded-full px-3 py-0.5">
                    Demo
                  </span>
                </div>
                {/*  */}
                <div>
                  <span className="text-tatto-muted text-md">$0.00</span>
                </div>
              </li>
            </Link>
            <Link href={""}>
              <li className="flex justify-between items-center py-3 px-5">
                <div className="flex items-start gap-4">
                  {/*  */}
                  <div>
                    <h1 className="text-lg font-bold">267676763</h1>
                    <span className="text-md text-tatto-muted">#34</span>
                  </div>
                  <span className="bg-tatto-dark-blue text-white rounded-full px-3 py-0.5">
                    Demo
                  </span>
                </div>
                {/*  */}
                <div>
                  <span className="text-tatto-muted text-md">$0.00</span>
                </div>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="w-12 h-12 cursor-pointer text-2xl flex justify-center items-center text-white rounded-full fixed bottom-32 right-4 bg-tatto-dark-blue">
        <BiPlus />
      </div>
    </>
  );
};

export default Sales;
