import React, { useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";

const AddCondition = ({ conditionsList, handleClick }) => {
  const [showConditions, setShowConditions] = useState(false);
  return (
    <>
      <div
        className="flex items-center gap-2 cursor-pointer relative"
        onClick={() => setShowConditions(true)}
      >
        {!showConditions ? (
          <div
            className={`p-3 flex items-center gap-2 rounded-md w-11/12 hover:bg-[#e0e3e5]`}
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
                <div key={idx} className="px-3 py-3" onClick={handleClick}>
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
    </>
  );
};

export default AddCondition;
