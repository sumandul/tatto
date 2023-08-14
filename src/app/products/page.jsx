"use client";
import React, { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import dynamic from "next/dynamic";
 const MobileHeader = dynamic(()=>import("@/app/partails/MobileHeader"),{
  ssr:false
 })
 const MobileFooter = dynamic(()=>import("@/app/partails/MobileFooter"),{
  ssr:false
 })

const Products = () => {
  const [editZoomLevel, setEditZoomLevel] = useState(false);

  const [weekStartsOn, setWeekStartsOn] = useState("Monday");

  const productsData = [
    {
      feildName: "Business name",
      value: "Katewil",
    },
    {
      feildName: "Category",
      value: "Lash Care",
    },
    {
      feildName: "Unit price",
      value: "$22",
    },
    {
      feildName: "Charge tax",
      value: "Yes",
    },
    {
      feildName: "Purchase cost",
      value: "$67.90",
    },
    {
      feildName: "Supplier",
      value: "Cosmo Prof",
    },
    {
      feildName: "Track inventory",
      value: "Yes",
    },
    {
      feildName: "Desired quantity on hand",
      value: "6",
    },
    {
      feildName: "Commission enabled",
      value: "Yes",
    },
    {
      feildName: "Assign staff to sale",
      value: "Yes",
    },
    {
      feildName: "Automatically add to new sales",
      value: "No",
    },
    {
      feildName: "Stock - katewil",
      value: "7 units",
    },
    {
      feildName: "Inventory Changes",
      value: "Locaion: Ooop",
    },
  ];

  return (
    <>
      <MobileHeader backTo={""} headerTitle={"Product"} />
      <div className="pt-2">
        <div className="mt-2 flex justify-between items-center">
          <span className="text-sm text-gray-500">
            Lash Detox Foaming Cleanser
          </span>
          {!editZoomLevel ? (
            <button
              className="bg-tatto-dark-blue text-white py-1 px-10 rounded-full"
              onClick={() => setEditZoomLevel(true)}
            >
              Edit
            </button>
          ) : (
            <button
              className="bg-tatto-dark-blue text-white py-1 px-10 rounded-full"
              onClick={() => setEditZoomLevel(false)}
            >
              Save
            </button>
          )}
        </div>
        {/* Card */}
        <div className="rounded-xl bg-white px-6 py-4 mt-4 border-2">
          <div className="flex flex-col gap-6">
            {/*  */}

            {productsData.map((products, idx) => {
              return (
                <div key={idx} className="flex flex-col gap-2">
                  <span className="text-sm font-semibold">
                    {products.feildName}
                  </span>
                  <span className="text-sm text-gray-500">
                    {products.value}
                  </span>
                </div>
              );
            })}
            <div className="border rounded-full px-4 py-2 w-fit flex items-center gap-2 text-sm text-gray-500">
              <FiPlusCircle className="text-xl" />
              ADD CHANGE
            </div>
          </div>
        </div>
      </div>
      <MobileFooter />
    </>
  );
};

export default Products;
