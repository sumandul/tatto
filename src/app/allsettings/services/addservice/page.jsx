"use client";
import React, { useState } from "react";
// Components
import Image from "next/image";
import dynamic from "next/dynamic";

const SelectDrodown = dynamic(()=>import("../../../components//SelectDropdown"),{
  ssr:false
})
const AmountCalcInput = dynamic(()=>import("../../../components/AmountCalcInput"),{
  ssr:false
})
const  Staff = dynamic(()=>import("./staff/page"),{
  ssr:false
})
const Details = dynamic(()=>import("./details/page"),{
  ssr:false
})
const  Customizations = dynamic(()=>import("./customizations/page"),{
  ssr:false
})
const OnlineBooking = dynamic(()=>import("./onlinebooking/page"),{
  ssr:false
})
const AddService = () => {
  const [serviceAdded, setServiceAdded] = useState(false);

  const [contentPage, setContentPage] = useState("details");

  const [hasProcessingTime, setHasProcessingTime] = useState(false);
  const [hasBufferTime, setHasBufferTime] = useState(false);
  const [twoStaffMembers, setTwoStaffMembers] = useState(false);

  const [showAONewCateForm, setShowAONewCateForm] = useState(false);

  const [showDotList, setShowDotList] = useState(false);

  const [precommissionDeduction, setPrecommissionDeduction] =
    useState("dollar");

  const [postcommissionDeduction, setPostcommissionDeduction] =
    useState("dollar");

  return (
    <div>
      {!serviceAdded ? (
        <div className="basic__details__holder bg-white">
          <div className="bg-body-pink rounded-xl border overflow-hidden">
            <div className="flex justify-between px-4 py-2 bg-head-pink">
              <h1 className="font-bold self-center">New Category</h1>
            </div>
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
                      onChange={() => setHasProcessingTime(!hasProcessingTime)}
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
                  <label htmlFor="ProcessingTime" className="text-sm font-bold">
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
                  <label htmlFor="FinishingTime" className="text-sm font-bold">
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
                  <span className="font-semibold text-sm">Has buffer time</span>
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
          </div>
        </div>
      ) : (
        <div>
          <div className="relative flex justify-between items-center flex-row gap-6 pb-5 pt-1 border-b-2">
            <div>
              <span className="text-sm text-gray-500">Nail Art</span>
              <h1 className="text-xl font-bold">Nail Art</h1>
            </div>
            <div className="relative right-0">
              <div className="relative">
                <ul
                  onClick={() => setShowDotList(!showDotList)}
                  className={`relative right-0 dots flex gap-1 border p-4 cursor-pointer rounded-md border-tatto-dark-blue ${
                    showDotList ? "bg-tatto-dark-blue" : "bg-tatto-light-blue"
                  } `}
                >
                  <li
                    className={`w-1 h-1 rounded-xl ${
                      showDotList ? "bg-white" : "bg-tatto-dark-blue"
                    } `}
                  ></li>
                  <li
                    className={`w-1 h-1 rounded-xl ${
                      showDotList ? "bg-white" : "bg-tatto-dark-blue"
                    } `}
                  ></li>
                  <li
                    className={`w-1 h-1 rounded-xl ${
                      showDotList ? "bg-white" : "bg-tatto-dark-blue"
                    } `}
                  ></li>
                </ul>
                {/* Under List Links */}
                <ul
                  className={` ${
                    showDotList ? "visible" : "hidden"
                  } z-10 px-4 py-2 rounded-md absolute right-0 top-12 bg-white shadow-md w-40`}
                  style={{
                    boxShadow: "0px 0px 2px 0px darkgray",
                  }}
                >
                  <li className="py-1 text-xs cursor-pointer">Delete</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Staff Page Navigation */}
          <div className="flex flex-row gap-4">
            {/* Nav Bar */}
            <div className="w-1/5 py-4">
              <ul className="flex flex-col gap-6">
                {/* Details */}
                <li
                  className="flex items-center gap-4 cursor-pointer"
                  onClick={() => setContentPage("details")}
                >
                  <div>
                    <Image
                      className="w-4"
                      src={
                        contentPage == "details"
                          ? `/png_icons/business_side_icons/notes-active.png`
                          : `/png_icons/business_side_icons/notes.png`
                      }
                      alt=""
                      width={20}
                      height={20}
                    />
                  </div>
                  <span
                    className={`text-sm ${
                      contentPage == "details"
                        ? "text-tatto-dark-blue font-bold"
                        : "text-gray-500"
                    }`}
                  >
                    Details
                  </span>
                </li>
                {/* staff */}
                <li
                  className="flex items-center gap-4 cursor-pointer"
                  onClick={() => setContentPage("staff")}
                >
                  <div>
                    <Image
                      width={40}
                      height={40}
                      className="w-4"
                      src={
                        contentPage == "staff"
                          ? "/png_icons/services_side/staff-active.png"
                          : "/png_icons/services_side/staff.png"
                      }
                      alt=""
                    />
                  </div>
                  <span
                    className={`text-sm ${
                      contentPage == "staff"
                        ? "text-tatto-dark-blue font-bold"
                        : "text-gray-500"
                    }`}
                  >
                    Staff
                  </span>
                </li>
                {/* Customizations */}
                <li
                  className="flex items-center gap-4 cursor-pointer"
                  onClick={() => setContentPage("customizations")}
                >
                  <div>
                    <Image
                      width={40}
                      height={40}
                      className="w-4"
                      src={
                        contentPage == "customizations"
                          ? "/png_icons/services_side/customizations-active.png"
                          : "/png_icons/services_side/customizations.png"
                      }
                      alt=""
                    />
                  </div>
                  <span
                    className={`text-sm ${
                      contentPage == "customizations"
                        ? "text-tatto-dark-blue font-bold"
                        : "text-gray-500"
                    }`}
                  >
                    Customizations
                  </span>
                </li>
                {/* Online Booking */}
                <li
                  className="flex items-center gap-4 cursor-pointer"
                  onClick={() => setContentPage("onlineBooking")}
                >
                  <div>
                    <Image
                      width={40}
                      height={40}
                      className="w-4"
                      src={
                        contentPage == "onlineBooking"
                          ? "/png_icons/services_side/online-booking-active.png"
                          : "/png_icons/services_side/online-booking.png"
                      }
                      alt=""
                    />
                  </div>
                  <span
                    className={`text-sm ${
                      contentPage == "onlineBooking"
                        ? "text-tatto-dark-blue font-bold"
                        : "text-gray-500"
                    }`}
                  >
                    Online Booking
                  </span>
                </li>
              </ul>
            </div>
            {/* Content Side */}
            <div className="w-4/5 pt-4">
              {contentPage === "details" ? (
                <Details />
              ) : contentPage === "staff" ? (
                <Staff />
              ) : contentPage === "customizations" ? (
                <Customizations />
              ) : contentPage === "onlineBooking" ? (
                <OnlineBooking />
              ) : (
                "Page is Not Find"
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddService;
