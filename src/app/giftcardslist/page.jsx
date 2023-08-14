"use client";
import React, { useEffect, useState } from "react";
const Header = dynamic(()=>import("../partails/Header"))

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
// Icons
import {
  FiChevronDown,
  FiClock,
  FiMoreVertical,
  FiNavigation2,
  FiSearch,
  FiUser,
} from "react-icons/fi";
import dynamic from "next/dynamic";

const GiftCardsList = () => {
  const router = useRouter();

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check if the user agent contains any keywords indicating a mobile device
    const isMobileDevice = /Android|iPhone|iPod|iPad|Windows Phone/i.test(
      userAgent
    );

    setIsMobile(isMobileDevice);
  }, []);

  const GiftCardList = [
    {
      number: "202318",
      balance: "$30.00",
      purchasingClient: "Josh Carter",
      ownerClient: "Sean Ben",
    },
    {
      number: "Van20319i",
      balance: "$66.00",
      purchasingClient: "Karin Ramizen",
      ownerClient: "Sean Ben",
    },
    {
      number: "207889-GIFT",
      balance: "$25.00",
      purchasingClient: "Cynthia Clair",
      ownerClient: "Sean Ben",
    },
    {
      number: "Van20319",
      balance: "$66.00",
      purchasingClient: "Karin Ramizen",
      ownerClient: "Sean Ben",
    },
    {
      number: "207889-GIFT",
      balance: "$25.00",
      purchasingClient: "Cynthia Clair",
      ownerClient: "Sean Ben",
    },
  ];

  const [addGiftCardSlide, setAddGiftCardSlide] = useState(false);
  const [editGiftCardSlide, setEditGiftCardSlide] = useState(false);

  const [eidtGiftDetail, setEditGiftDetail] = useState(false);

  const [createClient, setCreateClient] = useState(false);

  const [showDetailDropdown, setShowDetailDropdown] = useState(false);

  const [sendDigitalGiftCardModal, setSendDigitalGiftCardModal] =
    useState(false);

  const [digitalCardSended, setDigitalCardSended] = useState(false);

  return (
    <>
      <div>
        <Header headerType={"underLinks"} />
        {/* MOBILE Header */}
        <div
          className={`bg-tatto-dark-blue h-16 flex justify-between items-center px-3 py-4 rounded-lg sm:hidden `}
        >
          <>
            {/* Back Button */}
            <div className="flex items-center gap-2">
              <div onClick={() => router.back()}>
                <Image
                  className="w-6"
                  src="/png_icons/back-arrow.png"
                  alt="back arrow icon"
                  width={40}
                  height={40}
                />
              </div>
              {/* Page Title */}
              <div className="w-full text-center">
                <h1 className="text-1xl font-bold text-white">Gift Cards</h1>
              </div>
            </div>

            {/* SIde */}
            <div className="flex justify-end items-center gap-2">
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
              <Link href={"/giftcardslist/addgiftcard"}>
                <Image
                  className="w-8"
                  src="/png_icons/add-white.png"
                  alt="add icon"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          </>
        </div>
        {/* MOBILE Header */}
        <div className="container mx-auto mt-6">
          <div className="sm:m-auto  content w-full sm:w-11-13">
            {/* Search For Mobile */}
            <div className="flex sm:hidden items-center relative mb-4">
              <input
                type="text"
                className="w-full h-12 px-6 rounded-full border placeholder:text-xs"
                placeholder="Search by girt card number"
              />
              <Image
                className="w-11 absolute right-1"
                src="/png_icons/search-icon-circle.png"
                alt=""
                width={40}
                height={40}
              />
            </div>

            {/* Gift Cards List Card */}
            <div className="bg-white rounded-xl sm:rounded-lg">
              {/* Header */}
              <div className="hidden sm:grid grid-cols-2 items-center px-6 py-4 border-b-2">
                {/* Card Title */}
                <div>
                  <h1 className="text-xl font-bold ">Gift Cards</h1>
                </div>
                {/* Card Search Section */}
                <div className="flex items-center justify-end gap-4">
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
                    onClick={() => setAddGiftCardSlide(true)}
                  >
                    <Image
                      className="w-4"
                      src="/png_icons/add-white.png"
                      alt=""
                      width={40}
                      height={40}
                    />{" "}
                    Add Gift Card
                  </button>
                </div>
              </div>
              {/* Body */}
              <div className="sm:px-6 sm:py-4 min-h-96 max-h-max">
                {/* Data Table */}
                <table className="w-full">
                  <thead className="hidden sm:table-header-group">
                    <tr className="bg-head-pink h-12 rounded-lg text-sm">
                      <th
                        className="w-1/4 text-left rounded-l-lg pl-6"
                        style={{ width: "30%" }}
                      >
                        NUMBER
                      </th>
                      <th className="w-1/4 text-left" style={{ width: "30%" }}>
                        BALANCE
                      </th>
                      <th className="w-2/6 text-left " style={{ width: "30%" }}>
                        PURCHASING CLIENT
                      </th>
                      <th
                        className="w-1/6 text-left rounded-r-lg pr-6 "
                        style={{ width: "10%" }}
                      >
                        OWNER CLIENT
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {GiftCardList.map((list, idx) => {
                      return (
                        <tr
                          className="h-16 cursor-pointer border-b-2 last:border-b-0 text-sm font-semibold"
                          key={idx}
                          onClick={(e) => {
                            !isMobile
                              ? setEditGiftCardSlide(true)
                              : router.push("/giftcardslist/giftcard");
                          }}
                        >
                          <td className="pl-6 ml-7">
                            {list.number}
                            <span className="bg-tatto-light-red text-xs px-1.5  py-0.5 ml-3 text-white text-center rounded-full">
                              Demo{" "}
                            </span>
                          </td>
                          <td>{list.balance}</td>

                          <td className="hidden sm:table-cell">
                            {list.purchasingClient}
                          </td>
                          <td className="pr-6 hidden sm:table-cell">
                            {list.ownerClient}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Create Modal Code is Here */}
        <>
          {/* Side Modal */}
          <div
            className={`w-full h-full fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center ${
              addGiftCardSlide ? "visible" : "hidden"
            }`}
            style={{ background: "#00000060" }}
          ></div>
          {/* Modal Inner */}
          <div
            className={`w-2/6 bg-white ease-in-out rounded-lg absolute top-16 overflow-hidden ${
              addGiftCardSlide ? "right-8" : "-right-full"
            } `}
            style={{ transition: "0.8s", height: "40rem" }}
          >
            {/* Modal Head */}
            <div className="border-b-2 flex gap-2 items-center bg-head-pink px-2 py-2">
              <div>
                <Image
                  className="w-5 rotate-90 cursor-pointer"
                  src="/png_icons/arrow-down.png"
                  alt=""
                  onClick={() => setAddGiftCardSlide(false)}
                  width={40}
                  height={40}
                />
              </div>
              <div className="">
                <h1 className="text-lg font-semibold">New Gift Card</h1>
              </div>
            </div>
            {/* Modal Body */}
            <div
              className="px-6 py-4 relative hide-scrollbar"
              style={{
                height: "37rem",
                overflowY: "scroll",
                display: "grid",
                gridTemplateRows: createClient ? "auto 7%" : "93% 7%",
              }}
            >
              {/* Body */}
              <div className="flex flex-col gap-4 mb-4 ">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="newNumber"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Number
                  </label>
                  <input
                    type="text"
                    id="newNumber"
                    className="w-full h-10 border rounded-md px-2 py-1.5 focus-visible:outline-none text-sm"
                    placeholder="Enter or scan gift card number"
                  />
                </div>
                {/*  */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="newBalance"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Balance
                  </label>
                  <input
                    type="text"
                    id="newBalance"
                    className="w-full h-10 border rounded-md px-2 py-1.5 focus-visible:outline-none text-sm"
                    placeholder="$0"
                  />
                </div>
                {/*  */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="newOwnerClien"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Owner Client
                  </label>
                  <div className="flex flex-col gap-2">
                    {!createClient ? (
                      <div className="relative flex items-center">
                        <input
                          type="text"
                          id="newOwnerClien"
                          className="w-full h-10 border rounded-md px-2 py-1.5 focus-visible:outline-none text-sm"
                          placeholder="Search or create client"
                        />
                        <Image
                          className="w-5 absolute right-4 top-2.5 cursor-pointer"
                          src="/png_icons/add-black.png"
                          alt=""
                          onClick={() => setCreateClient(true)}
                          width={40}
                          height={40}
                        />
                      </div>
                    ) : (
                      <>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            className="w-full h-10 border rounded-md px-2 py-1.5 focus-visible:outline-none text-sm"
                            placeholder="First Name"
                          />
                          <input
                            type="text"
                            className="w-full h-10 border rounded-md px-2 py-1.5 focus-visible:outline-none text-sm"
                            placeholder="Last Name"
                          />
                        </div>
                        <div>
                          <input
                            type="number"
                            className="w-full h-10 border rounded-md px-2 py-1.5 focus-visible:outline-none text-sm"
                            placeholder="Phone number"
                          />
                        </div>
                        <div>
                          <input
                            type="email"
                            className="w-full h-10 border rounded-md px-2 py-1.5 focus-visible:outline-none text-sm"
                            placeholder="Email address"
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            className="w-full h-10 border rounded-md px-2 py-1.5 focus-visible:outline-none text-sm"
                            placeholder="Enter referral source"
                          />
                        </div>
                        <div className="flex gap-2">
                          <button
                            className="w-full border rounded-md border-tatto-dark-blue text-tatto-dark-blue  py-1.5"
                            onClick={() => setCreateClient(false)}
                          >
                            Cancel
                          </button>
                          <button
                            className="w-full bg-tatto-dark-blue py-1.5 rounded-md text-white"
                            onClick={() => setCreateClient(false)}
                          >
                            Create
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                {/*  */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="newNotes"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Notes
                  </label>
                  <textarea
                    rows={4}
                    id="newNotes"
                    className="w-full italic resize-none border rounded-md px-2 py-1.5 focus-visible:outline-none text-sm"
                    placeholder="Type here"
                  />
                </div>
              </div>
              <div className="" style={{ width: "100%" }}>
                <div className="flex gap-2 w-full">
                  <button
                    className="w-full border border-tatto-dark-blue text-tatto-dark-blue rounded-md  py-1.5"
                    onClick={() => setAddGiftCardSlide(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="w-full bg-tatto-dark-blue py-1.5 rounded-md text-white"
                    onClick={() => setAddGiftCardSlide(false)}
                  >
                    Create Gift Card
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
        {/* Edit Modal Code is Here */}
        <>
          {/* Side Modal */}
          <div
            className={`w-full h-full fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center ${
              editGiftCardSlide ? "visible" : "hidden"
            }`}
            style={{ background: "#00000060" }}
          ></div>
          {/* Modal Inner */}
          <div
            className={`w-2/6 bg-white ease-in-out rounded-lg absolute top-16 overflow-hidden ${
              editGiftCardSlide ? "right-8" : "-right-full"
            } `}
            style={{ transition: "0.8s", height: "40rem" }}
          >
            {/* Modal Head */}
            <div className="border-b-2 flex gap-2 items-center bg-head-pink px-2 py-2">
              <div className="flex justify-between w-full">
                {/* Side ONe */}
                <div className="flex items-center gap-2">
                  <Image
                    className="w-5 rotate-90 cursor-pointer"
                    src={`/png_icons/arrow-down.png`}
                    alt=""
                    onClick={() => setEditGiftCardSlide(false)}
                    width={40}
                    height={40}
                  />
                  <div className="">
                    <h1 className="text-lg font-semibold">Gift Card</h1>
                  </div>
                </div>
                {/* Side Two */}
                <div className="flex gap-2 items-center">
                  <div>
                    <Image
                      className="w-8"
                      src={
                        eidtGiftDetail
                          ? "/png_icons/edit_active.png"
                          : "/png_icons/edit.png"
                      }
                      alt=""
                      width={40}
                      height={40}
                      onClick={() => setEditGiftDetail(!eidtGiftDetail)}
                    />
                  </div>
                  <div className="relative">
                    <FiMoreVertical
                      className="text-xl cursor-pointer mr-2"
                      onClick={() => setShowDetailDropdown(!showDetailDropdown)}
                    />
                    <div
                      className={`absolute right-0 z-10 top-8 shadow-xl bg-white rounded-lg ${
                        showDetailDropdown ? "visible" : "hidden"
                      }`}
                    >
                      <FiNavigation2 className="absolute right-4 text-xl text-white top-0" />
                      <ul className="px-3 py-2 w-44 text-xs font-semibold after:w-4 after:h-4 after:bg-transparent after:absolute after:-top-2 after:right-1 after-arrow">
                        <li
                          className="border-b py-2 cursor-pointer"
                          onClick={() => setSendDigitalGiftCardModal(true)}
                        >
                          Send Digital Gift Card
                        </li>
                        <li className="py-2 cursor-pointer">Delete</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Modal Body */}
            <div
              className="relative hide-scrollbar"
              style={{
                height: "37rem",
                overflowY: "scroll",
              }}
            >
              {/* Body */}
              <div className="">
                {!eidtGiftDetail ? (
                  <>
                    {/* Details */}
                    <div className="flex flex-col gap-5 border-b px-6 py-4 ">
                      <div className="user__details flex flex-col gap-5">
                        <div className="">
                          <div className="flex flex-col h-14 justify-between">
                            <label className="font-bold text-sm text-gray-500">
                              Number
                            </label>
                            <span className="text-sm font-semibold">
                              202318
                            </span>
                          </div>
                        </div>
                        <div className="">
                          <div className="flex flex-col h-14 justify-between">
                            <label className="font-bold text-sm text-gray-500">
                              Balance
                            </label>
                            <span className="text-sm font-semibold">
                              $30.00
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="user__details flex flex-col gap-5">
                        <div className="">
                          <div className="flex flex-col h-14 justify-between">
                            <label className="font-bold text-sm text-gray-500">
                              Purchased by
                            </label>
                            <span className="text-sm font-semibold">
                              Josh Carter
                            </span>
                          </div>
                        </div>
                        <div className="">
                          <div className="flex flex-col h-14 justify-between">
                            <label className="font-bold text-sm text-gray-500">
                              Owned by
                            </label>
                            <span className="text-sm font-semibold">
                              Sean Ben
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="user__details flex flex-col mb-5 gap-5">
                        <div className="">
                          <div className="flex flex-col h-14 justify-between">
                            <label className="font-bold text-sm text-gray-500">
                              Sent to
                            </label>
                            <span className="text-sm font-semibold">
                              fipof08300@vaband.com on Jun 1
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*  */}
                    <div className="px-6 py-4 flex flex-col gap-4 border-b">
                      <h1 className="text-md font-bold">History</h1>
                      <div className="border rounded-lg overflow-hidden">
                        <table className="w-full">
                          <thead>
                            <tr className="bg-head-pink text-left text-sm text-gray-500 h-8">
                              <th
                                className="pl-4"
                                style={{
                                  width: "40%",
                                }}
                              >
                                DATE
                              </th>
                              <th
                                style={{
                                  width: "40%",
                                }}
                              >
                                TYPE
                              </th>
                              <th
                                style={{
                                  width: "20%",
                                }}
                              >
                                CHANGE
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="h-10 text-sm font-semibold">
                              <td className="pl-4">05/06/2023</td>
                              <td>Value added</td>
                              <td>+$25</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/*  */}
                    <div className="px-6 py-4 flex flex-col gap-4 border-b">
                      <h1 className="text-md font-bold">Card Details</h1>
                      <div className="flex flex-col gap-3 text-sm">
                        <div className="flex gap-4 items-center">
                          <FiClock />{" "}
                          <span>Created on Mon, Jun 5 at 8:37 PM</span>
                        </div>
                        <div className="flex gap-4 items-center">
                          <FiUser /> <span>sold Online</span>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="px-6 py-4 flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="editNumber"
                        className="text-sm font-semibold text-gray-500"
                      >
                        Number
                      </label>
                      <input
                        type="text"
                        id="editNumber"
                        className="w-full h-10 border rounded-md px-2 py-1.5 focus-visible:outline-none text-sm"
                        placeholder="Enter or scan gift card number"
                      />
                    </div>
                    {/*  */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="editBalance"
                        className="text-sm font-semibold text-gray-500"
                      >
                        Balance
                      </label>
                      <input
                        type="text"
                        id="editBalance"
                        className="w-full h-10 border rounded-md px-2 py-1.5 focus-visible:outline-none text-sm"
                        placeholder="$0"
                      />
                    </div>
                    {/*  */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="editOwnerClien"
                        className="text-sm font-semibold text-gray-500"
                      >
                        Owner Client
                      </label>
                      <div className="flex  items-center justify-between gap-2">
                        {/*  */}
                        <div className="flex gap-8 items-center">
                          <Image
                            className="w-14"
                            src="/png_icons/staff_members_dp/default.png"
                            alt=""
                            width={40}
                            height={40}
                          />
                          <div className="leading-none">
                            <h1 className="text-md font-bold">Sean Ben</h1>
                            <span className="text-xs text-gray-500">
                              Client since January 2023
                            </span>
                          </div>
                        </div>
                        {/*  */}
                        <div>
                          <Image
                            className="w-8"
                            src="/png_icons/delete.png"
                            alt=""
                            width={40}
                            height={40}
                          />
                        </div>
                      </div>
                    </div>
                    {/*  */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="editNotes"
                        className="text-sm font-semibold text-gray-500"
                      >
                        Notes
                      </label>
                      <textarea
                        rows={4}
                        id="editNotes"
                        className="w-full italic resize-none border rounded-md px-2 py-1.5 focus-visible:outline-none text-sm"
                        placeholder="Type here"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>

        {/* Digital Modal send Card */}
        <>
          <div
            className={`w-full h-full z-20 fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center ${
              sendDigitalGiftCardModal ? "visible" : "hidden"
            }`}
            style={{ background: "#00000060" }}
          >
            {/* Modal Inner */}
            <div className="w-2/6 bg-white rounded-lg px-6 py-5">
              {/* Modal Head */}
              <div className="border-b-2 py-4 text-center">
                <div className="">
                  <h1 className="text-lg font-extrabold">Send Gift Card</h1>
                </div>
              </div>
              {/* Modal Body */}
              <div className="px-6 py-4">
                {/* Body */}
                <div className="flex flex-col gap-4">
                  {/*  */}
                  <div className="text-center">
                    <span className="text-sm text-gray-500 text-center">
                      Please enter the email and name of the recipient and
                      optional gift message
                    </span>
                  </div>
                  {/*  */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="Sentto" className="text-sm font-semibold ">
                      Sent to
                    </label>
                    <input
                      type="email"
                      id="Sentto"
                      className="w-full h-10 border rounded-md px-2 py-1.5 focus-visible:outline-none text-sm"
                      placeholder="Enter email address"
                    />
                  </div>
                  {/*  */}
                  <div className="flex gap-2">
                    <div className="flex flex-col gap-2 w-full">
                      <label
                        htmlFor="Firstname"
                        className="text-sm font-semibold"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        id="Firstname"
                        className="w-full h-10 border rounded-md px-2 py-1.5 focus-visible:outline-none text-sm"
                        placeholder="Enter first name"
                      />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <label
                        htmlFor="Lastname"
                        className="text-sm font-semibold"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        id="Lastname"
                        className="w-full h-10 border rounded-md px-2 py-1.5 focus-visible:outline-none text-sm"
                        placeholder="Enter Last name"
                      />
                    </div>
                  </div>
                  {/*  */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="Giftmessage"
                      className="text-sm font-semibold"
                    >
                      Gift Message
                    </label>
                    <textarea
                      id="Giftmessage"
                      rows={4}
                      className="w-full resize-none border rounded-md px-2 py-1.5 focus-visible:outline-none text-sm"
                      placeholder="Enter an optional gift message"
                    />
                  </div>
                </div>
                {/* Buttons */}
                <div className="flex items-center justify-center gap-4 mt-10">
                  <button
                    className="px-6 py-2 font-semibold border-2 rounded-lg border-tatto-dark-blue text-tatto-dark-blue"
                    onClick={() => setSendDigitalGiftCardModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-6 py-2 font-semibold text-white border-2 rounded-lg border-tatto-dark-blue bg-tatto-dark-blue"
                    onClick={() => {
                      setDigitalCardSended(true);
                      setSendDigitalGiftCardModal(false);
                    }}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>

        {/*  */}
        <>
          <div
            className={`w-full h-full z-20 fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center ${
              digitalCardSended ? "visible" : "hidden"
            }`}
            style={{ background: "#00000060" }}
          >
            {/* Modal Inner */}
            <div className="w-2/6 bg-white rounded-lg px-6 py-5">
              {/* Modal Head */}
              <div className="border-b-2 py-4 text-center">
                <div className="">
                  <h1 className="text-lg font-extrabold">Send Gift Card</h1>
                </div>
              </div>
              {/* Modal Body */}
              <div className="px-6 py-4">
                {/* Body */}
                <div className="flex flex-col gap-4">
                  {/*  */}
                  <div className="text-center">
                    <span className="text-sm text-gray-500 text-center">
                      The gift card has been successfully sent to pp@gmail.com
                    </span>
                  </div>
                </div>
                {/* Buttons */}
                <div className="flex items-center justify-center gap-4 mt-10">
                  <button
                    className="px-10 py-2 font-semibold text-white border-2 rounded-lg border-tatto-dark-blue bg-tatto-dark-blue"
                    onClick={() => setDigitalCardSended(false)}
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default GiftCardsList;
