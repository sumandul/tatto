"use client";
import Link from "next/link";
import React, { useState } from "react";
import {  BsTelephone, BsThreeDots } from "react-icons/bs";
import { FiChevronDown,  FiSearch, FiX } from "react-icons/fi";
import { LuSettings2 } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { MdOutlineWatchLater } from "react-icons/md";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import dynamic from "next/dynamic";
const AddClientSlide = dynamic(()=>import("./components/AddClientSlide"),{
  ssr:false
})
const Header = dynamic(()=>import("@/app/partails/Header"),{
  ssr:false
})

const tableData = [
  {
    headings: ["Client name", "Contact", "Status", "last apointment"],
  },
  {
    clientData: [
      {
        img: "/png_icons/staff_members_dp/1.png",
        name: "Darlene Robertson",
        since: "Client since July 2023",
        profileStatus: "Demo",
        email: "bill.sanders/@example.com",
        phone: "(907) 555-0101",
        Status: "PENDING ENQUIRY",
        lastApointment: "13 d. ago",
      },
      {
        img: "/png_icons/staff_members_dp/1.png",
        name: "Darlene Robertson",
        since: "Client since July 2023",
        profileStatus: "Demo",
        email: "bill.sanders/@example.com",
        phone: "(907) 555-0101",
        Status: "Confirmed",
        lastApointment: "13 d. ago",
      },
      {
        img: "/png_icons/staff_members_dp/1.png",
        name: "Darlene Robertson",
        since: "Client since July 2023",
        profileStatus: "Demo",
        email: "bill.sanders/@example.com",
        phone: "(907) 555-0101",
        Status: "Unconfirmed",
        lastApointment: "13 d. ago",
      },
      {
        img: "/png_icons/staff_members_dp/1.png",
        name: "Darlene Robertson",
        since: "Client since July 2023",
        profileStatus: "Demo",
        email: "bill.sanders/@example.com",
        phone: "(907) 555-0101",
        Status: "Waiting",
        lastApointment: "13 d. ago",
      },
      {
        img: "/png_icons/staff_members_dp/1.png",
        name: "Darlene Robertson",
        since: "Client since July 2023",
        profileStatus: "Demo",
        email: "bill.sanders/@example.com",
        phone: "(907) 555-0101",
        Status: "In Service",
        lastApointment: "13 d. ago",
      },
      {
        img: "/png_icons/staff_members_dp/1.png",
        name: "Darlene Robertson",
        since: "Client since July 2023",
        profileStatus: "Demo",
        email: "bill.sanders/@example.com",
        phone: "(907) 555-0101",
        Status: "In Service",
        lastApointment: "13 d. ago",
      },
      {
        img: "/png_icons/staff_members_dp/1.png",
        name: "Darlene Robertson",
        since: "Client since July 2023",
        profileStatus: "Demo",
        email: "bill.sanders/@example.com",
        phone: "(907) 555-0101",
        Status: "In Service",
        lastApointment: "13 d. ago",
      },
      {
        img: "/png_icons/staff_members_dp/1.png",
        name: "Darlene Robertson",
        since: "Client since July 2023",
        profileStatus: "Demo",
        email: "bill.sanders/@example.com",
        phone: "(907) 555-0101",
        Status: "In Service",
        lastApointment: "13 d. ago",
      },
      {
        img: "/png_icons/staff_members_dp/1.png",
        name: "Darlene Robertson",
        since: "Client since July 2023",
        profileStatus: "Demo",
        email: "bill.sanders/@example.com",
        phone: "(907) 555-0101",
        Status: "Waiting",
        lastApointment: "13 d. ago",
      },
      {
        img: "/png_icons/staff_members_dp/1.png",
        name: "Darlene Robertson",
        since: "Client since July 2023",
        profileStatus: "Demo",
        email: "bill.sanders/@example.com",
        phone: "(907) 555-0101",
        Status: "Waiting",
        lastApointment: "13 d. ago",
      },
    ],
  },
];

const StatusShowCard = ({ text }) => {
  return (
    <div
      className={`text-xs rounded-full  py-1 px-2 w-36 text-center  ${
        text === "PENDING ENQUIRY"
          ? "bg-[#F8F1CB] text-[#A78658]"
          : text === "Confirmed"
          ? "bg-[#F8F1CB] text-[#A78658]"
          : text === "Unconfirmed"
          ? "bg-[#9DDDE0] text-[#4E787A]"
          : text === "Waiting"
          ? "bg-[#F8F1CB] text-[#A78658]"
          : text === "In Service"
          ? "bg-[#9DDDE0] text-[#4E787A]"
          : ""
      }`}
    >
      {text}
    </div>
  );
};

const Clients = () => {
  const [addFormStatus, setAddFormStatus] = useState(false);

  // Dot list
  const [showDotList, setShowDotList] = useState(false);
  // SideModal name
  const [sideModalFrom, setSideModalFrom] = useState("");
  // Still open Sidebar Detailing Section
  const [sidebarDetailing, setSidebarDetailing] = useState(true);
  // Mobile Filter Modal
  const [mobileFilter, setMobileFilter] = useState(false);
  // wanna save changes popup
  const [wannaSaveChangesPopup, setWannaSaveChangesPopup] = useState(false);
  return (
    <>
      <Header headerType={"underLinks"} />
      {/* Mobile Header */}
      <div
        className={`bg-tatto-dark-blue h-16 grid grid-cols-2 sm:hidden justify-between items-center px-4 py-4 rounded-lg `}
      >
        <>
          {/* Page Title */}
          <div className=" text-left">
            <h1 className="text-xl font-bold text-white flex gap-2 items-center">
              <span className="font-normal">
                {tableData[1].clientData.length}
              </span>
              Clients
            </h1>
          </div>
          {/* SIde */}
          <div className="flex justify-end">
            <div className="w-32 bg-white gap-2  px-1 py-1 rounded-full flex items-center">
              <Image
                src="/png_icons/staff_members_dp/1.png"
                className="w-6"
                alt=""
                width={40}
                height={40}
              />
              <h1 className="text-xs whitespace-nowrap overflow-hidden text-ellipsis">
                SomeOneisHere
              </h1>
              <FiChevronDown className="text-2xl" />
            </div>
          </div>
        </>
      </div>
      {/* Main Content */}
      <div className={`container mx-auto mt-6 `}>
        {/* Mobile Search Bar */}
        <div className="relative mb-5 sm:hidden flex justify-between items-center">
          {/* Search Icon */}
          <div className="z-10 ml-2">
            <Image
              className="w-8"
              src={"/png_icons/search-icon-circle.png"}
              width={20}
              height={20}
              alt=""
            />
          </div>
          {/* Search input */}
          <div className="w-full absolute">
            <input
              type="text"
              className="w-full pl-14 pr-28 py-3 border rounded-lg focus-visible:outline-none"
              placeholder="Search..."
            />
          </div>
          {/* filter button */}
          <div className="z-10 mr-2">
            <button
              className="border-tatto-dark-blue border flex gap-2 items-center rounded-md px-3 py-0.5"
              onClick={() => setMobileFilter(true)}
            >
              <span>Filters</span>
              <LuSettings2 />
            </button>
          </div>
        </div>
        <div className="bg-white rounded-xl sm:rounded-lg">
          {/* Header */}
          <div className="hidden sm:grid grid-cols-2 items-center px-6 py-4 border-b-2">
            {/* Card Title */}
            <div>
              <h1 className="text-xl font-bold ">Clients</h1>
            </div>
            {/* Card Search Section */}
            <div className="flex items-center justify-end gap-4">
              <button className="border-tatto-dark-blue border flex gap-2 items-center rounded-md px-4 py-1.5">
                <span>Filters</span>
                <LuSettings2 />
              </button>
              <div className="flex items-center relative w-2/4">
                <FiSearch className="absolute left-3" />
                <input
                  type="text"
                  className="w-full h-10 bg-input-gray rounded-md pl-10 pr-20 py-1.5 focus-visible:outline-none"
                  placeholder="Search..."
                />
                <button className="px-4 py-1.5 right-1 absolute bg-tatto-dark-blue text-white rounded-lg text-sm">
                  Search
                </button>
              </div>
              {/*  */}
              <button
                className="bg-tatto-dark-blue text-white flex justify-around items-center gap-2 text-sm rounded-md px-4 py-2"
                onClick={() => {
                  setSideModalFrom("addClient");
                  setAddFormStatus(true);
                  setSidebarDetailing(false);
                  document.body.style.overflowY = "hidden";
                }}
              >
                <Image
                  className="w-4"
                  src="/png_icons/add-white.png"
                  alt=""
                  width={40}
                  height={40}
                />
                Add Client
              </button>
            </div>
          </div>
          {/* Body */}
          <div className="sm:px-6 sm:py-4 min-h-96 max-h-max">
            {/* Data Table */}
            <table className="w-full">
              <thead className="hidden sm:table-header-group">
                <tr className="text-tatto-muted hidden sm:table-row rounded-table-head">
                  {tableData[0].headings.map((heading, idx) => {
                    return (
                      <th
                        key={idx}
                        className="w-[22.5%]  text-left font-semibold py-4"
                      >
                        {heading}
                      </th>
                    );
                  })}
                  <th className="w-[10%] text-right font-semibold text-tatto-dark-blue">
                    ( {tableData[1].clientData.length}&nbsp;
                    {tableData[1].clientData.length > 1 ? "Clients" : "Client"})
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData[1].clientData.map((client, idx) => {
                  return (
                    <tr
                      key={idx}
                      className="border-b-2 last:border-0 mt-4 group cursor-pointer"
                      onClick={() => {
                        setSideModalFrom("userProfile");
                        setAddFormStatus(true);
                        setSidebarDetailing(true);
                        document.body.style.overflowY = "hidden";
                      }}
                    >
                      {/* this td is for mobile */}
                      <td
                        className="block sm:hidden py-4 pl-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Link href={"clients/profile"}>
                          <div className="w-full flex gap-2 items-center">
                            <div className="w-1/5">
                              <Image
                                className="w-14"
                                src={client.img}
                                width={20}
                                height={20}
                                alt=""
                              />
                            </div>
                            <div className="w-4/5">
                              <div>
                                <h1 className="text-lg font-semibold flex gap-2">
                                  {client.name}
                                  <div className="bg-mid-gray w-fit text-[10px] px-4 items-center  rounded-full">
                                    Demo
                                  </div>
                                </h1>
                                <p className="text-sm flex items-center gap-1 text-tatto-muted">
                                  {client.email}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </td>
                      {/* This is for desktop */}
                      <td className="hidden sm:table-cell py-7 pl-6">
                        <div className="w-full flex gap-2 items-center">
                          <div>
                            <Image
                              className="w-10"
                              src={client.img}
                              width={20}
                              height={20}
                              alt=""
                            />
                          </div>
                          <div className="relative">
                            <div className="absolute -right-2 -top-4 bg-mid-gray w-fit text-[10px] px-1.5 py-0.5 rounded-full">
                              Demo
                            </div>
                            <h1 className="text-md font-semibold">
                              {client.name}
                            </h1>
                            <p className="text-xs flex items-center gap-1 text-tatto-muted">
                              <MdOutlineWatchLater />
                              {client.since}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="hidden sm:table-cell">
                        <div className="w-full text-center flex flex-col gap-1">
                          <div className="flex items-center gap-2">
                            <CiMail className="text-xs" />
                            <span className="text-xs">{client.email}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <BsTelephone className="text-xs" />
                            <span className="text-xs">{client.phone}</span>
                          </div>
                        </div>
                      </td>
                      <td className="hidden sm:table-cell">
                        <div>
                          <StatusShowCard text={client.Status} />
                        </div>
                      </td>
                      <td className="hidden sm:table-cell text-tatto-muted text-sm">
                        {client.lastApointment}
                      </td>
                      <td
                        className="hidden sm:table-cell cursor-default pr-6"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="relative w-fill flex justify-center items-center opacity-0 group-hover:opacity-100">
                          <BsThreeDots
                            className="text-right text-xl cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowDotList(!showDotList);
                            }}
                          />

                          {/* Under List Links */}
                          <ul
                            className={` ${
                              showDotList ? "visible" : "hidden"
                            } z-10 px-4 py-2 rounded-lg absolute right-8 top-4 bg-white shadow-md w-52`}
                            style={{
                              boxShadow: "0px 0px 2px 0px darkgray",
                            }}
                          >
                            <li className="py-3 text-xs cursor-pointer">
                              Delete
                            </li>
                            <li className="py-3 text-xs border-b cursor-pointer">
                              Merge Client
                            </li>
                            <li className="py-3 text-xs cursor-pointer">
                              Print Upcoming Appointments
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Plus Sign for Add Clients */}
      <div className="fixed bottom-20 right-5 block sm:hidden">
        <button
          className="bg-tatto-dark-blue h-10 w-10 flex justify-center items-center rounded-full text-white"
          onClick={() => {
            setSideModalFrom("addClient");
            setAddFormStatus(true);
          }}
        >
          <AiOutlinePlus className="text-2xl" />
        </button>
      </div>
      {/* Side Slide To add Client */}
      <AddClientSlide
        status={addFormStatus}
        handleClose={() => {
          setAddFormStatus(false);
          document.body.style.overflowY = "scroll";
        }}
        sideModalFrom={sideModalFrom}
        setSideModalFrom={(e) => setSideModalFrom(e)}
        sidebarDetailing={sidebarDetailing}
        setWannaSaveChangesPopup={(statment) =>
          setWannaSaveChangesPopup(statment)
        }
      />

      {/* Mobile Filter Card */}
      <div
        className={`h-screen w-full fixed bg-white z-50 left-0 right-0 ${
          mobileFilter ? "bottom-0" : " -bottom-[100vh]"
        }`}
        style={{ transition: "0.2s" }}
      >
        {/* Filter popup Header */}
        <div className="h-[7vh] bg-tatto-dark-blue flex justify-center items-center text-white text-xl">
          <h1>Filter</h1>
        </div>
        {/* Filter Body */}
        <div className="h-[80vh]"></div>
        {/* Buttons */}
        <div className="bg-mid-gray flex flex-col gap-1 justify-center items-center h-[13vh]">
          <button className="border py-1 border-tatto-dark-blue text-white bg-tatto-dark-blue rounded-lg w-48">
            Apply
          </button>
          <button
            className="border  py-1 text-tatto-dark-blue bg-white rounded-lg w-48"
            onClick={() => setMobileFilter(false)}
          >
            Cancel
          </button>
        </div>
      </div>

      {/* Save Changes Popup */}
      <div
        className={`w-full sm:h-full h-screen sm:absolute fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-50 ${
          wannaSaveChangesPopup ? "visible" : "hidden"
        }`}
        style={{ background: "#00000090" }}
      >
        <div className="mx-2 w-full sm:w-1/3 bg-white rounded-2xl p-3 z-50">
          {/* Modal Head */}
          <div className="flex justify-end pt-1 pb-4 items-center relative">
            {/* close button */}
            <div
              className="absolute right-0 top-0.5"
              onClick={() => setWannaSaveChangesPopup(false)}
            >
              <FiX className="text-2xl" />
            </div>
          </div>
          {/* Modal Body */}
          <div className="px-4 py-4">
            {/* Body */}
            <div className="flex flex-col gap-6 px-10">
              {/*  */}
              <div className="text-center">
                <h1 className="text-xl">Do you Wanna Save Changes</h1>
              </div>

              {/* Button */}
              <div className="justify-center flex flex-row gap-2">
                <button
                  className="px-6 py-2 border rounded-md border-tatto-dark-blue text-tatto-dark-blue"
                  onClick={() => setWannaSaveChangesPopup(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-6 py-2 border rounded-md bg-tatto-dark-blue text-white"
                  onClick={() => {
                    setWannaSaveChangesPopup(false);
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
