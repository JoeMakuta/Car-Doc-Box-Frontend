"use client";
import React, { useState } from "react";

const buttons = [
  { name: "New" },
  { name: "In progress" },
  { name: "Completed" },
];

const SortingB = () => {
  const [selected, setSelected] = useState<string>("new");
  return (
    <div className=" text-sm flex  ">
      {buttons.map((elt, index) => {
        return (
          <button
            key={index}
            className={`${
              selected == elt.name
                ? "border-b-4 h-10 w-24  transition-all border-main_color pb-4"
                : "w-24  pb-8"
            }`}
            onClick={() => {
              setSelected(elt.name);
            }}
          >
            {elt.name}
          </button>
        );
      })}
    </div>
  );
};

export default SortingB;
