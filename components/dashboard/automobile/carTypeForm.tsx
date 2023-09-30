import React from "react";
import { DatePicker, Input, Modal, Select } from "antd";

const CarTypeForm = () => {
  return (
    <form className="transition-all flex w-full  flex-col  ">
      <h1 className=" text-2xl font-bold ">Nouveau type d'engin</h1>
      <div className=" flex flex-col w-full ">
        <div className=" flex flex-col gap-4 p-4 ">
          <div className="  flex items-center justify-between gap-3">
            <label>Nom : </label>
            <Input
              placeholder="Motocycle "
              size="middle"
              className=" w-[70%] "
            />
          </div>
          <div className=" flex  justify-between gap-3 ">
            <label>Description : </label>
            <Input.TextArea
              placeholder={"Description"}
              size="middle"
              className=" w-[70%] "
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default CarTypeForm;
