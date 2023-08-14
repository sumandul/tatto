"use client";
import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const DesignCard = dynamic(()=>import('../../../components/DesignCard'),{
  ssr:false
})
const GiftCards = dynamic(()=>import('../page'),{
  ssr:false
})

const ArtWork = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleSelectedCard = (e) => {
    setSelectedCard(e.target.value);
  };

  return (
    <GiftCards>
      <div className="w-full bg-white rounded-xl p-0">
        {/* Heading */}
        <div className="border-b-2 w-full py-4 px-6 font-extrabold mb-4">
          Art Work
        </div>
        {/* Body Content */}
        <div className="overflow-y-scroll hide-scrollbar">
          {/*  Window Card */}
          <div className="basic__details__holder px-6 pb-4 bg-white">
            <div className="bg-body-pink rounded-xl border overflow-hidden">
              {/*  Window Card Head */}
              <div className="flex justify-between px-4 py-2 bg-head-pink">
                <h1 className="font-bold self-center">Select Artwork</h1>
              </div>
              {/* Window Card body */}
              <div className={`px-6 py-4 bg-white flex flex-col gap-4`}>
                {/*  */}
                <span className="text-sm text-gray-500">
                  Select a design that is shown on the online sales page and
                  included in the email message for the digital gift card.
                </span>
                <div className="grid grid-cols-3 gap-4">
                  <DesignCard
                    status={selectedCard}
                    handleRadio={handleSelectedCard}
                    radioBtnId={"design1"}
                    imagePath={"/png_icons/designcard.png"}
                  />

                  <DesignCard
                    status={selectedCard}
                    handleRadio={handleSelectedCard}
                    radioBtnId={"design2"}
                    imagePath={"/png_icons/designcard.png"}
                  />

                  <DesignCard
                    status={selectedCard}
                    handleRadio={handleSelectedCard}
                    radioBtnId={"design3"}
                    imagePath={"/png_icons/designcard.png"}
                  />

                  <DesignCard
                    status={selectedCard}
                    handleRadio={handleSelectedCard}
                    radioBtnId={"design4"}
                    imagePath={"/png_icons/designcard.png"}
                  />

                  <DesignCard
                    status={selectedCard}
                    handleRadio={handleSelectedCard}
                    radioBtnId={"design5"}
                    imagePath={"/png_icons/designcard.png"}
                  />

                  <DesignCard
                    status={selectedCard}
                    handleRadio={handleSelectedCard}
                    radioBtnId={"design6"}
                    imagePath={"/png_icons/designcard.png"}
                  />
                </div>
                <div className="border-2 cursor-pointer rounded-lg border-dashed w-full flex flex-col gap-2 p-6 bg-body-pink items-center">
                  <div>
                    <Image
                      width={40}
                      height={40}
                      className="w-6"
                      src="/png_icons/arrow-up.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">
                      Upload your own design (800 x 500px)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GiftCards>
  );
};

export default ArtWork;
