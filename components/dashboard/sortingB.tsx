"use client";
import { Tabs, TabsProps } from "antd";
import React, { useState } from "react";

const buttons: TabsProps["items"] = [
  {
    key: "1",
    label: "New",
  },
  {
    key: "2",
    label: "In progress",
  },
  {
    key: "3",
    label: "Completed",
  },
];

const SortingB = () => {
  return (
    <div className=" flex  ">
      <Tabs defaultActiveKey="1" items={buttons} />;
    </div>
  );
};

export default SortingB;
