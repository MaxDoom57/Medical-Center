import React from "react";

const GreenCard = () => {
  return (
    <div className="flex w-64 gap-5 h-[70px] border-2 rounded-[90px] border-red-800 items-center m-8">
      <div className="bg-green-500 w-14 h-14 ml-1 rounded-full flex items-center justify-center">
        <i class="fa-solid fa-user-doctor text-3xl text-white"></i>
      </div>
      <div className="text-2xl font-bold text-green-600 flex text-center">
        Available
      </div>
    </div>
  );
};

export default GreenCard;
