import dynamic from "next/dynamic";
import React from "react";
const CalendarAppointment = dynamic(()=>import('../page'),{
  ssr:false
})

const TestPage2 = () => {
  return (
    <>
      <CalendarAppointment>This is test page 2</CalendarAppointment>
    </>
  );
};

export default TestPage2;
