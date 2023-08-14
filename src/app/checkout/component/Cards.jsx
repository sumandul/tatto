"use client";
import React, { useState } from "react";

const Cards = ({ Quantity, giftCard, title }) => {
  const [openCard, setOpenCard] = useState();
  return (
    <div
      onClick={() => setOpenCard(!openCard)}
      className="bg-white duration-300 my-6  justify-between border px-6 py-4 rounded-xl"
    >
      <div className="">
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center gap-3">
            <h2 className="text-[#3B3840] max-[377px]:text-[14px] text-base not-italic font-bold leading-6">
              {title}
            </h2>
            <button className="bg-[#2B324D] px-4  rounded-full py-0.5 text-white text-sm not-italic font-bold leading-[22px]">
              $120.00
            </button>
          </div>
          <div className="flex items-center gap-4">
            {openCard && (
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 12V17"
                  stroke="#B1B1B1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 7H20"
                  stroke="#B1B1B1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                  stroke="#B1B1B1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                  stroke="#B1B1B1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
            <svg
              className={`${openCard ? "rotate-180" : ""}`}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20 5.88965L18.5946 4.5L9.98689 12.7612L9.0688 11.8804L9.07385 11.8848L1.42655 4.54443L0 5.91406C2.1136 7.94284 8.01453 13.6068 9.98689 15.5C11.4528 14.0939 10.0242 15.4651 20 5.88965Z"
                fill="#A9A8A8"
              />
            </svg>
          </div>
        </div>
        {openCard && (
          <div className="duration-300">
            <div className="py-4 duration-300">
              <div className="flex  justify-between items-center">
                {Quantity && (
                  <div className="flex gap-1  flex-col">
                    <h5 className="text-[#838187] text-sm not-italic font-bold leading-[22px]">
                      Quantity
                    </h5>
                    <div className="bg-white border rounded-full py-1.5 px-6">
                      1
                    </div>
                  </div>
                )}
                <div className="flex gap-1  flex-col">
                  <h5 className="text-[#838187] text-sm not-italic font-bold leading-[22px]">
                    {giftCard ? "Value #723" : "Unit Price"}
                  </h5>
                  <div className="bg-white border rounded-full py-1.5 px-4">
                    $120.00
                  </div>
                </div>
                <div className="flex flex-col items-end gap-y-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 16V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H8"
                      stroke="#B1B1B1"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.5 15.8L22 6.2L17.8 2L8.3 11.5L8 16L12.5 15.8Z"
                      stroke="#B1B1B1"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <h4>Change price</h4>
                </div>{" "}
              </div>
            </div>
          </div>
        )}
        <div
          className="flex items-center
              gap-2"
        >
          <h5 className="text-[#838187] text-sm not-italic font-bold leading-[22px]">
            With
          </h5>
          <button className="text-[#3B3840] text-base not-italic font-bold leading-6">
            Edan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
