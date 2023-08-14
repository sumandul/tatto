"use client";
import React, { useState } from "react";
import { FiPlusSquare } from "react-icons/fi";
import Image from "next/image";
import dynamic from "next/dynamic";


const BusinessSettings = dynamic(()=>import('../page'),{
  ssr:false
})


const BusinessLocations = () => {
  const [edit, setEdit] = useState(false);
  const [rename, setRename] = useState(false);
  const [remove, setRemove] = useState(false);

  const [formIsOpen, setFormIsopen] = useState(false);

  return (
    <BusinessSettings>
      {/* Head */}
      <div className="px-6 py-4 flex justify-between items-center bg-white border-b mb-4">
        <div className="flex items-center">
          <h1 className="font-extrabold text-md text-gray-800">Locations</h1>
          <span className="text-gray-500 font-light text-sm ml-4 ">
            (Manage your business locations, contact information and tax rates.)
          </span>
        </div>
        <div>
          <button className="bg-tatto-dark-blue text-white flex items-center gap-2 text-sm rounded-md px-4 py-1.5">
            <FiPlusSquare className="text-xl" />
            Add New Location
          </button>
        </div>
      </div>
      {/* body */}
      <div className="basic__details__holder px-6 pb-4 bg-white">
        <div className="bg-body-pink rounded-xl border overflow-hidden transition-all ease-in-out">
          <div className="flex justify-between px-4 py-2 bg-head-pink">
            <h1
              className={`font-bold self-center ${
                formIsOpen ? "hidden" : "visible"
              }`}
            >
              Blues Jeans
            </h1>

            {/*  */}
            <div
              className={`flex items-center justify-between px-4 py-2 ${
                formIsOpen ? "visible" : "hidden"
              }`}
            >
              <div className="">
                <h1 className="font-bold self-center">JKW</h1>
              </div>
              <div className="w-1/5 flex items-center relative">
                <p className="text-ellipsis truncate  overflow-hidden text-sm font-semibold text-gray-500 w-4/5">
                  46 Ravenswood Rd, Walthamstow, London -E17 9LY
                </p>
              </div>
              <div className="w-fit flex items-center relative">
                <span className="text-sm font-semibold text-gray-500">USA</span>
              </div>
              <div className="w-fit flex items-center relative">
                <span className="text-sm font-semibold text-gray-500">
                  020 8430 7171
                </span>
              </div>
              <div className="w-fit flex items-center relative">
                <span className="text-sm font-semibold text-gray-500">5%</span>
              </div>
              <div className="w-fit flex items-center relative">
                <span className="text-sm font-semibold text-gray-500">
                  (GMT+I) Europe / London
                </span>
              </div>
            </div>
            {/*  */}

            <div className="flex gap-2 items-center">
              <div
                className="cursor-pointer w-8 h-8 flex justify-center items-center"
                onClick={() => {
                  setEdit(true);
                  setFormIsopen(false);
                }}
              >
                <Image
                  src={
                    edit ? "/png_icons/edit_active.png" : "/png_icons/edit.png"
                  }
                  alt=""
                  width={40}
                  height={40}
                />
              </div>

              <div
                className="cursor-pointer w-8 h-8 flex justify-center items-center"
                onClick={() => setRename(true)}
              >
                <Image
                  src={
                    rename
                      ? "/png_icons/rename_active.png"
                      : "/png_icons/rename.png"
                  }
                  alt=""
                  width={40}
                  height={40}
                />
              </div>

              <div
                className="cursor-pointer w-8 h-8 flex justify-center items-center"
                onClick={() => setRemove(true)}
              >
                <Image
                  src={
                    remove
                      ? "/png_icons/delete_active.png"
                      : "/png_icons/delete.png"
                  }
                  alt=""
                  width={40}
                  height={40}
                />
              </div>

              <div
                className="cursor-pointer w-8 h-8 flex justify-center items-center"
                onClick={() => {
                  setFormIsopen(!formIsOpen);
                  setEdit(false);
                }}
              >
                <Image
                  className={`w-5 ${
                    formIsOpen ? "rotate-180" : "rotate-0"
                  } ease-in-out transition-all`}
                  src="/png_icons/arrow-down.png"
                  alt=""
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>
          {/* Simple Form */}
          <div
            className={`${edit === false ? `block` : `hidden`} ${
              formIsOpen ? "hidden" : "visible"
            } px-6 pt-4`}
          >
            {/*  */}
            <div className="user__details flex mb-10">
              <div className="w-1/2">
                <div className="flex flex-col h-14 justify-between">
                  <label className="font-bold text-sm">Address</label>
                  <span className="text-sm font-semibold text-gray-500">
                    46 Ravenswood Rd, Walthamstow, London -E17 9LY
                  </span>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="user__details flex gap-5 mb-10">
              <div className="w-1/2">
                <div className="flex flex-col h-14 justify-between">
                  <label className="font-bold text-sm">
                    Contact Email Address
                  </label>
                  <span className="text-sm font-semibold text-gray-500">
                    USA
                  </span>
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex flex-col h-14 justify-between">
                  <label className="font-bold text-sm">Contact Number</label>
                  <span className="text-sm font-semibold text-gray-500">
                    020 8430 7171
                  </span>
                </div>
              </div>
            </div>

            {/*  */}
            <div className="user__details flex gap-5 mb-10">
              <div className="w-1/2">
                <div className="flex flex-col h-14 justify-between">
                  <label className="font-bold text-sm">Service Tax Rate</label>
                  <span className="text-sm font-semibold text-gray-500">
                    5%
                  </span>
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex flex-col h-14 justify-between">
                  <label className="font-bold text-sm">Product Tax Rate</label>
                  <span className="text-sm font-semibold text-gray-500">
                    5%
                  </span>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="user__details flex mb-10">
              <div className="w-1/2">
                <div className="flex flex-col h-14 justify-between">
                  <label className="font-bold text-sm">Time Zone</label>
                  <span className="text-sm font-semibold text-gray-500">
                    (GMT+I) Europe / London
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${
              edit === true ? `block` : `hidden`
            } bg-white px-6 pt-4 h-full`}
          >
            <form action="" method="get">
              {/*  */}
              <div className="flex gap-5 mb-4">
                <div className="w-full flex flex-col">
                  <label
                    htmlFor="addressline1"
                    className="font-bold text-sm mb-2"
                  >
                    Address Line 1
                  </label>
                  <input
                    id="addressline1"
                    className="border rounded-md px-2 py-1 focus-visible:outline-none transition duration-150 ease-out"
                    type="text"
                    required
                  />
                </div>
              </div>
              {/*  */}
              <div className="flex gap-5 mb-4">
                <div className="w-full flex flex-col">
                  <label
                    htmlFor="addressline2"
                    className="font-bold text-sm mb-2"
                  >
                    Address Line 2
                  </label>
                  <input
                    id="addressline2"
                    className="border rounded-md px-2 py-1 focus-visible:outline-none transition duration-150 ease-out"
                    type="text"
                    required
                  />
                </div>
              </div>
              {/*  */}
              <div className="flex gap-5 mb-4">
                <div className="w-1/2 flex flex-col">
                  <label htmlFor="city" className="font-bold text-sm mb-2">
                    City
                  </label>
                  <input
                    id="city"
                    className="border rounded-md px-2 py-1 focus-visible:outline-none transition duration-150 ease-out"
                    type="text"
                    required
                  />
                </div>
                <div className="w-1/2 flex flex-col">
                  <label htmlFor="state" className="font-bold text-sm mb-2">
                    State
                  </label>
                  <input
                    id="state"
                    className="border rounded-md px-2 py-1 focus-visible:outline-none transition duration-150 ease-out"
                    type="text"
                    required
                  />
                </div>
              </div>
              {/*  */}
              <div className="flex gap-5 mb-12">
                <div className="w-1/2 flex flex-col">
                  <label htmlFor="zipCode" className="font-bold text-sm mb-2">
                    Zip Code
                  </label>
                  <input
                    id="zipCode"
                    className="border rounded-md px-2 py-1 focus-visible:outline-none transition duration-150 ease-out"
                    type="number"
                    required
                  />
                </div>
                <div className="w-1/2 flex flex-col">
                  <label htmlFor="timeZone" className="font-bold text-sm mb-2">
                    Time Zone
                  </label>
                  <input
                    id="timeZone"
                    className="border rounded-md px-2 py-1 focus-visible:outline-none transition duration-150 ease-out"
                    type="time"
                    required
                  />
                </div>
              </div>
              {/* Mid Section 1 */}
              <div className="flex items-center mb-6">
                <h1 className="font-bold text-sm text-gray-800">
                  Contact details
                </h1>
                <span className="text-gray-500 font-light text-xs ml-4 ">
                  (These will be visible in online booking and appointment
                  notifications. Contact email address)
                </span>
              </div>
              {/*  */}
              <div className="flex gap-5 mb-12">
                <div className="w-1/2 flex flex-col">
                  <label
                    htmlFor="contactEmail"
                    className="font-bold text-sm mb-2"
                  >
                    Contact Email Address
                  </label>
                  <input
                    id="contactEmail"
                    className="border rounded-md px-2 py-1 focus-visible:outline-none transition duration-150 ease-out"
                    type="number"
                    required
                  />
                </div>
                <div className="w-1/2 flex flex-col">
                  <label
                    htmlFor="contactNumber"
                    className="font-bold text-sm mb-2"
                  >
                    Contact Number
                  </label>
                  <input
                    id="contactNumber"
                    className="border rounded-md px-2 py-1 focus-visible:outline-none transition duration-150 ease-out"
                    type="time"
                    required
                  />
                </div>
              </div>
              {/* Mid Section 2 */}
              <div className="flex items-center mb-6">
                <h1 className="font-bold text-sm text-gray-800">Taxes</h1>
                <span className="text-gray-500 font-light text-xs ml-4 ">
                  (Tax rates will be automatically applied at checkout. You can
                  turn them off for specific services and products if needed.
                  Service tax rate)
                </span>
              </div>
              {/*  */}
              <div className="flex gap-5 mb-12">
                <div className="w-1/2 flex flex-col">
                  <label
                    htmlFor="serviceTaxRate"
                    className="font-bold text-sm mb-2"
                  >
                    Service Tax Rate
                  </label>
                  <input
                    id="serviceTaxRate"
                    className="border rounded-md px-2 py-1 focus-visible:outline-none transition duration-150 ease-out"
                    type="number"
                    required
                  />
                </div>
                <div className="w-1/2 flex flex-col">
                  <label
                    htmlFor="productTaxRate"
                    className="font-bold text-sm mb-2"
                  >
                    Product Tax Rate
                  </label>
                  <input
                    id="productTaxRate"
                    className="border rounded-md px-2 py-1 focus-visible:outline-none transition duration-150 ease-out"
                    type="time"
                    required
                  />
                </div>
              </div>
              {/* Mid Section 3 */}
              <div className="flex items-center mb-6">
                <h1 className="font-bold text-sm text-gray-800">Advanced</h1>
              </div>
              {/*  */}
              <div className="flex gap-5 mb-8">
                <div className="w-full flex flex-col">
                  <label
                    htmlFor="locationUrl"
                    className="font-bold text-sm mb-2"
                  >
                    Location URL
                  </label>
                  <input
                    id="locationUrl"
                    className="border rounded-md px-2 py-1 focus-visible:outline-none transition duration-150 ease-out mb-2"
                    type="number"
                    required
                  />
                  <span className="text-xs italic text-gray-500">
                    This becomes part of the online booking URL:
                    https://booking.tattooadmin.com/bluejeans1/bluejeans1CancelSave
                  </span>
                </div>
              </div>
              {/*  */}
              <div
                className={`flex justify-start gap-4  py-3 ${
                  !edit ? `` : `border-t`
                }`}
              >
                <button
                  className={`text-tatto-dark-blue border-tatto-dark-blue border rounded-md px-4 py-1.5 ${
                    !edit ? `invisible` : `visible`
                  }`}
                  onClick={() => setEdit(false)}
                >
                  Cancel
                </button>
                <button
                  className={`bg-tatto-dark-blue text-white rounded-md px-4 py-1.5 ${
                    !edit ? `invisible` : `visible`
                  }`}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
    </BusinessSettings>
  );
};

export default BusinessLocations;
