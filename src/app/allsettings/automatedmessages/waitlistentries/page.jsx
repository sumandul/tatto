"use client";
import React, { useState } from "react";
import AutomatedMessages from "../page";
import AutomatedCard from "@/app/components/AutomatedCard";
import CreateCard from "../components/CreateCard";
import AddCondition from "../components/AddCondition";
import { FaRegCalendarCheck } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { BsChatDots, BsPlusCircleFill } from "react-icons/bs";
import SendEmail from "../components/SendEmail";
import SendTestModal from "../components/SendTestModal";
import SendText from "../components/SendText";
import DeleteModal from "../components/DeleteModal";
import ConnectorLine from "../components/ConnectorLine";

const WaitlistEntries = () => {
  //

  const [clientAddedWaitlist, setClientAddedWaitlist] = useState({
    email: true,
    textMessage: true,
    setLimit: 1,
    currentLimit: 1,
  });

  const [clientsAddThemselves, setClientsAddThemselves] = useState(true);

  // const AddCondition = ({ conditionsList, append }) => {
  //   const [showConditions, setShowConditions] = useState(false);
  //   return (
  //     <div
  //       className="flex items-center gap-2 cursor-pointer relative"
  //       onClick={() => setShowConditions(true)}
  //     >
  //       {!showConditions ? (
  //         <div
  //           className={`p-3 flex items-center gap-2 rounded-md w-11/12 hover:bg-[#e0e3e5]`}
  //         >
  //           <span className="text-lg text-gray-700">
  //             <BsPlusCircleFill />
  //           </span>
  //           <h1 className="text-sm">Add Condition</h1>
  //         </div>
  //       ) : (
  //         <div className="flex flex-col rounded-md border border-gray-300 w-11/12">
  //           {conditionsList.map((item, idx) =>
  //             item.status ? (
  //               <div key={idx} className="px-3 py-3" onClick={() => append()}>
  //                 <div className="flex items-center gap-3">
  //                   <span className="text-xl text-tatto-muted">
  //                     {item.icons}
  //                   </span>
  //                   <h1 className="text-sm text-tatto-muted">{item.text}</h1>
  //                 </div>
  //               </div>
  //             ) : (
  //               ""
  //             )
  //           )}
  //         </div>
  //       )}
  //     </div>
  //   );
  // };

  // Send Email
  const [emailSidePanel, setEmailSidePanel] = useState(false);
  const [emailSidePanelTitle, setEmailSidePanelTitle] = useState(false);
  const [emailSidePanelCustomize, setEmailSidePanelCustomize] = useState(false);

  const openEmailSidePanel = (title, customizeable) => {
    setEmailSidePanel(true);
    setEmailSidePanelTitle(title);
    setEmailSidePanelCustomize(customizeable);
  };

  // Send Test
  const [sendTestModal, setSendTestModal] = useState(false);
  const [sendTestEmail, setSendTestEmail] = useState("");
  // send Text
  const [textSidePanel, setTextSidePanel] = useState(false);
  const [textSidePanelTitle, setTextSidePanelTitle] = useState(false);
  const [textSidePanelCustomize, setTextSidePanelCustomize] = useState(false);

  const openTextSidePanel = (title, customizeable) => {
    setTextSidePanel(true);
    setTextSidePanelTitle(title);
    setTextSidePanelCustomize(customizeable);
  };

  // Delete Confirmation Modal
  const [deleteModal, setDeleteModal] = useState(false);

  return (
    <>
      <AutomatedMessages>
        <div className="w-11/12 sm:w-3/5 m-auto flex flex-col">
          <AutomatedCard
            headIcon={<FaRegCalendarCheck />}
            headTitle={"Client was added to the waitlist"}
            editStatus={false}
            // Dots
            dotTop={false}
            dotBottom={true}
          >
            <div className="flex flex-col gap-7">
              {/*  */}
              <div className="flex flex-col gap-4">
                <h1 className="text-sm font-semibold">Send:</h1>
                <div className="flex flex-col gap-4">
                  {/* For All Email */}
                  {clientAddedWaitlist.email ? (
                    <CreateCard
                      icons={<CiMail />}
                      text={"Email to client"}
                      dotsStatus={false}
                      remove={() =>
                        setClientAddedWaitlist((prev) => ({
                          ...prev,
                          email: false,
                        }))
                      }
                      handleClick={() =>
                        openEmailSidePanel("Email to client", true)
                      }
                    />
                  ) : (
                    ""
                  )}
                  {/* for all text message */}
                  {clientAddedWaitlist.textMessage ? (
                    <CreateCard
                      icons={<BsChatDots />}
                      text={"Text message to client"}
                      dotsStatus={false}
                      remove={() =>
                        setClientAddedWaitlist((prev) => ({
                          ...prev,
                          textMessage: false,
                        }))
                      }
                      handleClick={() =>
                        openTextSidePanel("Text message to client", true)
                      }
                    />
                  ) : (
                    <AddCondition
                      conditionsList={[
                        {
                          icons: <BsPlusCircleFill />,
                          text: "some Text",
                          status: true,
                        },
                      ]}
                      handleClick={() =>
                        setClientAddedWaitlist((prev) => ({
                          ...prev,
                          textMessage: true,
                        }))
                      }
                    />
                  )}
                </div>
              </div>
              {/*  */}
              <div className="flex flex-col gap-4">
                <h1 className="text-sm font-semibold">
                  Send only when clients add themselves:
                </h1>
                <div className="flex flex-col gap-4">
                  {/* For All Email */}
                  {clientAddedWaitlist ? (
                    <CreateCard
                      icons={<CiMail />}
                      text={"Internal notification to specific email address"}
                      dotsStatus={false}
                      remove={() => setClientAddedWaitlist(false)}
                      handleClick={() =>
                        openEmailSidePanel(
                          "Internal notification to specific email address",
                          true
                        )
                      }
                    />
                  ) : (
                    <AddCondition
                      conditionsList={[
                        {
                          icons: <BsPlusCircleFill />,
                          text: "some Text",
                          status: true,
                        },
                      ]}
                      handleClick={() => setClientAddedWaitlist(true)}
                    />
                  )}
                </div>
              </div>
            </div>
          </AutomatedCard>
          {/*  */}
          <ConnectorLine />
          {/*  */}
          <AutomatedCard
            headIcon={<FaRegCalendarCheck />}
            headTitle={"New opening for waitlist entry"}
            editStatus={false}
            // Dots
            dotTop={true}
            dotBottom={false}
          >
            <div className="flex flex-col gap-7">
              {/*  */}
              <div className="flex flex-col gap-4">
                <h1 className="text-sm font-semibold">Send:</h1>
                <div className="flex flex-col gap-4">
                  {/* For All Email */}
                  {clientsAddThemselves ? (
                    <CreateCard
                      icons={<CiMail />}
                      text={"Internal notification to specific email address"}
                      dotsStatus={false}
                      remove={() => setClientsAddThemselves(false)}
                      handleClick={() =>
                        openEmailSidePanel(
                          "Internal notification to specific email address",
                          true
                        )
                      }
                    />
                  ) : (
                    <AddCondition
                      conditionsList={[
                        {
                          icons: <BsPlusCircleFill />,
                          text: "some Text",
                          status: true,
                        },
                      ]}
                      handleClick={() => setClientsAddThemselves(true)}
                    />
                  )}
                </div>
              </div>
            </div>
          </AutomatedCard>
        </div>
      </AutomatedMessages>
      {/* Email */}
      <SendEmail
        status={emailSidePanel}
        title={emailSidePanelTitle}
        falseStatus={() => setEmailSidePanel(false)}
        handleClose={() => {
          setEmailSidePanel(false);
          setEmailSidePanelTitle("");
        }}
        customizeStatus={emailSidePanelCustomize}
        handleSendTest={() => {
          setSendTestModal(true);
        }}
      />
      {/* Send Test on Email */}
      <SendTestModal
        status={sendTestModal}
        closeModal={() => setSendTestModal(false)}
        value={sendTestEmail}
        setValue={(val) => setSendTestEmail(val)}
      />

      {/* Text */}
      <SendText
        status={textSidePanel}
        handleClose={() => {
          setTextSidePanel(false);
          setTextSidePanelTitle("");
        }}
        title={textSidePanelTitle}
        customizeStatus={textSidePanelCustomize}
      />

      {/*  */}
      <DeleteModal
        status={deleteModal}
        handleClose={() => setDeleteModal(false)}
      />
    </>
  );
};

export default WaitlistEntries;
