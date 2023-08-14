import React from "react";

const ConnectorLine = ({ width, height }) => {
  return (
    <>
      <div
        className={`${width ? width : "w-1"} ${
          height ? height : "h-40"
        }  bg-[#ADB5BD] -my-2 m-auto`}
      ></div>
    </>
  );
};

export default ConnectorLine;
