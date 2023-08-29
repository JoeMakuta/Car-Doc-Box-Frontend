import React from "react";
import { Input } from "antd";

interface InputType {
  label: string;
  placeholder: string;
  size: "middle" | "large" | "small";
  type: string;
}

const MyInput = ({ label, placeholder, size, type }: InputType) => {
  return (
    <div className="flex  flex-col px-4 py-1  w-full min-w-[300px] rounded-md bg-black/10 ">
      <label className="text-sm text-black font-bold " htmlFor="">
        {label}
      </label>
      {type == "password" ? (
        <Input.Password
          placeholder={placeholder}
          size={size}
          className="p-0 rounded-none text-black/60"
          bordered={false}
        />
      ) : (
        <Input
          placeholder={placeholder}
          size={size}
          className="p-0 rounded-none text-black/60"
          bordered={false}
          type={type}
        />
      )}
    </div>
  );
};

export default MyInput;
