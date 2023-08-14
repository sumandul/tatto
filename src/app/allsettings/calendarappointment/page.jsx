import Link from "next/link";
import React from "react";

const CalendarAppointment = ({ children }) => {
  return (
    <>
      <div className="flex gap-4">
        <div>
          <ul>
            <Link href={"/allsettings/calendarappointment/testpage1"}>
              page 1
            </Link>
            <Link href={"/allsettings/calendarappointment/testpage2"}>
              page 3
            </Link>
            <Link href={"/allsettings/calendarappointment/testpage3"}>
              page 1
            </Link>
          </ul>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default CalendarAppointment;
