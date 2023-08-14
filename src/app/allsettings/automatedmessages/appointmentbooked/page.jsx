"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { FaRegCalendarCheck } from "react-icons/fa";
import { BsChatDots, BsPlusCircleFill } from "react-icons/bs";
import { SlSettings } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { FiUsers, FiX } from "react-icons/fi";
import { AiOutlinePlus, AiOutlineClockCircle } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
const ConnectorLine = dynamic(()=>import("../components/ConnectorLine"), {
  ssr:false

})
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
const   SelectDrodown = dynamic(()=>import("@/app/components/SelectDropdown"), {
  ssr:false

})
const   AutomatedCard = dynamic(()=>import("@/app/components/AutomatedCard"), {
  ssr:false

})
const AppointmentBooked = () => {
  // States
  const [forAllBookins, setForAllBooking] = useState({
    email: true,
    textMessage: true,
    setLimit: 1,
    currentLimit: 1,
  });

  const [sendForOnlineBookingsOnly, setSendForOnlineBookingsOnly] =
    useState(true);

  const [staffMadeBookingsOnly, setStaffMadeBookingsOnly] = useState(false);
  //   Days Before Status
  const [daysAppoinment, setDaysAppointment] = useState([
    {
      day: 0,
      status: true,
      title: "Same day as appointment",
      email: true,
      textMessage: true,
      requestEmailConfirmation: false,
      requestTextConfirmation: false,
      dayRef: 1 + "day0",
    },

    {
      day: 1,
      status: true,
      title: "1 day before the appointment",
      email: true,
      textMessage: true,
      requestEmailConfirmation: false,
      requestTextConfirmation: false,
      dayRef: 2 + "day1",
    },
    {
      day: 2,
      status: true,
      title: "2 days before the appointment",
      email: true,
      textMessage: true,
      requestEmailConfirmation: false,
      requestTextConfirmation: false,
      dayRef: 3 + "day2",
    },
    {
      day: 3,
      status: true,
      title: "3 days before the appointment",
      email: true,
      textMessage: true,
      requestEmailConfirmation: false,
      requestTextConfirmation: false,
      dayRef: 4 + "day3",
    },
    {
      day: 4,
      status: true,
      title: "4 days before the appointment",
      email: true,
      textMessage: true,
      requestEmailConfirmation: false,
      requestTextConfirmation: false,
      dayRef: 5 + "day4",
    },
    {
      day: 5,
      status: true,
      title: "5 days before the appointment",
      email: true,
      textMessage: true,
      requestEmailConfirmation: false,
      requestTextConfirmation: false,
      dayRef: 6 + "day5",
    },
    {
      day: 6,
      status: true,
      title: "6 days before the appointment",
      email: true,
      textMessage: true,
      requestEmailConfirmation: false,
      requestTextConfirmation: false,
      dayRef: 7 + "day6",
    },
  ]);
  const [daysAppoinmentVal, setDaysAppoinmentVal] = useState("");
  //
  const [selectDaysModal, setSelectDaysModal] = useState(false);
  const setAppointmentDays = (txt) => {
    const selectedValue = txt;
    setDaysAppoinmentVal(txt);

    setDaysAppointment((prevDays) =>
      prevDays.map((appointment) =>
        appointment.title === selectedValue
          ? { ...appointment, status: true }
          : appointment
      )
    );
    setSelectDaysModal(false);
  };

  const handleDays = (id, type) => {
    const selectedDay = parseInt(id);

    setDaysAppointment((prevDays) =>
      prevDays.map((appointment) =>
        appointment.day === selectedDay
          ? type === "email"
            ? { ...appointment, email: true }
            : { ...appointment, textMessage: true }
          : appointment
      )
    );
  };
  const removeDays = (id, type) => {
    const selectedDay = parseInt(id);
    setDeleteModal(true);

    setDaysAppointment((prevDays) =>
      prevDays.map((appointment) =>
        appointment.day === selectedDay
          ? type === "email"
            ? { ...appointment, email: false }
            : { ...appointment, textMessage: false }
          : appointment
      )
    );
  };

  //   Bar Cards Component
  const CreateCard = ({
    icons,
    text,
    dotsStatus,
    type,
    remove,
    sidePanel,
    customizeable,
  }) => {
    return (
      <div className="flex items-center gap-4 cursor-pointer">
        <div
          className="flex justify-between items-center rounded-md border border-gray-300 py-3 px-3 gap-2 w-full cursor-pointer hover:bg-[#fff7ef]"
          onClick={() =>
            sidePanel === "email"
              ? openEmailSidePanel(text, customizeable)
              : openTextSidePanel(text, customizeable)
          }
        >
          <div className="flex items-center gap-3">
            <span className="text-xl text-tatto-muted">{icons}</span>
            <h1 className="text-sm text-tatto-muted">{text}</h1>
          </div>
          <span className="text-lg">
            <SlSettings />
          </span>
        </div>
        <button
          className={` ${
            dotsStatus ? "text-tatto-muted" : " cursor-pointer"
          } text-xl relative`}
          disabled={dotsStatus ? "disabled" : ""}
        >
          <Image
            src="/png_icons/delete.png"
            className={`w-8 ${
              dotsStatus ? "grayscale cursor-not-allowed" : ""
            }`}
            width={"20"}
            height={"20"}
            alt="delete Icon"
            onClick={() =>
              !dotsStatus
                ? type === "days"
                  ? removeDays(remove[0], remove[1])
                  : !dotsStatus
                  ? remove()
                  : ""
                : ""
            }
          />
        </button>
      </div>
    );
  };

  const AddCondition = ({ conditionsList, append }) => {
    const [showConditions, setShowConditions] = useState(false);

    return (
      <div
        className="flex items-center gap-2 cursor-pointer relative"
        onClick={() => setShowConditions(true)}
      >
        {!showConditions ? (
          <div
            className={`p-3 flex items-center gap-2 rounded-md w-11/12 hover:bg-[#e0e3e5] `}
          >
            <span className="text-lg text-gray-700">
              <BsPlusCircleFill />
            </span>
            <h1 className="text-sm">Add Condition</h1>
          </div>
        ) : (
          <div className="flex flex-col rounded-md border border-gray-300 w-11/12">
            {conditionsList.map((item, idx) =>
              item.status ? (
                <div
                  key={idx}
                  className="px-3 py-3"
                  onClick={() =>
                    item?.type === "days"
                      ? handleDays(item.clickSet[0], item.clickSet[1])
                      : append()
                  }
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl text-tatto-muted">
                      {item.icons}
                    </span>
                    <h1 className="text-sm text-tatto-muted">{item.text}</h1>
                  </div>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        )}
      </div>
    );
  };

  // Team Mate
  const [automatedMessagesTeamMates, setAutomatedMessagesTeamMates] = useState([
    {
      id: 1,
      name: "audit team hello Wolrd",
      dp: "/png_icons/staff_members_dp/1.png",
      automatedMessages: false,
    },
    {
      id: 2,
      name: "audit team",
      dp: "/png_icons/staff_members_dp/1.png",
      automatedMessages: false,
    },
    {
      id: 3,
      name: "audit team",
      dp: "/png_icons/staff_members_dp/1.png",
      automatedMessages: false,
    },
    {
      id: 4,
      name: "audit team",
      dp: "/png_icons/staff_members_dp/1.png",
      automatedMessages: false,
    },
    {
      id: 5,
      name: "audit team",
      dp: "/png_icons/staff_members_dp/1.png",
      automatedMessages: false,
    },
    {
      id: 6,
      name: "audit team",
      dp: "/png_icons/staff_members_dp/1.png",
      automatedMessages: false,
    },
    {
      id: 7,
      name: "audit team",
      dp: "/png_icons/staff_members_dp/1.png",
      automatedMessages: false,
    },
  ]);

  const [teamMateSelected, setTeamMateSelected] = useState([]);
  const [showMatesDropdown, setShowMatesDropdown] = useState(false);

  const setAutomatedforSelectedMates = () => {
    setAutomatedMessagesTeamMates((prev) => {
      return prev.map((item) => {
        return teamMateSelected.includes(item.id)
          ? { ...item, automatedMessages: true }
          : { ...item, automatedMessages: false };
      });
    });

    setShowMatesDropdown(false);
  };

  const removeMateFromAutomated = (id) => {
    const mateId = parseInt(id);
    setAutomatedMessagesTeamMates((prevData) =>
      prevData.map((mate) =>
        mate.id === mateId ? { ...mate, automatedMessages: false } : mate
      )
    );
  };

  // Side Panel

  // Send Email
  const [emailSidePanel, setEmailSidePanel] = useState(false);
  const [emailSidePanelTitle, setEmailSidePanelTitle] = useState(false);
  const [emailSidePanelCustomize, setEmailSidePanelCustomize] = useState(false);

  const openEmailSidePanel = (title, customizeable) => {
    setEmailSidePanel(true);
    setEmailSidePanelTitle(title);
    setEmailSidePanelCustomize(customizeable);
  };

  // Send Test Email
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
    <AutomatedMessages>
      <>
        <div className="w-11/12 sm:w-3/5 m-auto flex flex-col">
          <div id="div-1">
            <AutomatedCard
              headIcon={<FaRegCalendarCheck />}
              headTitle={"Immediately when booked"}
              editStatus={false}
              // Dot
              dotTop={false}
              dotBottom={true}
            >
              <div className="flex flex-col gap-7">
                {/*  */}
                <div className="flex flex-col gap-4">
                  <h1 className="text-sm font-semibold">
                    Send for all bookings:
                  </h1>
                  <div className="flex flex-col gap-4">
                    {/* For All Email */}
                    {forAllBookins.email ? (
                      <CreateCard
                        icons={<CiMail />}
                        text={"Email to client with appointment info"}
                        dotsStatus={true}
                        remove={() =>
                          setForAllBooking((prev) => ({
                            ...prev,
                            email: false,
                          }))
                        }
                        sidePanel={"email"}
                        customizeable={true}
                      />
                    ) : (
                      ""
                    )}
                    {/* for all text message */}
                    {forAllBookins.textMessage ? (
                      <CreateCard
                        icons={<BsChatDots />}
                        text={"Text message to client with appointment info"}
                        dotsStatus={false}
                        remove={() =>
                          setForAllBooking((prev) => ({
                            ...prev,
                            textMessage: false,
                          }))
                        }
                        sidePanel={"text"}
                        customizeable={true}
                      />
                    ) : (
                      <AddCondition
                        conditionsList={[
                          {
                            icons: <BsChatDots />,
                            text: "Text message to client with appointment info",
                            status: true,
                          },
                        ]}
                        append={() =>
                          setForAllBooking((prev) => ({
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
                    Send for online bookings only:
                  </h1>
                  <div className="flex flex-col gap-4">
                    {/* For All Email */}
                    {sendForOnlineBookingsOnly ? (
                      <CreateCard
                        icons={<CiMail />}
                        text={"Internal notification to specific email address"}
                        dotsStatus={false}
                        remove={() => {
                          setSendForOnlineBookingsOnly(false);
                          setDeleteModal(true);
                          // setDeleteElm("setSendForOnlineBookingsOnly");
                        }}
                        sidePanel={"email"}
                        customizeable={true}
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
                        append={() => setSendForOnlineBookingsOnly(true)}
                      />
                    )}
                  </div>
                </div>
                {/*  */}
                <div className="flex flex-col gap-4">
                  <h1 className="text-sm font-semibold">
                    Send for staff-made bookings only:
                  </h1>
                  <div className="flex flex-col gap-4">
                    {/* For All Email */}
                    {staffMadeBookingsOnly ? (
                      <CreateCard
                        icons={<CiMail />}
                        text={"Internal notification to specific email address"}
                        dotsStatus={false}
                        remove={() => {
                          setStaffMadeBookingsOnly(false);
                          setDeleteModal(true);
                        }}
                        sidePanel={"email"}
                        customizeable={true}
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
                        append={() => setStaffMadeBookingsOnly(true)}
                      />
                    )}
                  </div>
                </div>
              </div>
            </AutomatedCard>
          </div>
          <ConnectorLine />
          {/*  */}
          {daysAppoinment
            .slice()
            .sort((a, b) => b.day - a.day)
            .map((day, idx) =>
              day.status ? (
                <div key={idx}>
                  <AutomatedCard
                    key={idx}
                    index={day.day}
                    headIcon={<AiOutlineClockCircle />}
                    headTitle={day.title}
                    editStatus={true}
                    handleEditButton={() => {
                      setSelectDaysModal(true);
                      setDaysAppoinmentVal(day.title);
                    }}
                    dotTop={true}
                    dotBottom={true}
                  >
                    <span>Send:</span>
                    {/*  */}
                    <div className="flex flex-col gap-4">
                      {day.email ? (
                        <CreateCard
                          icons={<CiMail />}
                          text={"Email to client to request confirmation"}
                          dotsStatus={day.day === 0 ? true : false}
                          remove={[day.day, "email"]}
                          type="days"
                          sidePanel={"email"}
                          customizeable={true}
                        />
                      ) : (
                        ""
                      )}
                      {day.textMessage ? (
                        <CreateCard
                          icons={<BsChatDots />}
                          text={
                            "Text message to client to request confirmation"
                          }
                          dotsStatus={day.day === 0 ? true : false}
                          remove={[day.day, "text"]}
                          type="days"
                          sidePanel={"text"}
                          customizeable={true}
                        />
                      ) : (
                        ""
                      )}
                      {!day.email || !day.textMessage ? (
                        <AddCondition
                          conditionsList={[
                            !day.email
                              ? {
                                  icons: <CiMail />,
                                  text: "Email to client to request confirmation",
                                  status: true,
                                  clickSet: [day.day, "email"],
                                  type: "days",
                                }
                              : "",
                            !day.textMessage
                              ? {
                                  icons: <BsChatDots />,
                                  text: "Text message to client to request confirmation",
                                  status: true,
                                  clickSet: [day.day, "text"],
                                  type: "days",
                                }
                              : "",
                          ]}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  </AutomatedCard>
                  <ConnectorLine />
                </div>
              ) : (
                ""
              )
            )}
          <div>
            <div className="text-center">
              <div className="flex justify-center items-center">
                <div className="w-4 h-4 rounded-full bg-black"></div>
              </div>
              <div className="bg-[#f2f4f5] pt-2 pb-3">
                <span className="text-md fonrt-bold text-center  my-2">
                  Set up teammates automated-messages settings as yours:
                </span>
              </div>
            </div>
            <ConnectorLine width={"w-[0.5px]"} height={"h-16"} />
            <div id="div-2">
              <AutomatedCard
                headIcon={<FiUsers />}
                headTitle={"Assing Chat"}
                editStatus={false}
                // Dot
                dotTop={true}
                dotBottom={false}
              >
                <div className="bg-mid-gray  rounded-md flex items-center relative py-2">
                  <div className="flex gap-2 py-2 px-4 items-center text-sm relative w-[40%] sm:w-[35%]">
                    <div
                      className="flex gap-2 items-center cursor-pointer"
                      onClick={() => setShowMatesDropdown(true)}
                    >
                      <AiOutlinePlus />
                      <span>Add teammates</span>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center overflow-x-scroll hide-scrollbar pb-0 w-[60%] sm:w-[70%] pr-2">
                    {automatedMessagesTeamMates.map((mate) => {
                      if (mate.automatedMessages) {
                        return (
                          <div className="bg-white border rounded-full flex items-center px-2 py-1 gap-2">
                            <Image
                              src={mate.dp}
                              width={20}
                              height={20}
                              className="w-8"
                              alt="profile img"
                            />
                            <span className="w-[100px] text-ellipsis whitespace-nowrap overflow-hidden">
                              {mate.name}
                            </span>
                            <RxCross2
                              className="text-xl cursor-pointer"
                              onClick={() => removeMateFromAutomated(mate.id)}
                            />
                          </div>
                        );
                      }
                    })}
                  </div>

                  {/* Dropdown */}
                  <div
                    className={`absolute bg-white w-full px-4 py-2 left-0 top-0 rounded-md shadow-md z-50 ${
                      showMatesDropdown ? "block" : "hidden"
                    }`}
                  >
                    <ul className="overflow-y-scroll hide-scrollbar h-72">
                      {automatedMessagesTeamMates.map((member, idx) => {
                        const [isSelected, setIsSelected] = useState(false);
                        return (
                          <li
                            key={idx}
                            onClick={() => {
                              setIsSelected((prevSelected) => {
                                const updatedItem = [...teamMateSelected];
                                if (!prevSelected) {
                                  updatedItem.push(member.id);
                                } else {
                                  const indexToRemove = updatedItem.indexOf(
                                    member.id
                                  );
                                  if (indexToRemove !== -1) {
                                    updatedItem.splice(indexToRemove, 1);
                                  }
                                }
                                setTeamMateSelected(updatedItem);

                                return !prevSelected; // Toggle the selected state
                              });
                            }}
                            className="flex justify-between pb-4 cursor-pointer "
                          >
                            <div className="flex gap-2">
                              <div>
                                <Image
                                  src={member.dp}
                                  width={20}
                                  height={20}
                                  alt="Profile Image"
                                  className="w-8"
                                />
                              </div>
                              <div>
                                <h1>{member.name}</h1>
                              </div>
                            </div>
                            <div className="flex items-center">
                              {isSelected ? (
                                <Image
                                  className="w-4"
                                  src={"/png_icons/check.png"}
                                  width={20}
                                  height={20}
                                  alt="check"
                                />
                              ) : (
                                ""
                              )}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="flex justify-end py-2">
                      <span
                        onClick={() => setAutomatedforSelectedMates()}
                        className="bg-tatto-dark-blue text-white px-6 py-1 rounded-md"
                      >
                        Save
                      </span>
                    </div>
                  </div>
                </div>
                {/* Text */}
                <div className="text-md text-center font-bold pt-8">
                  <span className="font-tiro-bangla">
                    Allow teammates to have the same automated-messages setup as
                    yours
                  </span>
                </div>
              </AutomatedCard>
            </div>
          </div>
        </div>
      </>
      {/* select days Before Modal */}
      <div
        className={`w-full h-full fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-40 ${
          selectDaysModal ? "visible" : "hidden"
        }`}
        style={{ background: "#00000090" }}
      >
        <div className="w-1/2 bg-white rounded-2xl p-3">
          {/* Modal Head */}
          <div className="flex justify-end pt-1 pb-4 items-center relative">
            {/* close button */}
            <div
              className="absolute right-0 top-0.5"
              onClick={() => setSelectDaysModal(false)}
            >
              <FiX className="text-2xl" />
            </div>
          </div>
          {/* Modal Body */}
          <div className="px-4 py-4">
            {/* Body */}
            <div className="flex flex-col gap-6 px-10">
              {/*  */}
              <div className="text-center">
                <h1 className="text-xl">Edit timing</h1>
                <span className="text-tatto-muted">
                  Select message timing from the options below.
                </span>
              </div>
              {/*  */}
              <div className="flex flex-col gap-1">
                <label className="text-tatto-muted text-sm">When:</label>
                <div>
                  <SelectDrodown
                    value={daysAppoinmentVal}
                    handleOnChange={(val) => setDaysAppoinmentVal(val)}
                    options={[
                      "Same day as appointment",
                      "1 day before the appointment",
                      "2 days before the appointment",
                      "3 days before the appointment",
                      "4 days before the appointment",
                      "5 days before the appointment",
                      "6 days before the appointment",
                    ]}
                  />
                </div>
              </div>
              {/* Button */}
              <div className="justify-center flex flex-row gap-2">
                <button className="px-6 py-2 border rounded-md border-tatto-dark-blue text-tatto-dark-blue">
                  Cancel
                </button>
                <button
                  className="px-6 py-2 border rounded-md bg-tatto-dark-blue text-white"
                  onClick={() => setAppointmentDays(daysAppoinmentVal)}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
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
    </AutomatedMessages>
  );
};

export default AppointmentBooked;
