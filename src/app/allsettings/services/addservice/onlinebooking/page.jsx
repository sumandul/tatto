"use client";
import React, { useState } from "react";

import Image from "next/image";

const OnlineBooking = () => {
  const [edit, setEdit] = useState(false);

  const [availableOnlineBooking, setAvailableOnlineBooking] = useState(false);
  const [minPrice, setMinPrice] = useState(false);
  const [promptToCall, setPromptToCall] = useState(false);
  const [homeAddress, setHomeAddress] = useState(false);
  const [creditCard, setCreditCard] = useState(false);
  const [paymentTimeOfBooking, setPaymentTimeOfBooking] = useState(false);
  return (
    <div className="bg-body-pink rounded-xl border overflow-hidden w-full">
      <div className="flex justify-between px-4 py-2 bg-head-pink">
        <h1 className="font-bold self-center">Online Booking</h1>
        <div
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
          onClick={() => setEdit(true)}
        >
          <Image
            src={edit ? "/png_icons/edit_active.png" : "/png_icons/edit.png"}
            alt=""
            width={40}
            height={40}
          />
        </div>
      </div>
      {/* Simple Form */}
      <div
        className={`${
          edit === false ? `block` : `hidden`
        } flex flex-col gap-5 px-6 pt-4`}
      >
        {/*  */}
        <div className="user__details flex flex-col gap-5">
          <div className="w-1/2">
            <div className="flex flex-col h-14 justify-between">
              <label className="font-bold text-sm">
                Available in online booking
              </label>
              <span className="text-sm font-semibold text-gray-500">Off</span>
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex flex-col h-14 justify-between">
              <label className="font-bold text-sm">
                Show prices as minimum price (e.g $100+)
              </label>
              <span className="text-sm font-semibold text-gray-500">Off</span>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="user__details flex flex-col gap-5">
          <div className="w-1/2">
            <div className="flex flex-col h-14 justify-between">
              <label className="font-bold text-sm">Show prompt-to-call</label>
              <span className="text-sm font-semibold text-gray-500">Off</span>
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex flex-col h-14 justify-between">
              <label className="font-bold text-sm">
                Require home address (for in-home services)
              </label>
              <span className="text-sm font-semibold text-gray-500">Off</span>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="user__details flex flex-col mb-5 gap-5">
          <div className="w-1/2">
            <div className="flex flex-col h-14 justify-between">
              <label className="font-bold text-sm">Require a credit card</label>
              <span className="text-sm font-semibold text-gray-500">On</span>
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex flex-col h-14 justify-between">
              <div className="flex flex-col h-14 justify-between">
                <label className="font-bold text-sm">
                  Require payment at the time of booking
                </label>
                <span className="text-sm font-semibold text-gray-500">No</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          edit === true ? `block` : `hidden`
        } bg-white px-6 pt-4 h-full overflow-x-scroll custom-scrollbar pb-8`}
      >
        <form action="" className="flex flex-col gap-4">
          {/*  */}
          <div className="w-1/2 flex flex-col">
            <label
              htmlFor={"onlineBooking"}
              className="flex gap-4 items-center cursor-pointer"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  id={"onlineBooking"}
                  checked={availableOnlineBooking}
                  className="sr-only"
                  onChange={() =>
                    setAvailableOnlineBooking(!availableOnlineBooking)
                  }
                />

                <div
                  className={`block ${
                    !availableOnlineBooking
                      ? `bg-tatto-disabled`
                      : `bg-tatto-dark-blue`
                  } w-11 h-6 rounded-full`}
                ></div>

                <div
                  className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition`}
                ></div>
              </div>
              <span className="font-bold text-sm">
                Available in online booking
              </span>
            </label>
          </div>
          {/*  */}
          <div>
            <label htmlFor="description" className="font-bold text-sm mb-2">
              Description
            </label>
            <textarea
              name=""
              id="description"
              className="w-full resize-none text-sm border rounded-md px-3 py-2 focus-visible:outline-none transition duration-150 ease-out"
              rows="3"
              placeholder="Enter service description that will be visible in online booking"
            ></textarea>
          </div>
          {/*  */}
          <div className="w-1/2 flex flex-col">
            <label
              htmlFor={"minPrice"}
              className="flex gap-4 items-center cursor-pointer"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  id={"minPrice"}
                  checked={minPrice}
                  className="sr-only"
                  onChange={() => setMinPrice(!minPrice)}
                />

                <div
                  className={`block ${
                    !minPrice ? `bg-tatto-disabled` : `bg-tatto-dark-blue`
                  } w-11 h-6 rounded-full`}
                ></div>

                <div
                  className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition`}
                ></div>
              </div>
              <span className="font-bold text-sm">
                Show prices as minimum prices (e.g. $100+)
              </span>
            </label>
          </div>
          {/*  */}
          <div className="w-1/2 flex flex-col">
            <label
              htmlFor={"promptToCall"}
              className="flex gap-4 items-center cursor-pointer"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  id={"promptToCall"}
                  checked={promptToCall}
                  className="sr-only"
                  onChange={() => setPromptToCall(!promptToCall)}
                />

                <div
                  className={`block ${
                    !promptToCall ? `bg-tatto-disabled` : `bg-tatto-dark-blue`
                  } w-11 h-6 rounded-full`}
                ></div>

                <div
                  className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition`}
                ></div>
              </div>
              <span className="font-bold text-sm">Show prompt-to-call</span>
            </label>
          </div>
          {/*  */}
          <div>
            <label
              htmlFor="Prompt-to-callexplaination"
              className="font-bold text-sm mb-2"
            >
              Prompt-to-call explaination
            </label>
            <textarea
              name=""
              id="Prompt-to-callexplaination"
              className="w-full resize-none text-sm border rounded-md px-3 py-2 focus-visible:outline-none transition duration-150 ease-out"
              rows="3"
              placeholder="Explanation why this service can't be booked online"
            ></textarea>
          </div>
          {/*  */}
          <div className="w-1/2 flex flex-col">
            <label
              htmlFor={"homeAddress"}
              className="flex gap-4 items-center cursor-pointer"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  id={"homeAddress"}
                  checked={homeAddress}
                  className="sr-only"
                  onChange={() => setHomeAddress(!homeAddress)}
                />

                <div
                  className={`block ${
                    !homeAddress ? `bg-tatto-disabled` : `bg-tatto-dark-blue`
                  } w-11 h-6 rounded-full`}
                ></div>

                <div
                  className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition`}
                ></div>
              </div>
              <span className="font-bold text-sm">
                Require home address (for in-home services)
              </span>
            </label>
          </div>
          {/*  */}
          <div className="w-1/2 flex flex-col">
            <label
              htmlFor={"creditCard"}
              className="flex gap-4 items-center cursor-pointer"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  id={"creditCard"}
                  checked={creditCard}
                  className="sr-only"
                  onChange={() => setCreditCard(!creditCard)}
                />

                <div
                  className={`block ${
                    !creditCard ? `bg-tatto-disabled` : `bg-tatto-dark-blue`
                  } w-11 h-6 rounded-full`}
                ></div>

                <div
                  className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition`}
                ></div>
              </div>
              <span className="font-bold text-sm">Require a credit card</span>
            </label>
          </div>
          {/*  */}
          <div className="w-1/2 flex flex-col">
            <label
              htmlFor={"paymentTimeOfBooking"}
              className="flex gap-4 items-center cursor-pointer"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  id={"paymentTimeOfBooking"}
                  checked={paymentTimeOfBooking}
                  className="sr-only"
                  onChange={() =>
                    setPaymentTimeOfBooking(!paymentTimeOfBooking)
                  }
                />

                <div
                  className={`block ${
                    !paymentTimeOfBooking
                      ? `bg-tatto-disabled`
                      : `bg-tatto-dark-blue`
                  } w-11 h-6 rounded-full`}
                ></div>

                <div
                  className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition`}
                ></div>
              </div>
              <span className="font-bold text-sm">
                Require a payment at the time of booking
              </span>
            </label>
          </div>

          {/* BUttons Section */}
          <div className="border-t-2 flex flex-row justify-end gap-4 p-4">
            <button
              className="px-6 py-2 border border-tatto-dark-blue text-tatto-dark-blue rounded-lg"
              onClick={(e) => {
                e.preventDefault();
                setEdit(false);
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-tatto-dark-blue text-white rounded-lg"
              onClick={(e) => e.preventDefault()}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OnlineBooking;
