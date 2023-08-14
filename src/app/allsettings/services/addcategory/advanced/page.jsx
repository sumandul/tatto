"use client";
import React, { useState } from "react";

import Image from "next/image";

const Advanced = () => {
  const [edit, setEdit] = useState(false);

  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <div className="basic__details__holder">
        <div className="bg-vody-pink rounded-xl border overflow-hidden">
          <div className="flex justify-between px-4 py-2 bg-head-pink">
            <h1 className="font-bold self-center">Advanced</h1>
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
          <div
            className={`${
              edit === false ? `block` : `hidden`
            } px-6 py-4 bg-body-pink`}
          >
            {/*  */}
            <div className="user__details">
              <div className="w-1/2">
                <div className="flex flex-col h-14 justify-between">
                  <label className="font-bold text-sm">
                    Online booking direct link
                  </label>
                  <a className="text-sm font-semibold text-blue-600" href="#">
                    https://booking.tattooadmin.com/jsdyu+9
                  </a>
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
            <div className="flex gap-5 mb-4">
              <div className="w-1/2 flex flex-col">
                <label
                  htmlFor={"check"}
                  className="flex gap-4 items-center cursor-pointer"
                >
                  <div className="relative">
                    <input
                      type="checkbox"
                      id={"check"}
                      checked={isChecked}
                      className="sr-only"
                      onChange={() => setIsChecked(!isChecked)}
                    />

                    <div
                      className={`block ${
                        !isChecked ? `bg-tatto-disabled` : `bg-tatto-dark-blue`
                      } w-11 h-6 rounded-full`}
                    ></div>

                    <div
                      className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition`}
                    ></div>
                  </div>
                  <span className="font-semibold text-sm">
                    Only shown online booking with direct link
                  </span>
                </label>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Advanced;
