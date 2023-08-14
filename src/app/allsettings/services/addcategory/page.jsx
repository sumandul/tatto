"use client";
import React, { useState } from "react";
// Sub Pages
import Image from "next/image";
import dynamic from "next/dynamic";

const Details = dynamic(()=>import('./details/page'),{
  ssr:false
})

const Advanced = dynamic(()=>import('./advanced/page'),{
  ssr:false
})




const AddCategory = ({ handleCategoryAdded }) => {
  const [categoryAdded, setCategoryAdded] = useState(false);

  const [showDotList, setShowDotList] = useState(false);

  const [contentPage, setContentPage] = useState("details");

  return (
    <div>
      {!categoryAdded ? (
        <div className="" style={{ height: "28rem" }}>
          {/* Card */}
          <div className="basic__details__holder bg-white">
            <div className="bg-body-pink rounded-xl border overflow-hidden">
              {/* Heading */}
              <div className="flex justify-between px-4 py-2 bg-head-pink">
                <h1 className="font-bold self-center">New Category</h1>
              </div>
              <div className="px-6 pt-4 bg-white border-b-2 flex flex-col gap-8">
                {/* Form */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="categoryname" className="text-sm font-bold">
                    Category Name
                  </label>
                  <input
                    type="text"
                    id="categoryname"
                    className="w-1/2 border rounded-md px-4 py-1.5 focus-visible:outline-none"
                  />
                </div>
                {/* Buttons */}
                <div className="border-t-2 flex flex-row justify-end gap-4 p-4">
                  <button className="px-6 py-2 border border-tatto-dark-blue text-tatto-dark-blue rounded-lg">
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-tatto-dark-blue text-white rounded-lg"
                    onClick={() => {
                      setCategoryAdded(true);
                      handleCategoryAdded();
                    }}
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="bg-white basic__details__holder"
          style={{ height: "30rem" }}
        >
          <div>
            {/* this is Staff Profile viwer page */}
            <div>
              {/* Staff Profile card Header */}
              <div className="relative flex justify-between items-center flex-row gap-6 pb-5 pt-1 border-b-2">
                <div>
                  <h1 className="text-xl font-bold">Nail Art</h1>
                </div>
                <div className="relative right-0">
                  <div className="relative">
                    <ul
                      onClick={() => setShowDotList(!showDotList)}
                      className={`relative right-0 dots flex gap-1 border p-4 cursor-pointer rounded-md border-tatto-dark-blue ${
                        showDotList
                          ? "bg-tatto-dark-blue"
                          : "bg-tatto-light-blue"
                      } `}
                    >
                      <li
                        className={`w-1 h-1 rounded-xl ${
                          showDotList ? "bg-white" : "bg-tatto-dark-blue"
                        } `}
                      ></li>
                      <li
                        className={`w-1 h-1 rounded-xl ${
                          showDotList ? "bg-white" : "bg-tatto-dark-blue"
                        } `}
                      ></li>
                      <li
                        className={`w-1 h-1 rounded-xl ${
                          showDotList ? "bg-white" : "bg-tatto-dark-blue"
                        } `}
                      ></li>
                    </ul>
                    {/* Under List Links */}
                    <ul
                      className={` ${
                        showDotList ? "visible" : "hidden"
                      } z-10 px-4 py-2 rounded-md absolute right-0 top-12 bg-white shadow-md w-40`}
                      style={{
                        boxShadow: "0px 0px 2px 0px darkgray",
                      }}
                    >
                      <li className="py-1 text-xs cursor-pointer">Delete</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Staff Page Navigation */}
              <div className="flex flex-row gap-4">
                {/* Nav Bar */}
                <div className="w-1/5 py-4">
                  <ul className="flex flex-col gap-6">
                    {/* Details */}
                    <li
                      className="flex items-center gap-4 cursor-pointer"
                      onClick={() => setContentPage("details")}
                    >
                      <div>
                        <Image
                          width={40}
                          height={40}
                          className="w-4"
                          src={
                            contentPage == "details"
                              ? `/png_icons/business_side_icons/notes-active.png`
                              : `/png_icons/business_side_icons/notes.png`
                          }
                          alt=""
                        />
                      </div>
                      <span
                        className={`text-sm ${
                          contentPage == "details"
                            ? "text-tatto-dark-blue font-bold"
                            : "text-gray-500"
                        }`}
                      >
                        Details
                      </span>
                    </li>
                    {/* advanced */}
                    <li
                      className="flex items-center gap-4 cursor-pointer"
                      onClick={() => setContentPage("advanced")}
                    >
                      <div>
                        <Image
                          width={40}
                          height={40}
                          className="w-4"
                          src={
                            contentPage == "advanced"
                              ? "/png_icons/business_side_icons/gps-active.png"
                              : "/png_icons/business_side_icons/gps.png"
                          }
                          alt=""
                        />
                      </div>
                      <span
                        className={`text-sm ${
                          contentPage == "advanced"
                            ? "text-tatto-dark-blue font-bold"
                            : "text-gray-500"
                        }`}
                      >
                        advanced
                      </span>
                    </li>
                  </ul>
                </div>
                {/* Content Side */}
                <div className="w-4/5 pt-4">
                  {contentPage === "details" ? (
                    <Details />
                  ) : contentPage === "advanced" ? (
                    <Advanced />
                  ) : (
                    "Page is Not Find"
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCategory;
