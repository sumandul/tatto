"use client";
// 2B324D
import React, { useState } from "react";

import { useRouter } from "next/navigation";
import Image from "next/image";

const AddGiftCard = () => {
  const router = useRouter();

  const [createClient, setCreateClient] = useState(false);

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
            <h1 className="text-1xl font-bold text-white">Add gift card</h1>
          </div>
          {/* SIde */}
          <div className="w-24 flex justify-end">
            <Image
              className="w-1.5"
              src="/png_icons/three-dots-white.png"
              alt="Dots"
              width={40}
              height={40}
            />
          </div>
        </>
      </div>
      {/* Mobile Header */}
      <div className="pt-2">
        <div className="mt-2 px-4 text-center text-tatto-muted text-sm">
          <span className={`${createClient ? "visible" : "invisible"}`}>
            Please enter the email and name of the recipient and an optional
            gift Referred by.
          </span>
        </div>
        {/* Card */}
        <div className="rounded-xl bg-white px-4 py-6 mt-4">
          <>
            {/*  Body */}
            <div
              className="relative"
              style={{
                display: "grid",
                gridTemplateRows: createClient ? "auto 7%" : "93% 7%",
              }}
            >
              {/* Body */}
              <div className="flex flex-col gap-6 mb-4 ">
                <div className="flex flex-col gap-2">
                  <label htmlFor="newNumber" className="text-sm font-semibold">
                    Number
                  </label>
                  <input
                    type="text"
                    id="newNumber"
                    className="w-full h-12 border rounded-md px-4 py-1.5 focus-visible:outline-none text-sm"
                    placeholder="Enter or scan gift card number"
                  />
                </div>
                {/*  */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="newBalance" className="text-sm font-semibold">
                    Balance
                  </label>
                  <input
                    type="text"
                    id="newBalance"
                    className="w-full h-12 border rounded-md px-4 py-1.5 focus-visible:outline-none text-sm"
                    placeholder="$0"
                  />
                </div>
                {/*  */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="newOwnerClien"
                    className={`${
                      createClient
                        ? "text-xs font-normal text-tatto-muted"
                        : "text-sm font-semibold"
                    }`}
                  >
                    Owner Client
                  </label>
                  <div className="flex flex-col gap-2">
                    {!createClient ? (
                      <div className="relative flex items-center">
                        <input
                          type="text"
                          id="newOwnerClien"
                          className="w-full h-12 border rounded-md px-4 py-1.5 focus-visible:outline-none text-sm"
                          placeholder="Search or create client"
                        />
                        <Image
                          className="w-7 absolute right-4 top-2.5 cursor-pointer"
                          src="/png_icons/add-black.png"
                          alt=""
                          width={40}
                          height={40}
                          onClick={() => setCreateClient(true)}
                        />
                      </div>
                    ) : (
                      <div className="flex flex-col gap-6">
                        <div className="flex gap-4">
                          <div>
                            <label
                              htmlFor="firstName"
                              className="text-sm font-semibold"
                            >
                              First Name
                            </label>
                            <input
                              type="text"
                              className="w-full h-12 border rounded-md px-4 py-1.5 focus-visible:outline-none text-sm"
                              placeholder="First Name"
                              id="firstName"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="lastName"
                              className="text-sm font-semibold"
                            >
                              Last Name
                            </label>
                            <input
                              type="text"
                              className="w-full h-12 border rounded-md px-4 py-1.5 focus-visible:outline-none text-sm"
                              placeholder="Last Name"
                              id="lastName"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="text-sm font-semibold"
                          >
                            Phone
                          </label>
                          <input
                            type="number"
                            className="w-full h-12 border rounded-md px-4 py-1.5 focus-visible:outline-none text-sm"
                            placeholder="Phone number"
                            id="phone"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="emailaddress"
                            className="text-sm font-semibold"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            className="w-full h-12 border rounded-md px-4 py-1.5 focus-visible:outline-none text-sm"
                            placeholder="Email address"
                            id="emailaddress"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="Referred"
                            className="text-sm font-semibold"
                          >
                            Referred by
                          </label>
                          <input
                            type="text"
                            className="w-full h-12 border rounded-md px-4 py-1.5 focus-visible:outline-none text-sm"
                            placeholder="Enter referral source"
                            id="Referred"
                          />
                        </div>
                        <div className="flex gap-2">
                          <button
                            className="w-full border rounded-full border-tatto-dark-blue text-tatto-dark-blue  py-1.5"
                            onClick={() => setCreateClient(false)}
                          >
                            Cancel
                          </button>
                          <button
                            className="w-full bg-tatto-dark-blue py-1.5 rounded-full text-white"
                            onClick={() => setCreateClient(false)}
                          >
                            Create
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {/*  */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="newNotes" className="text-sm font-semibold">
                    Notes
                  </label>
                  <textarea
                    rows={4}
                    id="newNotes"
                    className="w-full italic resize-none border rounded-md px-2 py-1.5 focus-visible:outline-none text-sm"
                    placeholder="Type here"
                  />
                </div>
              </div>
              <div className="" style={{ width: "100%" }}>
                <div className="flex justify-end gap-2 w-full">
                  <button
                    className="w-3/6 bg-tatto-dark-blue py-1.5 rounded-full text-white"
                    onClick={() => router.push("/giftcardslist")}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default AddGiftCard;
