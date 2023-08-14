import Image from "next/image";
import React, { useEffect, useState } from "react";
// Icons
import { BiMinusCircle } from "react-icons/bi";
import { PiPencil } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FiArrowLeft, FiCamera, FiX } from "react-icons/fi";

import { BsArrowLeft, BsArrowRightShort, BsThreeDots } from "react-icons/bs";
// Components
const TimeLineCard = dynamic(()=>import("./TimeLineCard"),{
  ssr:false
})
const SelectDrodown = dynamic(()=>import("@/app/components/SelectDropdown"),{
  ssr:false
})
const ToggleDropdown = dynamic(()=>import("./ToggleDropdown"),{
  ssr:false
})
// Carousel Slider
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const  PastVisitsDetail = dynamic(()=>import("./PastVisitsDetail"))
import { GoLock } from "react-icons/go";
import dynamic from "next/dynamic";
import { ImPieChart } from "react-icons/im";

const AddClientSlide = ({
  status,
  handleClose,
  sideModalFrom,
  setSideModalFrom,
  sidebarDetailing,
  setWannaSaveChangesPopup,
}) => {
  // Slider Customization
  const CustomPrevArrow = ({ onClick, currentSlide }) => {
    return (
      <div
        className={`custom-prev-arrow cursor-pointer ${
          currentSlide === 0 ? "invisible" : "visible"
        }`}
        onClick={onClick}
      >
        <FaArrowLeft />
      </div>
    );
  };
  const CustomNextArrow = ({ onClick, currentSlide, slideCount }) => {
    return (
      <div
        className={`custom-prev-arrow cursor-pointer ${
          currentSlide === slideCount - 7 ? "invisible" : "visible"
        }`}
        onClick={onClick}
      >
        <FaArrowRight />
      </div>
    );
  };
  var settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const handleUserNameChange = () => {
    let inputUserName;
    let firstTwoLetters, lastTwoLetters;
    //
    let firstLatterOfFirst;
    let firstLatterOfLast;

    // Getting First Name first latter and Last name firts latter
    if (!lastName) {
      inputUserName = firstName;
      firstTwoLetters = inputUserName.slice(0, 2).toUpperCase();
    } else if (!firstName) {
      inputUserName = lastName;
      lastTwoLetters = inputUserName.slice(0, 2).toUpperCase();
    } else {
      firstLatterOfFirst = firstName.slice(0, 1).toUpperCase();
      firstLatterOfLast = lastName.slice(0, 1).toUpperCase();
      inputUserName = firstLatterOfFirst + firstLatterOfLast;
    }

    // Generate a random background color
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    // Create the profile image with the initials and random background color
    const canvas = document.createElement("canvas");
    canvas.width = 100;
    canvas.height = 100;
    const context = canvas.getContext("2d");
    context.fillStyle = randomColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.font = "24px Arial";
    context.fillStyle = "#ffffff";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(
      !lastName ? firstTwoLetters : !firstName ? lastTwoLetters : inputUserName,
      canvas.width / 2,
      canvas.height / 2
    );

    // Convert the canvas to a data URL and set it as the profile image
    const imgSrc = canvas.toDataURL();
    if (!lastName && !firstName) {
      setProfileImg("");
    } else {
      setProfileImg(imgSrc);
    }
  };

  // Create a Tag
  const [createATag, setCreateAtag] = useState(false);

  // Show More Section
  const [showMore, setShowMore] = useState(false);

  // Const slide Side
  const [sideActive, setSideActive] = useState("timeline");

  // Decline
  const [enquiryFormsDeclineList, setEnquiryFormsDeclineList] = useState([
    {
      id: 1,
      bodyPartName: "hand",
      bodyPartIcon: "/png_icons/hand-icon.png",
      date: "March 16, 2021",
    },
    {
      id: 2,
      bodyPartName: "hand",
      bodyPartIcon: "/png_icons/hand-icon.png",
      date: "March 16, 2021",
    },
    {
      id: 3,
      bodyPartName: "hand",
      bodyPartIcon: "/png_icons/hand-icon.png",
      date: "March 16, 2021",
    },
    {
      id: 4,
      bodyPartName: "hand",
      bodyPartIcon: "/png_icons/hand-icon.png",
      date: "March 16, 2021",
    },
    {
      id: 5,
      bodyPartName: "hand",
      bodyPartIcon: "/png_icons/hand-icon.png",
      date: "March 16, 2021",
    },
    {
      id: 6,
      bodyPartName: "hand",
      bodyPartIcon: "/png_icons/hand-icon.png",
      date: "March 16, 2021",
    },
    {
      id: 7,
      bodyPartName: "hand",
      bodyPartIcon: "/png_icons/hand-icon.png",
      date: "March 16, 2021",
    },
    {
      id: 8,
      bodyPartName: "hand",
      bodyPartIcon: "/png_icons/hand-icon.png",
      date: "March 16, 2021",
    },
    {
      id: 9,
      bodyPartName: "hand",
      bodyPartIcon: "/png_icons/hand-icon.png",
      date: "March 16, 2021",
    },
  ]);

  // Enquiry From
  const [enquiryFrom, setEnquiryFrom] = useState(false);
  const [enquiryFormSent, setEnquiryFormSent] = useState(false);
  const [enquiryFromSubmited, setEnquiryFromSubmited] = useState(false);

  // DownPayment Card
  const [downPaymentCard, setDownPaymentCard] = useState(false);
  const [isDownPaymentDone, setIsDownPaymentDone] = useState(false);

  // Enquery From accepted or not
  const [enquiryFromIsAccepted, setEnquiryFromIsAccepted] = useState(null);

  const [pastHistory, setPastHistory] = useState([1, 2]);

  // consent form
  const [consentForm, setConsentForm] = useState(false);

  // Consent Popups
  const [consentEmailPopup, setConsentEmailPopup] = useState(false);
  const [consentOptPopup, setConsentOptPopup] = useState(false);
  // otp

  const [consentOtpNumber, setConsentOtpNumber] = useState(["", "", "", ""]);
  const [consentOtpIsValid, setConsentOtpIsValid] = useState(false);
  const setOtp = (value, index) => {
    if (consentOtpNumber[index] === "") {
      setConsentOtpNumber((prev) => {
        const newInputValues = [...prev];
        newInputValues[index] = value;
        return newInputValues;
      });
    } else {
      const newInputValues = [...consentOtpNumber];
      newInputValues[index] = value;
      setConsentOtpNumber(newInputValues);
    }
  };
  const checkOtp = () => {
    const otp = [1, 2, 3, 4];
    const areEqual =
      JSON.stringify(consentOtpNumber.map((elem) => parseInt(elem))) ===
      JSON.stringify(otp);
    if (areEqual) {
      setConsentOtpIsValid(areEqual);
      setConsentEmailPopup(false);
      setConsentOptPopup(false);
    } else {
      alert("Invalid OTP");
    }
  };

  const inputFunction = (e, index) => {
    let value = e.target.value;
    if (value.length > 1) {
      value = value.slice(0, 1);
    }
    setOtp(value, index);
  };

  // all payment done
  const [allPayment, setAllPayment] = useState(false);

  // Form Data
  const [isChanged, setIsChanged] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    gander: "",
    pronouns: "",
    birthday: "",
    tag: "",
    referredby: "",
    notes: "",
  });

  const addFormData = (event) => {
    setIsChanged(true);
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  //
  const [selectedProfileImg, setSelectedProfileImg] = useState(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profileImg, setProfileImg] = useState(null);
  const [didStateChange, setDidStateChange] = useState(false);

  const setChangesOnState = (valueFrom, value) => {
    setIsChanged(true);
    if (valueFrom === "firstName") {
      setFirstName(value);
      setDidStateChange(true);
    }
    if (valueFrom === "lastName") {
      setLastName(value);
      setDidStateChange(true);
    }
  };

  // Selected Gander Check
  const [gander, setGander] = useState("");
  const [otherGanderSection, setOtherGanderSection] = useState(false);

  const ganderSelected = (e) => {
    setIsChanged(true);
    let selectedGander = e.target.value;

    setGander(selectedGander);
    if (selectedGander === "Other") {
      setOtherGanderSection(true);
    } else {
      setOtherGanderSection(false);
    }
  };

  useEffect(() => {
    if (didStateChange) {
      handleUserNameChange();
    }
  }, [firstName, lastName, didStateChange]);

  return (
    <>
      {/* Side Modal */}
      <div
        className={`bg-[#00000060] w-full h-full fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-40 ${
          status ? "visible" : "hidden"
        }`}
        onClick={() => {
          if (isChanged) {
            setWannaSaveChangesPopup(true);
            setIsChanged(false);
          }
          handleClose();
          setConsentForm(false);
        }}
      ></div>
      {/* Modal Inner */}
      <div
        className={`w-full sm:w-fit bg-white ease-in-out fixed top-0 h-screen overflow-hidden z-50 ${
          status ? "right-0" : "-right-full"
        } `}
        style={{ transition: "0.2s" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Head */}
        <div className="flex gap-4 items-center bg-head-pink px-3 py-6 sm:px-2 sm:py-3">
          <div>
            <RxCross1
              className="text-xl ml-2 rotate-90 cursor-pointer"
              onClick={() => {
                handleClose();
                setConsentForm(false);
                if (isChanged) {
                  setWannaSaveChangesPopup(true);
                  setIsChanged(false);
                }
              }}
            />
          </div>
          <div className="">
            <h1 className="text-sm sm:text-xl font-semibold">
              Client information
            </h1>
          </div>
        </div>
        {/* Modal Body */}
        <div className="relative hide-scrollbar overflow-y-scroll h-screen">
          <div className="flex w-full h-full ">
            <div className="w-full md:w-[400px] h-[92.5vh] overflow-y-scroll">
              {sideModalFrom === "addClient" ? (
                <div>
                  {/* Profile img Section */}
                  <div className="py-6 flex justify-center items-center">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full border overflow-hidden">
                        <Image
                          src={
                            selectedProfileImg
                              ? URL.createObjectURL(selectedProfileImg)
                              : profileImg
                              ? profileImg
                              : "/png_icons/profilePlaceholder.png"
                          }
                          alt=""
                          className="w-full h-full"
                          width={20}
                          height={20}
                        />
                        <input
                          type="file"
                          className="hidden"
                          accept=".png,.jpeg,.jpg"
                          id="selectProfileImg"
                          onChange={(e) =>
                            setSelectedProfileImg(e.target.files[0])
                          }
                        />
                      </div>
                      <div
                        className="absolute bg-white  bottom-0 right-0 border w-fit rounded-full p-1.5 text-xl flex justify-center items-center cursor-pointer"
                        onClick={() =>
                          document.getElementById("selectProfileImg").click()
                        }
                      >
                        <FiCamera />
                      </div>
                    </div>
                  </div>
                  {/* Inputs Section */}
                  <div className="sm:py-6 sm:px-6 px-3 pb-4">
                    <form action="?">
                      {/* Form out Input */}
                      <div className="flex flex-col gap-3">
                        {/* First Name */}
                        <div className="form-group flex flex-col gap-3">
                          <label
                            className="text-sm text-tatto-muted"
                            htmlFor="firstName"
                          >
                            First Name
                          </label>
                          <input
                            className="border rounded-md py-3 px-3 sm:py-2 sm:px-2 text-sm placeholder:text-sm focus-visible:outline-none"
                            type="text"
                            id="firstName"
                            placeholder="Enter first name"
                            value={firstName}
                            onChange={(e) =>
                              setChangesOnState("firstName", e.target.value)
                            }
                          />
                        </div>
                        {/* Last Name */}
                        <div className="form-group flex flex-col gap-3">
                          <label
                            className="text-sm text-tatto-muted"
                            htmlFor="lastName"
                          >
                            Last Name
                          </label>
                          <input
                            className="border rounded-md py-3 px-3 sm:py-2 sm:px-2 text-sm placeholder:text-sm focus-visible:outline-none"
                            type="text"
                            id="lastName"
                            placeholder="Enter last name"
                            value={lastName}
                            onChange={(e) =>
                              setChangesOnState("lastName", e.target.value)
                            }
                          />
                        </div>
                        {/* Email */}
                        <div className="form-group flex flex-col gap-3">
                          <label
                            className="text-sm text-tatto-muted"
                            htmlFor="emailAddress"
                          >
                            Email
                          </label>
                          <input
                            className="border rounded-md py-3 px-3 sm:py-2 sm:px-2text-sm placeholder:text-sm focus-visible:outline-none"
                            type="text"
                            id="emailAddress"
                            name="email"
                            value={formData.email}
                            placeholder="me@example.com"
                            onChange={addFormData}
                          />
                        </div>
                        {/* Phone */}
                        <div className="form-group flex flex-col gap-3">
                          <label
                            className="text-sm text-tatto-muted"
                            htmlFor="Phone"
                          >
                            Phone
                          </label>
                          <input
                            className="border rounded-md py-3 px-3 sm:py-2 sm:px-2 text-sm placeholder:text-sm focus-visible:outline-none"
                            type="text"
                            id="Phone"
                            placeholder="Enter phone number"
                            name="phone"
                            onChange={addFormData}
                          />
                        </div>
                        {/* Gander */}
                        <div className="form-group flex flex-col gap-3">
                          <label className="text-sm text-tatto-muted">
                            Gander
                          </label>
                          <div className="flex justify-between">
                            <label
                              htmlFor="ganderFemale"
                              className="flex items-center gap-1"
                            >
                              <input
                                type="radio"
                                name="gander"
                                id="ganderFemale"
                                value={"Female"}
                                onChange={ganderSelected}
                              />
                              <span className="text-xs text-tatto-dark-blue">
                                Female
                              </span>
                            </label>
                            <label
                              htmlFor="ganderMale"
                              className="flex items-center gap-1"
                              value={"Male"}
                              onChange={ganderSelected}
                            >
                              <input
                                type="radio"
                                name="gander"
                                id="ganderMale"
                              />
                              <span className="text-xs text-tatto-dark-blue">
                                Male
                              </span>
                            </label>
                            <label
                              htmlFor="ganderNon-binary"
                              className="flex items-center gap-1"
                            >
                              <input
                                type="radio"
                                name="gander"
                                id="ganderNon-binary"
                                value={"Non-binary"}
                                onChange={ganderSelected}
                              />
                              <span className="text-xs text-tatto-dark-blue">
                                Non-binary
                              </span>
                            </label>
                            <label
                              htmlFor="ganderOther"
                              className="flex items-center gap-1"
                            >
                              <input
                                type="radio"
                                name="gander"
                                id="ganderOther"
                                value={"Other"}
                                onChange={ganderSelected}
                              />
                              <span className="text-xs text-tatto-dark-blue">
                                Other
                              </span>
                            </label>
                          </div>
                        </div>
                        {/* Other Gander Pronouns Section */}
                        {otherGanderSection ? (
                          // Other Gander Section
                          <div className="form-group flex flex-col gap-3">
                            <label
                              className="text-sm text-tatto-muted"
                              htmlFor="OtherGander"
                            >
                              Pronouns
                            </label>
                            <input
                              className="border rounded-md py-2 px-2 text-sm placeholder:text-sm focus-visible:outline-none"
                              type="text"
                              id="OtherGander"
                              placeholder="Enter pronouns"
                              name="pronouns"
                              onChange={addFormData}
                            />
                          </div>
                        ) : (
                          ""
                        )}
                        {/* Birthdate */}
                        <div className="form-group flex flex-col gap-3">
                          <label
                            className="text-sm text-tatto-muted"
                            htmlFor="Birthday"
                          >
                            Birthday
                          </label>
                          <input
                            className="border rounded-md py-3 px-3 sm:py-2 sm:px-2 text-sm placeholder:text-sm focus-visible:outline-none"
                            type="text"
                            id="Birthday"
                            placeholder="Enter Birthday"
                            value={formData.birthday}
                            name="birthday"
                            onChange={addFormData}
                          />
                        </div>
                        {/* Tag */}
                        <div className="form-group flex flex-col gap-3">
                          <label
                            className="text-sm text-tatto-muted"
                            htmlFor="Phone"
                          >
                            Tag
                            <div className="w-[60%] sm:w-[80%]">
                              <span className="text-[9px] sm:text-[11px] leading-none  text-tatto-muted">
                                Adding tags to a client will later allow you to
                                perform actions on client groups, eg, sending a
                                bulk message.
                              </span>
                            </div>
                          </label>
                          <div className="relative">
                            <input
                              className={`border w-full rounded-md py-3 px-3 sm:py-2 pl-2 pr-10 text-sm placeholder:text-sm focus-visible:outline-none ${
                                createATag ? "hidden" : "block"
                              }`}
                              type="text"
                              id="tag"
                              placeholder={"Search or create tag"}
                              value={formData.tag}
                              name="tag"
                              onChange={addFormData}
                            />
                            {/* Create a Tag Input */}
                            <div
                              className={`relative ${
                                createATag ? "block" : "hidden"
                              }`}
                            >
                              <span
                                className={`bg-white text-tatto-muted absolute left-4 -top-3 px-1.5 text-sm 
                              `}
                              >
                                Create a Tag
                              </span>
                              <input
                                className="border w-full rounded-md py-2 pl-2 pr-10 text-sm placeholder:text-sm focus-visible:outline-none"
                                type="text"
                                id="Phone"
                              />
                            </div>
                            {/* Create a Tag Toggle Buton */}
                            <div className="absolute right-2 top-0 h-full flex items-center">
                              <div
                                className=" bg-tatto-dark-blue w-fit p-1 rounded-full text-white text-xl flex justify-center items-center"
                                onClick={() => setCreateAtag(!createATag)}
                              >
                                {createATag ? (
                                  <BiMinusCircle />
                                ) : (
                                  <AiOutlinePlusCircle />
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Refferd By */}
                        <div className="form-group flex flex-col gap-3">
                          <label
                            className="text-sm text-tatto-muted"
                            htmlFor="Referredby"
                          >
                            Referred by
                          </label>
                          <input
                            className="border rounded-md py-3 px-3 sm:py-2 sm:px-2 text-sm placeholder:text-sm focus-visible:outline-none"
                            type="text"
                            id="referredby"
                            placeholder="Enter referral source"
                            value={formData.referredby}
                            name="referredby"
                            onChange={addFormData}
                          />
                        </div>
                        {/* Show More Section */}
                        <div>
                          <h1
                            className="bg-tatto-dark-blue w-fit px-1 text-sm text-white cursor-pointer mb-2"
                            onClick={() => setShowMore(!showMore)}
                          >
                            {showMore ? "Less" : "Show More"}
                          </h1>
                          <div
                            className={`rounded-xl border sm:border-0 px-3 sm:px-0 ${
                              showMore ? "block" : "hidden"
                            }`}
                          >
                            {/* Social Media */}
                            <div className="border-b sm:border-b-0">
                              <ToggleDropdown title={"Social Media"}>
                                {/*  */}
                                <div className="form-group flex flex-col gap-3">
                                  <label
                                    className="text-sm text-tatto-muted"
                                    htmlFor="addInstaGram"
                                  >
                                    Instagram
                                  </label>
                                  <input
                                    className="border rounded-md py-3 px-3 sm:py-2 sm:px-2 text-sm placeholder:text-sm focus-visible:outline-none"
                                    type="url"
                                    id="addInstaGram"
                                    placeholder="Enter Instagram"
                                  />
                                </div>
                                {/*  */}
                                <div className="form-group flex flex-col gap-3">
                                  <label
                                    className="text-sm text-tatto-muted"
                                    htmlFor="addFacebook"
                                  >
                                    Facebook
                                  </label>
                                  <input
                                    className="border rounded-md py-3 px-3 sm:py-2 sm:px-2 text-sm placeholder:text-sm focus-visible:outline-none"
                                    type="text"
                                    id="addFacebook"
                                    placeholder="Enter Facebook"
                                  />
                                </div>
                              </ToggleDropdown>
                            </div>
                            {/* Additional Details */}
                            <div className="border-b sm:border-b-0">
                              <ToggleDropdown title={"Additional Details"}>
                                {/* Email */}
                                <div className="form-group flex flex-col gap-3">
                                  <label
                                    className="text-sm text-tatto-muted"
                                    htmlFor=""
                                  >
                                    Test
                                  </label>
                                  <input
                                    className="border rounded-md py-3 px-3 sm:py-2 sm:px-2 text-sm placeholder:text-sm focus-visible:outline-none"
                                    type="text"
                                    id=""
                                    placeholder=""
                                  />
                                </div>
                                {/* Phone */}
                                <div className="form-group flex flex-col gap-3">
                                  <label
                                    className="text-sm text-tatto-muted"
                                    htmlFor=""
                                  >
                                    Test
                                  </label>
                                  <input
                                    className="border rounded-md py-3 px-3 sm:py-2 sm:px-2 text-sm placeholder:text-sm focus-visible:outline-none"
                                    type="text"
                                    id=""
                                    placeholder=""
                                  />
                                </div>
                              </ToggleDropdown>
                            </div>
                            {/* Address */}
                            <div className="border-b sm:border-b-0">
                              <ToggleDropdown title={"Address"}>
                                {/*  */}
                                <div className="form-group flex flex-col gap-0">
                                  <label className="text-sm text-tatto-muted">
                                    Country
                                  </label>
                                  <SelectDrodown
                                    value={"United"}
                                    options={[
                                      "Pakistan",
                                      "India",
                                      "United",
                                      "USA",
                                    ]}
                                    handleOnChange={(e) => console.log()}
                                  />
                                </div>
                                {/*  */}
                                <div className="form-group flex flex-col gap-0">
                                  <label
                                    className="text-sm text-tatto-muted"
                                    htmlFor="Addressline1"
                                  >
                                    Address line 1
                                  </label>
                                  <input
                                    className="border rounded-md py-3 px-3 sm:py-2 sm:px-2 text-sm placeholder:text-sm focus-visible:outline-none"
                                    type="text"
                                    id="Addressline1"
                                    placeholder="Enter first address line"
                                  />
                                </div>
                                {/*  */}
                                <div className="form-group flex flex-col gap-0">
                                  <label
                                    className="text-sm text-tatto-muted"
                                    htmlFor="Addressline2"
                                  >
                                    Address line 2
                                  </label>
                                  <input
                                    className="border rounded-md py-3 px-3 sm:py-2 sm:px-2 text-sm placeholder:text-sm focus-visible:outline-none"
                                    type="text"
                                    id="Addressline2"
                                    placeholder="Enter second address line"
                                  />
                                </div>
                                {/*  */}
                                <div className="form-group flex flex-col gap-0">
                                  <label
                                    className="text-sm text-tatto-muted"
                                    htmlFor="addCity"
                                  >
                                    City
                                  </label>
                                  <input
                                    className="border rounded-md py-3 px-3 sm:py-2 sm:px-2 text-sm placeholder:text-sm focus-visible:outline-none"
                                    type="text"
                                    id="addCity"
                                    placeholder="Enter City"
                                  />
                                </div>
                                {/*  */}
                                <div className="form-group flex flex-col gap-0">
                                  <label className="text-sm text-tatto-muted">
                                    Test
                                  </label>
                                  <SelectDrodown
                                    value={"Select"}
                                    options={[
                                      "Pakistan",
                                      "India",
                                      "United",
                                      "USA",
                                    ]}
                                    handleOnChange={(e) => console.log(e)}
                                  />
                                </div>
                                {/*  */}
                                <div className="form-group flex flex-col gap-0">
                                  <label
                                    className="text-sm text-tatto-muted"
                                    htmlFor=""
                                  >
                                    Zip code
                                  </label>
                                  <input
                                    className="border rounded-md py-3 px-3 sm:py-2 sm:px-2 text-sm placeholder:text-sm focus-visible:outline-none"
                                    type="text"
                                    id=""
                                    placeholder="Enter zip code"
                                  />
                                </div>
                              </ToggleDropdown>
                            </div>
                            {/* Appointment Notifications */}
                            <div className="border-b sm:border-b-0">
                              <ToggleDropdown
                                title={"Appointment Notifications"}
                              >
                                {/* Email */}
                                <div className="form-group flex flex-col gap-3">
                                  <label
                                    className="text-sm text-tatto-muted"
                                    htmlFor=""
                                  >
                                    Test
                                  </label>
                                  <input
                                    className="border rounded-md py-3 px-3 sm:py-2 sm:px-2 text-sm placeholder:text-sm focus-visible:outline-none"
                                    type="text"
                                    id=""
                                    placeholder=""
                                  />
                                </div>
                                {/* Phone */}
                                <div className="form-group flex flex-col gap-3">
                                  <label
                                    className="text-sm text-tatto-muted"
                                    htmlFor=""
                                  >
                                    Test
                                  </label>
                                  <input
                                    className="border rounded-md py-3 px-3 sm:py-2 sm:px-2 text-sm placeholder:text-sm focus-visible:outline-none"
                                    type="text"
                                    id=""
                                    placeholder=""
                                  />
                                </div>
                              </ToggleDropdown>
                            </div>
                            {/* Online Booking */}
                            <div>
                              <ToggleDropdown title={"Online Booking"}>
                                {/* Email */}
                                <div className="form-group flex flex-col gap-3">
                                  <label
                                    className="text-sm text-tatto-muted"
                                    htmlFor=""
                                  >
                                    Test
                                  </label>
                                  <input
                                    className="border rounded-md py-3 px-3 sm:py-2 sm:px-2 text-sm placeholder:text-sm focus-visible:outline-none"
                                    type="text"
                                    id=""
                                    placeholder=""
                                  />
                                </div>
                                {/* Phone */}
                                <div className="form-group flex flex-col gap-3">
                                  <label
                                    className="text-sm text-tatto-muted"
                                    htmlFor=""
                                  >
                                    Test
                                  </label>
                                  <input
                                    className="border rounded-md py-3 px-3 sm:py-2 sm:px-2 text-sm placeholder:text-sm focus-visible:outline-none"
                                    type="text"
                                    id=""
                                    placeholder=""
                                  />
                                </div>
                              </ToggleDropdown>
                            </div>
                          </div>
                        </div>
                        {/* Add Notes */}
                        <div className="form-group flex flex-col gap-3">
                          <label
                            className="text-sm text-tatto-muted"
                            htmlFor="addnotes"
                          >
                            Add Notes
                            <div className="w-[60%] sm:w-[80%]">
                              <span className="text-[9px] sm:text-[11px] leading-none  text-tatto-muted">
                                Important client info will only be visible to
                                you and team members.
                              </span>
                            </div>
                          </label>
                          <textarea
                            rows={4}
                            className="border resize-none rounded-md py-2 px-2 text-sm placeholder:text-sm focus-visible:outline-none"
                            id="addnotes"
                            placeholder="Enter client notes..."
                            value={formData.notes}
                            name="notes"
                            onChange={addFormData}
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* Add BUtton */}
                  <div className="flex">
                    <button
                      className="w-full sm:px-2 sm:py-2 py-4 bg-mid-gray text-tatto-dark-blue"
                      onClick={() => {
                        if (sidebarDetailing) {
                          setSideModalFrom("userProfile");
                          if (isChanged) {
                            setWannaSaveChangesPopup(true);
                            setIsChanged(false);
                          }
                        } else {
                          handleClose();
                          setConsentForm(false);
                          if (isChanged) {
                            setWannaSaveChangesPopup(true);
                            setIsChanged(false);
                          }
                        }
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      className="w-full sm:px-2 sm:py-2 py-4 bg-tatto-dark-blue text-white"
                      onClick={() => setIsChanged(false)}
                    >
                      Add Client
                    </button>
                  </div>
                </div>
              ) : sideModalFrom === "userProfile" ? (
                <div className="h-full relative flex flex-col ">
                  <div className="flex-1">
                    {/* Profile Section */}
                    <div className="py-6 flex justify-center items-center relative">
                      <div className="relative flex flex-col gap-1 items-center">
                        <div className="w-24 h-24 rounded-full border overflow-hidden">
                          <Image
                            src={"/png_icons/profilePlaceholder.png"}
                            alt=""
                            className="w-full h-full"
                            width={20}
                            height={20}
                          />
                        </div>
                        {/* Client History Status */}
                        <div className=" bg-[#17AA40] text-xs rounded-lg px-2 py-0.5 text-white">
                          New Client
                        </div>
                        {/* Client Name */}
                        <div>
                          <h1 className="text-2xl font-bold">Haviva Weiss</h1>
                        </div>
                      </div>

                      <div
                        className="absolute top-4 right-4 w-10 h-10 rounded-full border border-tatto-dark-blue text-xl flex justify-center items-center cursor-pointer"
                        title="Edit"
                        onClick={(e) => setSideModalFrom("addClient")}
                      >
                        <PiPencil className="text-tatto-dark-blue" />
                      </div>
                    </div>
                    {/*  */}
                    <div className="px-4">
                      <div
                        className={`flex flex-col gap-1 border rounded-lg items-center text-gray-500 bg-white`}
                      >
                        {/*  */}
                        <div className="text-center border-b w-full px-6 py-2">
                          <h1 className="text-sm font-semibold  text-tatto-dark-blue">
                            $10.00
                          </h1>
                          <span className="text-[10px] text-tatto-muted">
                            Total sales
                          </span>
                        </div>
                        {/*  */}
                        <div className="grid grid-cols-5 w-full text-center px-6 py-4">
                          <div>
                            <h1 className="text-sm font-semibold  text-tatto-dark-blue">
                              1
                            </h1>
                            <span className="text-[10px] text-tatto-muted">
                              All booking
                            </span>
                          </div>
                          <div>
                            <h1 className="text-sm font-semibold  text-tatto-dark-blue">
                              0
                            </h1>
                            <span className="text-[10px] text-tatto-muted">
                              Completed
                            </span>
                          </div>
                          <div>
                            <h1 className="text-sm font-semibold  text-tatto-dark-blue">
                              0
                            </h1>
                            <span className="text-[10px] text-tatto-muted">
                              Canceled
                            </span>
                          </div>
                          <div>
                            <h1 className="text-sm font-semibold  text-tatto-dark-blue">
                              0
                            </h1>
                            <span className="text-[10px] text-tatto-muted">
                              NO Show
                            </span>
                          </div>
                          <div>
                            <h1 className="text-sm font-semibold  text-tatto-dark-blue">
                              1
                            </h1>
                            <span className="text-[10px] text-tatto-muted">
                              All booking
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Details Section */}
                    <div className="px-6 py-4">
                      <div className="flex flex-col gap-4 relative">
                        {/*  */}
                        <div className="form-group flex flex-col gap-1">
                          <label className="text-sm text-tatto-muted">
                            Phone
                          </label>
                          <span className="text-sm font-semibold text-tatto-dark-blue">
                            &#40;833&#41; 240-3627
                          </span>
                        </div>
                        {/*  */}
                        <div className="form-group flex flex-col gap-1">
                          <label className="text-sm text-tatto-muted">
                            Email
                          </label>
                          <span className="text-sm font-semibold text-tatto-dark-blue">
                            lifote@mailinator.com
                          </span>
                        </div>
                        {/*  */}
                        <div className="form-group flex flex-col gap-3">
                          <label className="text-sm text-tatto-muted">
                            Notes
                          </label>
                          <span className="text-sm font-semibold underline w-fit">
                            Add Client Notes
                            <div className="flex justify-center">
                              <Image
                                src={"/png_icons/two-arrows.png"}
                                className="w-3"
                                width={10}
                                height={10}
                                alt=""
                              />
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Last Detaling Section */}
                  <div className="flex flex-col gap-4 w-full">
                    {/* Client Last Appointment Was */}
                    <div className="w-full text-center flex justify-center">
                      <span className="text-tatto-muted bg-white w-fit text-sm flex justify-center gap-1">
                        Last appointment created at
                        <p className="text-black text-sm font-semibold ">
                          8 June 2023
                        </p>
                      </span>
                    </div>
                    {/* Client Created day info */}
                    <div className="flex w-full  justify-center">
                      <div className="w-fit bg-white px-2">
                        <h1 className="text-sm font-semibold">
                          Client created
                        </h1>
                        <span className="flex text-xs">
                          JULY 1, 8:23 PM&nbsp; •&nbsp;&nbsp;
                          <p className="font-light">
                            Created by Katell Mcclain
                          </p>
                        </span>
                      </div>
                    </div>
                    {/* Book Now */}
                    <div className="h-fit flex justify-end gap-2 w-full px-4 pb-2">
                      <button className="bg-tatto-dark-blue w-fit px-4 py-3 rounded-lg">
                        <BsThreeDots className="text-xl text-white" />
                      </button>
                      <button
                        className="bg-tatto-dark-blue w-full text-white px-4 py-3 rounded-lg"
                        onClick={() => setEnquiryFrom(true)}
                      >
                        Book now
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="hidden md:block md:w-[700px] bg-[#F8F8FB] overflow-y-scroll rounded-lg">
              {sidebarDetailing ? (
                <div className="px-4">
                  <div>
                    {consentForm ? (
                      <>
                        <div className="relative">
                          {/* Head */}
                          <div className="flex  items-center gap-5 pt-3 pb-1  border-b-2">
                            {/* Icon */}
                            <div>
                              <FiArrowLeft
                                className="text-2xl cursor-pointer"
                                onClick={() => setConsentForm(false)}
                              />
                            </div>
                            {/* Title */}
                            <div className="leading-none">
                              <h1 className="text-md font-semibold">
                                Consent Form
                              </h1>
                              <span className="text-xs">Wed, Jul 21 21:30</span>
                            </div>
                          </div>
                          {/* body */}
                          <div className="h-[80vh] w-full relative">
                            {/* Content */}
                            <div
                              className={`${
                                consentOtpIsValid ? "" : "blur-sm"
                              } p-4`}
                            >
                              <h1>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Dolores dolorem nulla earum
                                impedit! Dolorem soluta recusandae culpa
                                reprehenderit esse reiciendis, libero aperiam
                                saepe? Voluptatibus maiores doloribus
                                praesentium enim dolores maxime.
                              </h1>
                              <h1>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Dolores dolorem nulla earum
                                impedit! Dolorem soluta recusandae culpa
                                reprehenderit esse reiciendis, libero aperiam
                                saepe? Voluptatibus maiores doloribus
                                praesentium enim dolores maxime.
                              </h1>
                              <h1>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Dolores dolorem nulla earum
                                impedit! Dolorem soluta recusandae culpa
                                reprehenderit esse reiciendis, libero aperiam
                                saepe? Voluptatibus maiores doloribus
                                praesentium enim dolores maxime.
                              </h1>
                              <h1>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Dolores dolorem nulla earum
                                impedit! Dolorem soluta recusandae culpa
                                reprehenderit esse reiciendis, libero aperiam
                                saepe? Voluptatibus maiores doloribus
                                praesentium enim dolores maxime.
                              </h1>
                              <h1>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Dolores dolorem nulla earum
                                impedit! Dolorem soluta recusandae culpa
                                reprehenderit esse reiciendis, libero aperiam
                                saepe? Voluptatibus maiores doloribus
                                praesentium enim dolores maxime.
                              </h1>
                              <h1>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Dolores dolorem nulla earum
                                impedit! Dolorem soluta recusandae culpa
                                reprehenderit esse reiciendis, libero aperiam
                                saepe? Voluptatibus maiores doloribus
                                praesentium enim dolores maxime.
                              </h1>
                            </div>
                            {/* Upper Lyer */}
                            <div
                              className={`${
                                consentOtpIsValid ? "hidden" : "flex"
                              } text-center absolute top-0 left-0 right-0 bottom-0 w-full h-full justify-center items-center flex-col gap-2`}
                            >
                              <div className="border border-black  rounded-full w-10 h-10 flex justify-center items-center text-xl">
                                <GoLock className="text-black" />
                              </div>
                              <div>
                                <span>
                                  Available with TIMIFY Premium and Enterprise
                                </span>
                              </div>
                              <div>
                                <button
                                  className="bg-red-600 rounded-md px-4 py-2 text-white font-extrabold text-sm"
                                  onClick={() => setConsentEmailPopup(true)}
                                >
                                  Upgrade
                                </button>
                              </div>
                            </div>
                            {/* Email popup */}
                            <div
                              className={`w-full h-full absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center z-40 ${
                                consentEmailPopup ? "visible" : "hidden"
                              }`}
                              style={{ background: "#00000090" }}
                            >
                              <div className="w-3/4 bg-white rounded-2xl p-3 z-50">
                                {/* Modal Head */}
                                <div className="flex justify-end pt-1 pb-4 items-center relative">
                                  {/* close button */}
                                  <div
                                    className="absolute right-0 top-0.5"
                                    onClick={() => setConsentEmailPopup(false)}
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
                                      <h1 className="text-xl">
                                        Send example email
                                      </h1>
                                      <span className="text-tatto-muted">
                                        Enter an email address below
                                      </span>
                                    </div>
                                    {/*  */}
                                    <div className="flex flex-col gap-1">
                                      <label className="text-tatto-muted text-sm">
                                        Email address:
                                      </label>
                                      <div>
                                        <input
                                          type="text"
                                          value={""}
                                          onChange={(e) =>
                                            console.log(e.target.value)
                                          }
                                          className="w-full px-3 py-2 border rounded-md focus-visible:outline-none placeholder:text-tatto-muted placeholder:italic"
                                          placeholder="Enter email address"
                                        />
                                      </div>
                                    </div>
                                    {/* Button */}
                                    <div className="justify-center flex flex-row gap-2">
                                      <button
                                        className="px-6 py-2 border rounded-md border-tatto-dark-blue text-tatto-dark-blue"
                                        onClick={() =>
                                          setConsentEmailPopup(false)
                                        }
                                      >
                                        Cancel
                                      </button>
                                      <button
                                        className="px-6 py-2 border rounded-md bg-tatto-dark-blue text-white"
                                        onClick={() => {
                                          setConsentOptPopup(true);
                                          setConsentEmailPopup(false);
                                        }}
                                      >
                                        Send example
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* OPT Popup */}
                            <div
                              className={`w-full h-full absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center z-40 ${
                                consentOptPopup ? "visible" : "hidden"
                              }`}
                              style={{ background: "#00000090" }}
                            >
                              <div className="w-3/4 bg-white rounded-2xl p-3 z-50">
                                {/* Modal Head */}
                                <div className="flex justify-end pt-1 pb-4 items-center relative">
                                  {/* close button */}
                                  <div
                                    className="absolute right-0 top-0.5"
                                    onClick={() => setConsentOptPopup(false)}
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
                                      <h1 className="text-xl">
                                        Check your email
                                      </h1>
                                      <span className="text-tatto-muted">
                                        We've sent a code to
                                        hello@oliviarhye.com
                                      </span>
                                    </div>
                                    {/*  */}
                                    <div className="flex justify-between">
                                      {/* input 1 */}
                                      <div className="w-16 h-16 flex justify-center items-center border rounded-md">
                                        <input
                                          className="w-12 h-12 p-2 text-3xl text-center focus-visible:outline-none group-focus:"
                                          type="number"
                                          value={consentOtpNumber[0]}
                                          onChange={(e) => {
                                            inputFunction(e, 0);

                                            document
                                              .getElementById("otp2")
                                              .focus();
                                          }}
                                          maxLength={1}
                                          onFocus={(e) => e.target.select()}
                                          id="otp1"
                                        />
                                      </div>
                                      {/* input 2 */}
                                      <div className="w-16 h-16 flex justify-center items-center border rounded-md">
                                        <input
                                          className="w-12 h-12 p-2 text-3xl text-center focus-visible:outline-none group-focus:"
                                          type="number"
                                          value={consentOtpNumber[1]}
                                          onChange={(e) => {
                                            inputFunction(e, 1);
                                            document
                                              .getElementById("otp3")
                                              .focus();
                                          }}
                                          maxLength={1}
                                          onFocus={(e) => e.target.select()}
                                          id="otp2"
                                        />
                                      </div>
                                      {/* input 3 */}
                                      <div className="w-16 h-16 flex justify-center items-center border rounded-md">
                                        <input
                                          className="w-12 h-12 p-2 text-3xl text-center focus-visible:outline-none group-focus:"
                                          type="number"
                                          value={consentOtpNumber[2]}
                                          onChange={(e) => {
                                            inputFunction(e, 2);
                                            document
                                              .getElementById("otp4")
                                              .focus();
                                          }}
                                          maxLength={1}
                                          onFocus={(e) => e.target.select()}
                                          id="otp3"
                                        />
                                      </div>
                                      {/* input 4 */}
                                      <div className="w-16 h-16 flex justify-center items-center border rounded-md">
                                        <input
                                          className="w-12 h-12 p-2 text-3xl text-center focus-visible:outline-none group-focus:"
                                          type="number"
                                          value={consentOtpNumber[3]}
                                          onChange={(e) => {
                                            inputFunction(e, 3);
                                          }}
                                          maxLength={1}
                                          onFocus={(e) => e.target.select()}
                                          id="otp4"
                                        />
                                      </div>
                                    </div>
                                    {/* Button */}
                                    <div className="justify-center flex flex-row gap-2">
                                      <button
                                        className="w-full px-6 py-2 border rounded-md border-tatto-dark-blue text-tatto-dark-blue"
                                        onClick={() =>
                                          setConsentOptPopup(false)
                                        }
                                      >
                                        Cancel
                                      </button>
                                      <button
                                        className={`w-full px-6 py-2 border rounded-md bg-tatto-dark-blue  text-white `}
                                        onClick={checkOtp}
                                      >
                                        Verify
                                      </button>
                                    </div>
                                    <div className="text-xs flex justify-center items-center gap-1">
                                      <span clas>Didn't get a code?</span>
                                      <p className="font-bold underline cursor-pointer">
                                        Click to resend
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Card Navigations */}
                        <div className="bg-transparent">
                          <ul className="flex pt-2 gap-4 border-b-2 text-sm font-semibold">
                            <li
                              className={`border-[#99D7DC] pb-2 ${
                                sideActive === "timeline" ? "border-b-4" : ""
                              }  `}
                              onClick={() => setSideActive("timeline")}
                            >
                              Timeline
                            </li>
                            <li
                              className={`border-[#99D7DC] pb-2 ${
                                sideActive === "giftcards" ? "border-b-4" : ""
                              }  `}
                              onClick={() => setSideActive("giftcards")}
                            >
                              Gift Cards
                            </li>
                            <li
                              className={`border-[#99D7DC] pb-2 ${
                                sideActive === "quickchat" ? "border-b-4" : ""
                              }  `}
                              onClick={() => setSideActive("quickchat")}
                            >
                              Quick chat
                            </li>
                          </ul>
                        </div>
                        {sideActive === "timeline" ? (
                          // Time line Code
                          <div className="p-4 flex flex-col gap-4 ">
                            {/* Decline  */}
                            <div className="bg-white px-1 py-4 flex flex-col gap-3">
                              {/* Top Side */}
                              <div className="text-sm flex justify-between items-center px-4">
                                <div className="bg-[#fd6666] text-white w-fit text-sm flex  items-center px-1 h-5 rounded-md">
                                  Enquiry Forms Decline
                                  <BsArrowRightShort className="text-lg" />
                                </div>
                                <div className="flex items-center gap-2">
                                  View All
                                  <div className="bg-[#fd6666] text-white  w-5 h-5 rounded-full flex justify-center items-center">
                                    {enquiryFormsDeclineList.length}
                                  </div>
                                </div>
                              </div>
                              {/* Slider side */}
                              <Slider {...settings}>
                                {enquiryFormsDeclineList
                                  .reverse()
                                  .map((decline) => {
                                    return (
                                      <div
                                        key={decline.id}
                                        className="text-center flex justify-center items-center flex-col"
                                      >
                                        <div className="decline-circle-card rounded-full border  flex justify-center items-center flex-col gap-1 w-[65px] h-[65px] ">
                                          <div className="text-xl">
                                            <Image
                                              className="w-6 h-6"
                                              src={decline.bodyPartIcon}
                                              alt=""
                                              width={20}
                                              height={20}
                                            />
                                          </div>
                                          <div className="text-xs font-bold">
                                            {decline.bodyPartName}
                                          </div>
                                        </div>
                                        <div className="text-[9px] mt-2 font-bold">
                                          {decline.date}
                                        </div>
                                      </div>
                                    );
                                  })}
                              </Slider>
                            </div>
                            {/* Enquiry Sent */}
                            <div className="flex flex-col gap-3">
                              <h1 className="text-sm font-bold">
                                Enquiry sent
                              </h1>
                              <div className="">
                                {enquiryFormSent ? (
                                  <>
                                    <div className={`w-full relative `}>
                                      <div className="auto w-fit">
                                        <div className="bg-yellow-100 border-[#FCF2C4] border-2 rounded-md px-6 py-2 flex flex-col gap-2">
                                          <div>
                                            <h1 className="text-[#978534] text-xs font-bold">
                                              Enquiry Form
                                            </h1>
                                          </div>
                                          <div className="flex gap-2 items-center justify-between text-sm">
                                            <div>
                                              <span className="text-tatto-dark-blue font-bold">
                                                March 16, 2021
                                              </span>
                                            </div>
                                            <div className="h-3 w-[1px] bg-mid-gray"></div>
                                            <div>
                                              <span className="text-tatto-muted text-xs">
                                                10:30 AM
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                        {/* Test */}

                                        <div>
                                          <button
                                            className="px-2 border py-1"
                                            onClick={() => {
                                              setEnquiryFromIsAccepted(true);
                                              setEnquiryFormSent(false);
                                              setDownPaymentCard(true);
                                            }}
                                          >
                                            Accept
                                          </button>
                                          <button
                                            className="px-2 border py-1"
                                            onClick={() => {
                                              setEnquiryFromIsAccepted(false);
                                              setEnquiryFormSent(false);
                                              setEnquiryFormsDeclineList(
                                                (prev) => [
                                                  ...prev,
                                                  {
                                                    id: 10,
                                                    bodyPartName: "new",
                                                    bodyPartIcon:
                                                      "/png_icons/hand-icon.png",
                                                    date: "March 16, 2021",
                                                  },
                                                ]
                                              );
                                            }}
                                          >
                                            Decline
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                ) : (
                                  <div className="bg-white text-sm font-thin w-fit px-4 py-2 rounded-lg">
                                    <span className="">
                                      No Enquiry has been sent in
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                            {/* UpComing Visits */}
                            <div className="flex flex-col gap-3">
                              <h1 className="text-sm font-bold">
                                Upcoming visits
                              </h1>
                              <div>
                                {enquiryFrom ? (
                                  <div className="px-4">
                                    <TimeLineCard
                                      date={"Thu, Jul 8"}
                                      location={"Moscow - London"}
                                      time={"10h"}
                                      // Enquiry
                                      enquiryFromStatus={enquiryFrom}
                                      enquiryFromSubmited={enquiryFromSubmited}
                                      // Down Payment
                                      downPaymentCardStatus={downPaymentCard}
                                      isDownPaymentDone={isDownPaymentDone}
                                      handleDownPayment={() =>
                                        setIsDownPaymentDone(true)
                                      }
                                      //
                                      downPaymentIsDone={isDownPaymentDone}
                                      handleEnquiryForm={() => {
                                        setEnquiryFromSubmited(true);
                                        setEnquiryFormSent(true);
                                      }}
                                      setSideActive={(e) => setSideActive(e)}
                                      setConsentForm={(e) =>
                                        setConsentForm(true)
                                      }
                                      consentFormStatus={consentOtpIsValid}
                                      // all payment
                                      setAllPayment={() => setAllPayment(true)}
                                      allPaymentStatus={allPayment}
                                    />
                                  </div>
                                ) : (
                                  <div className="bg-white text-sm font-thin w-fit px-4 py-2 rounded-lg">
                                    <span className="">
                                      No appointments in the future
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                            {/* Visit past */}
                            <div className="">
                              <div className="flex">
                                <h1 className="text-sm font-bold">
                                  Past visits
                                </h1>
                              </div>
                              {/* timeline data */}
                              <div
                                className={`bg-[#F8F8FB] ${
                                  pastHistory.length > 0 ? "px-4" : ""
                                }  py-2 h-auto mb-40 flex flex-col gap-12`}
                              >
                                {pastHistory.length > 0 ? (
                                  pastHistory.map((item, idx) => {
                                    return (
                                      <PastVisitsDetail
                                        key={idx}
                                        id={item}
                                        date={"Thu, Jul 8"}
                                        location={"Moscow - London"}
                                        time={"10h"}
                                        setSideActive={(e) => setSideActive(e)}
                                      />
                                    );
                                  })
                                ) : (
                                  <div className="bg-white text-sm font-thin w-fit px-4 py-2 rounded-lg">
                                    <span className="">
                                      No Past visits Available
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ) : sideActive === "giftcards" ? (
                          "giftCards"
                        ) : sideActive === "quickchat" ? (
                          "quickchat"
                        ) : (
                          ""
                        )}
                      </>
                    )}
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddClientSlide;
