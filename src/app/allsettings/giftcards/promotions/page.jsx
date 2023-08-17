"use client";
import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
const GiftCards = dynamic(()=>import('../page'),{
  ssr:false
})

const Promotions = () => {
  const [addPromotion, setAddpromotion] = useState(false);

  const [isPromotionAdded, setisPromotionAdded] = useState(false);

  const [edit, setEdit] = useState(false);

  const [deleteModal, setDeleteModal] = useState(false);

  return (
    <GiftCards>
      <div className="w-full bg-white  rounded-xl p-0">
        {/* Heading */}
        <div className="border-b-2 w-full py-4 px-6 font-extrabold flex justify-between items-center">
          Promotions
          <button
            className="bg-tatto-dark-blue text-white flex justify-around items-center gap-2 text-sm rounded-md px-4 py-1.5"
            onClick={() => setAddpromotion(true)}
          >
            <Image
              width={40}
              height={40}
              className="w-4"
              src="/png_icons/add-white.png"
              alt=""
            />
            Add Promotion
          </button>
        </div>
        {/* Body Content */}
        <div className="overflow-y-scroll hide-scrollbar p-4">
          {/*  Window Card */}
          <div
            className={`basic__details__holder px-6 pb-4 bg-white ${
              !isPromotionAdded ? "visible" : "hidden"
            }`}
          >
            <div className="bg-body-pink rounded-xl border overflow-hidden h-full">
              {/*  Window Card Head */}
              <div className="flex justify-between px-4 py-2 bg-head-pink">
                <h1 className="font-bold self-center">
                  New gift card promotion
                </h1>
              </div>
              {/* Create Form */}
              {!addPromotion ? (
                //  Simple Form
                <div
                  className={`px-6 py-4 bg-white flex flex-col gap-6 justify-center items-center`}
                  style={{ height: "30.5rem" }}
                >
                  <span className="text-gray-500 text-md">
                    A promotion allows clients to purchase a gift card for a set
                    amount.
                  </span>
                </div>
              ) : (
                // Complete Form
                <div
                  className={`px-6 py-4 bg-white border-b-2 flex flex-col gap-6`}
                >
                  {/* This is Display Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="DisplayName" className="text-sm font-bold">
                      Display Name
                    </label>
                    <input
                      type="text"
                      id="DisplayName"
                      className="w-1/2 border rounded-md px-4 py-1.5 focus-visible:outline-none"
                      placeholder="e.g Valentine's Day Special"
                    />
                    <span className="text-xs text-gray-500">
                      Clients will see this as the name of the promotion when
                      they buy gift cards online.
                    </span>
                  </div>
                  {/* This is Description */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="Description" className="text-sm font-bold">
                      Description
                    </label>
                    <textarea
                      type="text"
                      rows={3}
                      id="Description"
                      className="w-full resize-none border rounded-md px-4 py-1.5 focus-visible:outline-none"
                      placeholder="What is this promotion all about?"
                    />
                  </div>
                  {/* This is Gift Card Value */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="giftCardValue"
                      className="text-sm font-bold"
                    >
                      Gift Card Value
                    </label>
                    <input
                      type="text"
                      id="giftCardValue"
                      className="w-1/2 border rounded-md px-4 py-1.5 focus-visible:outline-none"
                      placeholder="e.g $120.00"
                    />
                  </div>
                  {/* This is Gift Card Value */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="salePrice" className="text-sm font-bold">
                      Sale Price
                    </label>
                    <input
                      type="text"
                      id="salePrice"
                      className="w-1/2 border rounded-md px-4 py-1.5 focus-visible:outline-none"
                      placeholder="e.g $100.00"
                    />
                    <span className="text-xs text-gray-500">
                      This is the price that people have to pay to buy this gift
                      card.
                    </span>
                  </div>
                  {/* Select Dates */}
                  <div className="flex gap-2 w-1/2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="startDate" className="text-sm font-bold">
                        Start Date
                      </label>
                      <input type="date" name="" id="startDate" />
                      <span className="text-gray-500 text-sm">
                        This promotion will be active starting June 1, 2023 at
                        12:01am BST.
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="endDate" className="text-sm font-bold">
                        End Date
                      </label>
                      <input type="date" name="" id="endDate" />
                      <span className="text-gray-500 text-sm">
                        This promotion will stay active until deleted.
                      </span>
                    </div>
                  </div>
                  {/* Buttons */}
                  <div className="border-t-2 flex flex-row justify-end gap-4 p-4">
                    <button
                      class="px-6 py-2 border border-tatto-dark-blue text-tatto-dark-blue rounded-lg"
                      onClick={() => setAddpromotion(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      class="px-6 py-2 bg-tatto-dark-blue text-white rounded-lg"
                      onClick={() => setisPromotionAdded(true)}
                    >
                      Create
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/*  */}
          <div
            className={`basic__details__holder px-6 pb-4 bg-white ${
              isPromotionAdded ? "visible" : "hidden"
            }`}
          >
            <div className="bg-body-pink rounded-xl border overflow-hidden h-full">
              {/*  Window Card Head */}
              <div className="flex justify-between px-4 py-2 bg-head-pink">
                <h1 className="font-bold self-center">
                  New Years Special
                </h1>
                <div className="flex gap-2">
                  {/* Edit Button */}
                  <div
                    className="cursor-pointer w-8 h-8 flex justify-center items-center"
                    onClick={() => setEdit(true)}
                  >
                    <Image
                      width={40}
                      height={40}
                      src={
                        edit
                          ? "/png_icons/edit_active.png"
                          : "/png_icons/edit.png"
                      }
                      alt=""
                    />
                  </div>
                  {/* Delete Button */}
                  <div
                    className="cursor-pointer w-8 h-8 flex justify-center items-center"
                    onClick={() => setDeleteModal(true)}
                  >
                    <Image
                      width={40}
                      height={40}
                      src={"/png_icons/delete.png"}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/* Create Form */}
              {!edit ? (
                //  Simple Form
                <div className={`px-6 py-4 bg-body-pink flex flex-col gap-6`}>
                  {/* Details */}
                  <div className="flex flex-col gap-6">
                    {/* Description */}
                    <div className="flex flex-col gap-4">
                      <h1 className="text-md font-bold">Description</h1>
                      <span className="text-sm text-gray-500 ">
                        New year offers from 1 january to 15 january
                      </span>
                    </div>
                    {/* Gift Card Value */}
                    <div className="flex flex-col gap-4">
                      <h1 className="text-md font-bold">Gift Card Value</h1>
                      <span className="text-sm text-gray-500 ">$120.00</span>
                    </div>
                    {/* Sale Price */}
                    <div className="flex flex-col gap-4">
                      <h1 className="text-md font-bold">Sale Price</h1>
                      <span className="text-sm text-gray-500 ">$100.00</span>
                    </div>
                    {/* Start Date */}
                    <div className="flex flex-col gap-4">
                      <h1 className="text-md font-bold">Start Date</h1>
                      <span className="text-sm text-gray-500 ">
                        January 1, 2024
                      </span>
                    </div>
                    {/* End Date */}
                    <div className="flex flex-col gap-4">
                      <h1 className="text-md font-bold">End Date</h1>
                      <span className="text-sm text-gray-500 ">
                        January 15, 2024
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                // Complete Form
                <div
                  className={`px-6 py-4 bg-white border-b-2 flex overflow-y-scroll hide-scrollbar flex-col gap-6`}
                >
                  {/* This is Description */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="Description" className="text-sm font-bold">
                      Description
                    </label>
                    <textarea
                      type="text"
                      rows={3}
                      id="Description"
                      className="w-full resize-none border rounded-md px-4 py-1.5 focus-visible:outline-none"
                      placeholder="What is this promotion all about?"
                    />
                  </div>
                  {/* This is Gift Card Value */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="editGiftCardValue"
                      className="text-sm font-bold"
                    >
                      Gift Card Value
                    </label>
                    <input
                      type="text"
                      id="editGiftCardValue"
                      className="w-1/2 border rounded-md px-4 py-1.5 focus-visible:outline-none"
                      placeholder="e.g $120.00"
                    />
                  </div>
                  {/* This is Gift Card Value */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="editSalePrice"
                      className="text-sm font-bold"
                    >
                      Sale Price
                    </label>
                    <input
                      type="text"
                      id="editSalePrice"
                      className="w-1/2 border rounded-md px-4 py-1.5 focus-visible:outline-none"
                      placeholder="e.g $100.00"
                    />
                  </div>
                  {/* This is Gift Card Value */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="editStartDate"
                      className="text-sm font-bold"
                    >
                      Start Date
                    </label>
                    <input
                      type="text"
                      id="editStartDate"
                      className="w-1/2 border rounded-md px-4 py-1.5 focus-visible:outline-none"
                    />
                  </div>
                  {/* This is Gift Card Value */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="editEndDate" className="text-sm font-bold">
                      End Date
                    </label>
                    <input
                      type="text"
                      id="editEndDate"
                      className="w-1/2 border rounded-md px-4 py-1.5 focus-visible:outline-none"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="border-t-2 flex flex-row justify-end gap-4 p-4">
                    <button
                      class="px-6 py-2 border border-tatto-dark-blue text-tatto-dark-blue rounded-lg"
                      onClick={() => setEdit(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      class="px-6 py-2 bg-tatto-dark-blue text-white rounded-lg"
                      onClick={() => setEdit(false)}
                    >
                      Create
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Confirm Delete Modal */}
        <div
          className={`w-full h-full fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center ${
            deleteModal ? "visible" : "hidden"
          }`}
          style={{ background: "#00000090" }}
        >
          {/* Modal Inner */}
          <div className="w-2/5 bg-white rounded-lg">
            {/* Modal Head */}
            <div className="border-b-2">
              <div className="px-6 py-5">
                <h1 className="font-extrabold text-lg">
                  Delete Gift Card Promotion
                </h1>
              </div>
            </div>
            {/* Modal Body */}
            <div className="px-6 py-6">
              {/* Body */}
              <div className="flex flex-col gap-4">
                <span className="text-md font-semibold text-center">
                  Are you sure you want to delete the promotion New Year
                s Special?
                </span>
              </div>
              {/* Buttons */}
              <div className="flex justify-center items-center gap-4 mt-10">
                <button
                  className="px-4 py-2 border-2 border-tatto-dark-blue rounded-lg text-tatto-dark-blue font-semibold"
                  onClick={() => {
                    setEdit(false);
                    setDeleteModal(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 border-2 border-tatto-dark-blue rounded-lg bg-tatto-dark-blue font-semibold text-white"
                  onClick={() => {
                    setEdit(false);
                    setDeleteModal(false);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GiftCards>
  );
};

export default Promotions;
