"use client";

import { Button, Input, Select, Steps, Upload } from "antd";
import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
const NewAutoPage = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const onChangeStep = (value: number) => {
    setCurrentStep(value);
  };
  const onChangeStatus = (value: number) => {
    setCurrentStep(value);
  };
  return (
    <main className="flex flex-col gap-5 p-5 ">
      <h1>Nouvel automobile</h1>
      <Steps
        type="navigation"
        current={currentStep}
        onChange={onChangeStep}
        className="w-[70vw] site-navigation-steps"
        items={[
          {
            status: "process",
            title: "Step 1",
          },
          {
            status: "wait",
            title: "Step 2",
          },
          {
            status: "wait",
            title: "Step 3",
          },
          {
            status: "wait",
            title: "Step 4",
          },
        ]}
      />
      <form className=" flex flex-col gap-4 p-4">
        <h1 className=" text-2xl font-bold ">Information sur l'automobile</h1>
        <div className=" flex gap-10 ">
          <div className=" flex flex-col gap-4 p-5 w-1/2">
            <div className="  flex items-center justify-between gap-3">
              <label>Numero chassis : </label>
              <Input
                placeholder="765456543"
                size="large"
                className=" w-[70%] "
              />
            </div>
            <div className=" flex items-center justify-between gap-3 ">
              <label>Brand : </label>
              <Input placeholder="TOYOTA" size="large" className=" w-[70%] " />
            </div>
            <div className="  flex items-center justify-between gap-3 ">
              <label>Proprietaire : </label>
              <div className=" w-[70%] flex gap-2 items-center ">
                <Select
                  placeholder="- Please select -"
                  size="large"
                  className=" w-full "
                />
                <button className="flex  h-10 text-sm justify-center items-center p-4 bg-main_color rounded-xl hover:bg-inherit hover:text-main_color hover:border hover:border-main_color transition-all text-white ">
                  <BsPlus size={25} />
                  {/* <p>Ajouter</p> */}
                </button>
              </div>
            </div>
            <div className="  flex items-center justify-between gap-3 ">
              <label>Type : </label>
              <div className=" w-[70%] flex gap-2 items-center ">
                <Select
                  placeholder="- Please select -"
                  size="large"
                  className=" w-full "
                />
                <button className="flex  h-10 text-sm justify-center items-center p-4 bg-main_color rounded-xl hover:bg-inherit hover:text-main_color hover:border hover:border-main_color transition-all text-white ">
                  <BsPlus size={25} />
                  {/* <p>Ajouter</p> */}
                </button>
              </div>
            </div>
          </div>
          <div className=" flex flex-col border-[1px] border-main_color border-dashed rounded-xl gap-4 p-5 w-1/2">
            {" "}
            <Upload
              // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              // fileList={fileList}
              // onChange={onChange}
              // onPreview={onPreview}
            >
              {"+ Upload"}
            </Upload>
          </div>
        </div>
        <div className=" flex gap-4  ">
          <button className="  rounded-lg p-5 flex justify-center items-center right-20 border-main_color text-main_color border-[1px] h-12 ">
            <p>Precedent</p>
          </button>
          <button className="   rounded-lg p-5 flex justify-center items-center  bg-main_color text-white h-12 ">
            <p>Suivant</p>
          </button>
        </div>
      </form>
    </main>
  );
};

export default NewAutoPage;
