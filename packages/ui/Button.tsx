"use client";

import * as React from "react";
import { Button as Btn } from "antd";

export const Button = ({
  action,
  name,
}: {
  action: () => void;
  name: string;
}) => {
  return (
    <Btn
      className=" flex justify-center items-center font-bold h-12 bg-[#D37E2F] w-full text-center rounded-md "
      onClick={action}
      content="Hello"
    >
      <p>SIGN IN</p>
    </Btn>
  );
};
