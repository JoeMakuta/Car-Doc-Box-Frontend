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
    <div className=" text-sm flex gap-4 ">
      {buttons.map((elt, index) => {
        return (
          <button
            key={index}
            className={
              elt.name.toLocaleLowerCase() == selected
                ? " border-b-4 border-main_color pb-2"
                : "pb-2"
            }
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
