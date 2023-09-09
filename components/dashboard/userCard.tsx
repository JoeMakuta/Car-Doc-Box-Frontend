import React from "react";
import { BiSolidCar } from "react-icons/bi";

export const UserCard = () => {
  return (
    <div className=" w-[20vw]  p-4 bg-green-400/10 border-[1px] border-green-400 rounded-xl ">
      <div className=" flex justify-between ">
        <h1 className=" font-bold ">Nouveaux</h1>
        <div className=" bg-green-400 rounded-lg flex justify-center items-center w-14 h-14 ">
          <BiSolidCar size={25} color="white" />
        </div>
      </div>
      <p className="font-semibold text-3xl">5</p>
      <p className=" text-xs">+5 depuis hier.</p>
    </div>
  );
};
