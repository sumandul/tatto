"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const MobileHeader = ({ backTo, headerTitle, sideContent }) => {
  const router = useRouter();
  return (
    <div
      className={`bg-tatto-dark-blue h-16 flex sm:hidden justify-between items-center p-4 rounded-lg `}
    >
      <>
        {/* Back Button */}
        <div className="w-20">
          <div onClick={() => router.back()}>
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
          <h1 className="text-1xl font-bold text-white">{headerTitle}</h1>
        </div>
        {/* SIde */}
        <div className="w-24 text-left">
          <div dangerouslySetInnerHTML={{ __html: sideContent }} />
        </div>
      </>
    </div>
  );
};

export default MobileHeader;
