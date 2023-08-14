"use client";
import Link from "next/link";
import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Image from "next/image";
import dynamic from "next/dynamic";
const SideBar = dynamic(()=>import("@/app/components/SideBar"),{
  ssr:false
})
const  MobileHeader = dynamic(()=>import("@/app/partails/MobileHeader"),{
  ssr:false
})
const Header = dynamic(()=>import("@/app/partails/Header"),{
  ssr:false
})

const AutomatedMessages = ({ children }) => {
  const url = usePathname();

  const basePath = "/allsettings/automatedmessages/";

  const LinksComponent = ({ link, linkName, activeIcon, nonActiveIcon }) => {
    return (
      <Link href={link}>
        <li className="py-4 cursor-pointer flex items-center justify-between">
          <div className="flex items-center justify-between">
            <Image
              className="w-5"
              src={
                url === `${basePath + link}`
                  ? `/png_icons/automated_icons/${activeIcon}.png`
                  : `/png_icons/automated_icons/${nonActiveIcon}.png`
              }
              width={25}
              height={25}
              alt="base icons"
            />
            <h1
              className={` ml-4
                ${
                  url === `${basePath + link}`
                    ? "text-md font-bold text-tatto-dark-blue"
                    : "text-md"
                }
              `}
            >
              {linkName}
            </h1>
          </div>
          <div>
            <Image
              className="w-2"
              src={
                url === `${basePath + link}`
                  ? "/png_icons/side_manu_arrow_active.png"
                  : "/png_icons/side_manu_arrow_unactive.png"
              }
              alt="arrow icon"
              width={40}
              height={40}
            />
          </div>
        </li>
      </Link>
    );
  };

  return (
    <>
      <Header headerType={""} />
      <MobileHeader
        headerTitle={"Automated Messages"}
        backTo={"allsettings/automatedmessages/navigation"}
        sideContent={""}
      />
      <div className="container mx-auto mt-8 sm:mt-0">
        <div className="sm:m-auto mt-2 content w-full sm:w-11-13">
          <div className="items-center my-4 text-sm text-gray-500 dir__path hidden sm:flex">
            {" "}
            <Link href="/allsettings"> All Settings </Link>
            <FiChevronRight className="mx-3" /> Automated Messages
          </div>

          {/* content */}
          <div className="flex gap-6 bussiness__setup__holder">
            {/* Side Bar */}
            <SideBar
              logo={"/png_icons/all_settings_icons/auto_message.png"}
              title={"Automated Messages"}
              description={
                "Staff details, schedules, permissions, compensation, and more"
              }
            >
              <ul>
                <LinksComponent
                  link={"appointmentbooked"}
                  linkName={"Appointment Booked"}
                  activeIcon={"clipboard-tick-active"}
                  nonActiveIcon={"clipboard-tick"}
                />

                <LinksComponent
                  link={"appointmentcanceled"}
                  linkName={"Appointment Canceled"}
                  activeIcon={"clipboard-close-active"}
                  nonActiveIcon={"clipboard-close"}
                />

                <LinksComponent
                  link={"formsubmitted"}
                  linkName={"Form Submitted"}
                  activeIcon={"clipboard-export-active"}
                  nonActiveIcon={"clipboard-export"}
                />

                <LinksComponent
                  link={"waitlistentries"}
                  linkName={"Waitlist Entries"}
                  activeIcon={"close-circle-active"}
                  nonActiveIcon={"close-circle"}
                />

                <LinksComponent
                  link={"check-in-process"}
                  linkName={"Check-In Process"}
                  activeIcon={"danger-active"}
                  nonActiveIcon={"danger"}
                />

                <LinksComponent
                  link={"sale-closed"}
                  linkName={"Sale Closed"}
                  activeIcon={"card-slash-active"}
                  nonActiveIcon={"card-slash"}
                />

                <LinksComponent
                  link={"gift-cards"}
                  linkName={"Gift Cards"}
                  activeIcon={"ticket-discount-active"}
                  nonActiveIcon={"ticket-discount"}
                />
              </ul>
            </SideBar>
            {/* Pages */}
            <div className="w-full sm:w-3/4 h-full overflow-visiable block ">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AutomatedMessages;
