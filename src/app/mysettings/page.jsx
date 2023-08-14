"use client";
import React, { useState } from "react";
import { FiCalendar } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdLock, IoIosBookmark } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import { IoLogOut } from "react-icons/io5";
import Image from "next/image";
import dynamic from "next/dynamic";
 const MobileHeader = dynamic(()=>import("@/app/partails/MobileHeader"),{
  ssr:false
 })


const PageNavigationCard = ({ icon, title }) => {
  return (
    <div className="bg-white rounded-xl flex items-center px-4 gap-4 h-14 text-gray-400">
      <div>
        <span className="text-2xl">{icon}</span>
      </div>
      <div>
        <h1 className="text-md font-bold">{title}</h1>
      </div>
    </div>
  );
};

const MySettings = () => {
  const [profileImage, setProfileImage] = useState(
    "/png_icons/staff_members_dp/1.png"
  );
  const [profileImageChange, setProfileImageChange] = useState(false);

  const handleProfileImage = (event) => {
    const file = event.target.files[0];
    setProfileImage(file);
    setProfileImageChange(true);
  };

  return (
    <>
      {/* Header */}
      <MobileHeader headerTitle={"My Settings"} backTo={""} />
      {/* body */}
      <div className="px-6">
        {/* Profile picture and daily weekly reports */}
        <div className="flex flex-col gap-3 justify-center items-center py-8">
          <div>
            <div className="w-36 h-36 relative overflow-hidden rounded-full">
              <Image
                className="w-full"
                src={
                  profileImageChange
                    ? URL.createObjectURL(profileImage)
                    : profileImage
                }
                alt=""
                width={40}
                height={40}
              />
              <div
                className="absolute cursor-pointer flex justify-center items-center bg-tatto-opacity z-10 w-36 h-36 top-0 left-0 right-0 bottom-0"
                onClick={() => document.getElementById("profileImage").click()}
              >
                <Image
                  width={40}
                  height={40}
                  className="w-6"
                  src="/png_icons/cam-icon.png"
                  alt=""
                />
                <input
                  type="file"
                  hidden
                  name=""
                  id="profileImage"
                  onChange={handleProfileImage}
                  accept=".jpg,.png"
                />
              </div>
            </div>
          </div>
          <div className="text-center flex flex-col gap-1">
            <h1 className="text-2xl font-extrabold text-tatto-dark-blue">
              kate wilaim
            </h1>
            <span className="text-gray-500 italic text-md">
              niket01378@favilu.com
            </span>
          </div>
          <div className="flex gap-4 w-full">
            <div className="bg-white h-12 p-2 border w-full flex justify-between items-center">
              <h1 className="text-xs font-extrabold text-red-500">
                Daily Reports
              </h1>
              <FiCalendar />
            </div>
            <div className="bg-white h-12 p-2 border w-full flex justify-between items-center">
              <h1 className="text-xs font-extrabold text-red-500">
                Weekly Report
              </h1>
              <FiCalendar />
            </div>
          </div>
        </div>
        {/* Navigations */}
        <div className="flex flex-col gap-4">
          {/*  */}
          <PageNavigationCard
            icon={<BsFillPersonFill />}
            title={"Edit Profile"}
          />
          {/*  */}
          <PageNavigationCard icon={<IoMdLock />} title={"Change Password"} />
          {/*  */}
          <PageNavigationCard icon={<IoIosBookmark />} title={"Bookmark"} />
          {/*  */}
          <PageNavigationCard icon={<ImLocation />} title={"My Location"} />
          {/*  */}
          <PageNavigationCard icon={<IoLogOut />} title={"Logout"} />
        </div>
      </div>
    </>
  );
};

export default MySettings;
