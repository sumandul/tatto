"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { FiChevronDown, FiChevronRight, FiX } from "react-icons/fi";
// Pagse
import Details from "./staffprofile/details/page";
import Locations from "./staffprofile/locations/page";
import Notifications from "./staffprofile/notification/page";
import Permissions from "./staffprofile/permissions/page";
import Services from "./staffprofile/services/page";
import WorkHours from "./staffprofile/workhours/page";
import Compensation from "./staffprofile/compensation/page";
import Header from "@/app/partails/Header";

import { useRouter } from "next/navigation";
import SelectDrodown from "@/app/components/SelectDropdown";


const StaffMembers = ({ children }) => {
  const router = useRouter();
  const [staffPages, setStaffPages] = useState(false);
  const [addStaff, setAddStaff] = useState(false);
  const [showDotList, setShowDotList] = useState(false);
  const [SelectedLocation, setSelectedLocation] = useState("All locations");

  let [contentPage, setContentPage] = useState("details");

  const [isProviderChecked, setIsProviderCheck] = useState(true);
  const [isOnlineBooking, setIsOnlineBooking] = useState(true);
  const [isCardOnlineBooking, setIsCardOnlineBooking] = useState(true);

  const [sendInviteModal, setSendInviteModal] = useState(false);

  const [mobileLocation, setMobileLocation] = useState("Katewil");
  const [selectLocationModal, setSelectLocationModal] = useState(false);
  const locationsList = ["USA", "UEA", "Russia", "Pakistan", "India"];

  // this is List of Staff You can remove this code after when you pass Staff list from Controller this is just for test
  const StaffMembersList = [
    {
      dp: "/png_icons/staff_members_dp/1.png",
      name: "Pam Beesly",
      accountVerified: false,
    },
    {
      dp: "/png_icons/staff_members_dp/2.png",
      name: "Jim Halpert",
      accountVerified: true,
    },
    {
      dp: "/png_icons/staff_members_dp/3.png",
      name: "Erin Hannon",
      accountVerified: true,
    },
    {
      dp: "/png_icons/staff_members_dp/4.png",
      name: "Michael Scott",
      accountVerified: false,
    },
    {
      dp: "/png_icons/staff_members_dp/5.png",
      name: "Angela Martin",
      accountVerified: true,
    },
    {
      dp: "/png_icons/staff_members_dp/6.png",
      name: "Dwight Schrute",
      accountVerified: false,
    },
    {
      dp: "/png_icons/staff_members_dp/7.png",
      name: "Andy Bernard",
      accountVerified: true,
    },
  ];

  const addStaffMember = (e) => {
    e.preventDefault();
    setSendInviteModal(true);
  };

  const editStaffMember = () => {
    console.log("Edit Staff");
  };

  return (
    <>
      <Header headerType={""} />

      {/* Mobile Header */}
      <div
        className={`bg-tatto-dark-blue h-16 flex sm:hidden  justify-between items-center px-6 py-4 rounded-lg `}
      >
        <>
          {/* Back Button */}
          <div className="w-20">
            <div>
              <Image
                className="w-5"
                src="/png_icons/back-arrow.png"
                alt="back arrow icon"
                width={40}
                height={40}
              />
            </div>
          </div>
          {/* Page Title */}
          <div className="w-full text-center">
            <h1 className="text-1xl font-bold text-white">Staff Members</h1>
          </div>
          {/* SIde */}
          <div className="w-24 flex justify-end">
            <div className="relative">
              <Link href={"staffmembers/addstaffmember"}>
                <Image
                  width={40}
                  height={40}
                  src="/png_icons/add-white.png"
                  className="w-6"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </>
      </div>
      {/* Mobile Header end */}

      {/* location Dropdown plus Modal */}
      <div
        className="flex justify-end py-3 sm:hidden"
        onClick={() => setSelectLocationModal(true)}
      >
        <span className="bg-tatto-dark-blue flex gap-1 w-fit text-white px-4 py-1 items-center rounded-full font-bold">
          Location: <p className="font-normal">{mobileLocation}</p>{" "}
          <FiChevronDown className="text-xl" />
        </span>
      </div>

      <div className="container mx-auto">
        <div className="sm:m-auto mt-2 content w-full sm:w-11-13">
          <div className="items-center my-4 text-sm text-gray-500 dir__path hidden sm:flex">
            {" "}
            <Link href="/allsettings"> All Settings </Link>
            <FiChevronRight className="mx-3" /> Staff Members
          </div>
          <div className="flex gap-6 bussiness__setup__holder">
            <div className="sticky flex flex-col w-full sm:w-1/4 h-full gap-4 bg-transparent top-10">
              {/*  */}
              <div className="flex-col rounded-xl hidden sm:flex">
                <div className="flex px-5 py-6 rounded-xl bg-mid-gray">
                  <div className="mr-4">
                    <Image
                      className="w-20"
                      src="/png_icons/all_settings_icons/staff.png"
                      alt=""
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="">
                    <h1 className="mb-2 text-xl font-semibold">
                      Staff Members
                    </h1>
                    <span className="text-gray-500">
                      Staff details, schedules, permissions, compensation, and
                      more
                    </span>
                  </div>
                </div>
                {/* this is location select dropdown div */}
                <div className="flex flex-row items-center gap-4 px-5 py-4">
                  <label
                    htmlFor="selectLocation"
                    className="flex font-semibold text-md"
                  >
                    Location <p className="ml-1">:</p>
                  </label>
                  <SelectDrodown
                    options={[
                      "All Locations",
                      "Other Location",
                      "Other Location",
                    ]}
                    handleOnChange={(val) => setSelectedLocation(val)}
                    value={SelectedLocation}
                  />
                </div>
              </div>
              {/* this is staff members list section  */}
              <div className="sm:px-6 bg-white rounded-2xl shadow-md sm:rounded-lg">
                <div className="staff_members_list">
                  <div className="py-4 border-b-2 hidden sm:block">
                    <h1 className="font-bold text-md">Staff Members</h1>
                  </div>
                  <div className="sm:py-4 staff_members_list ">
                    <ul className="sm:overflow-y-scroll sm:h-72 sm:custom-scrollbar">
                      {StaffMembersList.map((member, index) => {
                        return (
                          <li
                            key={index}
                            className="p-4 sm:p-0 sm:pb-4 flex justify-between items-center border-b last:border-b-0 sm:block sm:border-b-0"
                          >
                            <div className="flex items-center gap-4">
                              <div>
                                <Image
                                  className="w-12 sm:w-8"
                                  src={member.dp}
                                  alt="Profile dp"
                                  width={40}
                                  height={40}
                                />
                              </div>
                              <div>
                                <h1 className="font-semibold sm:font-normal">
                                  {member.name}
                                </h1>
                              </div>
                              <div>
                                {!member.accountVerified ? (
                                  <div className="bg-tatto-orange text-sm py-0.5 px-1.5 rounded-2xl text-white">
                                    Demo
                                  </div>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                            <div className="block sm:hidden">
                              <FiChevronRight className="text-3xl" />
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="w-3/4 h-full overflow-hidden hidden sm:block ">
              {/*  */}
              <div className="flex items-center justify-between px-6 py-4 bg-white rounded-t-xl border-b">
                <h1 className="font-extrabold text-gray-800 text-md">
                  Manage your staff
                </h1>
                <button
                  onClick={() => setAddStaff(true)}
                  className="bg-tatto-dark-blue text-white flex justify-around items-center gap-2 text-sm rounded-md px-4 py-1.5"
                >
                  <Image
                    width={40}
                    height={40}
                    className="w-4"
                    src="/png_icons/add-white.png"
                    alt=""
                  />{" "}
                  Add Staff Member
                </button>
              </div>
              <div
                className=" basic__details__holder"
                style={{ minHeight: "35rem", height: "auto" }}
              >
                {!staffPages ? (
                  !addStaff ? (
                    <div
                      className="flex items-center justify-center w-full h-full rounded-b-xl bg-white"
                      style={{ height: "35rem" }}
                    >
                      <span className="text-center text-gray-500">
                        You can create new staff members or change the details,
                        <br />
                        services and work hours of existing staff members.
                      </span>
                    </div>
                  ) : (
                    <div className="px-6 pb-4 bg-white pt-4 rounded-b-xl">
                      <div className="bg-white basic__details__holder">
                        <div className="overflow-hidden bg-body-pink border rounded-xl">
                          <div className="flex justify-between px-4 py-2 bg-head-pink">
                            <h1 className="self-center font-bold">
                              New Staff Member
                            </h1>
                          </div>
                          {/* this is add staff form */}
                          <div
                            className={`px-6 pt-4 bg-white overflow-y-scroll custom-scrollbar`}
                          >
                            <form
                              action=""
                              className="flex flex-col gap-4"
                              onSubmit={addStaffMember}
                            >
                              {/* First Name */}
                              <div className="flex flex-col w-1/2 gap-2">
                                <label
                                  htmlFor="firstName"
                                  className="pl-1 text-sm font-bold"
                                >
                                  First Name
                                </label>
                                <input
                                  type="text"
                                  className="w-full h-8 px-3 py-4 border-2 rounded-md focus-visible:outline-none"
                                  id="firstName"
                                />
                              </div>
                              {/* Last Name */}
                              <div className="flex flex-col w-1/2 gap-2">
                                <label
                                  htmlFor="lastName"
                                  className="pl-1 text-sm font-bold"
                                >
                                  Last Name
                                </label>
                                <input
                                  type="text"
                                  className="w-full h-8 px-3 py-4 border-2 rounded-md focus-visible:outline-none"
                                  id="lastName"
                                />
                              </div>
                              {/* Email */}
                              <div className="flex flex-col w-1/2 gap-2">
                                <label
                                  htmlFor="email"
                                  className="pl-1 text-sm font-bold"
                                >
                                  Email
                                </label>
                                <input
                                  type="email"
                                  className="w-full h-8 px-3 py-4 border-2 rounded-md focus-visible:outline-none"
                                  id="email"
                                />
                              </div>
                              {/* Phone */}
                              <div className="flex flex-col w-1/2 gap-2">
                                <label
                                  htmlFor="phone"
                                  className="pl-1 text-sm font-bold"
                                >
                                  Phone
                                </label>
                                <input
                                  type="text"
                                  className="w-full h-8 px-3 py-4 border-2 rounded-md focus-visible:outline-none"
                                  id="phone"
                                />
                              </div>
                              {/* user type */}
                              <div className="flex flex-col w-1/2 gap-2">
                                <label
                                  htmlFor="userType"
                                  className="pl-1 text-sm font-bold"
                                >
                                  User Type
                                </label>
                                <select
                                  name=""
                                  id="userType"
                                  className="w-full h-10 px-2 border rounded-md focus-visible:outline-none"
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
                                      className="flex items-center gap-5 cursor-pointer"
                                    >
                                      <div className="relative">
                                        <input
                                          type="checkbox"
                                          id="isProvider"
                                          checked={isProviderChecked}
                                          className="sr-only"
                                          onChange={() =>
                                            setIsProviderCheck(
                                              !isProviderChecked
                                            )
                                          }
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
                                            onChange={() =>
                                              setIsOnlineBooking(
                                                !isOnlineBooking
                                              )
                                            }
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
                                  <div
                                    className={`${
                                      isOnlineBooking ? "visible" : "hidden"
                                    }`}
                                  >
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
                                              setIsCardOnlineBooking(
                                                !isCardOnlineBooking
                                              )
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
                                      Turn off this setting if you don&apos;t
                                      want to collect credit cards for services
                                      booked with this staff member online.
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Gander Select */}
                              <div className="flex flex-col w-1/2 gap-2">
                                <label
                                  htmlFor="gender"
                                  className="pl-1 text-sm font-bold"
                                >
                                  Gender
                                </label>
                                <select
                                  name=""
                                  id="gender"
                                  className="w-full h-10 px-2 border rounded-md focus-visible:outline-none"
                                >
                                  <option value="Male">Male</option>
                                  <option value="Female">Female</option>
                                  <option value="Non-binary">Non-binary</option>
                                </select>
                              </div>
                              {/* BUttons Section */}
                              <div className="flex flex-row justify-end gap-4 p-4 border-t-2">
                                <button
                                  className="px-6 py-2 border rounded-lg border-tatto-dark-blue text-tatto-dark-blue"
                                  onClick={() => setAddStaff(false)}
                                >
                                  Cancel
                                </button>
                                <button
                                  type="submit"
                                  className="px-6 py-2 text-white rounded-lg bg-tatto-dark-blue"
                                >
                                  Create
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                ) : (
                  <div className="pb-4">
                    {/* this is Staff Profile viwer page */}
                    <div>
                      {/* Staff Profile card Header */}
                      <div className="relative pt-4 border-b-2 px-6 bg-white rounded-b-xl">
                        <div className="flex flex-row pb-4 gap-6">
                          <div>
                            {/* Staff DP */}
                            <div>
                              <Image
                                className="w-24"
                                src="/png_icons/staff_members_dp/default.png"
                                alt=""
                                width={40}
                                height={40}
                              />
                            </div>
                          </div>
                          {/* Staff Profile Details */}
                          <div className="flex flex-col justify-center">
                            {/* Staff Name */}
                            <div>
                              <h1 className="text-xl font-extrabold">
                                Peter Parker
                              </h1>
                            </div>
                            {/* staff Invited or not line */}
                            <div className="flex flex-row text-sm">
                              <span className="pr-2 mr-2 text-gray-500 border-r-2">
                                Not invited yet
                              </span>
                              <span>
                                <Link
                                  href={"#"}
                                  className="font-semibold text-green-500 underline"
                                >
                                  Send Invite
                                </Link>
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* Dots */}
                        <div className="absolute right-4 top-4">
                          <div className="relative">
                            <ul
                              onClick={() => setShowDotList(!showDotList)}
                              className={`absolute right-0 dots flex gap-1 border p-4 cursor-pointer rounded-md border-tatto-dark-blue ${
                                showDotList
                                  ? "bg-tatto-dark-blue"
                                  : "bg-tatto-light-blue"
                              } `}
                            >
                              <li
                                className={`w-1 h-1 rounded-xl ${
                                  showDotList
                                    ? "bg-white"
                                    : "bg-tatto-dark-blue"
                                } `}
                              ></li>
                              <li
                                className={`w-1 h-1 rounded-xl ${
                                  showDotList
                                    ? "bg-white"
                                    : "bg-tatto-dark-blue"
                                } `}
                              ></li>
                              <li
                                className={`w-1 h-1 rounded-xl ${
                                  showDotList
                                    ? "bg-white"
                                    : "bg-tatto-dark-blue"
                                } `}
                              ></li>
                            </ul>
                            {/* Under List Links */}
                            <ul
                              className={` ${
                                showDotList ? "visible" : "hidden"
                              } z-10 px-4 py-2 rounded-lg absolute right-0 top-12 bg-white shadow-md w-40`}
                              style={{
                                boxShadow: "0px 0px 2px 0px darkgray",
                              }}
                            >
                              <li className="py-2 text-xs border-b cursor-pointer">
                                Archive
                              </li>
                              <li className="py-2 text-xs cursor-pointer">
                                Change Password
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* Navigations */}
                        <div className="w-full">
                          <ul className="flex flex-row gap-6">
                            {/* Details */}
                            <li
                              className={`flex items-center gap-4 cursor-pointer border-b-2 ${
                                contentPage === "details"
                                  ? "border-tatto-dark-blue"
                                  : "border-transparent"
                              }`}
                              onClick={() => setContentPage("details")}
                            >
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
                            {/* Locations */}
                            <li
                              className={`flex items-center gap-4 cursor-pointer border-b-2
                                ${
                                  contentPage === "locations"
                                    ? "border-tatto-dark-blue"
                                    : "border-transparent"
                                }`}
                              onClick={() => setContentPage("locations")}
                            >
                              <span
                                className={`text-sm ${
                                  contentPage == "locations"
                                    ? "text-tatto-dark-blue font-bold"
                                    : "text-gray-500"
                                }`}
                              >
                                Locations
                              </span>
                            </li>
                            {/* Notification Link */}
                            <li
                              className={`flex items-center gap-4 cursor-pointer border-b-2
                                                            ${
                                                              contentPage ===
                                                              "notifications"
                                                                ? "border-tatto-dark-blue"
                                                                : "border-transparent"
                                                            }
                                                            `}
                              onClick={() => setContentPage("notifications")}
                            >
                              <span
                                className={`text-sm ${
                                  contentPage == "notifications"
                                    ? "text-tatto-dark-blue font-bold"
                                    : "text-gray-500"
                                }`}
                              >
                                Notification
                              </span>
                            </li>
                            {/* permissions Link */}
                            <li
                              className={`flex items-center gap-4 cursor-pointer border-b-2
                                                            ${
                                                              contentPage ===
                                                              "permissions"
                                                                ? "border-tatto-dark-blue"
                                                                : "border-transparent"
                                                            }
                                                            `}
                              onClick={() => setContentPage("permissions")}
                            >
                              <span
                                className={`text-sm ${
                                  contentPage == "permissions"
                                    ? "text-tatto-dark-blue font-bold"
                                    : "text-gray-500"
                                }`}
                              >
                                Permissions
                              </span>
                            </li>
                            {/* Services Link */}
                            <li
                              className={`flex items-center gap-4 cursor-pointer border-b-2
                                                            ${
                                                              contentPage ===
                                                              "services"
                                                                ? "border-tatto-dark-blue"
                                                                : "border-transparent"
                                                            }
                                                            `}
                              onClick={() => setContentPage("services")}
                            >
                              <span
                                className={`text-sm ${
                                  contentPage == "services"
                                    ? "text-tatto-dark-blue font-bold"
                                    : "text-gray-500"
                                }`}
                              >
                                Services
                              </span>
                            </li>
                            {/* Work Hours Link */}
                            <li
                              className={`flex items-center gap-4 cursor-pointer border-b-2
                                                            ${
                                                              contentPage ===
                                                              "workhours"
                                                                ? "border-tatto-dark-blue"
                                                                : "border-transparent"
                                                            }
                                                            `}
                              onClick={() => setContentPage("workhours")}
                            >
                              <span
                                className={`text-sm ${
                                  contentPage == "workhours"
                                    ? "text-tatto-dark-blue font-bold"
                                    : "text-gray-500"
                                }`}
                              >
                                Work Hours
                              </span>
                            </li>
                            {/* Compensation Link */}
                            <li
                              className={`flex items-center gap-4 cursor-pointer border-b-2
                                                            ${
                                                              contentPage ===
                                                              "compensation"
                                                                ? "border-tatto-dark-blue"
                                                                : "border-transparent"
                                                            }
                                                            `}
                              onClick={() => setContentPage("compensation")}
                            >
                              <span
                                className={`text-sm ${
                                  contentPage == "compensation"
                                    ? "text-tatto-dark-blue font-bold"
                                    : "text-gray-500"
                                }`}
                              >
                                Compensation
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* Staff Page Navigation */}
                      <div className="flex flex-row gap-4 bg-transparent px-6">
                        {/* Content Side */}
                        <div className="w-full pt-4">
                          {contentPage === "details" ? (
                            <Details editStaffMember={editStaffMember} />
                          ) : contentPage === "locations" ? (
                            <Locations />
                          ) : contentPage === "notifications" ? (
                            <Notifications />
                          ) : contentPage === "permissions" ? (
                            <Permissions />
                          ) : contentPage === "services" ? (
                            <Services />
                          ) : contentPage === "workhours" ? (
                            <WorkHours />
                          ) : contentPage === "compensation" ? (
                            <Compensation />
                          ) : (
                            "Page is Not Find"
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* send invite Modal */}
        <div
          className={`w-full h-full fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center ${
            sendInviteModal ? "visible" : "hidden"
          }`}
          style={{ background: "#00000090" }}
        >
          {/* Modal Inner */}
          <div className="w-2/5 bg-white rounded-lg">
            {/* Modal Head */}
            <div className="border-b-2">
              <div className="px-6 py-5">
                <h1 className="text-lg font-extrabold">Send Invite</h1>
              </div>
            </div>
            {/* Modal Body */}
            <div className="px-6 py-4">
              {/* Body */}
              <div className="flex flex-col gap-4">
                <span className="font-semibold text-md">
                  Do you want to send an invite to peter01@gmail.com?
                </span>
                <span className="font-semibold text-md">
                  This will also allow Peter Parker to create a login for
                  TattooAdmin
                </span>
              </div>
              {/* Buttons */}
              <div className="flex items-center justify-center gap-4 mt-10">
                <button
                  className="px-4 py-2 font-semibold border-2 rounded-lg border-tatto-dark-blue text-tatto-dark-blue"
                  onClick={() => {
                    setStaffPages(true);
                    setSendInviteModal(false);
                  }}
                >
                  Not Now
                </button>
                <button
                  className="px-4 py-2 font-semibold text-white border-2 rounded-lg border-tatto-dark-blue bg-tatto-dark-blue"
                  onClick={() => {
                    setStaffPages(true);
                    setSendInviteModal(false);
                  }}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* select location Modal mobile */}
      <div
        className={`w-full h-full fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-40 ${
          selectLocationModal ? "visible" : "hidden"
        }`}
        style={{ background: "#00000090" }}
      >
        <div className="w-11/12 bg-white rounded-2xl p-3">
          {/* Modal Head */}
          <div className="flex justify-between pt-1 pb-4 items-center">
            {/* Title */}
            <div className="text-md font-semibold">
              <h1>Select location</h1>
            </div>
            {/* close button */}
            <div onClick={() => setSelectLocationModal(false)}>
              <FiX className="text-2xl" />
            </div>
          </div>
          {/* Modal Body */}
          <div className="px-4 py-4 border rounded-2xl">
            {/* Body */}
            <div className="">
              {/*  */}
              <div className="flex flex-col gap-2">
                {locationsList.map((location, idx) => {
                  return (
                    <div key={idx}>
                      <label
                        htmlFor={location}
                        className="flex items-center gap-2"
                      >
                        <input
                          type="radio"
                          className="appearance-none"
                          name="weekname"
                          id={location}
                          onChange={(e) => {
                            setSelectLocationModal(false);
                            setMobileLocation(location);
                          }}
                        />
                        <div
                          className={`w-5 h-5 rounded-full overflow-hidden ${
                            mobileLocation === location ? "" : "border"
                          }`}
                        >
                          <Image
                            className="w-full"
                            src={`${
                              mobileLocation === location
                                ? "/png_icons/check.png"
                                : "/png_icons/white.jpg"
                            } `}
                            alt=""
                            width={40}
                            height={40}
                          />
                        </div>
                        <span>{location}</span>
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffMembers;
