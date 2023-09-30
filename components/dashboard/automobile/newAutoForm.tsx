import { Select } from "antd";
import { Upload } from "antd";
import { Input } from "antd";
import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { Modal } from "antd";
import CarTypeForm from "./carTypeForm";

const NewAutoForm = () => {
  const [showCarTypeModal, setShowCarTypeModal] = useState(false);

  return (
    <form className="transition-all min-h-[10vw] flex flex-col gap-4 p-4">
      <h1 className=" text-2xl font-bold ">Information sur l'automobile</h1>
      <div className=" flex gap-10 ">
        <div className=" flex flex-col gap-4 p-5 w-1/2">
          <div className="  flex items-center justify-between gap-3">
            <label>Numero chassis : </label>
            <Input
              placeholder="765456543"
              size="middle"
              className=" w-[70%] "
            />
          </div>
          <div className=" flex items-center justify-between gap-3 ">
            <label>Brand : </label>
            <Input placeholder="TOYOTA" size="middle" className=" w-[70%] " />
          </div>
          <div className=" flex items-center justify-between gap-3 ">
            <label>Plaque : </label>
            <div className=" flex gap-3 w-[70%] ">
              <Select
                options={[
                  { value: "DRC", label: "🇨🇩 DRC" },
                  { value: "Rwanda", label: "🇷🇼 Rwanda" },
                  { value: "Burundi", label: "🇧🇮 Burundi" },
                  { value: "Tanzanie", label: "🇹🇿 Tanzanie" },
                ]}
                placeholder="Country"
                size="middle"
                className=" w-[30%] "
              />
              <Input
                placeholder="462781-NK"
                size="middle"
                className=" w-[70%] "
              />
            </div>
          </div>
          <div className="  flex items-center justify-between gap-3 ">
            <label>Proprietaire : </label>
            <div className=" w-[70%] flex gap-2 items-center ">
              <Select
                placeholder="- Please select -"
                size="middle"
                className=" w-full "
              />
              <button
                type="button"
                className="flex  h-9 w-10 text-sm justify-center items-center  bg-main_color rounded-xl    transition-all text-white hover:bg-main_color/70 active:bg-black "
              >
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
                size="middle"
                className=" w-full "
              />
              <button
                type="button"
                onClick={() => {
                  setShowCarTypeModal((elt) => !elt);
                }}
                className="flex  h-9 w-10 text-sm justify-center items-center  bg-main_color rounded-xl    transition-all text-white hover:bg-main_color/70 active:bg-black "
              >
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
      <Modal
        open={showCarTypeModal}
        onCancel={() => {
          setShowCarTypeModal((elt) => !elt);
        }}
        centered
        okType="default"
        okText="Enregistrer"
        cancelText="Annuler"
      >
        <CarTypeForm />
      </Modal>
    </form>
  );
};

export default NewAutoForm;
