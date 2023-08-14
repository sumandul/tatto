"use client";
// 2B324D
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const SendGiftCard = () => {
  const router = useRouter();

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
            <h1 className="text-1xl font-bold text-white">Send Gift Card</h1>
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
                  <Link href="#">text</Link>
                </li>
              </div>
              <div className="">
                <li className="">
                  <Link href="#">text</Link>
                </li>
              </div>
            </ul>
          </div>
        </>
      </div>
      {/* Mobile Header */}
      <div className="pt-2">
        <div className="mt-2 text-center px-4">
          <span className="text-sm text-gray-500 text-center">
            Please enter the email and name of the recipient and optional gift
            message
          </span>
        </div>
        {/* Card */}
        <div className="rounded-xl bg-white px-4 py-6 mt-4">
          <>
            {/* Modal Body */}
            <div className="">
              {/* Body */}
              <div className="flex flex-col gap-6">
                {/*  */}

                {/*  */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="Sentto" className="text-sm font-semibold ">
                    Sent to
                  </label>
                  <input
                    type="email"
                    id="Sentto"
                    className="w-full h-12 border rounded-md px-4 py-1.5 focus-visible:outline-none text-sm"
                    placeholder="Enter email address"
                  />
                </div>
                {/*  */}
                <div className="flex gap-2">
                  <div className="flex flex-col gap-2 w-full">
                    <label
                      htmlFor="Firstname"
                      className="text-sm font-semibold"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="Firstname"
                      className="w-full h-12 border rounded-md px-4 py-1.5 focus-visible:outline-none text-sm"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="Lastname" className="text-sm font-semibold">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="Lastname"
                      className="w-full h-12 border rounded-md px-4 py-1.5 focus-visible:outline-none text-sm"
                      placeholder="Enter Last name"
                    />
                  </div>
                </div>
                {/*  */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="Giftmessage"
                    className="text-sm font-semibold"
                  >
                    Gift Message
                  </label>
                  <textarea
                    id="Giftmessage"
                    rows={6}
                    className="w-full resize-none border rounded-md px-2 py-1.5 focus-visible:outline-none text-sm"
                    placeholder="Enter an optional gift message"
                  />
                </div>
              </div>
              {/* Buttons */}
              <div className="flex items-center justify-end gap-4 mt-10">
                <button
                  className="px-16 py-1 font-semibold text-white border-2 rounded-full border-tatto-dark-blue bg-tatto-dark-blue"
                  onClick={() => {
                    setDigitalCardSended(true);
                    setSendDigitalGiftCardModal(false);
                  }}
                >
                  Send
                </button>
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default SendGiftCard;
