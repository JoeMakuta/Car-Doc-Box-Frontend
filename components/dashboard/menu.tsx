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

const menus: { logo: ReactElement; label: string }[] = [
  {
    logo: <BsColumnsGap size={20} />,
    label: "Dashboard",
  },
  {
    logo: <BsFillCarFrontFill size={20} />,
    label: "Automobiles",
  },
  {
    logo: <BsPeople size={20} />,
    label: "Proprietaires",
  },
  {
    logo: <BsFileEarmark size={20} />,
    label: "Documents",
  },
  {
    logo: <FiSettings size={20} />,
    label: "Settings",
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
          <Tooltip title={elt.label} placement="right">
            <Link
              key={index}
              className={` flex transition-all  justify-start gap-4 items-center  p-3 rounded-lg ${
                path.includes(elt.label.toLocaleLowerCase())
                  ? " bg-white text-main_color "
                  : ""
              }`}
              href={elt.label.toLocaleLowerCase()}
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
