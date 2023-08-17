"use client";
import React, { useState } from "react";
import MobileHeader from "@/app/partails/MobileHeader";
import MobileFooter from "@/app/partails/MobileFooter";

const AddNewStaffMember = () => {
  const [isProviderChecked, setIsProviderCheck] = useState(false);
  const [isOnlineBooking, setIsOnlineBooking] = useState(false);
  const [isCardOnlineBooking, setIsCardOnlineBooking] = useState(false);
  return (
    <>
      <MobileHeader backTo={""} headerTitle={"New Staff Member"} />

      <div className="pt-2">
        <div className="flex justify-between items-center mt-2">
          <button className="bg-tatto-dark-blue text-white py-1 px-10 rounded-full">
            Cancel
          </button>
          <button className="bg-tatto-dark-blue text-white py-1 px-10 rounded-full">
            Create
          </button>
        </div>
        {/* Cards */}
        <div className="rounded-xl bg-white px-6 py-4 mt-4 border-2">
          <form action="" className="flex flex-col gap-4">
            {/* First Name */}
            <div className="flex flex-col  gap-2">
              <label htmlFor="firstName" className="pl-1 text-sm font-bold">
                First Name
              </label>
              <input
                type="text"
                className="w-full h-12 px-4 placeholder:text-xs py-4 border-2 rounded-full focus-visible:outline-none"
                id="firstName"
                placeholder="Enter First Name"
              />
            </div>
            {/* Last Name */}
            <div className="flex flex-col  gap-2">
              <label htmlFor="lastName" className="pl-1 text-sm font-bold">
                Last Name
              </label>
              <input
                type="text"
                className="w-full h-12 px-4 placeholder:text-xs py-4 border-2 rounded-full focus-visible:outline-none"
                id="lastName"
                placeholder="Enter Last Name"
              />
            </div>
            {/* Email */}
            <div className="flex flex-col  gap-2">
              <label htmlFor="email" className="pl-1 text-sm font-bold">
                Email
              </label>
              <input
                type="email"
                className="w-full h-12 px-4 placeholder:text-xs py-4 border-2 rounded-full focus-visible:outline-none"
                id="email"
                placeholder="me@gmail.com"
              />
            </div>
            {/* Phone */}
            <div className="flex flex-col  gap-2">
              <label htmlFor="phone" className="pl-1 text-sm font-bold">
                Phone
              </label>
              <input
                type="text"
                className="w-full h-12 px-4 placeholder:text-xs py-4 border-2 rounded-full focus-visible:outline-none"
                id="phone"
                placeholder="Enter Phone number"
              />
            </div>
            {/* user type */}
            <div className="flex flex-col  gap-2">
              <label htmlFor="userType" className="pl-1 text-sm font-bold">
                User Type
              </label>
              <select
                name=""
                id="userType"
                className="w-full h-10 px-2 border rounded-full focus-visible:outline-none"
              >
                <option value="admin">Admin</option>
                <option value="normal">Normal</option>
              </select>
            </div>
            {/* Phone */}
            <div className="flex flex-col  gap-2">
              <label htmlFor="Timeclockpin" className="pl-1 text-sm font-bold">
                Time clock pin
              </label>
              <input
                type="text"
                className="w-full h-12 px-4 placeholder:text-xs py-4 border-2 rounded-full focus-visible:outline-none"
                id="Timeclockpin"
                placeholder="Enter Time clock pin"
              />
            </div>
            {/*  */}
            <div className="flex flex-col gap-4">
              <div>
                <div className="flex items-center justify-start w-full">
                  <label
                    htmlFor="isProvider"
                    className="flex items-center gap-5 cursor-pointer"
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
                      className="flex items-center gap-5 cursor-pointer"
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
                      className="flex items-center gap-5 cursor-pointer"
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
                  <div className="mt-3 text-sm italic text-gray-500">
                    Turn off this setting if you don&apos;t want to collect
                    credit cards for services booked with this staff member
                    online.
                  </div>
                </div>
              </div>
            </div>
            {/* Gander Select */}
            <div className="flex flex-col  gap-2">
              <label htmlFor="gender" className="pl-1 text-sm font-bold">
                Gender
              </label>
              <select
                name=""
                id="gender"
                className="w-full h-10 px-2 border rounded-full focus-visible:outline-none"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non-binary">Non-binary</option>
              </select>
            </div>
          </form>
        </div>
      </div>
      <MobileFooter />
    </>
  );
};

export default AddNewStaffMember;
