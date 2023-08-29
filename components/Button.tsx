"use client";
import { Button as Btn, ConfigProvider } from "antd";
import { ReactElement } from "react";

export const Button = ({
  action,
  name,
  type,
  children,
}: {
  action: () => void;
  name: string;
  type: "link" | "primary" | "default" | "text";
  children?: ReactElement;
}) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#D37E2F",
        },
      }}
    >
      <Btn
        className="flex justify-center items-center  font-bold h-12  border-main_color border-[1px] hover:text-main_color hover:bg-white bg-main_color w-full text-center rounded-md "
        onClick={action}
        type={type}
      >
        <span>{children}</span>
        <span>{name}</span>
      </Btn>
    </ConfigProvider>
  );
};
