import React from "react";

const CountCard = ({ title, orderCount }) => {
  return (
    <div className="flex-1 rounded-[8px] bg-white p-5 flex flex-col gap-4 shadow-md h-fit min-w-[300px]">
      <h5 className="text-[#4d4d4d] flex gap-2 items-center">
       <span>
        {title}
        </span> 
       
      </h5>

      <div className="flex justify-between items-center">
        <div className="text-3xl font-medium">  {orderCount} </div>
       
      </div>
    </div>
  );
};

export default CountCard;
