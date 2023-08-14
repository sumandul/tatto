"use client";
import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
const SelectDrodown = dynamic(()=>import("@/app/components/SelectDropdown"),{
  ssr:false
})
const AmountCalcInput = dynamic(()=>import("@/app/components/AmountCalcInput"),{
  ssr:false
})

const Details = () => {
  const [edit, setEdit] = useState(false);

  const [serviceAdded, setServiceAdded] = useState(false);

  const [hasProcessingTime, setHasProcessingTime] = useState(false);
  const [hasBufferTime, setHasBufferTime] = useState(false);
  const [twoStaffMembers, setTwoStaffMembers] = useState(false);

  const [showAONewCateForm, setShowAONewCateForm] = useState(false);

  const [precommissionDeduction, setPrecommissionDeduction] =
    useState("dollar");

  const [postcommissionDeduction, setPostcommissionDeduction] =
    useState("dollar");

  return (
    <div>
      <div className="basic__details__holder bg-white">
        <div className="bg-body-pink rounded-xl border overflow-hidden">
          <div className="flex justify-between px-4 py-2 bg-head-pink">
            <h1 className="font-bold self-center">Details</h1>
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
                  <label className="font-bold text-sm">Service Name</label>
                  <span className="text-sm font-semibold text-gray-500">
                    Nail Extensions
                  </span>
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex flex-col h-14 justify-between">
                  <label className="font-bold text-sm">Duration</label>
                  <span className="text-sm font-semibold text-gray-500">
                    45 minutes
                  </span>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="user__details flex mb-10 gap-5">
              <div className="w-1/2">
                <div className="flex flex-col h-14 justify-between">
                  <label className="font-bold text-sm">Processing Time</label>
                  <span className="text-sm font-semibold text-gray-500">
                    30 minutes
                  </span>
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex flex-col h-14 justify-between">
                  <label className="font-bold text-sm">Finishing Time</label>
                  <span className="text-sm font-semibold text-gray-500">
                    O minutes
                  </span>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="user__details flex mb-10 gap-5">
              <div className="w-1/2">
                <div className="flex flex-col h-14 justify-between">
                  <label className="font-bold text-sm">
                    Before Buffer Time
                  </label>
                  <span className="text-sm font-semibold text-gray-500">
                    15 minutes
                  </span>
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex flex-col h-14 justify-between">
                  <label className="font-bold text-sm">After Buffer Time</label>
                  <span className="text-sm font-semibold text-gray-500">
                    O minutes
                  </span>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="user__details flex mb-10 gap-5">
              <div className="w-1/2">
                <div className="flex flex-col h-14 justify-between">
                  <label className="font-bold text-sm">price</label>
                  <span className="text-sm font-semibold text-gray-500">
                    $75.00
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${edit === true ? `block` : `hidden`} bg-white h-full`}
          >
            <form action="" method="get">
              <div className="px-6 pt-4 bg-white border-b-2 flex flex-col gap-6">
                {/* Input Holder Div */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="ServiceName" className="text-sm font-bold">
                    Service Name
                  </label>
                  <input
                    type="text"
                    id="ServiceName"
                    className="w-1/2 h-10 border rounded-md px-4 py-1.5 focus-visible:outline-none"
                    placeholder="e.g Haircut"
                  />
                </div>
                {/* Select dropdown Holder Div */}
                <div className="flex flex-col gap-2 w-1/2">
                  <label htmlFor="Duration" className="text-sm font-bold">
                    Duration
                  </label>
                  <SelectDrodown
                    id={"Duration"}
                    placeholder={"Select"}
                    options={[
                      "15 minutes",
                      "30 minutes",
                      "45 minutes",
                      "1 hour",
                      "1 hour 15 minutes",
                    ]}
                  />
                </div>
                {/* Toggle Button with some extra content */}
                <div className="flex flex-col gap-6">
                  <label
                    htmlFor={"hasProcessingTime"}
                    className="flex gap-4 items-center cursor-pointer"
                  >
                    <div className="relative">
                      <input
                        type="checkbox"
                        id={"hasProcessingTime"}
                        checked={hasProcessingTime}
                        className="sr-only"
                        onChange={() =>
                          setHasProcessingTime(!hasProcessingTime)
                        }
                      />

                      <div
                        className={`block ${
                          !hasProcessingTime
                            ? `bg-tatto-disabled`
                            : `bg-tatto-dark-blue`
                        } w-11 h-6 rounded-full`}
                      ></div>

                      <div
                        className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition`}
                      ></div>
                    </div>
                    <span className="font-semibold text-sm">
                      Has processing time
                    </span>
                  </label>
                  {/*  */}
                  <div
                    className={`flex flex-col gap-2 w-1/2 ${
                      hasProcessingTime ? "visible" : "hidden"
                    }`}
                  >
                    <label
                      htmlFor="ProcessingTime"
                      className="text-sm font-bold"
                    >
                      Processing Time
                    </label>
                    <SelectDrodown
                      id={"ProcessingTime"}
                      placeholder={"Select"}
                      options={[
                        "15 minutes",
                        "30 minutes",
                        "45 minutes",
                        "1 hour",
                        "1 hour 15 minutes",
                      ]}
                    />
                  </div>
                  {/*  */}
                  <div
                    className={`flex flex-col gap-2 w-1/2 ${
                      hasProcessingTime ? "visible" : "hidden"
                    }`}
                  >
                    <label
                      htmlFor="FinishingTime"
                      className="text-sm font-bold"
                    >
                      Finishing Time
                    </label>
                    <SelectDrodown
                      id={"FinishingTime"}
                      placeholder={"Select"}
                      options={[
                        "15 minutes",
                        "30 minutes",
                        "45 minutes",
                        "1 hour",
                        "1 hour 15 minutes",
                      ]}
                    />
                  </div>
                </div>
                {/* Toggle Button with some extra content */}
                <div className="flex flex-col gap-6">
                  <label
                    htmlFor={"hasBufferTime"}
                    className="flex gap-4 items-center cursor-pointer"
                  >
                    <div className="relative">
                      <input
                        type="checkbox"
                        id={"hasBufferTime"}
                        checked={hasBufferTime}
                        className="sr-only"
                        onChange={() => setHasBufferTime(!hasBufferTime)}
                      />

                      <div
                        className={`block ${
                          !hasBufferTime
                            ? `bg-tatto-disabled`
                            : `bg-tatto-dark-blue`
                        } w-11 h-6 rounded-full`}
                      ></div>

                      <div
                        className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition`}
                      ></div>
                    </div>
                    <span className="font-semibold text-sm">
                      Has buffer time
                    </span>
                  </label>
                  {/*  */}
                  <div
                    className={`flex flex-col gap-2 w-1/2 ${
                      hasBufferTime ? "visible" : "hidden"
                    }`}
                  >
                    <label
                      htmlFor="BeforeBufferTime"
                      className="text-sm font-bold"
                    >
                      Before Buffer Time
                    </label>
                    <SelectDrodown
                      id={"BeforeBufferTime"}
                      placeholder={"Select"}
                      options={[
                        "15 minutes",
                        "30 minutes",
                        "45 minutes",
                        "1 hour",
                        "1 hour 15 minutes",
                      ]}
                    />
                  </div>
                  {/*  */}
                  <div
                    className={`flex flex-col gap-2 w-1/2 ${
                      hasBufferTime ? "visible" : "hidden"
                    }`}
                  >
                    <label
                      htmlFor="AfterBufferTime"
                      className="text-sm font-bold"
                    >
                      After Buffer Time
                    </label>
                    <SelectDrodown
                      id={"AfterBufferTime"}
                      placeholder={"Select"}
                      options={[
                        "15 minutes",
                        "30 minutes",
                        "45 minutes",
                        "1 hour",
                        "1 hour 15 minutes",
                      ]}
                    />
                  </div>
                </div>
                {/* Input Holder Div */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="price" className="text-sm font-bold">
                    Price
                  </label>
                  <input
                    type="number"
                    id="price"
                    className="w-1/2 h-10 border rounded-md px-4 py-1.5 focus-visible:outline-none"
                    placeholder="e.g. 50.00"
                  />
                </div>
                {/* Simple Toggle Button */}
                <label
                  htmlFor={"twoStaffMembers"}
                  className="flex gap-4 items-center cursor-pointer"
                >
                  <div className="relative">
                    <input
                      type="checkbox"
                      id={"twoStaffMembers"}
                      checked={twoStaffMembers}
                      className="sr-only"
                      onChange={() => setTwoStaffMembers(!twoStaffMembers)}
                    />

                    <div
                      className={`block ${
                        !twoStaffMembers
                          ? `bg-tatto-disabled`
                          : `bg-tatto-dark-blue`
                      } w-11 h-6 rounded-full`}
                    ></div>

                    <div
                      className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition`}
                    ></div>
                  </div>
                  <span className="font-semibold text-sm">
                    Has processing time
                  </span>
                </label>
                <div className="flex flex-col gap-6">
                  <span
                    className={`underline text-green-500 text-sm cursor-pointer text-left ml-14 ${
                      showAONewCateForm ? "hidden" : "visible"
                    }`}
                    onClick={() => setShowAONewCateForm(true)}
                  >
                    Additional Options
                  </span>
                  {/*  */}
                  <div
                    className={`${
                      showAONewCateForm ? "visible" : "hidden"
                    } flex flex-col gap-2`}
                  >
                    <label
                      htmlFor="Pre-commissionDeduction"
                      className="text-sm font-bold"
                    >
                      Pre-commission deduction
                    </label>
                    <AmountCalcInput
                      id={"Pre-commissionDeduction"}
                      active={precommissionDeduction}
                      placeHolder={"e.g $20"}
                      footText={
                        "Fees will be deducted before calculating the commission."
                      }
                      handleActive={(e) => setPrecommissionDeduction(e)}
                    />
                  </div>
                  {/*  */}
                  <div
                    className={`${
                      showAONewCateForm ? "visible" : "hidden"
                    } flex flex-col gap-2 `}
                  >
                    <label
                      htmlFor="Post-commissionDeduction"
                      className="text-sm font-bold"
                    >
                      postcommissionDeduction
                    </label>
                    <AmountCalcInput
                      id={"Post-commissionDeduction"}
                      active={postcommissionDeduction}
                      placeHolder={"e.g $20"}
                      footText={
                        "Fees will be deducted from the calculated commission."
                      }
                      handleActive={(e) => setPostcommissionDeduction(e)}
                    />
                  </div>
                </div>

                {/* Buttons */}
                <div className="border-t-2 flex flex-row justify-end gap-4 p-4">
                  <button className="px-6 py-2 border border-tatto-dark-blue text-tatto-dark-blue rounded-lg">
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-tatto-dark-blue text-white rounded-lg"
                    onClick={() => setServiceAdded(true)}
                  >
                    Create
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Footer */}
    </div>
  );
};

export default Details;
