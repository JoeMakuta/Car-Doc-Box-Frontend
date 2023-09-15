import React from "react";
import { Input, Modal } from "antd";

const CarTypeForm = () => {
  return (
    <form className="transition-all flex w-full  flex-col  ">
      <h1 className=" text-2xl font-bold ">Nouveau type d'engin</h1>
      <div className=" flex flex-col w-full ">
        <div className=" flex flex-col gap-4 p-5 ">
          <div className="  flex items-center justify-between gap-3">
            <label>ID Assurance : </label>
            <Input placeholder="765456543" size="large" className=" w-[70%] " />
          </div>
          <div className=" flex items-center justify-between gap-3 ">
            <label>Dates : </label>
            <Input placeholder="TOYOTA" size="large" className=" w-[70%] " />
          </div>
        </div>
      </div>
    </form>
  );
};

export default CarTypeForm;
