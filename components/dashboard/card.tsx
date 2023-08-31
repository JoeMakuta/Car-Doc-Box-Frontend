"use client";
import React from "react";
import { BiSolidCar } from "react-icons/bi";

export const Card = () => {
  return (
    <div className=" w-[20vw]  p-4 bg-blue-400/10 border-[1px] border-blue-400 rounded-xl ">
      <div className=" flex justify-between ">
        <h1 className=" font-bold ">Nouveaux</h1>
        <div className=" bg-blue-400 rounded-lg flex justify-center items-center w-14 h-14 ">
          <BiSolidCar size={25} color="white" />
        </div>
      </div>
      <p className="font-semibold text-3xl">5</p>
      <p className=" text-xs">+5 depuis hier.</p>
    </div>
  );
};

export const Card1 = () => {
  return (
    <div className=" w-[20vw]  p-4 bg-main_color/10 border-[1px] border-main_color rounded-xl ">
      <div className=" flex justify-between ">
        <h1 className=" font-bold ">Tous les automobiles</h1>
        <div className=" bg-main_color rounded-lg flex justify-center items-center w-14 h-14 ">
          <BiSolidCar size={25} color="white" />
        </div>
      </div>
      <p className="font-semibold text-3xl">20</p>
      <p className=" text-xs">+5 depuis hier.</p>
    </div>
  );
};

export const Card2 = () => {
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
