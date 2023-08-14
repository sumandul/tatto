"use client";
import React, { useState } from "react";
import { FaRegCalendarCheck } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { BsChatDots, BsPlusCircleFill } from "react-icons/bs";
import dynamic from "next/dynamic";

const AutomatedMessages= dynamic(()=>import("../page"),{
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

const ConnectorLine = dynamic(()=>import("../components/ConnectorLine"),{
  ssr:false,
})
const DeleteModal = dynamic(()=>import("../components/DeleteModal"),{
  ssr:false,
})
const SendText  = dynamic(()=>import("../components/SendText"),{
  ssr:false,
})
const SendTestModalMessage  = dynamic(()=>import("../components/SendTestModalMessage"),{
  ssr:false,
})
const SendTestModal  = dynamic(()=>import("../components/SendTestModal"),{
  ssr:false,
})
const SendEmail  = dynamic(()=>import("../components/SendEmail"),{
  ssr:false,
})

const CheckInProcess = () => {
  const [priorToAppointmentTime, setPriorToAppointmentTime] = useState({
    email: true,
    textMessage: true,
    setLimit: 1,
    currentLimit: 1,
  });
  const [clientChecksThemselfWaiting, setClientChecksThemselfWaiting] =
    useState({
      email: true,
      textMessage: true,
      setLimit: 1,
      currentLimit: 1,
    });
  const [pressesNotifyButton, setPressesNotifyButton] = useState({
    email: true,
    textMessage: true,
    setLimit: 1,
    currentLimit: 1,
  });

  const [checkedForService, setCheckedForService] = useState(true);

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
        <div className="w-11/12 sm:w-3/5 m-auto flex flex-col">
          <AutomatedCard
            headIcon={<FaRegCalendarCheck />}
            headTitle={"15 minutes prior to appointment time"}
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
                  {priorToAppointmentTime.email ? (
                    <CreateCard
                      icons={<CiMail />}
                      text={"Email to client to check-in as waiting"}
                      dotsStatus={false}
                      remove={() =>
                        setPriorToAppointmentTime((prev) => ({
                          ...prev,
                          email: false,
                        }))
                      }
                      handleClick={() =>
                        openEmailSidePanel(
                          "Email to client to check-in as waiting",
                          true
                        )
                      }
                    />
                  ) : (
                    ""
                  )}
                  {/* for all text message */}
                  {priorToAppointmentTime.textMessage ? (
                    <CreateCard
                      icons={<BsChatDots />}
                      text={"Text message to client to check-in as waiting"}
                      dotsStatus={false}
                      remove={() =>
                        setPriorToAppointmentTime((prev) => ({
                          ...prev,
                          textMessage: false,
                        }))
                      }
                      handleClick={() =>
                        openTextSidePanel(
                          "Text message to client to check-in as waiting",
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
                        setPriorToAppointmentTime((prev) => ({
                          ...prev,
                          textMessage: true,
                        }))
                      }
                    />
                  )}
                </div>
              </div>
            </div>
          </AutomatedCard>
          {/* Line */}
          <ConnectorLine />
          {/*  */}
          <AutomatedCard
            headIcon={<FaRegCalendarCheck />}
            headTitle={`When client checks themself in as "waiting"`}
            editStatus={false}
            // Dots
            dotTop={true}
            dotBottom={true}
          >
            <div className="flex flex-col gap-7">
              {/*  */}
              <div className="flex flex-col gap-4">
                <h1 className="text-sm font-semibold">Send:</h1>
                <div className="flex flex-col gap-4">
                  {/* For All Email */}
                  {clientChecksThemselfWaiting.email ? (
                    <CreateCard
                      icons={<CiMail />}
                      text={"Text message to service provider"}
                      dotsStatus={true}
                      remove={() =>
                        setClientChecksThemselfWaiting((prev) => ({
                          ...prev,
                          email: false,
                        }))
                      }
                      handleClick={() =>
                        openEmailSidePanel(
                          "Text message to service provider",
                          true
                        )
                      }
                    />
                  ) : (
                    ""
                  )}
                  {/* for all text message */}
                  {clientChecksThemselfWaiting.textMessage ? (
                    <CreateCard
                      icons={<BsChatDots />}
                      text={"Text message to specific phone numbers"}
                      dotsStatus={false}
                      remove={() =>
                        setClientChecksThemselfWaiting((prev) => ({
                          ...prev,
                          textMessage: false,
                        }))
                      }
                      handleClick={() =>
                        openTextSidePanel(
                          "Text message to specific phone numbers",
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
                        setClientChecksThemselfWaiting((prev) => ({
                          ...prev,
                          textMessage: true,
                        }))
                      }
                    />
                  )}
                </div>
              </div>
            </div>
          </AutomatedCard>
          {/* Line */}
          <ConnectorLine />
          {/*  */}
          <AutomatedCard
            headIcon={<FaRegCalendarCheck />}
            headTitle={"When staff member presses “Notify” button"}
            editStatus={false}
            // Dots
            dotTop={true}
            dotBottom={true}
          >
            <div className="flex flex-col gap-7">
              {/*  */}
              <div className="flex flex-col gap-4">
                <h1 className="text-sm font-semibold">Send:</h1>
                <div className="flex flex-col gap-4">
                  {/* For All Email */}
                  {pressesNotifyButton.email ? (
                    <CreateCard
                      icons={<CiMail />}
                      text={"Email to client"}
                      dotsStatus={false}
                      remove={() =>
                        setPressesNotifyButton((prev) => ({
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
                  {pressesNotifyButton.textMessage ? (
                    <CreateCard
                      icons={<BsChatDots />}
                      text={"Text message to client"}
                      dotsStatus={false}
                      remove={() =>
                        setPressesNotifyButton((prev) => ({
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
                        setPressesNotifyButton((prev) => ({
                          ...prev,
                          textMessage: true,
                        }))
                      }
                    />
                  )}
                </div>
              </div>
            </div>
          </AutomatedCard>
          {/* Line */}
          <ConnectorLine />
          {/*  */}
          <AutomatedCard
            headIcon={<FaRegCalendarCheck />}
            headTitle={"When client is checked-in for service"}
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
                  {checkedForService ? (
                    <CreateCard
                      icons={<CiMail />}
                      text={"Text message to service provider"}
                      dotsStatus={false}
                      remove={() => setCheckedForService(false)}
                      handleClick={() =>
                        openTextSidePanel(
                          "Text message to service provider",
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
                      handleClick={() => setCheckedForService(true)}
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

export default CheckInProcess;
