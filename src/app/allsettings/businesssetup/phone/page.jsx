import dynamic from "next/dynamic";
import React from "react";

const BusinessSettings = dynamic(()=>import('../page'),{
  ssr:false
})


const BusinessPhone = () => {
  return (
    <BusinessSettings>
      {/* Head */}
      <div className="px-6 py-4 flex items-center bg-white border-b mb-4">
        <h1 className="font-extrabold text-md text-gray-800">Phone Numbers</h1>
        <span className="text-gray-500 font-light text-sm ml-4 ">
          (Manage your business phone numbers.)
        </span>
        <hr />
      </div>
      {/* body */}
      <div className="basic__details__holder px-4 pb-4 bg-white">
        <div className="bg-body-pink rounded-xl border">
          <div className="flex flex-col gap-4 px-4 py-4">
            <h1 className="font-bold text-sm ">Phone Number</h1>
            <span className="text-sm font-semibold text-gray-500">
              020 8430 7171
            </span>
          </div>
        </div>
        <div className="px-1 mt-3">
          <div className="text-gray-500 font-light text-sm">
            <span>
              This is a unique phone number assigned to your business and will
              be used for all automated messages as well as Two-Way Texting.
            </span>
            <div className="flex">
              <p className="text-tatto-dark-blue font-bold mr-1">
                Assigned location(s):{" "}
              </p>{" "}
              Blue Jeans, JKW
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
    </BusinessSettings>
  );
};

export default BusinessPhone;
