"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
const SmallToggleSwitch = dynamic(()=>import('../../../components/SmallToggleSwitch'),{
  ssr:false
})
const GiftCards = dynamic(()=>import('../page'),{
  ssr:false
})


const OnlineSales = () => {
  const [purchesOnlineSwitch, setPurchesOnlineSwitch] = useState(false);

  return (
    <GiftCards>
      <div className="w-full bg-white rounded-xl p-0">
        {/* Heading */}
        <div className="border-b-2 w-full py-4 px-6 font-extrabold mb-4">
          Online Sales
        </div>
        {/* Body Content */}
        <div className="pb-4 overflow-y-scroll hide-scrollbar">
          {/*  Window Card */}
          <div className="basic__details__holder px-6 pb-4 bg-white">
            <div className="bg-body-pink rounded-xl border overflow-hidden">
              {/*  Window Card Head */}
              <div className="flex justify-between px-4 py-2 bg-head-pink">
                <h1 className="font-bold self-center">Enable Online Sales</h1>
              </div>
              {/* Window Card body */}
              <div className={`px-6 py-4 bg-white flex flex-col gap-6`}>
                {/*  */}
                <SmallToggleSwitch
                  id="blueJeans"
                  title={``}
                  description={
                    "Allow clients to purchase gift cards through a direct link, embedded on your website, or through online booking."
                  }
                  status={purchesOnlineSwitch}
                  handleSwitch={() =>
                    setPurchesOnlineSwitch(!purchesOnlineSwitch)
                  }
                />

                <div>
                  <span className="text-sm font-bold">
                    Shareable booking link
                  </span>
                  <Link href="https://booking.tattooadmin.com/">
                    <span className="ml-4 text-sm text-blue-600">
                      https://booking.tattooadmin.com/
                    </span>
                  </Link>
                </div>

                <div className="bg-body-pink p-4 flex flex-col gap-1 rounded-lg">
                  <div>
                    <span className="text-sm font-semibold flex items-center gap-2">
                      <Image
                        className="w-4"
                        src="/png_icons/brifecase-tick.png"
                        alt=""
                        width={40}
                        height={40}
                      />
                      TattooAdmin Pay account is required
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">
                      A Mangomint pay account is required to use Online Gift
                      Cards.
                    </span>
                  </div>
                  <Link
                    href=""
                    className="text-green-500 text-sm underline font-bold"
                  >
                    <span>Sign Up for TattooAdmin Pay</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="basic__details__holder px-6 pb-4 bg-white">
            <div className="bg-body-pink rounded-xl border overflow-hidden">
              {/*  Window Card Head */}
              <div className="flex justify-between px-4 py-2 bg-head-pink">
                <h1 className="font-bold self-center">Enable Online Sales</h1>
              </div>
              {/* Window Card body */}
              <div className={`px-6 py-4 bg-white flex flex-col gap-6`}>
                {/*  */}
                <span className="text-sm text-gray-500">
                  ntegrate online sales of gift cards directly on your website
                  as an overlay window that appears when people click any button
                  or link, allowing them to buy a gift card without leaving your
                  website.
                </span>
                <div className="flex flex-col gap-3">
                  {/* Step one 1 */}
                  <div className="basic__details__holder  bg-white">
                    <div className="bg-body-pink rounded-xl border overflow-hidden">
                      {/*  Window Card Head */}
                      <div className="flex items-center gap-4 px-4 py-2 bg-body-pink">
                        <h1 className="font-bold self-center">Step 1</h1>
                        <span className="text-xs text-gray-500">
                          (Add this code to your website (copy & paste to HTML
                          header):
                        </span>
                      </div>
                      {/* Window Card body */}
                      <div className={`px-6 py-4 bg-white flex flex-col gap-6`}>
                        {/*  */}
                        <span className="w-96 text-sm">
                          &lt;script&gt; window.Mangomint = window.Mangomint ||{" "}
                          {}; window.Mangomint.CompanyId = 901722;
                          &lt;/script&gt; &lt;script
                          src=&quot;https://booking.mangomint.com/app.js&quot;
                          async&gt;&lt;/script&gt;
                        </span>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <span className="text-xs text-gray-500 mb-4">
                    Please note: if you have already added this code for
                    embedded online booking. this step is not needed and you can
                    just use the embed link below.
                  </span>
                  {/*  */}
                  {/* Step two 2 */}
                  <div className="basic__details__holder bg-white">
                    <div className="bg-body-pink rounded-xl border overflow-hidden">
                      {/*  Window Card Head */}
                      <div className="flex justify-between px-4 py-2 bg-body-pink">
                        <h1 className="font-bold self-center">Step 2</h1>
                      </div>
                      {/* Window Card body */}
                      <div className={`px-6 py-4 bg-white flex flex-col gap-2`}>
                        {/*  */}
                        <span className="text-sm">
                          Use this link for any buttons or links that you would
                          like to open in an overlay:
                        </span>
                        <Link
                          href="#"
                          className="text-sm text-blue-700 font-semibold"
                        >
                          https://booking.tattooadmin.com/0839962
                        </Link>
                      </div>
                    </div>
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

export default OnlineSales;
