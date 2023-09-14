"use client";

import { Button, Input, Select, Steps, Upload } from "antd";
import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
import NewAutoForm from "../../../../components/dashboard/automobile/newAutoForm";
const NewAutoPage = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const onChangeStep = (value: number) => {
    setCurrentStep(value);
  };

  const nextB = () => {
    setCurrentStep((step) => step + 1);
  };

  const prevB = () => {
    setCurrentStep((step) => step - 1);
  };

  const content = [
    <NewAutoForm />,
    <div className=" flex justify-center items-center h-[20vw]">
      No Content
    </div>,
    <div className=" flex justify-center items-center h-[20vw]">
      No Content
    </div>,
    <div className=" flex justify-center items-center h-[20vw]">
      No Content
    </div>,
  ];

  return (
    <main className="flex flex-col gap-5 p-5 ">
      <h1>Nouvel automobile</h1>
      <Steps
        type="navigation"
        current={currentStep}
        onChange={onChangeStep}
        className="w-[70vw] "
        items={[
          {
            // status: "process",
            title: "Step 1",
          },
          {
            // status: "wait",
            title: "Step 2",
          },
          {
            // status: "wait",
            title: "Step 3",
          },
          {
            // status: "wait",
            title: "Step 4",
          },
        ]}
      />
      {content[currentStep]}
      <div className=" flex gap-4  ">
        <button
          type="button"
          onClick={() => {
            prevB();
          }}
          className="  rounded-lg p-5 flex justify-center items-center right-20 border-main_color text-main_color border-[1px] h-12 "
        >
          <p>Precedent</p>
        </button>
        <button
          type="button"
          onClick={() => {
            nextB();
          }}
          className="  hover:bg-main_color/70 active:bg-black transition-all rounded-lg p-5 flex justify-center items-center  bg-main_color text-white h-12 "
        >
          <p>Suivant</p>
        </button>
      </div>
    </main>
  );
};

export default NewAutoPage;
