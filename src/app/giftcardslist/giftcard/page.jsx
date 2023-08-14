"use client";
// 2B324D
import React, { useState } from "react";

import { FiClock, FiUser } from "react-icons/fi";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const GiftCardDetails = () => {
  const router = useRouter();

  const [edit, setEdit] = useState(false);

  const [showManuBar, setShowManuBar] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <div
        className={`bg-tatto-dark-blue h-16 flex justify-between items-center px-4 py-4 rounded-lg sm:hidden `}
      >
        <>
          {/* Back Button */}
          <div className="w-20">
            <div onClick={() => router.back()}>
              <Image
                className="w-5"
                src="/png_icons/back-arrow.png"
                alt="back arrow icon"
                width={40}
                height={40}
              />
            </div>
          </div>
          {/* Page Title */}
          <div className="w-full text-center">
            <h1 className="text-1xl font-bold text-white">
              {edit ? "Update gift card" : "Gift Cards"}
            </h1>
          </div>
          {/* SIde */}
          <div className="w-24 relative flex justify-end">
            <Image
              className="w-1.5"
              src="/png_icons/three-dots-white.png"
              alt="Dots"
              width={40}
              height={40}
              onClick={() => setShowManuBar(!showManuBar)}
            />

            <ul
              className={`absolute bg-white w-48 shadow-2xl p-4 rounded-lg mt-7 ${
                showManuBar ? "visible" : "hidden"
              }`}
            >
              <div className="border-b mb-4">
                <li className="pb-4">
                  <Link href="/giftcardslist/sendgiftcard">
                    Send Digital Gift Card
                  </Link>
                </li>
              </div>
              <div className="">
                <li className="">
                  <Link href="#">Delete</Link>
                </li>
              </div>
            </ul>
          </div>
        </>
      </div>
      {/* Mobile Header */}
      <div className="pt-2">
        <div className="mt-2 flex justify-end items-center">
          <button
            className={`bg-tatto-dark-blue text-white py-1 px-10 rounded-full ${
              edit ? "invisible" : "visible"
            }`}
            onClick={() => setEdit(true)}
          >
            Edit
          </button>
        </div>
        {/* Card */}
        <div className="rounded-xl bg-white px-4 py-6 mt-4">
          {!edit ? (
            <div className="flex flex-col gap-6">
              {/* Details */}
              <div className="flex flex-col gap-5 ">
                <div className="user__details flex flex-col gap-5">
                  <div className="">
                    <div className="flex flex-col h-14 justify-between">
                      <label className="font-bold text-sm">Number</label>
                      <span className="text-sm font-semibold text-tatto-muted">
                        202318
                      </span>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex flex-col h-14 justify-between">
                      <label className="font-bold text-sm ">Balance</label>
                      <span className="text-sm font-semibold text-tatto-muted">
                        $30.00
                      </span>
                    </div>
                  </div>
                </div>
                <div className="user__details flex flex-col gap-5">
                  <div className="">
                    <div className="flex flex-col h-14 justify-between">
                      <label className="font-bold text-sm ">Purchased by</label>
                      <span className="text-sm font-semibold text-tatto-muted">
                        Josh Carter
                      </span>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex flex-col h-14 justify-between">
                      <label className="font-bold text-sm ">Owned by</label>
                      <span className="text-sm font-semibold text-tatto-muted">
                        Sean Ben
                      </span>
                    </div>
                  </div>
                </div>
                <div className="user__details flex flex-col mb-5 gap-5">
                  <div className="">
                    <div className="flex flex-col h-14 justify-between">
                      <label className="font-bold text-sm ">Sent to</label>
                      <span className="text-sm font-semibold text-tatto-muted">
                        fipof08300@vaband.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="flex flex-col gap-4">
                <h1 className="text-md font-bold">History</h1>
                <div className="border rounded-full overflow-hidden">
                  <table className="w-full">
                    <tbody>
                      <tr className="h-12 text-sm text-tatto-muted font-semibold">
                        <td className="pl-4">05/06/2023</td>
                        <td>Value added</td>
                        <td>+$25</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/*  */}
              <div className=" flex flex-col gap-4 ">
                <h1 className="text-md font-bold">Card Details</h1>
                <div className="flex flex-col gap-3 text-sm ">
                  <div className="flex gap-2 items-center text-tatto-muted">
                    <FiClock /> <span>Created on Mon, Jun 5 at 8:37 PM</span>
                  </div>
                  <div className="flex gap-2 items-center text-tatto-muted">
                    <FiUser /> <span>sold Online</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="editNumber"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Number
                  </label>
                  <input
                    type="text"
                    id="editNumber"
                    className="w-full h-12 border rounded-lg px-4 py-1.5 focus-visible:outline-none text-sm"
                    placeholder="Enter or scan gift card number"
                  />
                </div>
                {/*  */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="editBalance"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Balance
                  </label>
                  <input
                    type="text"
                    id="editBalance"
                    className="w-full h-12 border rounded-lg px-4 py-1.5 focus-visible:outline-none text-sm"
                    placeholder="$0"
                  />
                </div>
                {/*  */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="editOwnerClien"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Owner Client
                  </label>
                  <div className="flex  items-center justify-between gap-2 border px-3 py-3 rounded-lg">
                    {/*  */}
                    <div className="flex gap-8 items-center">
                      <Image
                        className="w-16"
                        src="/png_icons/staff_members_dp/default.png"
                        alt=""
                        width={40}
                        height={40}
                      />
                      <div className="leading-none">
                        <h1 className="text-md font-bold">Sean Ben</h1>
                        <span className="text-xs text-gray-500">
                          Client since January 2023
                        </span>
                      </div>
                    </div>
                    {/*  */}
                    <div>
                      <Image
                        width={40}
                        height={40}
                        className="w-8"
                        src="/png_icons/delete.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="editNotes"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Notes
                  </label>
                  <textarea
                    rows={4}
                    id="editNotes"
                    className="w-full italic resize-none border rounded-lg px-2 py-1.5 focus-visible:outline-none text-sm"
                    placeholder="Type here"
                  />
                </div>

                {/* Save Button */}
                <div className="mt-2 flex justify-end items-center">
                  <button
                    className="bg-tatto-dark-blue text-white py-1 px-10 rounded-full"
                    onClick={() => setEdit(false)}
                  >
                    Save
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default GiftCardDetails;
