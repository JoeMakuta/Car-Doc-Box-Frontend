"use client";

import React from "react";
import TableCar from "../../../components/dashboard/automobile/tableCar";
import Link from "next/link";
import { BsPlus } from "react-icons/bs";

const AutoPage = () => {
  return (
    <section>
      <Link
        href={"/dashboard/automobiles/new"}
        className="flex  h-10 text-sm justify-center items-center  p-4 bg-main_color rounded-xl hover:bg-white hover:text-main_color hover:border hover:border-main_color transition-all text-white "
      >
        <BsPlus size={25} />
        <p>Nouvel automobile</p>
      </Link>
      <TableCar />
    </section>
  );
};

export default AutoPage;
