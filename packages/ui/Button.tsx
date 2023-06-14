"use client";

import * as React from "react";
import { Button as Btn, ConfigProvider } from "antd";

export const Button = ({
  action,
  name,
  type,
}: {
  action: () => void;
  name: string;
  type: "link" | "primary" | "default" | "text";
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
        className="  font-bold h-12  border-main_color border-[1px] hover:text-main_color hover:bg-white bg-main_color w-full text-center rounded-md "
        onClick={action}
        type={type}
      >
        {name}
      </Btn>
    </ConfigProvider>
  );
};
