import Image from "next/image";
import React, { useState } from "react";
import { AiOutlinePaperClip } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { GoLock } from "react-icons/go";
import dynamic from "next/dynamic";

const TimeLineStatusCard  = dynamic(()=>import("./TimeLineStatusCard"),{
  ssr:false
})
const PastVisitsDetail = ({ id, date, location, time, setSideActive }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  // Set State and check file type
  const setUploadedFileToState = (e) => {
    if (e?.target?.files[0]) {
      const selectedFiles = Array.from(e.target.files);
      const updatedFiles = selectedFiles.map((file) => ({
        name: file.name,
        extension: file.name.split(".").pop().toLowerCase(),
        file: file,
      }));
      setUploadedFiles((prevFiles) => [...prevFiles, ...updatedFiles]);
    }
  };
  // Remove UploadedFile From States
  const removeUploadedFileToState = (filePath) => {
    setUploadedFiles((prevFiles) =>
      prevFiles.filter((file) => file.file !== filePath)
    );
  };

  return (
    <div className="flex">
      <div>
        <div className="bg-[#acdabb] text-white w-fit text-sm flex  items-center px-1 h-5 rounded-md">
          Depart <BsArrowRightShort className="text-lg" />
        </div>
      </div>
      <div className="w-full">
        <div className="flex text-sm font-semibold items-center">
          <span className="w-auto  px-2 h-5">{date}</span>
          <div className="h-3 w-[1px] bg-mid-gray"></div>
          <span className="w-auto  px-2 h-5 ">{location}</span>
          <div className="h-3 w-[1px] bg-mid-gray"></div>
          <span className="flex gap-0.5 items-center w-auto px-2  h-5">
            <MdOutlineWatchLater />
            {time}
          </span>
          <div className="h-3 w-[1px] bg-mid-gray"></div>
          <span className="w-auto  px-2 h-5 ">$300</span>
        </div>
        {/* Body */}
        <div className="px-2 py-2">
          {/* add and Upload */}
          <div className="bg-white px-2 py-4 w-full border rounded-lg">
            <input
              type="text"
              className="border focus-visible:outline-none px-2 py-1 w-full rounded-md"
            />
            <input
              type="file"
              className="hidden"
              id={`uploadFile${id}`}
              onChange={setUploadedFileToState}
              accept=".jpeg,.jpg,.png,.pdf"
            />
            {uploadedFiles.length > 0 ? (
              <div className="grid grid-cols-4 p-4 gap-4">
                {uploadedFiles.map((file, idx) => {
                  return (
                    <div key={idx} className="relative w-20 h-20   ">
                      <div className=" w-full h-full border rounded-lg overflow-hidden">
                        {file.extension === "pdf" ? (
                          <Image
                            className="w-full h-full"
                            src={"/png_icons/pdf-placeholder.png"}
                            width={20}
                            height={20}
                            alt="preview"
                          />
                        ) : (
                          <Image
                            className="w-full h-full"
                            src={URL.createObjectURL(file.file)}
                            width={20}
                            height={20}
                            alt="preview"
                          />
                        )}
                      </div>
                      <div
                        className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1 cursor-pointer"
                        onClick={() => removeUploadedFileToState(file.file)}
                      >
                        <RiDeleteBinLine className="text-lg text-white" />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            )}
            <div className="flex justify-end items-center gap-4 text-sm pt-2">
              <button
                className="flex gap-1 items-center"
                onClick={() =>
                  document.getElementById(`uploadFile${id}`).click()
                }
              >
                <AiOutlinePaperClip /> Upload
              </button>
              <button className="bg-tatto-dark-blue px-5 py-0.5 rounded-md text-white text-sm">
                Add
              </button>
            </div>
          </div>
          {/* Details Section */}
          <div>
            {/* Proccess Line */}
            <div className="border-l-2 mt-4">
              {/* Enquery Form */}

              <TimeLineStatusCard cardStatu={true} proccessStatus={true}>
                <div className="bg-yellow-100 border-[#FCF2C4] border-2 rounded-md px-6 py-2 flex flex-col gap-2">
                  <div>
                    <h1 className="text-[#978534] text-xs font-bold">
                      Enquiry Form
                    </h1>
                  </div>
                  <div className="flex gap-2 items-center justify-between text-sm">
                    <div>
                      <span className="text-tatto-dark-blue font-bold">
                        March 16, 2021
                      </span>
                    </div>
                    <div className="h-3 w-[1px] bg-mid-gray"></div>
                    <div>
                      <span className="text-tatto-muted text-xs">10:30 AM</span>
                    </div>
                  </div>
                </div>
              </TimeLineStatusCard>
              {/* DownPayment */}
              <TimeLineStatusCard cardStatu={true} proccessStatus={true}>
                {/* Date and Time */}
                <div className="w-fit flex flex-col gap-1">
                  <div className="flex gap-2 items-center justify-between text-xs w-fit">
                    <div>
                      <span className="text-tatto-dark-blue font-bold">
                        March 16, 2021
                      </span>
                    </div>
                    <div className="h-3 w-[1px] bg-mid-gray"></div>
                    <div>
                      <span className="text-tatto-muted text-xs">10:30 AM</span>
                    </div>
                  </div>
                  <div className="text-xs">
                    <span className="flex text-tatto-muted">
                      Status changed - &nbsp;
                      <p className="font-bold text-tatto-dark-blue">filled</p>
                      &nbsp; to &nbsp;
                      <p className="font-bold text-tatto-dark-blue">filled</p>
                      &nbsp; by
                    </span>
                  </div>
                </div>
                {/* DownPayment Card */}
                <div className="w-fit flex gap-10 bg-white border items-center rounded-md px-4 py-3 mt-4">
                  <div className="flex gap-2 items-center">
                    <div className="flex justify-center items-center">
                      <div
                        className={`w-7 h-7 rounded-full bg-[#9DDDE0] flex justify-center items-center`}
                      >
                        <FaMoneyBillWaveAlt />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h1 className={`text-sm text-[#9DDDE0]`}>
                        Appoinment pending
                      </h1>
                      <div className="flex gap-2 items-center justify-between text-xs w-fit">
                        <div>
                          <span className="text-tatto-dark-blue font-bold">
                            March 16, 2021
                          </span>
                        </div>
                        <div className="h-3 w-[1px] bg-mid-gray"></div>
                        <div>
                          <span className="text-tatto-muted text-xs">
                            10:30 AM
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <IoIosArrowForward className="text-tatto-muted text-xl" />
                  </div>
                </div>
              </TimeLineStatusCard>
              {/* Hidden Details Card */}
              <TimeLineStatusCard cardStatu={true} proccessStatus={true}>
                {/* Date and Time */}
                {/* Date and Time */}
                <div className="w-fit flex flex-col gap-1">
                  <div className="flex gap-2 items-center justify-between text-xs w-fit">
                    <div>
                      <span className="text-tatto-dark-blue font-bold">
                        March 16, 2021
                      </span>
                    </div>
                    <div className="h-3 w-[1px] bg-mid-gray"></div>
                    <div>
                      <span className="text-tatto-muted text-xs">10:30 AM</span>
                    </div>
                  </div>
                  <div className="text-xs">
                    <span className="flex text-tatto-muted">
                      Status changed - &nbsp;
                      <p className="font-bold text-tatto-dark-blue">filled</p>
                      &nbsp; to &nbsp;
                      <p className="font-bold text-tatto-dark-blue">filled</p>
                      &nbsp; by
                    </span>
                  </div>
                </div>
                {/*  */}
                <div className="relative w-44 h-28 flex gap-10 bg-white border items-center rounded-md mt-4 cursor-pointer">
                  <div className="w-full h-full blur-sm text-center">
                    <h1 className="text-xs mt-2">Some This is Here</h1>
                  </div>
                  {/* Top */}
                  <div className="absolute w-full text-center h-full flex flex-col justify-end ">
                    <div className="flex justify-center items-center text-2xl w-8 h-8 rounded-full border border-black mx-auto mb-1">
                      <GoLock />
                    </div>
                    <div className="mb-1">
                      <h1 className="text-md font-semibold">Consent Form</h1>
                    </div>
                    <div className="flex gap-2 items-center justify-center text-[10px] w-full mb-2">
                      <div>
                        <span className="text-tatto-dark-blue font-bold">
                          March 16, 2021
                        </span>
                      </div>
                      <div className="h-3 w-[1px] bg-mid-gray"></div>
                      <div>
                        <span className="text-tatto-muted">10:30 AM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TimeLineStatusCard>
              {/* Full Payment */}
              <TimeLineStatusCard cardStatu={true} proccessStatus={true}>
                <div className="w-fit relative flex gap-10 bg-white border items-center rounded-md px-4 py-3 mt-4">
                  {/*  */}
                  <div className="flex gap-2 items-center justify-between text-[9px] w-fit absolute -top-2 left-1">
                    <div>
                      <span className="text-tatto-dark-blue font-bold">
                        March 16, 2021
                      </span>
                    </div>
                    <div className="h-3 w-[1px] bg-mid-gray"></div>
                    <div>
                      <span className="text-tatto-muted">10:30 AM</span>
                    </div>
                  </div>
                  {/*  */}
                  <div className="flex gap-2 items-center">
                    <div className="flex justify-center items-center">
                      <div className="w-7 h-7 rounded-full bg-[#9DDDE0] flex justify-center items-center">
                        <FaMoneyBillWaveAlt />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h1 className="text-sm text-[#9DDDE0]">
                        Lufthansa LH1445
                      </h1>
                      <div className="flex gap-2 items-center justify-between text-xs w-fit">
                        <div>
                          <span className="text-tatto-dark-blue font-bold">
                            March 16, 2021
                          </span>
                        </div>
                        <div className="h-3 w-[1px] bg-mid-gray"></div>
                        <div>
                          <span className="text-tatto-muted text-xs">
                            10:30 AM
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <IoIosArrowForward className="text-tatto-muted text-xl" />
                  </div>
                </div>
              </TimeLineStatusCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastVisitsDetail;
