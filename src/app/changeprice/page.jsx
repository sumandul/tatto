"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const Header = dynamic(()=>import(()=>"../components/Header"))

const Page = () => {
  const [GiftCardDown, setGiftCardDown] = useState(false);
  const [TipPer, setTipPer] = useState(0);
  return (
    <div>
      <div className="px-1 py-2">
        {/* ?Header */}
        <Header />
        {/* ?Hero Scetion */}
        <div className="bg-white py-4 my-6 px-4 rounded-2xl border border-[rgba(0,0,0,0.15)]">
          <div className="">
            <div className="">
              <div className="flex bg-white rounded-t-2xl border-l border-r border-t border-[rgba(0,0,0,0.15)] items-center justify-between px-6 py-5">
                <h2 className="text-[#3B3840] text-base not-italic font-bold leading-6">
                  Subtotal
                </h2>
                <h5 className="text-[#838187] text-sm not-italic font-bold leading-[22px]">
                  $120.00
                </h5>
              </div>
              <div className="flex bg-white  border border-[rgba(0,0,0,0.15)] items-center justify-between px-6 py-5">
                <div className="flex gap-3 items-center">
                  <h2 className="text-[#3B3840] text-base not-italic font-bold leading-6">
                    Tip
                  </h2>
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="bg-[#2B324D] px-2 py-0.5 rounded-full">
                      <h5 className="text-white text-sm not-italic font-bold leading-[22px]">
                        18%
                      </h5>
                    </div>
                    <div className="bg-[#2B324D] px-2 py-0.5 rounded-full">
                      <h5 className="text-white text-sm not-italic font-bold leading-[22px]">
                        20%
                      </h5>
                    </div>
                    <div className="bg-[#2B324D] px-2 py-0.5 rounded-full">
                      <h5 className="text-white text-sm not-italic font-bold leading-[22px]">
                        22%
                      </h5>
                    </div>
                  </div>
                </div>
                <div className=" border rounded-lg items-center flex">
                  <h5 className="text-[#838187] pl-2  text-sm not-italic font-bold leading-[22px]">
                    $
                  </h5>
                  <input
                    className="text-[#838187] outline-none w-14 py-1 px-2  text-sm not-italic font-bold leading-[22px]"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex bg-white rounded-b-2xl border-l border-b border-r border-[rgba(0,0,0,0.15)] items-center justify-between px-6 py-5">
                <h2 className="text-[#3B3840] text-base not-italic font-bold leading-6">
                  Total
                </h2>
                <h5 className="text-[#838187] text-sm not-italic font-bold leading-[22px]">
                  $120.00
                </h5>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex bg-white rounded-t-2xl border-l border-r border-t border-[rgba(0,0,0,0.15)] items-center justify-between px-6 py-5">
                <h2 className="text-[#3B3840] text-base not-italic font-bold leading-6">
                  Gift Card
                </h2>
                <div className="flex relative gap-3 items-center">
                  <button onClick={() => setGiftCardDown(!GiftCardDown)}>
                    <svg
                      className="rotate-90"
                      width="18"
                      height="18"
                      viewBox="0 0 6 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.58239 5.16478C4.00861 5.16478 5.16478 4.00861 5.16478 2.58239C5.16478 1.15618 4.00861 0 2.58239 0C1.15618 0 0 1.15618 0 2.58239C0 4.00861 1.15618 5.16478 2.58239 5.16478Z"
                        fill="#B3B3B3"
                      />
                      <path
                        d="M2.58239 14.5828C4.00861 14.5828 5.16478 13.4266 5.16478 12.0004C5.16478 10.5741 4.00861 9.41797 2.58239 9.41797C1.15618 9.41797 0 10.5741 0 12.0004C0 13.4266 1.15618 14.5828 2.58239 14.5828Z"
                        fill="#B3B3B3"
                      />
                      <path
                        d="M2.58239 23.9997C4.00861 23.9997 5.16478 22.8436 5.16478 21.4174C5.16478 19.9911 4.00861 18.835 2.58239 18.835C1.15618 18.835 0 19.9911 0 21.4174C0 22.8436 1.15618 23.9997 2.58239 23.9997Z"
                        fill="#B3B3B3"
                      />
                    </svg>
                  </button>
                  {GiftCardDown && (
                    <div className="bg-white shadow-2xl flex flex-col right-16 absolute top-10 px-2 w-36 border rounded-xl py-4">
                      <button className="text-base py-1 not-italic font-semibold leading-5">
                        Mark as void
                      </button>
                      <button className="text-base py-1 not-italic font-semibold leading-5">
                        View Details
                      </button>
                    </div>
                  )}
                  <h5 className="text-[#838187] px-2 py-1 rounded-t-xl border text-sm not-italic font-bold leading-[22px]">
                    $120.00
                  </h5>
                </div>
              </div>

              <div className="flex bg-white border-t rounded-b-2xl border-l border-b border-r border-[rgba(0,0,0,0.15)] items-center justify-between px-6 py-5">
                <h2 className="text-[#3B3840] text-base not-italic font-bold leading-6">
                  Remaining Balance
                </h2>
                <h5 className="text-[#838187] px-2 py-1 rounded-b-xl border text-sm not-italic font-bold leading-[22px]">
                  $120.00
                </h5>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex bg-white rounded-2xl border  border-[rgba(0,0,0,0.15)] items-center justify-between px-6 py-5">
                <h2 className="text-[#3B3840] text-base not-italic font-bold leading-6">
                  Amount to charge
                </h2>
                <div className="flex gap-3 items-center">
                  <h5 className="text-[#838187] px-2 py-1 rounded-lg border text-sm not-italic font-bold leading-[22px]">
                    $120.00
                  </h5>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex my-2.5 items-center gap-6 justify-between">
                <button className="bg-[#2B324D] w-full  rounded-full py-2 text-white text-sm not-italic font-bold leading-[22px]">
                  FRONT DESK
                </button>
                <button className="bg-[#2B324D] w-full  rounded-full py-2 text-white text-sm not-italic font-bold leading-[22px]">
                  FRONT DESK
                </button>
              </div>
              <div className="flex my-2.5 items-center gap-6 justify-between">
                <button className="bg-[#2B324D] w-full  rounded-full py-2 text-white text-sm not-italic font-bold leading-[22px]">
                  FRONT DESK
                </button>
                <button className="bg-[#2B324D] w-full  rounded-full py-2 text-white text-sm not-italic font-bold leading-[22px]">
                  FRONT DESK
                </button>
              </div>
              <div className="flex my-2.5 items-center gap-6 justify-between">
                <button className="bg-[#2B324D] w-full rounded-full py-2 text-white text-sm not-italic font-bold leading-[22px]">
                  FRONT DESK
                  <span className="bg-white px-1.5 ml-2  rounded-full text-black">
                    1
                  </span>
                </button>
                <button className="bg-[#2B324D] w-full  rounded-full py-2 text-white text-sm not-italic font-bold leading-[22px]">
                  FRONT DESK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
