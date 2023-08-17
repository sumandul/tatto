"use client";
import React, { useState } from "react";
import Image from "next/image";

const Details = ({ editStaffMember }) => {
  const [edit, setEdit] = useState(false);

  const [isProviderChecked, setIsProviderCheck] = useState(true);
  const [isOnlineBooking, setIsOnlineBooking] = useState(true);
  const [isCardOnlineBooking, setIsCardOnlineBooking] = useState(true);

  return (
    <>
      <div
        className="bg-body-pink rounded-xl border h-96 overflow-hidden w-full"
        style={{ height: "27rem" }}
      >
        <div className="flex justify-between px-4 py-2 bg-head-pink">
          <h1 className="font-bold self-center">Details</h1>
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
        <div className={`${edit === false ? `block` : `hidden`} px-6 pt-4`}>
          {/*  */}
          <div className="user__details flex mb-10 gap-5">
            <div className="w-1/2">
              <div className="flex flex-col h-14 justify-between">
                <label className="font-bold text-sm">Email</label>
                <span className="text-sm font-semibold text-gray-500">
                  peter01@gmail.com
                </span>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex flex-col h-14 justify-between">
                <label className="font-bold text-sm">Gender</label>
                <span className="text-sm font-semibold text-gray-500">
                  Male
                </span>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="user__details flex mb-10 gap-5">
            <div className="w-1/2">
              <div className="flex flex-col h-14 justify-between">
                <label className="font-bold text-sm">User Type</label>
                <span className="text-sm font-semibold text-gray-500">
                  Admin
                </span>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex flex-col h-14 justify-between">
                <label className="font-bold text-sm">Is service provider</label>
                <span className="text-sm font-semibold text-gray-500">Yes</span>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="user__details flex gap-5">
            <div className="w-1/2">
              <div className="flex flex-col h-14 justify-between">
                <label className="font-bold text-sm">
                  Enable in online booking
                </label>
                <span className="text-sm font-semibold text-gray-500">Yes</span>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex flex-col h-14 justify-between">
                <label className="font-bold text-sm">
                  Online booking direct link
                </label>
                <span className="text-sm font-semibold text-blue-600">
                  https://booking.tattooadmin.com/223344
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${
            edit === true ? `block` : `hidden`
          } bg-white px-6 pt-4 h-full overflow-x-scroll custom-scrollbar pb-8`}
        >
          <form
            action=""
            className="flex flex-col gap-4"
            onSubmit={editStaffMember}
          >
            {/* First Name */}
            <div className="flex gap-2 flex-col w-1/2">
              <label htmlFor="firstName" className="font-bold text-sm pl-1">
                First Name
              </label>
              <input
                type="text"
                className="border-2 px-3 py-4 h-8 rounded-md w-full focus-visible:outline-none"
                id="firstName"
              />
            </div>
            {/* Last Name */}
            <div className="flex gap-2 flex-col w-1/2">
              <label htmlFor="lastName" className="font-bold text-sm pl-1">
                Last Name
              </label>
              <input
                type="text"
                className="border-2 px-3 py-4 h-8 rounded-md w-full focus-visible:outline-none"
                id="lastName"
              />
            </div>
            {/* Email */}
            <div className="flex gap-2 flex-col w-1/2">
              <label htmlFor="email" className="font-bold text-sm pl-1">
                Email
              </label>
              <input
                type="email"
                className="border-2 px-3 py-4 h-8 rounded-md w-full focus-visible:outline-none"
                id="email"
              />
            </div>
            {/* Phone */}
            <div className="flex gap-2 flex-col w-1/2">
              <label htmlFor="phone" className="font-bold text-sm pl-1">
                Phone
              </label>
              <input
                type="text"
                className="border-2 px-3 py-4 h-8 rounded-md w-full focus-visible:outline-none"
                id="phone"
              />
            </div>
            {/* user type */}
            <div className="flex gap-2 flex-col w-1/2">
              <label htmlFor="userType" className="font-bold text-sm pl-1">
                User Type
              </label>
              <select
                name=""
                id="userType"
                className="w-full h-10 border rounded-md focus-visible:outline-none px-2"
              >
                <option value="admin">Admin</option>
                <option value="normal">Normal</option>
              </select>
            </div>
            {/*  */}
            <div className="flex flex-col gap-4">
              <div>
                <div className="flex items-center justify-start w-full">
                  <label
                    htmlFor="isProvider"
                    className="flex items-center cursor-pointer gap-5"
                  >
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="isProvider"
                        checked={isProviderChecked}
                        className="sr-only"
                        onChange={() => setIsProviderCheck(!isProviderChecked)}
                      />

                      <div
                        className={`block ${
                          !isProviderChecked
                            ? `bg-tatto-disabled`
                            : `bg-tatto-dark-blue`
                        } w-11 h-6 rounded-full`}
                      ></div>

                      <div
                        className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition`}
                      ></div>
                    </div>
                    is service provider
                  </label>
                </div>
              </div>
              {/*  */}
              <div
                className={`${
                  isProviderChecked ? "visible" : "hidden"
                } flex flex-col gap-4`}
              >
                {/*  */}
                <div>
                  <div className="flex items-center justify-start w-full">
                    <label
                      htmlFor="onlineBooking"
                      className="flex items-center cursor-pointer gap-5"
                    >
                      <div className="relative">
                        <input
                          type="checkbox"
                          id="onlineBooking"
                          checked={isOnlineBooking}
                          className="sr-only"
                          onChange={() => setIsOnlineBooking(!isOnlineBooking)}
                        />

                        <div
                          className={`block ${
                            !isOnlineBooking
                              ? `bg-tatto-disabled`
                              : `bg-tatto-dark-blue`
                          } w-11 h-6 rounded-full`}
                        ></div>

                        <div
                          className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition`}
                        ></div>
                      </div>
                      Enable in online booking
                    </label>
                  </div>
                </div>
                {/*  */}
                <div className={`${isOnlineBooking ? "visible" : "hidden"}`}>
                  <div className="flex items-center justify-start w-full">
                    <label
                      htmlFor="isCardOnlineBooking"
                      className="flex items-center cursor-pointer gap-5"
                    >
                      <div className="relative">
                        <input
                          type="checkbox"
                          id="isCardOnlineBooking"
                          checked={isCardOnlineBooking}
                          className="sr-only"
                          onChange={() =>
                            setIsCardOnlineBooking(!isCardOnlineBooking)
                          }
                        />

                        <div
                          className={`block ${
                            !isCardOnlineBooking
                              ? `bg-tatto-disabled`
                              : `bg-tatto-dark-blue`
                          } w-11 h-6 rounded-full`}
                        ></div>

                        <div
                          className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition`}
                        ></div>
                      </div>
                      Require a credit card in online booking
                    </label>
                  </div>
                  <div className="mt-3 text-sm italic  text-gray-500">
                    Turn off this setting if you dont want to collect
                    credit cards for services booked with this staff member
                    online.
                  </div>
                </div>
              </div>
            </div>
            {/* Gander Select */}
            <div className="flex gap-2 flex-col w-1/2">
              <label htmlFor="gender" className="font-bold text-sm pl-1">
                Gender
              </label>
              <select
                name=""
                id="gender"
                className="w-full h-10 border rounded-md focus-visible:outline-none px-2"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non-binary">Non-binary</option>
              </select>
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
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Details;
