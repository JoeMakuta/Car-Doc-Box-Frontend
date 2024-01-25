"use client";
import Link from "next/link";
import React, { ReactElement, useState } from "react";
import { BiMenu } from "react-icons/bi";
import {
  BsChevronDoubleRight,
  BsColumnsGap,
  BsFileEarmark,
  BsFillCarFrontFill,
  BsPeople,
} from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { Tooltip } from "antd";

const menus: { logo: ReactElement; label: string; path: string }[] = [
  {
    logo: <BsColumnsGap size={20} />,
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    logo: <BsFillCarFrontFill size={20} />,
    label: "Automobiles",
    path: "/dashboard/automobiles",
  },
  {
    logo: <BsPeople size={20} />,
    label: "Proprietaires",
    path: "/dashboard/proprietaires",
  },
  {
    logo: <BsFileEarmark size={20} />,
    label: "Documents",
    path: "/dashboard/documents",
  },
  {
    logo: <FiSettings size={20} />,
    label: "Settings",
    path: "/dashboard/settings",
  },
];

const DashboardMenu = ({
  responsive,
  setResponsive,
}: {
  responsive: boolean;
  setResponsive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [selected, setSelected] = useState<string>("dashboard");
  const path = usePathname();

  return (
    <aside className=" flex flex-col text-sm justify-center items-start gap-4  ">
      <BsChevronDoubleRight
        className={
          ` cursor-pointer absolute bottom-4   transition-all items-center self-center ` +
          `${responsive == true ? "rotate-0" : "rotate-180"}`
        }
        onClick={() => {
          setResponsive((elt) => !elt);
        }}
        size={20}
      />

      {menus.map((elt, index) => {
        return (
          <Tooltip title={elt.label} key={index} placement="right">
            <Link
              className={` flex transition-all  justify-start gap-4 items-center  ${
                responsive ? "p-3" : "p-3 px-6"
              }  rounded-lg ${
                path == elt.path
                  ? " bg-white text-main_color "
                  : index != 0 && path.includes(elt.path)
                  ? " bg-white text-main_color "
                  : ""
              }`}
              href={elt.path}
              onClick={() => {
                setSelected(elt.label.toLocaleLowerCase());
              }}
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
          </Tooltip>
        );
      })}
    </aside>
  );
};

export default DashboardMenu;
