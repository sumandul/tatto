"use client";
import React, { useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiMail,
  FiMinusCircle,
} from "react-icons/fi";
import { IoReturnUpBack } from "react-icons/io5";
import Image from "next/image";

const DetailCard = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-3 border-b py-2">
      <label className="font-bold text-md">{title}</label>
      <span className="text-tatto-dark-blue text-sm">{description}</span>
    </div>
  );
};

const Clients = () => {
  const [viewAll, setViewAll] = useState(false);

  const [userStatus, setUserStatus] = useState("block");
  return (
    <>
      {/* Header */}
      <div
        className={`bg-tatto-dark-blue h-12 flex justify-between items-center ${
          userStatus !== "block" ? "p-2" : ""
        }`}
      >
        {userStatus === "block" ? (
          <div className="bg-red-500 h-9 p-2 text-white flex w-full items-center bottom-0 place-self-end">
            {/* Back Button */}
            <div className="w-20">
              {" "}
              <IoReturnUpBack className="text-3xl" />{" "}
            </div>
            {/* Page Title */}
            <div className="w-full text-center">
              <h1 className="text-1xl text-white">CLIENT IS BLOCKED</h1>
            </div>
            {/* SIde */}
            <div className="w-20 text-right pr-2">
              <span className=" text-md">Edit</span>
            </div>
          </div>
        ) : (
          <>
            {/* Back Button */}
            <div className="w-20">
              {" "}
              <FiChevronLeft className="text-3xl text-tatto-light-aqua" />{" "}
            </div>
            {/* Page Title */}
            <div className="w-full text-center">
              <h1 className="text-1xl text-white">Client details</h1>
            </div>
            {/* SIde */}
            <div className="w-24 text-left">
              {!viewAll ? (
                <FiMinusCircle className="text-2xl text-tatto-light-aqua ml-auto" />
              ) : (
                <div className="flex items-center gap-4">
                  <Image
                    width={40}
                    height={40}
                    className="w-4"
                    src="/png_icons/three-dots.png"
                    alt=""
                  />
                  <span className="text-tatto-light-aqua text-md">Edit</span>
                </div>
              )}
            </div>
          </>
        )}
      </div>
      {/* body */}
      <div className="">
        {/* Top Info */}
        <div className="px-4 py-2 flex flex-col gap-4 bg-white">
          {/*  */}
          <div className="">
            <div className="mt-8 flex flex-col gap-1 justify-center items-center">
              <Image
                className="w-24"
                src="/png_icons/staff_members_dp/1.png"
                alt=""
                width={40}
                height={40}
              />
              <h1 className="text-xl font-bold">Annette Black</h1>
              <span className="text-sm">(345) 389-6141</span>
            </div>
          </div>
          {/*  */}
          <div
            className={`flex flex-col gap-1 ${
              !viewAll ? "border-b" : ""
            }  items-center text-gray-500`}
          >
            {/*  */}
            <div className="text-center">
              <h1 className="text-xl font-semibold ">$10.00</h1>
              <span className="text-sm text-tatto-light-aqua">Total sales</span>
            </div>
            {/*  */}
            <div className="grid grid-cols-5 w-full text-center">
              <div>
                <h1 className="text-xl font-semibold ">1</h1>
                <span className="text-xs text-tatto-light-aqua">
                  All booking
                </span>
              </div>
              <div>
                <h1 className="text-xl font-semibold ">0</h1>
                <span className="text-xs text-tatto-light-aqua">Completed</span>
              </div>
              <div>
                <h1 className="text-xl font-semibold ">0</h1>
                <span className="text-xs text-tatto-light-aqua">Canceled</span>
              </div>
              <div>
                <h1 className="text-xl font-semibold ">0</h1>
                <span className="text-xs text-tatto-light-aqua">NO Show</span>
              </div>
              <div>
                <h1 className="text-xl font-semibold ">1</h1>
                <span className="text-xs text-tatto-light-aqua">
                  All booking
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="px-4">
          {/* User Profile */}
          <div>
            <div
              className={`flex justify-between py-3 ${
                !viewAll ? "visible" : "hidden"
              }`}
            >
              <h1 className="text-md">USER PROFILE</h1>
              <span className="text-blue-400" onClick={() => setViewAll(true)}>
                View all
              </span>
            </div>

            {/*  */}
            {!viewAll ? (
              <div className="bg-white flex flex-col gap-4 px-4 py-4">
                {/*  */}
                <div className="flex items-center gap-5">
                  {" "}
                  <FiMail className="text-xl text-gray-500" />{" "}
                  <span className="text-md font-semibold text-tatto-light-black">
                    ablack@getgenea.com
                  </span>
                </div>
                {/*  */}
                <div className="flex items-center gap-5">
                  {" "}
                  <FiMail className="text-xl text-gray-500" />{" "}
                  <span className="text-md font-semibold text-tatto-light-black">
                    ablack@getgenea.com
                  </span>
                </div>
                {/*  */}
                <div className="flex items-center gap-5">
                  {" "}
                  <FiMail className="text-xl text-gray-500" />{" "}
                  <span className="text-md font-semibold text-tatto-light-black">
                    ablack@getgenea.com
                  </span>
                </div>
                {/*  */}
                <div className="flex items-center gap-5">
                  {" "}
                  <FiMail className="text-xl text-gray-500" />{" "}
                  <span className="text-md font-semibold text-tatto-light-black">
                    ablack@getgenea.com
                  </span>
                </div>
              </div>
            ) : (
              <div>
                {/*  */}
                <DetailCard title={"Phone"} description={"(345) 389-6141"} />
                {/*  */}
                <DetailCard
                  title={"Email"}
                  description={"fajatuca@mailinator.com"}
                />
                {/*  */}
                <DetailCard title={"Gender"} description={"Female"} />
                {/*  */}
                <DetailCard title={"Pronouns"} description={"male"} />
                {/*  */}
                <DetailCard
                  title={"Blocked from online booking"}
                  description={"Yes"}
                />
                {/*  */}
                <DetailCard title={"Birthday"} description={"May 12, 1945"} />
                {/*  */}
                <DetailCard title={"Instagram"} description={"jamespaul"} />
                {/*  */}
                <DetailCard title={"Facebook"} description={"jamespaul"} />
                {/*  */}
                <DetailCard title={"Tag"} description={"(345) 389-6141"} />
                {/*  */}
                <DetailCard title={"Notes"} description={"(345) 389-6141"} />
                {/*  */}
                <DetailCard
                  title={"Referred by"}
                  description={"(345) 389-6141"}
                />
                {/*  */}
                <DetailCard
                  title={"Referred by"}
                  description={"(345) 389-6141"}
                />
                {/*  */}
                <DetailCard
                  title={"Address"}
                  description={
                    "51 Fabien Drive Laborum Voluptas ra Facere culpa ut nihi, FL 27925"
                  }
                />
                <span
                  className="text-gray-500 justify-center py-2 flex items-center gap-2"
                  onClick={() => setViewAll(false)}
                >
                  More stats{" "}
                  <Image
                    width={40}
                    height={40}
                    className="w-4"
                    src="/png_icons/arrow-down.png"
                    alt=""
                  />{" "}
                </span>
              </div>
            )}
          </div>
          {/*  */}
        </div>
        {/*  */}
        <div>
          <h1
            className={`text-md px-4 pb-2 pt-6 ${
              !viewAll ? "visible" : "hidden"
            }`}
          >
            PREFERENCES
          </h1>
          <div className="bg-white px-4">
            <div className="flex justify-between items-center border-b py-3">
              <h1 className="text-md font-semibold">Help & FAQ</h1>
              <FiChevronRight />
            </div>
            <div className="flex justify-between items-center border-b py-3">
              <h1 className="text-md font-semibold">Terms Of use</h1>
              <FiChevronRight />
            </div>
            <div className="flex justify-between items-center border-b py-3">
              <h1 className="text-md font-semibold">Privacy Policy</h1>
              <FiChevronRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
