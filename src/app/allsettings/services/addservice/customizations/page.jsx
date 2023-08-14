"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const SelectDrodown = dynamic(()=>import("@/app/components/SelectDropdown"),{
  ssr:false
})


const Customizations = () => {
  const [createOptionGroup, setCreateOptionGroup] = useState(false);

  const [requiredRadio, setRequiredRadio] = useState(false);
  const [optionalRadio, setOptionalRadio] = useState(false);
  const [internalOnly, setInternalOnly] = useState(false);

  const [addOptionsModal, setAddOptionsModal] = useState(false);

  //
  const [serviceDuration, setServiceDuration] = useState(false);
  const [servicePrice, setServicePrice] = useState(false);

  //
  const [increasesDurationRadio, setIncreasesDurationRadio] = useState(true);
  const [decreasesDurationRadio, setDecreasesDurationRadio] = useState(false);
  //
  const [increasesPriceRadio, setIncreasesPriceRadio] = useState(true);
  const [decreasesPriceRadio, setDecreasesPriceRadio] = useState(false);
  return (
    <div>
      {!createOptionGroup ? (
        <div className="bg-white basic__details__holder">
          <div className="overflow-hidden bg-body-pink border rounded-xl">
            <div className="flex justify-between px-4 py-2 bg-head-pink">
              <h1 className="self-center font-bold">Service Customizations</h1>
            </div>
            {/* this is add staff form */}
            <div className="bg-white px-4 py-4">
              <div className="flex flex-col gap-4">
                {/* Banner Img */}
                <div>
                  <Image
                    className="w-full"
                    src="/png_icons/customizations-banner.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
                {/*  */}
                <div className="flex flex-col gap-4 mb-4 justify-center items-center">
                  {/* Span text */}
                  <div className="flex justify-center flex-col text-center w-3/4">
                    <span className="text-md">
                      Create flexible customizations and enhancements for your
                      services. Adjust pricing, duration, and more for a
                      personalized experience.
                    </span>
                    <Link href="#" className="text-green-500 underline">
                      Learn more
                    </Link>
                  </div>
                  {/* Create Button */}
                  <div>
                    <button
                      onClick={() => setCreateOptionGroup(true)}
                      className="bg-tatto-dark-blue py-2 px-4 text-white rounded-md"
                    >
                      Create Option Group
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white basic__details__holder">
          <div className="overflow-hidden bg-body-pink border rounded-xl">
            <div className="flex justify-between px-4 py-2 bg-head-pink">
              <h1 className="self-center font-bold">New Option Group</h1>
            </div>
            {/* this is add staff form */}
            <div className="bg-white px-4 pt-4">
              <form action="">
                <div className=" bg-white flex flex-col gap-6">
                  {/*  */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="Promptforclients"
                      className="text-sm font-bold"
                    >
                      Prompt for clients
                    </label>
                    <input
                      id="Promptforclients"
                      type="text"
                      className="w-1/2 border rounded-md px-4 py-1.5 focus-visible:outline-none"
                      placeholder="e.g Choose your add-ons"
                    />
                    <span className="text-xs text-gray-500">
                      This prompt will be visible to clients in online booking
                    </span>
                  </div>
                  {/*  */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="GroupName" className="text-sm font-bold">
                      Group Name
                    </label>
                    <input
                      id="GroupName"
                      type="text"
                      className="w-1/2 border rounded-md px-4 py-1.5 focus-visible:outline-none"
                      placeholder="e.g Add-ons"
                    />
                    <span className="text-xs text-gray-500">
                      This name is used internally, it is not visible to clients
                    </span>
                  </div>
                  {/*  */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold">
                      Available options
                    </label>
                    <span
                      onClick={() => setAddOptionsModal(true)}
                      className="flex cursor-pointer items-center gap-3 text-sm text-tatto-dark-blue font-semibold"
                    >
                      <Image
                        className="w-4"
                        src="/png_icons/add-blue.png"
                        alt=""
                        width={40}
                        height={40}
                      />
                      Add Options
                    </span>
                  </div>
                  {/*  */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="Required" className="flex gap-4 w-3/5">
                      <div>
                        <input
                          type="radio"
                          name="requiredoroptional"
                          id="Required"
                          checked={requiredRadio}
                          onChange={() => {
                            setRequiredRadio(true);
                            setOptionalRadio(false);
                          }}
                          className="form-radio"
                        ></input>
                      </div>
                      <div>
                        <h1 className="text-sm font-bold">Required</h1>
                        <span className="text-sm text-gray-500">
                          Choosing the option for this group will be required in
                          online booking and when booking an appointment through
                          the calendar.
                        </span>
                        <div
                          className={`flex gap-8 mt-4 ${
                            requiredRadio ? "visible" : "hidden"
                          }`}
                        >
                          {/*  */}
                          <div className="flex flex-col gap-2">
                            <label
                              htmlFor="Selectatleast"
                              className="text-sm font-bold"
                            >
                              Select at least
                            </label>
                            <input
                              id="Selectatleast"
                              type="number"
                              className=" border rounded-md px-4 py-1.5 focus-visible:outline-none"
                            />
                          </div>
                          {/*  */}
                          <div className="flex flex-col gap-2">
                            <label
                              htmlFor="Selectatmost"
                              className="text-sm font-bold"
                            >
                              Select at most
                            </label>
                            <input
                              id="Selectatmost"
                              type="number"
                              className="border rounded-md px-4 py-1.5 focus-visible:outline-none"
                            />
                            <span className="text-xs text-gray-500">
                              Leave blank for no limit
                            </span>
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                  {/*  */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="Optional" className="flex gap-4 w-3/5 ">
                      <div>
                        <input
                          type="radio"
                          name="requiredoroptional"
                          id="Optional"
                          checked={optionalRadio}
                          onChange={() => {
                            setRequiredRadio(false);
                            setOptionalRadio(true);
                          }}
                          className="form-radio"
                        ></input>
                      </div>
                      <div>
                        <h1 className="text-sm font-bold">Optional</h1>
                        <span className="text-sm text-gray-500">
                          An appointment can be booked without making a
                          selection for this group.
                        </span>
                        <div
                          className={`flex gap-8 mt-4 ${
                            optionalRadio ? "visible" : "hidden"
                          }`}
                        >
                          {/*  */}
                          <div className="flex flex-col gap-2">
                            <label
                              htmlFor="SelectatmostOp"
                              className="text-sm font-bold"
                            >
                              Select at most
                            </label>
                            <input
                              id="SelectatmostOp"
                              type="number"
                              className=" border rounded-md px-4 py-1.5 focus-visible:outline-none"
                            />
                            <span className="text-xs text-gray-500">
                              Leave blank for no limit
                            </span>
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                  {/*  */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="isProvider"
                      className="flex items-center gap-5 text-md font-semibold cursor-pointer"
                    >
                      <div className="relative">
                        <input
                          type="checkbox"
                          id="isProvider"
                          checked={internalOnly}
                          className="sr-only"
                          onChange={() => setInternalOnly(!internalOnly)}
                        />

                        <div
                          className={`block ${
                            !internalOnly
                              ? `bg-tatto-disabled`
                              : `bg-tatto-dark-blue`
                          } w-11 h-6 rounded-full`}
                        ></div>

                        <div
                          className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition`}
                        ></div>
                      </div>
                      Internal Only
                    </label>
                    <span className="text-xs text-gray-500">
                      When enabled, this group will not be visible to clients in
                      online booking
                    </span>
                  </div>
                  <div className="border-t-2 flex flex-row justify-end gap-4 p-4">
                    <button className="px-6 py-2 border border-tatto-dark-blue text-tatto-dark-blue rounded-lg">
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-tatto-dark-blue text-white rounded-lg"
                    >
                      Create
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Add Options Modal */}
      <div
        className={`w-full h-full fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center ${
          addOptionsModal ? "visible" : "hidden"
        }`}
        style={{ background: "#00000090" }}
      >
        {/* Modal Inner */}
        <div
          className="w-2/6 px-12 py-5 bg-white rounded-lg overflow-y-scroll hide-scrollbar"
          style={{ maxHeight: "90vh" }}
        >
          {/* Modal Head */}
          <div className="border-b-2">
            <div className="px-6 py-5">
              <h1 className="font-extrabold text-lg text-center">
                New Options
              </h1>
            </div>
          </div>
          {/* Modal Body */}
          <div className="py-5">
            {/* Body */}
            <div className="flex flex-col gap-4">
              {/*  */}
              <div className="flex flex-col gap-2">
                <label htmlFor="Promptforclients" className="text-sm font-bold">
                  Option Name
                </label>
                <input
                  id="Promptforclients"
                  type="text"
                  className="w-full border rounded-md px-4 py-1.5 focus-visible:outline-none"
                  placeholder="e.g. Luxe Experience"
                />
              </div>
              {/*  */}
              <div className="flex flex-col gap-2">
                <label htmlFor="DateRange" className="text-sm font-bold">
                  Date Range
                </label>
                <input
                  id="DateRange"
                  type="text"
                  className="w-full border rounded-md px-4 py-1.5 focus-visible:outline-none"
                  placeholder="e.g. Enjoy a free mocktail with your service"
                />
                <span className="text-xs text-gray-500">
                  This description will be visible to clients in online booking
                </span>
              </div>
              {/*  */}
              <div className="flex flex-col gap-4">
                <label
                  htmlFor="serviceDuration"
                  className="flex items-center gap-5 text-md font-semibold cursor-pointer"
                >
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="serviceDuration"
                      checked={serviceDuration}
                      className="sr-only"
                      onChange={() => setServiceDuration(!serviceDuration)}
                    />

                    <div
                      className={`block ${
                        !serviceDuration
                          ? `bg-tatto-disabled`
                          : `bg-tatto-dark-blue`
                      } w-11 h-6 rounded-full`}
                    ></div>

                    <div
                      className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition`}
                    ></div>
                  </div>
                  <span className="text-sm">
                    This option changes the service duration
                  </span>
                </label>
                {/*  */}
                <div className={serviceDuration ? "visible" : "hidden"}>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <span className="text-sm font-bold">Change type</span>
                      <div className="flex gap-10">
                        {/*  */}
                        <label
                          htmlFor="IncreasesDuration"
                          className="flex gap-4"
                        >
                          <div>
                            <input
                              type="radio"
                              name="servicedurationType"
                              id="IncreasesDuration"
                              checked={increasesDurationRadio}
                              onChange={() => {
                                setIncreasesDurationRadio(true);
                                setDecreasesDurationRadio(false);
                              }}
                              className="form-radio"
                            ></input>
                          </div>
                          <div>
                            <h1 className="text-sm font-semibold">
                              Increases Duration
                            </h1>
                          </div>
                        </label>
                        {/*  */}
                        <label
                          htmlFor="DecreasesDuration"
                          className="flex gap-4"
                        >
                          <div>
                            <input
                              type="radio"
                              name="servicedurationType"
                              id="DecreasesDuration"
                              checked={decreasesDurationRadio}
                              onChange={() => {
                                setDecreasesDurationRadio(true);
                                setIncreasesDurationRadio(false);
                              }}
                              className="form-radio"
                            ></input>
                          </div>
                          <div>
                            <h1 className="text-sm font-semibold">
                              Decreases Duration
                            </h1>
                          </div>
                        </label>
                      </div>
                    </div>
                    {/*  */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="servicedurationSelect"
                        className="text-sm font-bold"
                      >
                        {increasesDurationRadio === true
                          ? "Increases duration type"
                          : decreasesDurationRadio === true
                          ? "Decreases duration type"
                          : ""}
                      </label>
                      <SelectDrodown
                        id={"servicedurationSelect"}
                        options={["15 minutes", "30 minutes", "45 minutes"]}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="servicePrice"
                  className="flex items-center gap-5 text-md font-semibold cursor-pointer"
                >
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="servicePrice"
                      checked={servicePrice}
                      className="sr-only"
                      onChange={() => setServicePrice(!servicePrice)}
                    />

                    <div
                      className={`block ${
                        !servicePrice
                          ? `bg-tatto-disabled`
                          : `bg-tatto-dark-blue`
                      } w-11 h-6 rounded-full`}
                    ></div>

                    <div
                      className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition`}
                    ></div>
                  </div>
                  <span className="text-sm">
                    This option changes the service price
                  </span>
                </label>
                {/*  */}
                <div className={servicePrice ? "visible" : "hidden"}>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <span className="text-sm font-bold">Change type</span>
                      <div className="flex gap-10">
                        {/*  */}
                        <label
                          htmlFor="IncreasesDurationPrice"
                          className="flex gap-4"
                        >
                          <div>
                            <input
                              type="radio"
                              name="servicePriceType"
                              id="IncreasesDurationPrice"
                              checked={increasesPriceRadio}
                              onChange={() => {
                                setIncreasesPriceRadio(true);
                                setDecreasesPriceRadio(false);
                              }}
                              className="form-radio"
                            ></input>
                          </div>
                          <div>
                            <h1 className="text-sm font-semibold">
                              Increases Price
                            </h1>
                          </div>
                        </label>
                        {/*  */}
                        <label
                          htmlFor="DecreasesDurationPriice"
                          className="flex gap-4"
                        >
                          <div>
                            <input
                              type="radio"
                              name="servicePriceType"
                              id="DecreasesDurationPriice"
                              checked={decreasesPriceRadio}
                              onChange={() => {
                                setDecreasesPriceRadio(true);
                                setIncreasesPriceRadio(false);
                              }}
                              className="form-radio"
                            ></input>
                          </div>
                          <div>
                            <h1 className="text-sm font-semibold">
                              Decreases Duration
                            </h1>
                          </div>
                        </label>
                      </div>
                    </div>
                    {/*  */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="PriceDuration"
                        className="text-sm font-bold"
                      >
                        {increasesPriceRadio === true
                          ? "Increases price by"
                          : decreasesPriceRadio === true
                          ? "Decreases price by"
                          : ""}
                      </label>
                      <input
                        id="PriceDuration"
                        type="text"
                        className="w-full border rounded-md px-4 py-1.5 focus-visible:outline-none"
                        placeholder="e.g. $10"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="flex flex-col gap-2">
                <label htmlFor="DateRange" className="text-sm font-bold">
                  Online Booking Name
                </label>
                <input
                  id="DateRange"
                  type="text"
                  className="w-full border rounded-md px-4 py-1.5 focus-visible:outline-none"
                  placeholder="e.g. Yes i do like to add luxe expenses"
                />
                <span className="text-xs text-gray-500">
                  This will be displayed to clients during the online booking
                  customizations step, if empty the option name will be used
                </span>
              </div>
            </div>
            {/* Buttons */}
            <div className="flex justify-center items-center gap-4 mt-10">
              <button
                className="px-4 py-2 border-2 border-tatto-dark-blue rounded-lg text-tatto-dark-blue font-semibold"
                onClick={() => setAddOptionsModal(false)}
              >
                Cancel
              </button>
              <button className="px-4 py-2 border-2 border-tatto-dark-blue rounded-lg bg-tatto-dark-blue font-semibold text-white">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customizations;
