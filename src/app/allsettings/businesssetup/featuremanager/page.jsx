"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
const BusinessSettings = dynamic(()=>import('../page'),{
  ssr:false
})
const ToggleSwitchCard = dynamic(()=>import('../../../components/ToggleSwitchCard'),{
  ssr:false,
})

const FeatureManager = () => {
  const [cashDrawer, setCashDrawer] = useState(false);
  const [giftCards, setGiftCards] = useState(true);
  const [purchaseOrder, setPurchaseOrder] = useState(true);
  const [waitList, setWaitList] = useState(false);
  const [integratedForms, setIntegratedForms] = useState(false);

  return (
    <BusinessSettings>
      {/* Head */}
      <div className="px-6 py-4 flex items-center bg-white border-b mb-4">
        <h1 className="font-extrabold text-md text-gray-800">
          Feature Manager
        </h1>
        <span className="text-gray-500 font-light text-sm ml-4 ">
          (Turn off features you don&apos;t need in order to keep TattooAdmin
          nice and tidy.)
        </span>
        <hr />
      </div>
      {/* body */}
      <div className="basic__details__holder px-4 pb-4 bg-white flex flex-col gap-5">
        <ToggleSwitchCard
          id="cashDrawer"
          icon={`/png_icons/cash.png`}
          title={`Cash Drawer`}
          description={`Maintain a cash drawer with daily counts, pay-ins. and more.`}
          status={cashDrawer}
          learnMoreLink={"somewhere"}
          handleSwitch={() => setCashDrawer(!cashDrawer)}
        />

        <ToggleSwitchCard
          id="giftCards"
          icon={`/png_icons/gift.png`}
          title={`Gift Cards`}
          description={`ell, manage, track, and redeem gift cards.`}
          status={giftCards}
          learnMoreLink={"somewhere"}
          handleSwitch={() => setGiftCards(!giftCards)}
        />

        <ToggleSwitchCard
          id="purchaseOrder"
          icon={`/png_icons/filter.png`}
          title={`Purchase Order`}
          description={`Create purchase orders and manage inventory received.`}
          status={purchaseOrder}
          learnMoreLink={"somewhere"}
          handleSwitch={() => setPurchaseOrder(!purchaseOrder)}
        />

        <ToggleSwitchCard
          id="waitList"
          icon={`/png_icons/filter.png`}
          title={`Waitlist`}
          description={`Track and manage waitlist entries and get alerts for openings.`}
          status={waitList}
          learnMoreLink={"somewhere"}
          handleSwitch={() => setWaitList(!waitList)}
        />

        <ToggleSwitchCard
          id="integratedForms"
          icon={`/png_icons/note.png`}
          title={`Integrated Forms`}
          description={`reate custom forms to gather important client information.`}
          status={integratedForms}
          learnMoreLink={"somewhere"}
          handleSwitch={() => setIntegratedForms(!integratedForms)}
        />
      </div>
      {/* Footer */}
    </BusinessSettings>
  );
};

export default FeatureManager;
