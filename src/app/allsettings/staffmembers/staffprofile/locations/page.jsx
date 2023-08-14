"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const SmallToggleSwitch = dynamic(()=>import("@/app/components/SmallToggleSwitch"),{
  ssr:false
})
//

const Locations = () => {
  const [blueJeans, setBlueJeans] = useState(true);
  const [JKW, setJKW] = useState(true);

  return (
    <>
      <div className="flex flex-col gap-4">
        <SmallToggleSwitch
          id="blueJeans"
          title={`Blue Jeans`}
          status={blueJeans}
          handleSwitch={() => setBlueJeans(!blueJeans)}
        />
        <SmallToggleSwitch
          id="JKW"
          title={`JKW`}
          status={JKW}
          handleSwitch={() => setJKW(!JKW)}
        />
      </div>
    </>
  );
};

export default Locations;
