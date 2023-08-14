"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
const SmallToggleSwitch = dynamic(()=>import('../../../components/SmallToggleSwitch'),{
  ssr:false
})
const GiftCards = dynamic(()=>import('../page'),{
  ssr:false
})


const Preferences = () => {
  const [autoGenGift, setAutoGenGift] = useState(false);
  return (
    <GiftCards>
      <div
        className="w-full bg-white rounded-xl p-0"
        style={{ height: "33rem" }}
      >
        {/* Heading */}
        <div className="border-b-2 w-full py-4 px-6 font-extrabold mb-4">
          Preferences
        </div>
        {/* Body Content */}
        <div
          className="overflow-y-scroll hide-scrollbar"
          style={{ height: "28rem" }}
        >
          {/*  Window Card */}
          <div className="basic__details__holder px-6 pb-4 bg-white">
            <div className="bg-body-pink rounded-xl border overflow-hidden">
              {/*  Window Card Head */}
              <div className="flex flex-col justify-start px-4 py-2 bg-head-pink">
                <h1 className="font-bold">Enable Online Sales</h1>
                <span className="text-sm text-gray-500">
                  Enable the toggle below to automatically generate a 6 digit
                  number when selling gift cards.
                </span>
              </div>
              {/* Window Card body */}
              <div className={`px-6 py-4 bg-white flex flex-col gap-6`}>
                <SmallToggleSwitch
                  description={"Automatically generate gift card number"}
                  id={"autogenGift"}
                  status={autoGenGift}
                  handleSwitch={() => setAutoGenGift(!autoGenGift)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </GiftCards>
  );
};

export default Preferences;
