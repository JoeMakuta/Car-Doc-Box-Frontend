import React, { use } from "react";
import { Input } from "antd";
import {
  ActionCreatorWithPayload,
  ActionCreatorWithoutPayload,
} from "@reduxjs/toolkit";

interface InputType {
  label: string;
  placeholder: string;
  size: "middle" | "large" | "small";
  type: string;
  setter:
    | ActionCreatorWithPayload<any, `${string}/${string}`>
    | ActionCreatorWithoutPayload<`${string}/${string}`>;
}

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";

const MyInput = ({ label, placeholder, size, type, setter }: InputType) => {
  const dispatch: AppDispatch = useDispatch();
  const login = useSelector((state: RootState) => state.login);
  return (
    <div className="flex  flex-col px-4 py-1  w-full min-w-[300px] rounded-md bg-black/10 ">
      <label className="text-sm text-black font-bold " htmlFor="">
        {label}
      </label>
      {type == "password" ? (
        <Input.Password
          onChange={(e) => {
            dispatch(setter(e.target.value));
          }}
          placeholder={placeholder}
          size={size}
          className="p-0 rounded-none text-black/60"
          bordered={false}
        />
      ) : (
        <Input
          onChange={(e) => {
            dispatch(setter(e.target.value));
          }}
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
