import React from "react";
import { BiSolidCar } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";

export const UserCard = () => {
  return (
    <div className=" w-[20vw] min-w-[350px] min-h-[150px] max-h-[200px] h-[10vw] flex flex-col justify-between   p-4 bg-white border-[1px] rounded-xl ">
      <div className=" flex justify-between">
        <div className=" flex gap-3 items-center ">
          <div className=" bg-green-400 rounded-full flex justify-center items-center w-14 h-14 ">
            <BiSolidCar size={25} color="white" />
          </div>
          <div>
            <h1 className=" font-bold ">Joe Makuta</h1>
            <p className=" ">Software developer</p>
          </div>
        </div>
        <BsThreeDotsVertical className=" text-black/50 " />
      </div>
      <div className=" flex pl-16 flex-col gap-2 ">
        <p className="font-semibold text-black/50 ">Lead</p>
        <div className="flex gap-5">
          <p className=" text-xs text-blue-500">#38763</p>
          <p className=" text-xs text-main_color ">New lead</p>
        </div>
      </div>
    </div>
  );
};
