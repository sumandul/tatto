"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const ToggleSwitchCard = dynamic(()=>import('../../../components/ToggleSwitchCard'),{
  ssr:false,
})
const BusinessSettings = dynamic(()=>import('../page'),{
  ssr:false,
})

const AdvancedSettings = () => {
  const [clientToggle, setClientToggle] = useState(true);
  const [onlineOwnerShip, setOnlineOwnerShip] = useState(true);
  const [workSchedule, setWorkSchedule] = useState(false);

  const handleClientOwnerShip = () => {
    setClientToggle(!clientToggle);
  };

  const handleOnlineOwnerShip = () => {
    setOnlineOwnerShip(!onlineOwnerShip);
  };
  // handleWorkSchedule
  const handleWorkSchedule = () => {
    setWorkSchedule(!workSchedule);
  };

  return (
    <BusinessSettings>
      {/* Head */}
      <div className="px-6 py-4 flex items-center bg-white border-b mb-4">
        <h1 className="font-extrabold text-md text-gray-800">
          Advanced Settings
        </h1>
        <span className="text-gray-500 font-light text-sm ml-4 ">
          (Manage advanced settings like client ownership for booth renter
          business structures where client lists are kept separate)
        </span>
        <hr />
      </div>
      {/* body */}
      <div className="basic__details__holder px-4 pb-4 bg-white flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-md text-gray-800">Contact details</h1>

          <ToggleSwitchCard
            icon={""}
            id="enableClient"
            title={`Enable client ownership`}
            description={`When enabled, a staff member can be assigned as the "owner" of clients. This setting allows staff members to
                    only have access to their own clients and information and will make it possible to hide other providers' clients.`}
            status={clientToggle}
            learnMoreLink={""}
            handleSwitch={handleClientOwnerShip}
          />

          <ToggleSwitchCard
            icon={""}
            id="onlineOwnership"
            title={`Online booking ownership assignment`}
            description={`When enabled, the selected service provider will be assigned as the owner of new clients that book through
                                online booking. This ownership assignment will only apply to newly created clients.`}
            status={onlineOwnerShip}
            learnMoreLink={""}
            handleSwitch={handleOnlineOwnerShip}
          />
        </div>

        {/*  */}
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-md text-gray-800">
            Work Schedule Overlap
          </h1>
          <ToggleSwitchCard
            icon={""}
            id="workSchedule"
            description={`For staff members that work at more than one location, allow their work schedules to overlap across multiple locations.`}
            status={workSchedule}
            learnMoreLink={""}
            handleSwitch={handleWorkSchedule}
          />
        </div>
      </div>
      {/* Footer */}
    </BusinessSettings>
  );
};

export default AdvancedSettings;
