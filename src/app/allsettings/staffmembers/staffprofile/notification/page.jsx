"use client";
import React, { useState } from "react";

const Notifications = () => {
  const [onlineBookingsChanged, setOnlineBookingsChanged] = useState(false);
  const [otherBookingsChanged, setOtherBookingsChanged] = useState(true);
  const [onlineBookingsCreated, setOnlineBookingsCreated] = useState(false);
  const [newMessage, setNewMessage] = useState(false);
  return (
    <>
      <div
        className="border-2 rounded-lg px-6 py-5"
        style={{ height: "27rem" }}
      >
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-md font-bold text-gray-700">Send SMS when:</h1>
            {/*  */}
            <div className="flex items-center justify-start gap-4 w-full">
              <label
                htmlFor={"onlineBookingsChanged"}
                className="flex gap-4 items-center cursor-pointer text-sm"
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    id={"onlineBookingsChanged"}
                    checked={onlineBookingsChanged}
                    className="sr-only small-checkbox"
                    onChange={() =>
                      setOnlineBookingsChanged(!onlineBookingsChanged)
                    }
                  />

                  <div
                    className={`block ${
                      !onlineBookingsChanged
                        ? `bg-tatto-disabled`
                        : `bg-tatto-dark-blue`
                    } w-9 h-5 rounded-full`}
                    style={{ height: "16.3px" }}
                  ></div>

                  <div
                    className={`dot absolute left-1 top-0.5 bg-white w-3 h-3 rounded-full transition`}
                  ></div>
                </div>
                Online bookings are created, changed, or removed
              </label>
            </div>
            {/*  */}
            <div className="flex items-center justify-start gap-4 w-full">
              <label
                htmlFor={"otherBookingsChanged"}
                className="flex gap-4 items-center cursor-pointer text-sm"
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    id={"otherBookingsChanged"}
                    checked={otherBookingsChanged}
                    className="sr-only small-checkbox"
                    onChange={() =>
                      setOtherBookingsChanged(!otherBookingsChanged)
                    }
                  />

                  <div
                    className={`block ${
                      !otherBookingsChanged
                        ? `bg-tatto-disabled`
                        : `bg-tatto-dark-blue`
                    } w-9 h-5 rounded-full`}
                    style={{ height: "16.3px" }}
                  ></div>

                  <div
                    className={`dot absolute left-1 top-0.5 bg-white w-3 h-3 rounded-full transition`}
                  ></div>
                </div>
                Other bookings are created, changed, or removed
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-md font-bold text-gray-700">
              Send email when:
            </h1>
            {/*  */}
            <div className="flex items-center justify-start gap-4 w-full">
              <label
                htmlFor={"onlineBookingsCreated"}
                className="flex gap-4 items-center cursor-pointer text-sm"
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    id={"onlineBookingsCreated"}
                    checked={onlineBookingsCreated}
                    className="sr-only small-checkbox"
                    onChange={() =>
                      setOnlineBookingsCreated(!onlineBookingsCreated)
                    }
                  />

                  <div
                    className={`block ${
                      !onlineBookingsCreated
                        ? `bg-tatto-disabled`
                        : `bg-tatto-dark-blue`
                    } w-9 h-5 rounded-full`}
                    style={{ height: "16.3px" }}
                  ></div>

                  <div
                    className={`dot absolute left-1 top-0.5 bg-white w-3 h-3 rounded-full transition`}
                  ></div>
                </div>
                Online bookings are created
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-md font-bold text-gray-700">
              Send mobile app notification when:
            </h1>
            {/*  */}
            <div className="flex items-center justify-start gap-4 w-full">
              <label
                htmlFor={"newMessage"}
                className="flex gap-4 items-center cursor-pointer text-sm"
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    id={"newMessage"}
                    checked={newMessage}
                    className="sr-only small-checkbox"
                    onChange={() => setNewMessage(!newMessage)}
                  />

                  <div
                    className={`block ${
                      !newMessage ? `bg-tatto-disabled` : `bg-tatto-dark-blue`
                    } w-9 h-5 rounded-full`}
                    style={{ height: "17px" }}
                  ></div>

                  <div
                    className={`dot absolute left-1 top-0.5 bg-white w-3 h-3 rounded-full transition`}
                  ></div>
                </div>
                New message is received
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notifications;
