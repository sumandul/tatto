"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// Icons
import { FiChevronDown } from "react-icons/fi";

const Header = ({ headerType }) => {
  const [settingIsActive, setSettingIsActive] = useState(false);

  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div className="hidden sm:block">
        {/* Header */}
        <div className="flex items-center justify-center px-5 bg-tatto-dark-blue rounded-xl">
          <div className="flex w-2/3 h-16 logo__section items-center gap-12">
            <Link href="/" className="flex items-center justify-start">
              <div className="w-10 h-10 bg-white rounded-full"></div>
              <h1
                className={`ml-3 text-white text-md ${
                  headerType === "underLinks" ? "hidden" : "visible"
                }`}
              >
                Tattoo Admin
              </h1>
            </Link>

            <div
              className={`
                                ${
                                  headerType === "underLinks"
                                    ? `visible`
                                    : "hidden"
                                } w-full`}
            >
              <ul className="flex items-center gap-8 text-white">
                <li className="cursor-pointer">Get Started</li>
                <li className="cursor-pointer">Calendar</li>
                <li className="cursor-pointer">Enquiries</li>
                <li className="cursor-pointer">Messages</li>
                <li className="cursor-pointer">Clients</li>
                <li className="cursor-pointer">Sales</li>
                <li className="cursor-pointer">Reports</li>
                <li
                  className="relative cursor-pointer"
                  onClick={() => setShowMore(!showMore)}
                >
                  More
                  <ul
                    className={`absolute top-10 z-30 bg-white w-44 shadow-lg rounded-lg flex flex-col gap-4 text-black px-8 py-4 right-0 ${
                      showMore ? "visible" : "hidden"
                    }`}
                  >
                    <li>Products</li>
                    <li>Gift Cards</li>
                    <li>Purchase Order</li>
                    <li>Form</li>
                    <li>Time Clock</li>
                    <li>Cash Drawer</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          {/* User Profile */}
          <div className="flex items-center w-1/3 user_section" dir="rtl">
            <div className="user__dropdown flex items-center h-16 after:h-6 after:w-0.5 after:bg-slate-200 after:mr-6 after:rounded-xl ml-6">
              <FiChevronDown className="text-xl text-white" />
              <h1 className="mr-3 text-white text-md">Siraj Hassni</h1>
              <div className="mr-3 overflow-hidden border-green-500 rounded-full h-11 w-11 border-3">
                {/* <Image
                  className="w-10"
                  src="/png_icons/header_icons/user.jpeg"
                  alt=""
                  width={40}
                  height={40}
                /> */}
              </div>
            </div>

            {/* Educaiton */}
            <div className="flex items-center h-16 after:h-6 after:w-0.5 after:bg-slate-200 after:mr-6 after:rounded-xl">
              <Image
                className="w-6"
                src="/png_icons/header_icons/teacher.png"
                alt=""
                width={40}
                height={40}
              />
            </div>

            {/* Settings */}
            <div className={`setting__tab mr-6 text-white h-16 flex `}>
              <Link
                href="/"
                className="flex items-center"
                onClick={() => setSettingIsActive(true)}
              >
                <h1 className="ml-2">Settings</h1>
                <Image
                  className="w-6"
                  src="/png_icons/header_icons/setting.png"
                  alt=""
                  width={40}
                  height={40}
                />
              </Link>
              <div
                className={`h-1 w-full bg-orange-400 ${
                  settingIsActive ? "visible" : "hidden"
                }`}
              ></div>
            </div>
          </div>
        </div>
        {/* Manu Bar */}
        <div
          className={`h-10 m-auto manu__bar rounded-b-xl w-11-13 bg-gradient-to-r from-purple-600 to-pink-600 ${
            headerType === "underLinks" ? "hidden" : "visible"
          }`}
        >
          <ul className="flex items-center justify-around h-full text-white">
            <li className="flex items-center">
              {/* <Image
                src="/png_icons/header_icons/get_started.png"
                className="w-4 mr-2"
                alt="get started icon"
                width={40}
                height={40}
              /> */}
              Get Started
            </li>
            <li className="flex items-center">
              {/* <Image
                src="/png_icons/header_icons/calendar.png"
                className="w-4 mr-2"
                alt="get started icon"
                width={40}
                height={40}
              /> */}
              Calendar
            </li>
            <Link href="/clients">
              <li className="flex items-center">
                {/* <Image
                  src="/png_icons/header_icons/clients.png"
                  className="w-4 mr-2"
                  alt="get started icon"
                  width={40}
                  height={40}
                /> */}
                Clients
              </li>
            </Link>
            <li className="flex items-center">
              {/* <Image
                src="/png_icons/header_icons/sales.png"
                className="w-4 mr-2"
                alt="get started icon"
                width={40}
                height={40}
              /> */}
              Sales
            </li>
            <li className="flex items-center">
              {/* <Image
                src="/png_icons/header_icons/messages.png"
                className="w-4 mr-2"
                alt="get started icon"
                width={40}
                height={40}
              /> */}
              Messages
            </li>
            <li className="flex items-center">
              {/* <Image
                src="/png_icons/header_icons/reports.png"
                className="w-4 mr-2"
                alt="get started icon"
                width={40}
                height={40}
              /> */}
              Reports
            </li>
            <li className="flex items-center">
              {/* <Image
                src="/png_icons/header_icons/products.png"
                className="w-4 mr-2"
                alt="get started icon"
                width={40}
                height={40}
              /> */}
              Products
            </li>
            <Link href="/giftcardslist">
              <li className="flex items-center">
                {/* <Image
                  src="/png_icons/header_icons/gift-cards.png"
                  className="w-4 mr-2"
                  alt="get started icon"
                  width={40}
                  height={40}
                /> */}
                Gift Cards
              </li>
            </Link>
            <li className="flex items-center">
              {/* <Image
                src="/png_icons/header_icons/purchase-order.png"
                className="w-4 mr-2"
                alt="get started icon"
                width={40}
                height={40}
              /> */}
              Purchase Order
            </li>
            <li className="flex items-center">
              {/* <Image
                src="/png_icons/header_icons/form.png"
                className="w-4 mr-2"
                alt="get started icon"
                width={40}
                height={40}
              /> */}
              Form
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
