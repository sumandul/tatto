"use client";
import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
const ServicesToggleCard =  dynamic(()=>import("@/app/components/ServicesToggleCard"),{
  ssr:false
})

const Services = () => {
  const [fullColorSwitch, setFullColorSwitch] = useState(true);
  const [balayageSwitch, setBalayageSwitch] = useState(true);
  const [creativeColorSwitch, setCreativeColorSwitch] = useState(true);
  const [glossSwitch, setGlossSwitch] = useState(true);
  const [consultationSwitch, setConsultationSwitch] = useState(true);

  // Disable Enable Option
  const [enableAll, setEnableAll] = useState(false);
  const [disableAllPopup, setdisableAllPopup] = useState(false);
  // AO
  const [fullColorAO, setFullColorAO] = useState(false);
  const [balayageAO, setBalayageAO] = useState(false);
  const [creativeColorAO, setCreativeColorAO] = useState(false);
  const [glossAO, setglossAO] = useState(false);
  const [consultationAO, setConsultationAO] = useState(false);

  const handleEnable = () => {
    if (!enableAll) {
      setdisableAllPopup(true);
    } else {
      setEnableAll(false);
      setFullColorSwitch(true);
      setBalayageSwitch(true);
      setCreativeColorSwitch(true);
      setGlossSwitch(true);
      setConsultationSwitch(true);
    }
  };

  const confirmDisableAll = () => {
    setEnableAll(true);
    setFullColorSwitch(false);
    setBalayageSwitch(false);
    setCreativeColorSwitch(false);
    setGlossSwitch(false);
    setConsultationSwitch(false);
    setdisableAllPopup(false);
    // AO
    setFullColorAO(false);
    setBalayageAO(false);
    setCreativeColorAO(false);
    setglossAO(false);
    setConsultationAO(false);
  };

  return (
    <>
      <div className="relative">
        <div className="w-full h-12 bg-head-pink mb-4 border-2 rounded-lg px-6 py-4 flex items-center justify-between">
          <h1 className="font-bold">Services</h1>
          <div onClick={handleEnable}>
            <Image
              className="w-20"
              src={
                !enableAll
                  ? "/png_icons/disable-all-btn.png"
                  : "/png_icons/enable-all-btn.png"
              }
              alt=""
              width={40}
              height={40}
            />
          </div>
        </div>

        <div
          className="flex flex-col gap-4 overflow-y-scroll pb-16 hide-scrollbar"
          style={{ height: "27rem" }}
        >
          {/*  */}
          <ServicesToggleCard
            id={"fullColor"}
            title={"Full Color"}
            status={fullColorSwitch}
            handleSwitch={() => {
              setFullColorSwitch(!fullColorSwitch);
              setFullColorAO(false);
            }}
            additionalOptions={fullColorAO}
            showAO={() => {
              setFullColorAO(true);
              setFullColorSwitch(true);
            }}
          />
          {/*  */}
          <ServicesToggleCard
            id={"Balayage"}
            title={"Balayage"}
            status={balayageSwitch}
            handleSwitch={() => {
              setBalayageSwitch(!balayageSwitch);
              setBalayageAO(false);
            }}
            additionalOptions={balayageAO}
            showAO={() => {
              setBalayageAO(true);
              setBalayageSwitch(true);
            }}
          />
          {/*  */}
          <ServicesToggleCard
            id={"Creative Color"}
            title={"Creative Color"}
            status={creativeColorSwitch}
            handleSwitch={() => {
              setCreativeColorSwitch(!creativeColorSwitch);
              setCreativeColorAO(false);
            }}
            additionalOptions={creativeColorAO}
            showAO={() => {
              setCreativeColorAO(true);
              setCreativeColorSwitch(true);
            }}
          />
          {/*  */}
          <ServicesToggleCard
            id={"Gloss"}
            title={"Gloss"}
            status={glossSwitch}
            handleSwitch={() => {
              setGlossSwitch(!glossSwitch);
              setglossAO(false);
            }}
            additionalOptions={glossAO}
            showAO={() => {
              setglossAO(true);
              setGlossSwitch(true);
            }}
          />
          {/*  */}
          <ServicesToggleCard
            id={"Consultation"}
            title={"Consultation"}
            status={consultationSwitch}
            handleSwitch={() => {
              setConsultationSwitch(!consultationSwitch);
              setConsultationAO(false);
            }}
            additionalOptions={consultationAO}
            showAO={() => {
              setConsultationAO(true);
              setConsultationSwitch(true);
            }}
          />
        </div>

        {/* send invite Modal */}
        <div
          className={`w-full h-full fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center ${
            disableAllPopup ? "visible" : "hidden"
          }`}
          style={{ background: "#00000090" }}
        >
          {/* Modal Inner */}
          <div className="w-2/5 bg-white rounded-lg">
            {/* Modal Head */}
            <div className="border-b-2">
              <div className="px-6 py-5">
                <h1 className="font-extrabold text-lg">
                  Disable Service Category
                </h1>
              </div>
            </div>
            {/* Modal Body */}
            <div className="px-6 py-6">
              {/* Body */}
              <div className="flex flex-col gap-4">
                <span className="text-md font-semibold text-center">
                  Please confirm that you want to disable all the services
                </span>
              </div>
              {/* Buttons */}
              <div className="flex justify-center items-center gap-4 mt-10">
                <button
                  className="px-4 py-2 border-2 border-tatto-dark-blue rounded-lg text-tatto-dark-blue font-semibold"
                  onClick={() => setdisableAllPopup(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 border-2 border-tatto-dark-blue rounded-lg bg-tatto-dark-blue font-semibold text-white"
                  onClick={confirmDisableAll}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
