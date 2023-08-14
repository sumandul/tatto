"use client";
import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
const Header = dynamic(()=> import("../components/Header"),{
  ssr:false
})
const Cards = dynamic(()=> import("./component/Cards"),{
  ssr:false
})
const Page = () => {
  const [AddGiftCard, setAddGiftCard] = useState();
  return (
    <div className="px-1">
      <Header />
      <div className="flex items-center my-4 justify-between">
        <div className="w-full"></div>
        <button className="bg-[#2B324D] px-8  rounded-full py-1 text-white text-sm not-italic font-bold leading-[22px]">
          Pay
        </button>
      </div>
      <div className="bg-white border rounded-xl">
        <div className="flex items-end justify-end px-6 py-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 12V17"
              stroke="#B1B1B1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 12V17"
              stroke="#B1B1B1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 7H20"
              stroke="#B1B1B1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
              stroke="#B1B1B1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
              stroke="#B1B1B1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex py-2 items-center flex-col justify-center">
          <Image
            priority={true}
            className="w-[88px] mb-6 h-[88px] rounded-full object-cover"
            src="/png_icons/staff_members_dp/1.png"
            alt=""
            width={40}
            height={40}
          />
          <h2 className="text-[#3B3840] text-base not-italic font-bold leading-6">
            Sylvester Conrad
          </h2>
          <h5 className="text-[#838187] text-sm not-italic font-bold leading-[22px]">
            Client since June 2023
          </h5>
        </div>
        <div className="flex items-center justify-center py-4 gap-2 px-1">
          <button className="bg-[#2B324D] px-4  rounded-full py-1 text-white text-xs not-italic font-bold leading-[22px]">
            Add service
          </button>
          <button className="bg-[#2B324D] px-4  rounded-full py-1 text-white text-xs not-italic font-bold leading-[22px]">
            Add product
          </button>
          <button
            onClick={() => setAddGiftCard(!AddGiftCard)}
            className="bg-[#2B324D] px-4  rounded-full py-1 text-white text-xs not-italic font-bold leading-[22px]"
          >
            Add gift Card
          </button>
        </div>
        <div className="px-6 py-6">
          <Cards title={"John"} />
          <Cards title={"John"} Quantity={true} />
          <Cards title="Gift Card (New)" giftCard={true} />
        </div>
        <div className="px-6 py-0">
          <h2 className="text-[#3B3840] py-2 text-base not-italic font-bold leading-6">
            Gift Card #
          </h2>
          <div className="">
            <input
              placeholder="Scan or Enter the gift card number"
              type="text"
              className="border w-full outline-none px-6 py-4 rounded-xl"
            />
          </div>
        </div>
        <div className="flex items-center gap-6 justify-between px-6 py-4">
          <button className="bg-white border text-black w-full rounded-full py-1.5 text-sm not-italic font-bold leading-[22px]">
            Cancel
          </button>
          <button className="bg-[#2B324D] w-full rounded-full py-1.5 text-white text-sm not-italic font-bold leading-[22px]">
            Add
          </button>
        </div>
      </div>
      <div className="bg-white mt-8 rounded-xl border flex items-center justify-between px-6 py-6">
        <h2 className="text-[#3B3840] text-base not-italic font-bold leading-6">
          Subtotal
        </h2>
        <h5 className="text-[#838187] text-sm not-italic font-bold leading-[22px]">
          $0.00
        </h5>
      </div>
    </div>
  );
};

export default Page;
