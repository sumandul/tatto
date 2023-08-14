import dynamic from "next/dynamic";
import React from "react";

const CalendarAppointment = dynamic(()=>import('../page'),{


  ssr:false
})

const TestPage1 = () => {
  return (
    <>
      <CalendarAppointment>
        <h1>This is test page 1</h1>
      </CalendarAppointment>
    </>
  );
};

export default TestPage1;
