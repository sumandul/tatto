"use client";
import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const ServicesToggleCard = dynamic(()=>import("@/app/components/ServicesToggleCardExtra"),{
  ssr:false
})

const Staff = () => {
  const [fullColorSwitch, setFullColorSwitch] = useState(true);
  const [balayageSwitch, setBalayageSwitch] = useState(true);
  const [creativeColorSwitch, setCreativeColorSwitch] = useState(true);
  const [glossSwitch, setGlossSwitch] = useState(true);
  const [consultationSwitch, setConsultationSwitch] = useState(true);
  // AO
  const [fullColorAO, setFullColorAO] = useState(false);
  const [balayageAO, setBalayageAO] = useState(false);
  const [creativeColorAO, setCreativeColorAO] = useState(false);
  const [glossAO, setglossAO] = useState(false);
  //
  const [jimHalpertAmountType, setjimHalpertAmountType] = useState("dollar");
  const [angelaMartinAmountType, setAngelaMartinAmountType] =
    useState("dollar");
  const [dwightSchruteAmountType, setDwightSchruteAmountType] =
    useState("dollar");
  const [pamBeeslyAmountType, setPamBeeslyAmountType] = useState("dollar");

  // Enable Online Booking
  const [onlineStatus1, setOnlineStatus1] = useState(false);
  const [onlineStatus2, setOnlineStatus2] = useState(false);
  const [onlineStatus3, setOnlineStatus3] = useState(false);
  const [onlineStatus4, setOnlineStatus4] = useState(false);
  return (
    <div className="relative">
      <div className="w-full h-12 bg-head-pink mb-4 border-2 rounded-lg px-6 py-4 flex items-center justify-between">
        <h1 className="font-bold">Staff Members</h1>
        <div>
          <h1 className="text-sm font-semibold">
            To add a service provider go to{" "}
            <Link href={"#"} className="text-tatto-dark-blue underline">
              Staff Members
            </Link>
          </h1>
        </div>
      </div>

      <div
        className="flex flex-col gap-4 overflow-y-scroll pb-16 hide-scrollbar"
        style={{ height: "27rem" }}
      >
        {/*  */}
        <ServicesToggleCard
          id={"JimHalpert"}
          title={"Jim Halpert"}
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
          //
          //
          AmountCalcType={jimHalpertAmountType}
          handleAmountCalcType={(e) => setjimHalpertAmountType(e)}
          //
          onlineId={"1"}
          onlineBookingStatus={onlineStatus1}
          handleOnlineBookingStatus={() => setOnlineStatus1(!onlineStatus1)}
          onlineBookingLink={"somewhere"}
        />
        {/*  */}
        <ServicesToggleCard
          id={"AngelaMartin"}
          title={"Angela Martin"}
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
          //
          //
          AmountCalcType={angelaMartinAmountType}
          handleAmountCalcType={(e) => setAngelaMartinAmountType(e)}
          //
          onlineId={"2"}
          onlineBookingStatus={onlineStatus2}
          handleOnlineBookingStatus={() => setOnlineStatus2(!onlineStatus2)}
          onlineBookingLink={"somewhere"}
        />
        {/*  */}
        <ServicesToggleCard
          id={"DwightSchrute"}
          title={"Dwight Schrute"}
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
          //
          //
          AmountCalcType={dwightSchruteAmountType}
          handleAmountCalcType={(e) => setDwightSchruteAmountType(e)}
          //
          onlineId={"3"}
          onlineBookingStatus={onlineStatus3}
          handleOnlineBookingStatus={() => setOnlineStatus3(!onlineStatus3)}
          onlineBookingLink={"somewhere"}
        />
        {/*  */}
        <ServicesToggleCard
          id={"PamBeesly"}
          title={"Pam Beesly"}
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
          //
          //
          AmountCalcType={pamBeeslyAmountType}
          handleAmountCalcType={(e) => setPamBeeslyAmountType(e)}
          //
          onlineId={"4"}
          onlineBookingStatus={onlineStatus4}
          handleOnlineBookingStatus={() => setOnlineStatus4(!onlineStatus4)}
          onlineBookingLink={"somewhere"}
        />
      </div>
    </div>
  );
};

export default Staff;
