import dynamic from "next/dynamic";
import React from "react";
const CalendarAppointment = dynamic(()=>import('../page'),{
  ssr:false
})

const TestPage3 = () => {
  return (
    <>
      <CalendarAppointment>This is test page 3</CalendarAppointment>
    </>
  );
};

export default TestPage3;
