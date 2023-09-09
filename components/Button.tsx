"use client";
import React from "react";
import { Button as Btn, ConfigProvider } from "antd";
import { ReactElement } from "react";
import { BiLoader } from "react-icons/bi";
import { FiLoader } from "react-icons/fi";

export const Button = ({
  action,
  name,
  type,
  children,
  loading,
}: {
  action: () => void;
  name: string;
  type: "link" | "primary" | "default" | "text";
  children?: ReactElement;
  loading: boolean;
}) => {
  return (
    <Btn
      className="flex justify-center items-center  font-bold h-12  border-main_color border-[1px] hover:text-main_color hover:bg-white bg-main_color w-full text-center rounded-md gap-1 "
      onClick={action}
      type={type}
      disabled={loading}
    >
      {loading === true ? (
        <FiLoader className=" animate-spin  " size={20} />
      ) : null}
      <span>{children}</span>
      <span>{name}</span>
    </Btn>
  );
};
