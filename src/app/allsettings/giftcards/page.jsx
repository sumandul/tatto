"use client";
import React from "react";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

import { usePathname } from "next/navigation";
import Image from "next/image";
import dynamic from "next/dynamic";

const Header = dynamic(()=>import('@/app/partails/Header'),{
  ssr:false
})


const GiftCards = ({ children }) => {
  const url = usePathname();

  const baseUrl = "/allsettings/giftcards";

  return (
    <>
      <Header headerType={""} />
      <div className="container mx-auto">
        <div className="m-auto mt-2 content w-11-13">
          <div className="flex items-center my-4 text-sm text-gray-500 dir__path">
            {" "}
            <Link href="/allsettings"> All Settings </Link>
            <FiChevronRight className="mx-3" /> Gift Cards
          </div>

          <div className="flex gap-6 bussiness__setup__holder">
            <div className="sticky w-1/4 h-full bg-transparent rounded-xl top-10">
              {/*  */}
              <div className="flex px-6 py-6 border-b-2 bg-mid-gray rounded-xl">
                <div className="mr-4">
                  <Image
                    className="w-20"
                    src="/png_icons/all_settings_icons/gift.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
                <div className="">
                  <h1 className="mb-2 text-xl font-semibold">Gift Cards</h1>
                  <span className="text-gray-500">
                    Configure online gift cards, design templates, and more
                  </span>
                </div>
              </div>
              {/*  */}
              <div className="px-6 bg-transparent">
                <ul>
                  {/*  */}
                  <Link href={"onlinesales"}>
                    <li className="flex items-center justify-between py-4 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <Image
                          className="w-5"
                          src={
                            url === `${baseUrl}/onlinesales`
                              ? `/png_icons/services_side_icons/money-send-active.png`
                              : `/png_icons/services_side_icons/money-send.png`
                          }
                          alt=""
                          width={40}
                          height={40}
                        />
                        <h1
                          className={`ml-4 ${
                            url === `${baseUrl}/onlinesales`
                              ? "font-bold text-tatto-dark-blue"
                              : ""
                          }`}
                        >
                          Online Sales
                        </h1>
                      </div>
                      <div>
                        <Image
                          className="w-2"
                          src={
                            url === `${baseUrl}/onlinesales`
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
                  {/*  */}
                  <Link href={"artwork"}>
                    <li className="flex items-center justify-between py-4 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <Image
                          className="w-5"
                          src={
                            url === `${baseUrl}/artwork`
                              ? `/png_icons/services_side_icons/gallery-favorite-active.png`
                              : `/png_icons/services_side_icons/gallery-favorite.png`
                          }
                          alt=""
                          width={40}
                          height={40}
                        />
                        <h1
                          className={`ml-4 ${
                            url === `${baseUrl}/artwork`
                              ? "font-bold text-tatto-dark-blue"
                              : ""
                          }`}
                        >
                          Artwork
                        </h1>
                      </div>
                      <div>
                        <Image
                          className="w-2"
                          src={
                            url === `${baseUrl}/artwork`
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
                  {/*  */}
                  <Link href={"preferences"}>
                    <li className="flex items-center justify-between py-4 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <Image
                          className="w-5"
                          src={
                            url === `${baseUrl}/preferences`
                              ? `/png_icons/services_side_icons/setting-active.png`
                              : `/png_icons/services_side_icons/setting.png`
                          }
                          alt=""
                          width={40}
                          height={40}
                        />
                        <h1
                          className={`ml-4 ${
                            url === `${baseUrl}/preferences`
                              ? "font-bold text-tatto-dark-blue"
                              : ""
                          }`}
                        >
                          Preferences
                        </h1>
                      </div>
                      <div>
                        <Image
                          className="w-2"
                          src={
                            url === `${baseUrl}/preferences`
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
                  {/*  */}
                  <Link href={"promotions"}>
                    <li className="flex items-center justify-between py-4 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <Image
                          className="w-5"
                          src={
                            url === `${baseUrl}/promotions`
                              ? `/png_icons/services_side_icons/crown-active.png`
                              : `/png_icons/services_side_icons/crown.png`
                          }
                          alt=""
                          width={40}
                          height={40}
                        />
                        <h1
                          className={`ml-4 ${
                            url === `${baseUrl}/promotions`
                              ? "font-bold text-tatto-dark-blue"
                              : ""
                          }`}
                        >
                          Promotions
                        </h1>
                      </div>
                      <div>
                        <Image
                          className="w-2"
                          src={
                            url === `${baseUrl}/promotions`
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
                </ul>
              </div>
            </div>
            <div className="w-3/4 h-full">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GiftCards;
