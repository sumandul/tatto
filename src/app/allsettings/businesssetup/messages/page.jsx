"use client";
import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const BusinessSettings = dynamic(()=>import('../page'),{
  ssr:false
})

const Messages = () => {
  const [currentStatus, setCurrentStatus] = useState(false);

  const handleSwitchStatus = () => {
    setCurrentStatus(!currentStatus);
  };
  return (
    <BusinessSettings>
      {/* Head */}
      <div className="px-6 py-4 flex items-center bg-white border-b mb-4">
        <h1 className="font-extrabold text-md text-gray-800">Messages</h1>
        <span className="text-gray-500 font-light text-sm ml-4 ">
          (Manage settings for automatic replies and inactive conversations.)
        </span>
      </div>
      {/* body */}
      <div className="basic__details__holder px-6 pb-4 bg-white flex flex-col gap-6">
        <div className="bg-body-pink rounded-xl border overflow-hidden">
          <div className="flex justify-between px-4 py-2 bg-head-pink">
            <h1 className="font-bold self-center">
              Auto-Close Inactive Conversations
            </h1>
          </div>
          {/* Simple Form */}
          <div className={`px-6 py-4 bg-white flex flex-col gap-4`}>
            {/*  */}
            <div>
              <span className="text-gray-500 font-light text-sm">
                Automatically close conversations that have not received a reply
                for a number of days.
              </span>
            </div>
            {/*  */}
            <div className="w-1/2 flex flex-col">
              <label
                htmlFor="selectMessageDay"
                className="font-bold text-sm mb-2"
              >
                Close Inactive Conversation after
              </label>
              <div className="relative flex items-center">
                <select
                  name=""
                  id="selectMessageDay"
                  className="w-full appearance-none border rounded-md px-2 py-1"
                >
                  <option value="1 days">1 days</option>
                  <option value="2 days">2 days</option>
                  <option value="3 days">3 days</option>
                  <option value="4 days">4 days</option>
                  <option value="5 days">5 days</option>
                  <option value="6 days">6 days</option>
                  <option value="1 week">1 week</option>
                </select>
                <Image
                  className="w-4 absolute right-3 pointer-events-none cursor-pointer"
                  src="/png_icons/arrow-down.png"
                  onClick={() =>
                    document.getElementById("selectCountry").focus()
                  }
                  alt=""
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        {/*  */}

        <div className="bg-body-pink rounded-xl border overflow-hidden">
          <div className="flex justify-between px-4 py-2 bg-head-pink">
            <h1 className="font-bold self-center">
              Text Message Auto-Response
            </h1>
          </div>
          {/* Simple Form */}
          <div className={`px-6 py-4 bg-white flex flex-col gap-4`}>
            {/*  */}
            <div>
              <span className="text-gray-500 font-light text-sm">
                Automatically respond to incoming text messages with a standard
                response saying that messages will not be received and clients
                should call instead.
              </span>
            </div>
            {/*  */}
            <div className="flex items-center justify-start w-full">
              <label
                htmlFor="toggleSwitch"
                className="flex items-center cursor-pointer"
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    id="toggleSwitch"
                    className="sr-only focus-visible:outline-none"
                    onChange={handleSwitchStatus}
                  />

                  <div
                    className={`block ${
                      !currentStatus
                        ? `bg-tatto-disabled`
                        : `bg-tatto-dark-blue`
                    } w-11 h-6 rounded-full`}
                  ></div>

                  <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                </div>
              </label>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </BusinessSettings>
  );
};

export default Messages;
