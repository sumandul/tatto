"use client";
import React, { useState } from "react";
import { FaRegCalendarCheck } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { BsPlusCircleFill } from "react-icons/bs";
import dynamic from "next/dynamic";
const AutomatedMessages = dynamic(()=>import("../page"),{
  ssr:false
})

const AutomatedCard = dynamic(()=>import("@/app/components/AutomatedCard"),{
  ssr:false
})
const CreateCard = dynamic(()=>import("../components/CreateCard"),{
  ssr:false
})
const AddCondition = dynamic(()=>import("../components/AddCondition"),{
  ssr:false
})
const  SendEmail = dynamic(()=>import("../components/SendEmail"),{
  ssr:false
})
const  SendTestModal = dynamic(()=>import("../components/SendTestModal"),{
  ssr:false
})
const DeleteModal   = dynamic(()=>import("../components/SendText"),{
  ssr:false
})
const  SendText  = dynamic(()=>import("../components/DeleteModal"),{
  ssr:false
})

const GiftCards = () => {
  const [whenPurchasedOnline, setWhenPurchasedOnline] = useState({
    email: true,
    textMessage: true,
    setLimit: 1,
    currentLimit: 1,
  });

  const [digitalGiftCardSent, setDigitalGiftCardSent] = useState(true);

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

  // Delete Confirmation Modal
  const [deleteModal, setDeleteModal] = useState(false);

  return (
    <>
      <AutomatedMessages>
        <div className="w-11/12 sm:w-3/5 m-auto flex flex-col gap-20">
          <AutomatedCard
            headIcon={<FaRegCalendarCheck />}
            headTitle={"When sold online or sent via email by a staff member"}
            editStatus={false}
          >
            <div className="flex flex-col gap-7">
              {/*  */}
              <div className="flex flex-col gap-4">
                <h1 className="text-sm font-semibold">
                  Send when purchased online:
                </h1>
                <div className="flex flex-col gap-4">
                  {/* For All Email */}
                  {whenPurchasedOnline.email ? (
                    <CreateCard
                      icons={<CiMail />}
                      text={"Email with receipt to buyer"}
                      dotsStatus={false}
                      remove={() =>
                        setWhenPurchasedOnline((prev) => ({
                          ...prev,
                          email: false,
                        }))
                      }
                      handleClick={() =>
                        openEmailSidePanel("Email with receipt to buyer", true)
                      }
                    />
                  ) : (
                    ""
                  )}
                  {/* for all text message */}
                  {whenPurchasedOnline.textMessage ? (
                    <CreateCard
                      icons={<CiMail />}
                      text={"Email with gift card details to recipient"}
                      dotsStatus={false}
                      remove={() =>
                        setWhenPurchasedOnline((prev) => ({
                          ...prev,
                          textMessage: false,
                        }))
                      }
                      handleClick={() =>
                        openEmailSidePanel(
                          "Email with gift card details to recipient",
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
                        setWhenPurchasedOnline((prev) => ({
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
                  Send when digital gift card is sent by staff member:
                </h1>
                <div className="flex flex-col gap-4">
                  {/* For All Email */}
                  {digitalGiftCardSent ? (
                    <CreateCard
                      icons={<CiMail />}
                      text={"Email with gift card details to recipient"}
                      dotsStatus={false}
                      remove={() => setDigitalGiftCardSent(false)}
                      handleClick={() =>
                        openEmailSidePanel(
                          "Email with gift card details to recipient",
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
                      handleClick={() => setDigitalGiftCardSent(true)}
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

export default GiftCards;
