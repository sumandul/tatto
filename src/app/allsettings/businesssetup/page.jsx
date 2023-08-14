"use client";
import Link from "next/link";
import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Image from "next/image";
import dynamic from "next/dynamic";

const Header = dynamic(()=>import('@/app/partails/Header'),{
  ssr:false
})


const BusinessSettings = ({ children }) => {
  const url = usePathname();

  const basePath = "/allsettings/businesssetup";

  return (
    <>
      <Header headerType={""} />
      <div className="container mx-auto">
        <div className="m-auto mt-2 content w-11-13">
          <div className="flex items-center my-4 text-sm text-gray-500 dir__path">
            {" "}
            <Link href="/allsettings"> All Settings </Link>
            <FiChevronRight className="mx-3" /> Business Setup
          </div>
          {/*  */}

          <div className="flex gap-6 bussiness__setup__holder">
            <div className="sticky w-1/4 h-full bg-transparent rounded-xl top-10">
              {/*  */}
              <div className="flex px-6 py-6 border-b-2 bg-mid-gray rounded-xl">
                <div className="mr-4">
                  <Image
                    className="w-20"
                    src="/png_icons/business_setup.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
                <div className="">
                  <h1 className="mb-2 text-xl font-semibold">Business Setup</h1>
                  <span className="text-gray-500">
                    Business details, locations, and feature management.
                  </span>
                </div>
              </div>
              {/*  */}
              <div className="px-6 bg-transparent">
                <ul>
                  {/*  */}
                  <Link
                    href="details"
                    className={
                      url === `${basePath}/details`
                        ? "text-tatto-dark-blue"
                        : ""
                    }
                  >
                    <li
                      className="flex items-center justify-between py-4 hover:text-tatto-dak-blue"
                      id="businessDetailLink"
                    >
                      <div className="flex items-center justify-between">
                        <Image
                          className="w-5"
                          src={
                            url === `${basePath}/details`
                              ? `/png_icons/business_side_icons/notes-active.png`
                              : `/png_icons/business_side_icons/notes.png`
                          }
                          alt=""
                          width={40}
                          height={40}
                        />
                        <h1
                          className={`ml-4 ${
                            url === `${basePath}/details` ? "font-semibold" : ""
                          }`}
                        >
                          Business Details
                        </h1>
                      </div>
                      <div>
                        <Image
                          className="w-2"
                          src={
                            url === `${basePath}/details`
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
                  <Link
                    href="locations"
                    className={
                      url === `${basePath}/locations`
                        ? "text-tatto-dark-blue font-semibold"
                        : ""
                    }
                  >
                    <li
                      className="flex items-center justify-between py-4 "
                      id="businessLocationLink"
                    >
                      <div className="flex items-center justify-between">
                        <Image
                          className="w-5"
                          src={
                            url === `${basePath}/locations`
                              ? `/png_icons/business_side_icons/gps-active.png`
                              : `/png_icons/business_side_icons/gps.png`
                          }
                          alt=""
                          width={40}
                          height={40}
                        />
                        <h1 className="ml-4">Locations</h1>
                      </div>
                      <div>
                        <Image
                          className="w-2"
                          src={
                            url === `${basePath}/locations`
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
                  <Link
                    href="phone"
                    className={
                      url === `${basePath}/phone`
                        ? "text-tatto-dark-blue font-semibold"
                        : ""
                    }
                  >
                    <li
                      className="flex items-center justify-between py-4"
                      id="businessPhoneLink"
                    >
                      <div className="flex items-center justify-between">
                        <Image
                          className="w-5"
                          src={
                            url === `${basePath}/phone`
                              ? `/png_icons/business_side_icons/call-active.png`
                              : `/png_icons/business_side_icons/call.png`
                          }
                          alt=""
                          width={40}
                          height={40}
                        />
                        <h1 className="ml-4">Phone Number</h1>
                      </div>
                      <div>
                        <Image
                          className="w-2"
                          src={
                            url === `${basePath}/phone`
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
                  <Link
                    href="logobranding"
                    className={
                      url === `${basePath}/logobranding`
                        ? "text-tatto-dark-blue"
                        : ""
                    }
                  >
                    <li
                      className="flex items-center justify-between py-4 "
                      id="logoBrandingLink"
                    >
                      <div className="flex items-center justify-between">
                        <Image
                          className="w-5"
                          src={
                            url === `${basePath}/logobranding`
                              ? `/png_icons/business_side_icons/pen-tool-active.png`
                              : `/png_icons/business_side_icons/pen-tool.png`
                          }
                          alt=""
                          width={40}
                          height={40}
                        />
                        <h1 className="ml-4">Logo & Branding</h1>
                      </div>
                      <div>
                        <Image
                          className="w-2"
                          src={
                            url === `${basePath}/logobranding`
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
                  <Link
                    href="featuremanager"
                    className={
                      url === `${basePath}/featuremanager`
                        ? "text-tatto-dark-blue"
                        : ""
                    }
                  >
                    <li
                      className="flex items-center justify-between py-4 "
                      id="featureManagerLink"
                    >
                      <div className="flex items-center justify-between">
                        <Image
                          className="w-5"
                          src={
                            url === `${basePath}/featuremanager`
                              ? `/png_icons/business_side_icons/tasks-active.png`
                              : `/png_icons/business_side_icons/tasks.png`
                          }
                          alt=""
                          width={40}
                          height={40}
                        />
                        <h1 className="ml-4">Feature Manager</h1>
                      </div>
                      <div>
                        <Image
                          className="w-2"
                          src={
                            url === `${basePath}/featuremanager`
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
                  <Link
                    href="messages"
                    className={
                      url === `${basePath}/messages`
                        ? "text-tatto-dark-blue"
                        : ""
                    }
                  >
                    <li
                      className="flex items-center justify-between py-4 "
                      id="messagesLink"
                    >
                      <div className="flex items-center justify-between">
                        <Image
                          className="w-5"
                          src={
                            url === `${basePath}/messages`
                              ? `/png_icons/business_side_icons/message-active.png`
                              : `/png_icons/business_side_icons/message.png`
                          }
                          alt=""
                          width={40}
                          height={40}
                        />
                        <h1 className="ml-4">Messages</h1>
                      </div>
                      <div>
                        <Image
                          className="w-2"
                          src={
                            url === `${basePath}/messages`
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
                  <Link
                    href="advancedsettings"
                    className={
                      url === `${basePath}/advancedsettings`
                        ? "text-tatto-dark-blue"
                        : ""
                    }
                  >
                    <li
                      className="flex items-center justify-between py-4 "
                      id="advancedSettingsLink"
                    >
                      <div className="flex items-center justify-between">
                        <Image
                          className="w-5"
                          src={
                            url === `${basePath}/advancedsettings`
                              ? `/png_icons/business_side_icons/setting-active.png`
                              : `/png_icons/business_side_icons/setting.png`
                          }
                          alt=""
                          width={40}
                          height={40}
                        />
                        <h1 className="ml-4">Advanced Settings</h1>
                      </div>
                      <div>
                        <Image
                          className="w-2"
                          src={
                            url === `${basePath}/advancedsettings`
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
            <div className="w-3/4 h-full overflow-hidden bg-white shadow-md rounded-xl">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessSettings;
