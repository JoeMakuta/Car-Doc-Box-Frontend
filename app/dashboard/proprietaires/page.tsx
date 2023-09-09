import React from "react";
import {
  BiCalendarExclamation,
  BiCross,
  BiFilter,
  BiPlus,
  BiSearchAlt,
} from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { FiCrosshair } from "react-icons/fi";
import { UserCard } from "../../../components/dashboard/userCard";

const Proprietaire = () => {
  return (
    <main className=" flex flex-col gap-4 ">
      <div className=" flex justify-between ">
        <h1 className=" font-bold text-2xl ">Proprietaire</h1>
        <div className=" flex gap-2 items-center ">
          <button className="flex  h-9 text-sm justify-center items-center p-4 bg-main_color rounded-xl hover:bg-inherit hover:text-main_color hover:border hover:border-main_color transition-all text-white ">
            <BsPlus size={25} />
            <p>Ajouter</p>
          </button>
          <div className=" relative ">
            <input
              className="bg-black/5 pl-8 text-xs h-9 outline-none focus:border  focus:border-main_color/50 transition-all border-[1px] rounded-md p-1 "
              type="text"
              placeholder="Rechercher ..."
            />
            <BiSearchAlt
              className="text-black/25 absolute top-2 left-2"
              size={20}
            />
          </div>
          <button className="flex  h-9 text-sm justify-center items-center p-4 bg-main_color rounded-xl hover:bg-inherit hover:text-main_color hover:border hover:border-main_color transition-all text-white ">
            <BiFilter size={25} />
          </button>
        </div>
      </div>
      <div className=" bg-main_color/10 rounded-lg p-3 ">
        <div>
          <div className=" flex justify-between ">
            <h1>Nouveaux proprietaire</h1>
            <BiPlus
              className=" rotate-45 text-black/50 cursor-pointer "
              size={30}
            />
          </div>
        </div>
        <UserCard />
      </div>
    </main>
  );
};

export default Proprietaire;
