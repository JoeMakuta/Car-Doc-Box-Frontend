"use client";
import Link from "next/link";
import React, { ReactElement, useState } from "react";
import { BiMenu } from "react-icons/bi";
import {
  BsColumnsGap,
  BsFileEarmark,
  BsFillCarFrontFill,
  BsPeople,
} from "react-icons/bs";
import { FiSettings } from "react-icons/fi";

const menus: { logo: ReactElement; label: string; selected: boolean }[] = [
  {
    logo: <BsColumnsGap size={20} />,
    label: "Dashboard",
    selected: true,
  },
  {
    logo: <BsFillCarFrontFill size={20} />,
    label: "Automobiles",
    selected: false,
  },
  {
    logo: <BsPeople size={20} />,
    label: "Proprietaires",
    selected: false,
  },
  {
    logo: <BsFileEarmark size={20} />,
    label: "Documents",
    selected: false,
  },
  {
    logo: <FiSettings size={20} />,
    label: "Settings",
    selected: false,
  },
];

const DashboardMenu = () => {
  const [responsive, setResponsive] = useState<boolean>(true);
  return (
    <aside className=" flex flex-col text-sm relative justify-center items-start gap-4 ">
      <BiMenu
        className=" cursor-pointer items-center self-end "
        onClick={() => {
          setResponsive((elt) => !elt);
        }}
        size={25}
      />

      {menus.map((elt, index) => {
        return (
          <Link
            key={index}
            className={` flex justify-start items-center w-full  gap-2 p-3 rounded-lg ${
              elt.selected == true ? " bg-white text-main_color " : ""
            }`}
            href={elt.label.toLocaleLowerCase()}
          >
            <span>{elt.logo}</span>
            <span
              className={
                responsive ? " hidden transition-all " : "transition-all"
              }
            >
              {" "}
              {elt.label}
            </span>
          </Link>
        );
      })}
    </aside>
  );
};

export default DashboardMenu;
