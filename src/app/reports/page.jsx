import React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
const MobileHeader = dynamic(()=>import("@/app/partails/MobileHeader"),{
  ssr:false
   
 })

const ReportCard = ({ CardTitle, CardDescription, links }) => {
  return (
    <div className="rounded-lg overflow-hidden border-2 shadow-lg">
      {/* Header */}
      <div className="flex flex-col gap-0 bg-head-pink px-4 border-b-2 py-2 leading-none">
        <h1 className="text-md font-bold">{CardTitle}</h1>
        <span className="text-xs text-gray-500">{CardDescription}</span>
      </div>
      {/* body */}
      <div className=" bg-white">
        {links.map((link, idx) => {
          return (
            <div key={idx} className="border-b-2 last:border-b-0 ">
              <Link
                href={link.linkHref}
                className="flex justify-between items-center py-3 px-4 "
              >
                <h1 className="text-gray-500">{link.linkName}</h1>
                <Image
                  width={40}
                  height={40}
                  className="w-2"
                  src="/png_icons/arrow-right.png"
                  alt=""
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Reports = () => {
  return (
    <div>
      {/* Header */}
      <MobileHeader headerTitle={"Reports"} backTo={""} />
      {/* body */}
      <div className="pt-2">
        {/* Cards */}
        <div className="flex flex-col gap-4">
          {/* Staff Card */}
          <ReportCard
            CardTitle={"STAFF"}
            CardDescription={
              "Analyse the performance of members,channels and more"
            }
            links={[
              {
                linkName: "Payroll",
                linkHref: "reports/payroll",
              },
              {
                linkName: "Service & Product Sales By Staff",
                linkHref: "somewhere",
              },
              {
                linkName: "Time Clock",
                linkHref: "somewhere",
              },
              {
                linkName: "Days Off",
                linkHref: "somewhere",
              },
            ]}
          />
          {/* SALES Card */}
          <ReportCard
            CardTitle={"SALES"}
            CardDescription={
              "Analyse the performance of members,channels and more"
            }
            links={[
              {
                linkName: "Sales Summary",
                linkHref: "somewhere",
              },
              {
                linkName: "Service Sales",
                linkHref: "somewhere",
              },
              {
                linkName: "Product Sales",
                linkHref: "somewhere",
              },
              {
                linkName: "Sales by Time Period",
                linkHref: "somewhere",
              },
            ]}
          />
          {/* GIFT CARDS Card */}
          <ReportCard
            CardTitle={"GIFT CARDS"}
            CardDescription={
              "Analyse the performance of members,channels and more"
            }
            links={[
              {
                linkName: "Gift Card Usage",
                linkHref: "somewhere",
              },
              {
                linkName: "Gift Card Balances",
                linkHref: "somewhere",
              },
              {
                linkName: "Gift Cards Sales",
                linkHref: "somewhere",
              },
            ]}
          />
          {/* PAYMENTS Card */}
          <ReportCard
            CardTitle={"PAYMENTS"}
            CardDescription={
              "Analyse the performance of members,channels and more"
            }
            links={[
              {
                linkName: "Payment Summary",
                linkHref: "somewhere",
              },
              {
                linkName: "Payment Details",
                linkHref: "somewhere",
              },
              {
                linkName: "Cash Drawer Activity",
                linkHref: "somewhere",
              },
              {
                linkName: "Deposits Collected",
                linkHref: "somewhere",
              },
            ]}
          />
          {/* INVENTORY Card */}
          <ReportCard
            CardTitle={"INVENTORY"}
            CardDescription={
              "Analyse the performance of members,channels and more"
            }
            links={[
              {
                linkName: "Cost of Goods",
                linkHref: "somewhere",
              },
              {
                linkName: "Product Invertory",
                linkHref: "somewhere",
              },
              {
                linkName: "Product Usage",
                linkHref: "somewhere",
              },
            ]}
          />
          {/* BUSINESS Card */}
          <ReportCard
            CardTitle={"BUSINESS"}
            CardDescription={
              "Analyse the performance of members,channels and more"
            }
            links={[
              {
                linkName: "Cashflow",
                linkHref: "somewhere",
              },
              {
                linkName: "Business Intelligence: Appointments",
                linkHref: "somewhere",
              },
              {
                linkName: "Business Intelligence: Forecast",
                linkHref: "somewhere",
              },
              {
                linkName: "Business Intelligence: Sales",
                linkHref: "somewhere",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Reports;
