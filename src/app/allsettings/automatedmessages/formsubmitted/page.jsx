"use client";
import React, { useState } from "react";
import { FaRegCalendarCheck } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { BsPlusCircleFill } from "react-icons/bs";
import dynamic from "next/dynamic";

const AutomatedMessages = dynamic(()=>import("../page"),{
  ssr:false,
})
const AutomatedCard = dynamic(()=>import("@/app/components/AutomatedCard"),{
  ssr:false,
})
const CreateCard = dynamic(()=>import("../components/CreateCard"),{
  ssr:false,
})
const AddCondition = dynamic(()=>import("../components/AddCondition"),{
  ssr:false,
})
const SendEmail = dynamic(()=>import("../components/SendEmail"),{
  ssr:false,
})
const SendTestModal = dynamic(()=>import("../components/SendTestModal"),{
  ssr:false,
})
const SendText = dynamic(()=>import("../components/SendText"),{
  ssr:false,
})
const DeleteModal = dynamic(()=>import("../components/DeleteModal"),{
  ssr:false,
})
const SendTestModalMessage = dynamic(()=>import("../components/SendTestModalMessage"),{
  ssr:false,
})

const FormSubmitted = () => {
  const [formWasSubmitted, setFormWasSubmitted] = useState(false);

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

  // Delete Confirmation Modal
  const [deleteModal, setDeleteModal] = useState(false);

  return (
    <>
      <AutomatedMessages>
        <div className="w-11/12 sm:w-3/5 m-auto flex flex-col gap-20">
          <AutomatedCard
            headIcon={<FaRegCalendarCheck />}
            headTitle={"Form was submitted"}
            editStatus={false}
          >
            <div className="flex flex-col gap-7">
              {/*  */}
              <div className="flex flex-col gap-4">
                <h1 className="text-sm font-semibold">Send:</h1>
                <div className="flex flex-col gap-4">
                  {/* For All Email */}
                  {formWasSubmitted ? (
                    <CreateCard
                      icons={<CiMail />}
                      text={"Internal notification to specific email address"}
                      dotsStatus={false}
                      remove={() => setFormWasSubmitted(false)}
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
                      handleClick={() => setFormWasSubmitted(true)}
                    />
                  )}
                </div>
              </div>
            </div>
          </AutomatedCard>
        </div>
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
      </AutomatedMessages>
    </>
  );
};

export default FormSubmitted;
