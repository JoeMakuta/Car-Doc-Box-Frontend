"use client";

import { Button, Input, Select, Steps, Upload } from "antd";
import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
import NewAutoForm from "../../../../components/dashboard/automobile/newAutoForm";
import NoContent from "../../../../components/dashboard/automobile/noContent";
import CarAssuranceForm from "../../../../components/dashboard/automobile/carAssuranceForm";
import PinkCardForm from "../../../../components/dashboard/automobile/pinkCardForm";
import CarStickerForm from "../../../../components/dashboard/automobile/carStickerForm";
import TechControlForm from "../../../../components/dashboard/automobile/techControlForm";

const NewAutoPage = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const onChangeStep = (value: number) => {
    setCurrentStep(value);
  };

  const nextB = () => {
    if (currentStep < 3) setCurrentStep((step) => step + 1);
  };

  const prevB = () => {
    if (currentStep > 0) setCurrentStep((step) => step - 1);
  };

  const content = [
    <NewAutoForm />,
    <CarAssuranceForm />,
    <PinkCardForm />,
    <CarStickerForm />,
    <TechControlForm />,
  ];

  return (
    <main className="flex flex-col gap-5 p-5 ">
      <h1>Nouvel automobile</h1>
      <Steps
        type="navigation"
        current={currentStep}
        onChange={onChangeStep}
        className="w-[70vw] max-w-[1000px]"
        size="small"
        items={[
          {
            // status: "process",
            title: "Automobile",
          },
          {
            // status: "wait",
            title: "Assurance",
          },
          {
            // status: "wait",
            title: "Carte rose",
          },
          {
            // status: "wait",
            title: "Vignette",
          },
          {
            // status: "wait",
            title: "Controle Technique",
          },
        ]}
      />
      <div className=" max-w-[1200px] ">{content[currentStep]}</div>
      <div className=" flex gap-4 self-end ">
        {currentStep != 0 && (
          <button
            type="button"
            onClick={() => {
              prevB();
            }}
            className="  rounded-lg p-5 flex justify-center items-center right-20 border-main_color text-main_color border-[1px] h-12 "
          >
            <p>Precedent</p>
          </button>
        )}
        <button
          type="button"
          onClick={() => {
            nextB();
          }}
          className="  hover:bg-main_color/70 active:bg-black transition-all rounded-lg p-5 flex justify-center items-center  bg-main_color text-white h-12 "
        >
          {currentStep < content.length - 1 ? (
            <p>Suivant</p>
          ) : (
            <p>Enregistrer</p>
          )}
        </button>
      </div>
    </main>
  );
};

export default NewAutoPage;
