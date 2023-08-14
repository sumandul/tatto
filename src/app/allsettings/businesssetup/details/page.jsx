"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const BusinessSettings = dynamic(()=>import('../page'),{
  ssr:false
})
const SelectDrodown  = dynamic(()=>import('@/app/components/SelectDropdown'),{
  ssr:false
})


const BusinessDetail = () => {
  const [edit, setEdit] = useState(false);

  const [contrySelect, setContrySelect] = useState("");
  const [currencySelect, setCurrencySelect] = useState("");

  return (
    <BusinessSettings>
      {/* Head */}
      <div className="px-6 py-4 flex items-center bg-white border-b mb-4">
        <h1 className="font-extrabold text-md text-gray-800">
          Business Details
        </h1>
        <span className="text-gray-500 font-light text-sm ml-4 ">
          (Edit business name, website, country. and currencv.)
        </span>
        <hr />
      </div>
      {/* body */}
      <div className="basic__details__holder px-6 pb-4 bg-white">
        <div className="bg-body-pink rounded-xl border h-96 overflow-hidden">
          <div className="flex justify-between px-4 py-2 bg-head-pink">
            <h1 className="font-bold self-center">Basic Details</h1>
            <div
              className="cursor-pointer w-8 h-8 flex justify-center items-center"
              onClick={() => setEdit(true)}
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
          </div>
          {/* Simple Form */}
          <div className={`${edit === false ? `block` : `hidden`} px-6 pt-4`}>
            {/*  */}
            <div className="user__details flex mb-10 gap-5">
              <div className="w-1/2">
                <div className="flex flex-col h-14 justify-between">
                  <label className="font-bold text-sm">Business Name</label>
                  <span className="text-sm font-semibold text-gray-500">
                    Blues Jeans
                  </span>
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex flex-col h-14 justify-between">
                  <label className="font-bold text-sm">Website</label>
                  <a className="text-sm font-semibold text-blue-600" href="#">
                    https://jeansbb.co.uk
                  </a>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="user__details flex gap-5">
              <div className="w-1/2">
                <div className="flex flex-col h-14 justify-between">
                  <label className="font-bold text-sm">Country</label>
                  <span className="text-sm font-semibold text-gray-500">
                    USA
                  </span>
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex flex-col h-14 justify-between">
                  <label className="font-bold text-sm">Currency</label>
                  <span className="text-sm font-semibold text-gray-500">
                    USD
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
              <div className="flex gap-5 mb-9">
                <div className="w-1/2 flex flex-col">
                  <label
                    htmlFor="businessName"
                    className="font-bold text-sm mb-2"
                  >
                    Business Name
                  </label>
                  <input
                    id="businessName"
                    className="border rounded-md px-2 py-1 focus-visible:outline-none transition duration-150 ease-out"
                    type="text"
                    required
                  />
                </div>

                <div className="w-1/2 flex flex-col">
                  <label
                    htmlFor="websiteUrl"
                    className="font-bold text-sm mb-2"
                  >
                    Website
                  </label>
                  <div className="relative flex items-center">
                    <input
                      id="websiteUrl"
                      className="border rounded-md px-2 py-1 w-full focus-visible:outline-none transition duration-150 ease-out"
                      type="url"
                      required
                    />
                    <Image
                      htmlFor="websiteUrl"
                      onClick={() =>
                        document.getElementById("websiteUrl").focus()
                      }
                      width={40}
                      height={40}
                      className="w-4 absolute right-3 cursor-pointer"
                      src="/png_icons/link.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-1/2 flex flex-col">
                  <label
                    htmlFor="selectCountry"
                    className="font-bold text-sm mb-2"
                  >
                    Country
                  </label>
                  <div className="relative flex items-center">
                    <SelectDrodown
                      options={["USA", "UAE"]}
                      value={contrySelect}
                      handleOnChange={(val) => setContrySelect(val)}
                    />
                  </div>
                </div>

                <div className="w-1/2 flex flex-col">
                  <label
                    htmlFor="selectCurrency"
                    className="font-bold text-sm mb-2"
                  >
                    Currency
                  </label>
                  <div className="relative flex items-center">
                    <SelectDrodown
                      options={["USD", "EURO"]}
                      value={currencySelect}
                      handleOnChange={(val) => setCurrencySelect(val)}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div
        className={`flex justify-end gap-4 px-6 py-3 ${
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
    </BusinessSettings>
  );
};

export default BusinessDetail;
