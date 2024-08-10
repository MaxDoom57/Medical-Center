import React from "react";

const RedCard = () => {
  return (
    <div className="flex w-64 gap-5 h-[70px] border-2 rounded-[90px] border-red-800 items-center">
      <div className="bg-red-500 w-14 h-14 ml-1 rounded-full flex items-center justify-center">
        <i class="fa-solid fa-truck-medical text-3xl text-white"></i>
      </div>
      <div className="text-2xl font-bold text-red-600 flex text-center">
        Not-Available
      </div>
    </div>
  );
};

export default RedCard;
