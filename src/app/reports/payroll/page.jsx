"use client";
import React, { useState } from "react";
import { FiDownload, FiX } from "react-icons/fi";
import Image from "next/image";
import dynamic from "next/dynamic";

//

const MobileHeader = dynamic(()=>import("@/app/partails/MobileHeader"),{
  ssr:false
   
 })
const SelectDrodown = dynamic(()=>import("@/app/components/SelectDropdown"),{
 ssr:false
  
})

const Payroll = () => {
  const [filterDate, setFilterDate] = useState("Today");

  const [selectedMembers, setSelectedMembers] = useState([]);

  const [selectStaffModal, setSelectStaffModal] = useState(false);

  const [salesTotalToggle, setSalesTotalToggle] = useState(true);

  const [detailsView, setDetailsView] = useState(false);

  const staffList = [
    { image: "/png_icons/staff_members_dp/1.png", name: "Html" },
    { image: "/png_icons/staff_members_dp/1.png", name: "CSS" },
    { image: "/png_icons/staff_members_dp/1.png", name: "JavaScript" },
    { image: "/png_icons/staff_members_dp/1.png", name: "JSON" },
    { image: "/png_icons/staff_members_dp/1.png", name: "PHP" },
  ];

  const tableHeadData = [
    { icon: "/png_icons/table_icons/bars.png", title: "Name" },
    { icon: "/png_icons/table_icons/calendar.png", title: "Hours" },
    { icon: "/png_icons/table_icons/block.png", title: "Blacked" },
    { icon: "/png_icons/table_icons/calendar.png", title: "Hourly Comp" },
    { icon: "/png_icons/table_icons/manondesk.png", title: "Services" },
    { icon: "/png_icons/table_icons/stock.png", title: "Services Sales" },
    { icon: "/png_icons/table_icons/setting.png", title: "Deductions" },
    { icon: "/png_icons/table_icons/stock.png", title: "Services Comp" },
    { icon: "/png_icons/table_icons/checkbox.png", title: "Products" },
    { icon: "/png_icons/table_icons/sale.png", title: "Products Sales" },
    { icon: "/png_icons/table_icons/coin.png", title: "Tip" },
    { icon: "/png_icons/table_icons/calculater.png", title: "Total" },
  ];

  const tableData = [
    "John",
    "9.00",
    "0.50",
    "$180.00",
    "1",
    "$180.00",
    "$0",
    "$7.50",
    "0",
    "$30.50",
    "$30.50",
    "$180.50",
  ];

  const tableFootData = [
    "Total",
    "9.00",
    "0.50",
    "$180.00",
    "1",
    "$180.00",
    "$0",
    "$7.50",
    "0",
    "$30.50",
    "$30.50",
    "$180.50",
  ];

  const setStaffArray = (e) => {
    e.target.checked
      ? setSelectedMembers([...selectedMembers, e.target.value])
      : RemoveData(e.target.value);
  };

  const RemoveData = (data) => {
    const updatedArray = selectedMembers.filter((item) => item !== data);
    setSelectedMembers(updatedArray);
  };

  return (
    <>
      <MobileHeader backTo={""} headerTitle={"Reports"} />
      <div className="pt-2">
        {/* Cards */}
        <div className="rounded-xl bg-white px-6 py-4 mt-4 border-2">
          {/* Title */}
          <div>
            <h1 className="font-semibold text-md">Payroll</h1>
          </div>
          {/* grap details */}
          <div className="flex flex-col gap-4 mt-4">
            {/* Select Date */}
            <div className="form-group">
              <SelectDrodown
                id={""}
                placeholder={"select"}
                options={[
                  "June 2023",
                  "May 2023",
                  "April 2023",
                  "March 2023",
                  "February 2023",
                  "Custom Time Period",
                ]}
                handleOnChange={(val) => setFilterDate(val)}
                value={filterDate}
              />
            </div>
            {/* start Date end Date */}
            <div
              className={` flex flex-col gap-4
                ${filterDate === "Custom Time Period" ? `block` : "hidden"}
              `}
            >
              <div className="form-group">
                <input
                  type="date"
                  className="h-10 rounded-full border focus-visible:outline-none px-4 w-full"
                  placeholder="Start Date"
                />
              </div>
              <div className="form-group">
                <input
                  type="date"
                  className="h-10 rounded-full border focus-visible:outline-none px-4 w-full"
                  placeholder="End Date"
                />
              </div>
            </div>
            {/* Select Persons */}
            <div>
              <div
                className="h-10 rounded-full border flex items-center  px-4 w-full"
                onClick={() => setSelectStaffModal(true)}
              >
                {selectedMembers}
              </div>
            </div>
            {/* Check box */}
            <div className="flex items-center justify-start w-full">
              <label
                htmlFor="salesTotalToggle"
                className="flex items-center gap-5 cursor-pointer"
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    id="salesTotalToggle"
                    checked={salesTotalToggle}
                    className="sr-only"
                    onChange={() => setSalesTotalToggle(!salesTotalToggle)}
                  />

                  <div
                    className={`block ${
                      !salesTotalToggle
                        ? `bg-tatto-disabled`
                        : `bg-tatto-dark-blue`
                    } w-11 h-6 rounded-full`}
                  ></div>

                  <div
                    className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition`}
                  ></div>
                </div>
                Include sales totals
              </label>
            </div>
            {/* Check box */}
            <div className="flex items-center justify-start w-full">
              <label
                htmlFor="detailsView"
                className="flex items-center gap-5 cursor-pointer"
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    id="detailsView"
                    checked={detailsView}
                    className="sr-only"
                    onChange={() => setDetailsView(!detailsView)}
                  />

                  <div
                    className={`block ${
                      !detailsView ? `bg-tatto-disabled` : `bg-tatto-dark-blue`
                    } w-11 h-6 rounded-full`}
                  ></div>

                  <div
                    className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition`}
                  ></div>
                </div>
                Show details view
              </label>
            </div>
          </div>
          {/* Gunrate and download buttons */}
          <div className="pt-10 flex flex-col gap-6">
            {/* Gunrate */}
            <div>
              <button className="bg-tatto-dark-blue text-white py-1 px-6 rounded-full">
                Generate
              </button>
            </div>
            {/* Downloads */}
            <div className="flex justify-between">
              <div className="">
                <button className="flex text-xs items-center gap-2 py-1 text-tatto-muted">
                  <FiDownload className="text-xl" />
                  DOWNLOAD PDF
                </button>
              </div>
              <div className="border"></div>
              <div>
                <button className="flex text-xs items-center gap-2 py-1 text-tatto-muted">
                  <FiDownload className="text-xl" />
                  DOWNLOAD EXCEL
                </button>
              </div>
            </div>
            {/* Points List */}
            <div>
              <ul className="text-xs text-tatto-muted list-disc flex flex-col gap-3 pl-4">
                <li>
                  The Hourly compensation does not include any overtime
                  calculations.
                </li>
                <li>The Calculation hours exclude any unpaid tasks.</li>
              </ul>
            </div>
          </div>

          {/* Show Data */}
          <div className="pt-6">
            {/* period */}
            <div className="flex gap-4 text-tatto-muted text-sm">
              <span>Peroid:</span>
              <span>June 1 - June 30,2023</span>
            </div>
            {/* Data Table */}
            <div className="overflow-hidden w-full mt-4">
              <div className="overflow-x-scroll w-full">
                <div className="border rounded-xl w-fit relative">
                  {/* Table Head */}
                  <div className="flex w-fit text-center justify-center ">
                    {tableHeadData.map((data, idx) => {
                      return (
                        <div
                          key={idx}
                          className="flex w-40 justify-center last:border-r-0  border-r border-b items-center p-4 gap-2 "
                        >
                          <Image
                            width={40}
                            height={40}
                            className="w-7"
                            src={data.icon}
                            alt=""
                          />
                          <h1 className="text-md font-bold">{data.title}</h1>
                        </div>
                      );
                    })}
                  </div>
                  {/* Table Body */}
                  <div className="flex w-fit">
                    {tableData.map((data, idx) => {
                      return (
                        <div
                          key={idx}
                          className="text-center w-40 items-center p-4 last:border-r-0 border-r border-b text-tatto-muted"
                        >
                          <h1>{data}</h1>
                        </div>
                      );
                    })}
                  </div>
                  {/* Table Footer */}
                  <div className="flex w-fit">
                    {tableFootData.map((data, idx) => {
                      return (
                        <div
                          key={idx}
                          className="text-center w-40 items-center p-4 last:border-r-0  border-r  border-t text-tatto-muted first:font-bold first:text-black"
                        >
                          <h1 className="">{data}</h1>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  Modal */}
      <div
        className={`w-full h-full fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-40 ${
          selectStaffModal ? "visible" : "hidden"
        }`}
        style={{ background: "#00000090" }}
      >
        {/* Modal Inner */}
        <div className="w-11/12 bg-white rounded-2xl p-3">
          {/* Modal Head */}
          <div className="flex justify-between pt-1 pb-4 items-center">
            {/* Title */}
            <div className="text-md font-semibold">
              <h1>Select Staff</h1>
            </div>
            {/* close button */}
            <div onClick={() => setSelectStaffModal(false)}>
              <FiX className="text-2xl" />
            </div>
          </div>
          {/* Modal Body */}
          <div className="px-4 py-4 border rounded-2xl">
            {/* Body */}
            <div className=" flex flex-col gap-4">
              {staffList.map((staff, idx) => {
                return (
                  <div key={idx}>
                    {/*  */}
                    <label
                      htmlFor={idx}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <Image
                          width={40}
                          height={40}
                          src={staff.image}
                          className="w-12"
                          alt=""
                        />
                        <h1>{staff.name}</h1>
                      </div>
                      {/*  */}
                      <div>
                        <input
                          type="checkbox"
                          className="w-5 h-5"
                          name=""
                          id={idx}
                          value={staff.name}
                          onChange={(e) => setStaffArray(e)}
                        />
                      </div>
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payroll;
