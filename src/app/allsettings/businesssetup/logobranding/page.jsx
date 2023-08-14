"use client";
import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const BusinessSettings = dynamic(()=>import('../page'),{
  ssr:false
})
const LogoBranding = () => {
  const [edit, setEdit] = useState(false);
  const [selectedLogo, setSelectedLogo] = useState(null);
  const [selectedCover, setSelectedCover] = useState(null);

  const handleLogoImage = (event) => {
    const file = event.target.files[0];
    setSelectedLogo(file);
  };

  const handleCoverImage = (event) => {
    const file = event.target.files[0];
    setSelectedCover(file);
  };

  return (
    <BusinessSettings>
      {/* Head */}
      <div className="px-6 py-4 flex justify-between items-center bg-white border-b mb-4">
        <div className="flex items-center">
          <h1 className="font-extrabold text-md text-gray-800">
            Logo & Branding
          </h1>
          <span className="text-gray-500 font-light text-sm ml-4">
            (Customize your client page with your brand color, logo, and cover
            image.)
          </span>
        </div>
        <div>
          <button className="bg-tatto-dark-blue text-white flex items-center gap-2 text-sm rounded-md px-4 py-1.5">
            Preview Client Page
          </button>
        </div>
      </div>
      {/* body */}
      <div className="basic__details__holder px-6 pb-4 bg-white">
        <div className="bg-body-pink rounded-xl border overflow-hidden">
          <div className="flex justify-between px-4 py-2 bg-head-pink">
            <h1 className="font-bold self-center">Brand Color</h1>

            <div className="flex gap-2">
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
          </div>
          {/* Simple Form */}
          <div
            className={`px-6 pt-4 ${
              !edit ? "bg-body-pink" : "bg-white"
            } transition-all ease-in-out`}
          >
            <form action="">
              {/*  */}
              <div className="mb-4">
                <span className="text-sm font-semibold text-gray-500">
                  Customize your client page with an accent color that will be
                  used for buttons, links, and accent elements.
                </span>
              </div>
              <div className="user__details flex mb-10">
                <div className="w-1/2">
                  <div className="flex flex-col h-14 justify-between">
                    <label className="font-bold text-sm">Color HEX Code</label>
                    <span
                      className={`text-sm font-semibold text-gray-500 ${
                        edit ? "hidden" : "visiable"
                      }`}
                    >
                      #99e5gh
                    </span>
                    <input
                      type="text"
                      className={`border rounded-md py-2 px-2 mt-2 focus-visible:outline-none  ${
                        edit ? "visible" : "hidden"
                      }`}
                    />
                  </div>
                </div>
              </div>
              {/* Actions */}
              <div
                className={`flex justify-start gap-4  py-3 ${
                  !edit ? `` : `border-t`
                }`}
              >
                <button
                  className={`text-tatto-dark-blue border-tatto-dark-blue border rounded-md px-4 py-1.5 ${
                    !edit ? `hidden` : `visible`
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setEdit(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  className={`bg-tatto-dark-blue text-white rounded-md px-4 py-1.5 ${
                    !edit ? `hidden` : `visible`
                  }`}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="basic__details__holder px-6 pb-4 bg-white">
        <div className="bg-body-pink rounded-xl border overflow-hidden">
          <div className="flex justify-between px-4 py-2 bg-head-pink">
            <h1 className="font-bold self-center">Logo & Cover Image</h1>
          </div>
          {/* Simple Form */}
          <div className={`px-6 py-4 bg-white flex gap-8`}>
            {/*  */}
            <div className="w-80">
              <label htmlFor="logoImg" className="font-bold text-sm mb-2">
                Logo
              </label>
              <input
                id="logoImg"
                type="file"
                className="appearance-none hidden"
                onChange={handleLogoImage}
                accept=".jpg,.png"
              />
              <div
                className="bg-body-pink show__img h-40 border-2 border-dashed cursor-pointer rounded-lg p-2 flex gap-2 justify-center items-center"
                onClick={() => document.getElementById("logoImg").click()}
              >
                {selectedLogo ? (
                  <Image
                    className="w-fit h-full rounded-lg"
                    src={URL.createObjectURL(selectedLogo)}
                    alt=""
                    width={40}
                    height={40}
                  />
                ) : (
                  <div className="flex gap-2 justify-center items-center flex-col h-full">
                    <Image
                      width={40}
                      height={40}
                      className="w-8"
                      src="/png_icons/import.png"
                      alt=""
                    />
                    <h1 className="font-bold text-sm text-gray-500">
                      Upload a Logo
                    </h1>
                  </div>
                )}
              </div>
              <div className="text-center mt-2">
                <span className="text-sm font-semibold text-gray-500">
                  Upload a logo to display in online booking, emails and in the
                  top bar of the client page. Image file must be at least 80
                  pixels high. Accepted file types: .jpg and .png
                </span>
              </div>
            </div>
            {/*  */}
            <div className="w-80">
              <label htmlFor="coverImg" className="font-bold text-sm mb-2">
                Cover Image
              </label>
              <input
                id="coverImg"
                type="file"
                className="appearance-none hidden"
                onChange={handleCoverImage}
                accept=".jpg,.png"
              />
              <div
                className="bg-body-pink show__img h-40 border-2 p-2 border-dashed cursor-pointer flex gap-2 justify-center items-center flex-col rounded-lg"
                onClick={() => document.getElementById("coverImg").click()}
              >
                {selectedCover ? (
                  <Image
                    className="w-fit h-full rounded-lg"
                    src={URL.createObjectURL(selectedCover)}
                    alt=""
                    width={40}
                    height={40}
                  />
                ) : (
                  <div className="flex gap-2 justify-center items-center flex-col h-full">
                    <Image
                      width={40}
                      height={40}
                      className="w-8"
                      src="/png_icons/import.png"
                      alt=""
                    />
                    <h1 className="font-bold text-sm text-gray-500">
                      Upload a Cover Image
                    </h1>
                  </div>
                )}
              </div>
              <div className="text-center mt-2">
                <span className="text-sm font-semibold text-gray-500">
                  Add a horizontal cover image to display on the client page.
                  Image file must be at least 600 pixels wide. Accepted file
                  types: .jpg and .png Upload a cover image
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
    </BusinessSettings>
  );
};

export default LogoBranding;
