"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import dynamic from "next/dynamic";

const AddService = dynamic(()=>import("./addservice/page"),{
  ssr:false
})
const ListDropdown = dynamic(()=>import("@/app/components/ListDropdown"),{
  ssr:false
})

const AddCategory = dynamic(()=>import("./addcategory/page"),{
  ssr:false
})
const  Header = dynamic(()=>import("@/app/partails/Header"),{
  ssr:false
})
const Services = () => {
  const [contentPage, setContentPage] = useState("");
  const listData = [
    "text",
    "text",
    "text",
    "text",
    "text",
    "text",
    "text",
    "text",
  ];
  const [newService, setNewService] = useState([]);

  const [meakupDropown, setMeakupDropown] = useState(false);
  const [eventHairDropown, setEventHairDropown] = useState(false);
  const [permanentMakeupDropown, setPermanentMakeupDropown] = useState(false);
  const [lashesDropown, setLashesDropown] = useState(false);
  const [browsDropown, setBrowsDropown] = useState(false);

  const [nailArtDropdown, setNailArtDropdown] = useState(false);

  const [newCategory, setNewCategory] = useState(false);

  return (
    <>
      <Header headerType={""} />
      <div className="container mx-auto">
        <div className="m-auto mt-2 content w-11-13">
          <div className="flex items-center my-4 text-sm text-gray-500 dir__path">
            <Link href="/allsettings"> All Settings </Link>
            <FiChevronRight className="mx-3" /> Services
          </div>

          <div className="flex gap-6 bussiness__setup__holder">
            <div className="sticky w-1/4 h-full bg-transparent rounded-xl top-10">
              {/*  */}
              <div className="flex px-6 py-6 border-b-2 bg-mid-gray rounded-xl">
                <div className="mr-4">
                  <Image
                    className="w-20"
                    src="/png_icons/all_settings_icons/services.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
                <div className="">
                  <h1 className="mb-2 text-xl font-semibold">Services</h1>
                  <span className="text-gray-500">
                    Service categories, duration, pricing and online booking
                    availability
                  </span>
                </div>
              </div>
              {/*  */}
              <div className="px-6 bg-transparent pt-4">
                <ul>
                  {/*  */}
                  <li className="py-2">
                    <ListDropdown
                      heading={"Makeup"}
                      status={meakupDropown}
                      handleStatus={() => setMeakupDropown(!meakupDropown)}
                      list={listData}
                    />
                  </li>
                  {/*  */}
                  <li className="py-2">
                    <ListDropdown
                      heading={"Event Hair & Makeup"}
                      status={eventHairDropown}
                      handleStatus={() =>
                        setEventHairDropown(!eventHairDropown)
                      }
                      list={listData}
                    />
                  </li>
                  {/*  */}
                  <li className="py-2">
                    <ListDropdown
                      heading={"Permanent Makeup"}
                      status={permanentMakeupDropown}
                      handleStatus={() =>
                        setPermanentMakeupDropown(!permanentMakeupDropown)
                      }
                      list={listData}
                    />
                  </li>
                  {/*  */}
                  <li className="py-2">
                    <ListDropdown
                      heading={"Lashes"}
                      status={lashesDropown}
                      handleStatus={() => setLashesDropown(!lashesDropown)}
                      list={listData}
                    />
                  </li>
                  {/*  */}
                  <li className="py-2">
                    <ListDropdown
                      heading={"Brows"}
                      status={browsDropown}
                      handleStatus={() => setBrowsDropown(!browsDropown)}
                      list={listData}
                    />
                  </li>
                  {/*  */}
                  <li className={`py-2 ${newCategory ? "visible" : "hidden"}`}>
                    <ListDropdown
                      heading={"Nail Art"}
                      status={nailArtDropdown}
                      handleStatus={() => setNailArtDropdown(!nailArtDropdown)}
                      list={newService}
                      handleAddService={() => setContentPage("addservice")}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-3/4 h-full">
              <div className="w-full bg-white rounded-xl p-0">
                {/* Heading */}
                <div className="border-b-2 w-full py-4 px-6 font-extrabold flex justify-between items-center">
                  Manage your services
                  {/* Button is Here for Add */}
                  <button
                    className="bg-tatto-dark-blue text-white flex justify-around items-center gap-2 text-sm rounded-md px-4 py-1.5"
                    onClick={() => setContentPage("addcategory")}
                  >
                    <Image
                      className="w-4"
                      src="/png_icons/add-white.png"
                      alt=""
                      width={40}
                      height={40}
                    />
                    Add Category
                  </button>
                </div>
                {/* Body Content */}
                <div className="px-6 py-4">
                  {/*  Window Card */}
                  {contentPage === "addcategory" ? (
                    <AddCategory
                      handleCategoryAdded={() => {
                        setNewCategory(true);
                        setNailArtDropdown(true);
                      }}
                    />
                  ) : contentPage === "addservice" ? (
                    <AddService />
                  ) : (
                    <div
                      className="flex justify-center items-center"
                      style={{ height: "33rem" }}
                    >
                      <span className="text-center text-gray-500 text-md">
                        You can create new service categories and services or
                        change
                        <br />
                        the details (e.g. price & duration) of existing
                        services.
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
