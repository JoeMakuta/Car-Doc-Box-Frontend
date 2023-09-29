"use client";

import React from "react";
import TableCar from "../../../components/dashboard/automobile/tableCar";
import Link from "next/link";
import { BsPlus } from "react-icons/bs";

const AutoPage = () => {
  return (
    <section className=" flex flex-col gap-4 ">
      <div className=" flex  w-full justify-between items-center ">
        <p>Listes des automobiles</p>
        <Link
          href={"/dashboard/automobiles/new"}
          className="flex  h-10 text-sm justify-center items-center  p-4 bg-main_color rounded-xl hover:bg-white hover:text-main_color hover:border hover:border-main_color transition-all text-white "
        >
          <BsPlus size={25} />
          <p>Nouvel automobile</p>
        </Link>
      </div>
      <TableCar />
    </section>
  );
};

export default AutoPage;
