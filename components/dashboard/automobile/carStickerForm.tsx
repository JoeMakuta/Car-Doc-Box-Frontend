import { DatePicker, Input, Select, Upload } from "antd";
import React from "react";
import { BsPlus } from "react-icons/bs";

const CarStickerForm = () => {
  return (
    <form className="transition-all flex min-h-[20vw] flex-col gap-4 p-4">
      <h1 className=" text-2xl font-bold ">Information sur la Vignette </h1>
      <div className=" flex flex-col  ">
        <div className=" flex flex-col gap-4 p-5 w-1/2">
          <div className="  flex items-center justify-between gap-3">
            <label>ID de la vignette : </label>
            <Input
              placeholder="765456543"
              size="middle"
              className=" w-[70%] "
            />
          </div>
          <div className=" flex items-center justify-between gap-3 ">
            <label>Dates : </label>
            <DatePicker.RangePicker
              placeholder={["Delivery date", "Expiration date"]}
              size="middle"
              className=" w-[70%] "
            />
          </div>
          <div className=" flex items-center justify-between gap-3 ">
            <label>Images : </label>
            <div className=" flex flex-col border-[1px] border-main_color border-dashed rounded-xl gap-4 p-3 w-[70%]">
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
        </div>
      </div>
    </form>
  );
};

export default CarStickerForm;
