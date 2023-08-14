"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const FooterLink = ({ link, icon, title }) => {
  return (
    <Link href={link} className="flex items-center justify-center text-center">
      <li className="flex items-center justify-center flex-col">
        <div className="flex items-center justify-center w-5 h-5">
          <Image
            width={40}
            height={40}
            className="w-full img-gray"
            src={icon}
            alt=""
          />
        </div>
        <div>
          <h1 className="text-sm font-semibold text-gray-400">{title}</h1>
        </div>
      </li>
    </Link>
  );
};

const MobileFooter = () => {
  return (
    <div className="fixed h-16 w-full bottom-0 left-0 bg-tatto-simple-white px-4 block sm:hidden z-40">
      <ul className="flex justify-between items-center h-full">
        {/*  */}
        <FooterLink
          link={""}
          icon={"/png_icons/footer_icons/client.png"}
          title={"Client"}
        />
        {/*  */}
        <FooterLink
          link={""}
          icon={"/png_icons/footer_icons/enquiries.png"}
          title={"Enquiries"}
        />
        {/*  */}
        <FooterLink
          link={""}
          icon={"/png_icons/footer_icons/calendar.png"}
          title={"Calendar"}
        />
        {/*  */}
        <FooterLink
          link={""}
          icon={"/png_icons/footer_icons/messages.png"}
          title={"Messages"}
        />
        {/*  */}
        <FooterLink
          link={""}
          icon={"/png_icons/footer_icons/more.png"}
          title={"More"}
        />
      </ul>
    </div>
  );
};

export default MobileFooter;
