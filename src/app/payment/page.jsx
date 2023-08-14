import React from "react"
import Header from "../components/Header"
import dynamic from "next/dynamic"
const Header = dynamic(()=>import("./components/Header"),{
  ssr:false
})

const Page = () => {
  return (
    <div>
      <div className="px-1 py-2">
        {/* ?Header */}
        <Header />
        {/* ?Hero Scetion */}
        <div className="bg-white py-4 my-6 px-4 rounded-2xl border border-[rgba(0,0,0,0.15)]">
          <div className="">
            <div className="">
              <div className="flex bg-white rounded-t-2xl border-l border-r border-t border-[rgba(0,0,0,0.15)] items-center justify-between px-6 py-5">
                <h2 className="text-[#3B3840] text-base not-italic font-bold leading-6">
                  Subtotal
                </h2>
                <h5 className="text-[#838187] text-sm not-italic font-bold leading-[22px]">
                  $120.00
                </h5>
              </div>
              <div className="flex bg-white  border border-[rgba(0,0,0,0.15)] items-center justify-between px-6 py-5">
                <div className="flex gap-3 items-center">
                  <h2 className="text-[#3B3840] text-base not-italic font-bold leading-6">
                    Tip
                  </h2>
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="bg-[#2B324D] px-2 py-0.5 rounded-full">
                      <h5 className="text-white text-sm not-italic font-bold leading-[22px]">
                        18%
                      </h5>
                    </div>
                    <div className="bg-[#2B324D] px-2 py-0.5 rounded-full">
                      <h5 className="text-white text-sm not-italic font-bold leading-[22px]">
                        20%
                      </h5>
                    </div>
                    <div className="bg-[#2B324D] px-2 py-0.5 rounded-full">
                      <h5 className="text-white text-sm not-italic font-bold leading-[22px]">
                        22%
                      </h5>
                    </div>
                  </div>
                </div>
                <div className=" border rounded-lg items-center flex">
                  <h5 className="text-[#838187] pl-2  text-sm not-italic font-bold leading-[22px]">
                    $
                  </h5>
                  <input
                    className="text-[#838187] outline-none w-14 py-1 px-2  text-sm not-italic font-bold leading-[22px]"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex bg-white rounded-b-2xl border-l border-b border-r border-[rgba(0,0,0,0.15)] items-center justify-between px-6 py-5">
                <h2 className="text-[#3B3840] text-base not-italic font-bold leading-6">
                  Total
                </h2>
                <h5 className="text-[#838187] text-sm not-italic font-bold leading-[22px]">
                  $120.00
                </h5>
              </div>
            </div>
          </div>
          <div className="px-2 py-4">
            <h2 className="text-[#3B3840] text-base not-italic font-bold leading-6">
              Otherr Payment Type
            </h2>
            <h5 className="text-[#838187] py-2 text-sm not-italic font-semibold leading-[22px]">
              A Text message will be sent t the following phone number:
            </h5>
            <div className="">
              <div className="">
                <h2 className="text-[#3B3840] py-2 text-base not-italic font-bold leading-6">
                  Phone Number
                </h2>
                <div className="">
                  <input
                    placeholder="Enter Phone Number"
                    type="text"
                    className="border w-full outline-none px-6 py-4 rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6 justify-between py-4">
            <button className="bg-white border text-black w-full rounded-full py-1.5 text-sm not-italic font-bold leading-[22px]">
              Cancel
            </button>
            <button className="bg-[#2B324D] w-full rounded-full py-1.5 text-white text-sm not-italic font-bold leading-[22px]">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
