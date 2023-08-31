"use client";
import Link from "next/link";
import React, { ReactElement } from "react";
import {
  BsColumnsGap,
  BsFileEarmark,
  BsFillCarFrontFill,
  BsPeople,
} from "react-icons/bs";
import { FiSettings } from "react-icons/fi";

const menus: { logo: ReactElement; label: string; selected: boolean }[] = [
  {
    logo: <BsColumnsGap size={25} />,
    label: "Dashboard",
    selected: true,
  },
  {
    logo: <BsFillCarFrontFill size={25} />,
    label: "Automobiles",
    selected: false,
  },
  {
    logo: <BsPeople size={25} />,
    label: "Proprietaires",
    selected: false,
  },
  {
    logo: <BsFileEarmark size={25} />,
    label: "Documents",
    selected: false,
  },
  {
    logo: <FiSettings size={25} />,
    label: "Settings",
    selected: false,
  },
];

const DashboardMenu = () => {
  return (
    <aside className=" flex flex-col justify-center items-start gap-2 ">
      {menus.map((elt, index) => {
        return (
          <Link
            key={index}
            className={` flex justify-center items-center gap-2 p-3 rounded-lg ${
              elt.selected == true ? "font-bold bg-white text-main_color " : ""
            }`}
            href={elt.label.toLocaleLowerCase()}
          >
            <span>{elt.logo}</span>
            <span> {elt.label}</span>
          </Link>
        );
      })}
    </aside>
  );
};

export default DashboardMenu;
