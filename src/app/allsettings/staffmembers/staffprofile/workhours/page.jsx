"use client";
import React from "react";
import Image from "next/image";
//

const WorkHours = () => {
  const workSheet = [
    {
      status: false,
      day: "Sunday",
      date: "20th May",
      shift: ["No Shifts"],
      overridden: false,
      reason: "",
    },
    {
      status: true,
      day: "Monday",
      date: "21st May",
      shift: ["8:00 AM - 10:00 AM"],
      overridden: true,
      reason: "",
    },
    {
      status: true,
      day: "Tuesday",
      date: "22nd May",
      shift: ["8:00 AM - 10:00 AM", "12:00 PM - 3:00 PM", "4:00 PM - 5:00 PM"],
      overridden: true,
      reason: "",
    },
    {
      status: true,
      day: "Wednesday",
      date: "23rd May",
      shift: ["8:00 AM - 10:00 AM", "12:00 PM - 3:00 PM"],
      overridden: true,
      reason: "",
    },
    {
      status: false,
      day: "Thursday",
      date: "24th May",
      shift: ["Not Working"],
      overridden: true,
      reason: "Closed",
    },
    {
      status: false,
      day: "Friday",
      date: "25th May",
      shift: ["Not Working"],
      overridden: true,
      reason: "Sick",
    },
    {
      status: true,
      day: "Saturday",
      date: "26th May",
      shift: ["8:00 AM - 10:00 AM"],
      overridden: true,
      reason: "",
    },
  ];
  return (
    <>
      <div className="relative">
        <div className="w-full h-12 mb-4  px-0 py-4 flex items-center justify-between">
          <div>
            <select
              name=""
              id=""
              className="border-2 px-2 py-1.5 w-56 focus-visible:outline-none rounded-lg"
            >
              <option value="">All Locations</option>
              <option value="">Blue Jeans</option>
              <option value="">JKW</option>
            </select>
          </div>
          <div>
            <input
              type="date"
              className="px-2 py-1.5 border-2 w-56 focus-visible:outline-none rounded-lg "
            />
          </div>
        </div>

        <div
          className="flex flex-col gap-4 overflow-y-scroll pb-16 hide-scrollbar"
          style={{ height: "27rem" }}
        >
          {workSheet.map((emp, index) => {
            return (
              <div
                key={index}
                className={`flex justify-between items-center border-l-8 border p-4 rounded-lg ${
                  emp.status ? "border-s-green-500" : ""
                }`}
              >
                {/*  */}
                <div>
                  <h1 className="text-xs font-bold">{emp.day}</h1>
                  <span className="text-sm">{emp.date}</span>
                </div>
                {/*  */}
                <div>
                  <div>
                    <ul>
                      {emp.shift.map((shift, idx) => {
                        return (
                          <li key={idx} className="text-sm font-bold">
                            {shift}
                          </li>
                        );
                      })}
                    </ul>
                    <span className="text-sm">{emp.reason}</span>
                  </div>
                </div>
                {/*  */}
                <div>
                  <span className="text-sm">
                    {emp.overridden ? "OVERRIDDEN" : ""}
                  </span>
                </div>
                <div>
                  <Image
                    className="w-8"
                    src="/png_icons/edit.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WorkHours;
