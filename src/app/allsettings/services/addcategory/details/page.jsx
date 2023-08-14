"use client";
import React, { useState } from "react";

import Image from "next/image";

const Details = () => {
  const [edit, setEdit] = useState(false);

  return (
    <>
      <div className="basic__details__holder">
        <div className="bg-body-pink rounded-xl border overflow-hidden">
          <div className="flex justify-between px-4 py-2 bg-head-pink">
            <h1 className="font-bold self-center">Details</h1>
            <div
              className="cursor-pointer w-8 h-8 flex justify-center items-center"
              onClick={() => setEdit(true)}
            >
              <Image
                src={
                  edit ? "/png_icons/edit_active.png" : "/png_icons/edit.png"
                }
                alt=""
                width={40}
                height={40}
              />
            </div>
          </div>
          {/* Simple Form */}
          <div className={`${edit === false ? `block` : `hidden`} px-6 pt-4`}>
            {/*  */}
            <div className="user__details flex mb-10 gap-5">
              <div className="w-1/2">
                <div className="flex flex-col h-14 justify-between">
                  <label className="font-bold text-sm">Category Name</label>
                  <span className="text-sm font-semibold text-gray-500">
                    Nail Art
                  </span>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
          <div
            className={`${
              edit === true ? `block` : `hidden`
            } bg-white px-6 pt-4 h-full`}
          >
            <form action="" method="get">
              <div className="flex gap-5 mb-9">
                <div className="w-1/2 flex flex-col">
                  <label
                    htmlFor="CategoryName"
                    className="font-bold text-sm mb-2"
                  >
                    Category Name
                  </label>
                  <input
                    id="CategoryName"
                    className="border rounded-md px-2 py-1 focus-visible:outline-none transition duration-150 ease-out"
                    type="text"
                    required
                  />
                </div>
              </div>

              <div
                className={`flex justify-end gap-4 py-3 ${
                  !edit ? `` : `border-t`
                }`}
              >
                <button
                  className={`text-tatto-dark-blue border-tatto-dark-blue border rounded-md px-6 py-2 ${
                    !edit ? `invisible` : `visible`
                  }`}
                  onClick={() => setEdit(false)}
                >
                  Cancel
                </button>
                <button
                  className={`bg-tatto-dark-blue text-white rounded-md px-6 py-2 ${
                    !edit ? `invisible` : `visible`
                  }`}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Footer */}
    </>
  );
};

export default Details;
