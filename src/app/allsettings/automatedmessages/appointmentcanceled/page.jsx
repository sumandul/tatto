"use client";
import React, { useState } from "react";
import { FaRegCalendarCheck } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { BsChatDots, BsPlusCircleFill } from "react-icons/bs";
import dynamic from "next/dynamic";

const AutomatedMessages = dynamic(()=>import("../page"), {
  ssr:false

})
const DeleteModal = dynamic(()=>import("../components/DeleteModal"), {
  ssr:false

})
const SendText = dynamic(()=>import("../components/SendText"), {
  ssr:false

})
const SendTestModalMessage = dynamic(()=>import("../components/SendTestModalMessage"), {
  ssr:false

})
const  SendEmail = dynamic(()=>import("../components/SendEmail"), {
  ssr:false

})
const   SendTestModal = dynamic(()=>import("../components/SendTestModal"), {
  ssr:false

})
const   CreateCard = dynamic(()=>import("../components/CreateCard"), {
  ssr:false

})
const   AddCondition = dynamic(()=>import("../components/AddCondition"), {
  ssr:false

})
const   AutomatedCard = dynamic(()=>import("@/app/components/AutomatedCard"), {
  ssr:false

})
const AppointmentCanceled = () => {
  const [forAllCancellations, setForAllCancellations] = useState({
    email: true,
    textMessage: true,
    setLimit: 1,
    currentLimit: 1,
  });

  const [clientsCancelThemselves, setClientsCancelThemselves] = useState(false);

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
  // Send Test
  const [sendTestModalText, setSendTestModalText] = useState(false);
  const [sendTestText, setSendTestText] = useState("");
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
        <div className="w-11/12 sm:w-3/5 m-auto flex flex-col gap-20">
          <AutomatedCard
            headIcon={<FaRegCalendarCheck />}
            headTitle={"Immediately when canceled"}
            editStatus={false}
          >
            <div className="flex flex-col gap-7">
              {/*  */}
              <div className="flex flex-col gap-4">
                <h1 className="text-sm font-semibold">
                  Send for all cancellations:
                </h1>
                <div className="flex flex-col gap-4">
                  {/* For All Email */}
                  {forAllCancellations.email ? (
                    <CreateCard
                      icons={<CiMail />}
                      text={"Cancellation email to client"}
                      dotsStatus={false}
                      remove={() =>
                        setForAllCancellations((prev) => ({
                          ...prev,
                          email: false,
                        }))
                      }
                      handleClick={() =>
                        openEmailSidePanel("Cancellation email to client", true)
                      }
                    />
                  ) : (
                    ""
                  )}
                  {/* for all text message */}
                  {forAllCancellations.textMessage ? (
                    <CreateCard
                      icons={<BsChatDots />}
                      text={"Cancellation text message to client"}
                      dotsStatus={false}
                      remove={() =>
                        setForAllCancellations((prev) => ({
                          ...prev,
                          textMessage: false,
                        }))
                      }
                      handleClick={() =>
                        openTextSidePanel(
                          "Cancellation text message to client",
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
                      handleClick={() =>
                        setForAllCancellations((prev) => ({
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
                  Send only when clients cancel themselves:
                </h1>
                <div className="flex flex-col gap-4">
                  {/* For All Email */}
                  {clientsCancelThemselves ? (
                    <CreateCard
                      icons={<CiMail />}
                      text={"Internal notification to specific email address"}
                      dotsStatus={false}
                      remove={() => setClientsCancelThemselves(false)}
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
                          icons: <CiMail />,
                          text: "Internal notification to specific email address",
                          status: true,
                        },
                      ]}
                      handleClick={() => setClientsCancelThemselves(true)}
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
        handleSendTest={() => {
          setSendTestModalText(true);
        }}
      />

      {/* Send Test on Text Message */}
      <SendTestModalMessage
        status={sendTestModalText}
        closeModal={() => setSendTestModalText(false)}
        value={sendTestText}
        setValue={(val) => setSendTestText(val)}
      />
      {/*  */}
      <DeleteModal
        status={deleteModal}
        handleClose={() => setDeleteModal(false)}
      />
    </>
  );
};

export default AppointmentCanceled;
