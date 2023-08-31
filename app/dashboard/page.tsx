"use client";
import React from "react";
import { Button } from "../../components/Button";
import { BsPencilSquare, BsPlus } from "react-icons/bs";
import { Card, Card1, Card2 } from "../../components/dashboard/card";
import SortingB from "../../components/dashboard/sortingB";
import { DatePicker } from "antd";
import TableAuto from "../../components/dashboard/tableAuto";

const Dashboard = () => {
  return (
    <section className=" flex flex-col gap-4 ">
      <div className=" flex justify-between items-center ">
        <h1 className=" font-light text-2xl tracking-tight">
          Bienvenu sur CARDOCBOX !
        </h1>
        <div className=" flex gap-2 ">
          <DatePicker />
          <button className="flex  h-10 text-sm justify-center items-center p-4 bg-main_color rounded-xl hover:bg-white hover:text-main_color hover:border hover:border-main_color transition-all text-white ">
            <BsPlus size={25} />
            <p>Nouvel automobile</p>
          </button>
        </div>
      </div>
      <div className=" flex gap-4">
        <Card />
        <Card1 />
        <Card2 />
      </div>
      <div className=" flex justify-between items-center">
        <h1 className=" font-bold text-xl tracking-tight">Tracking</h1>
        <button className="flex  h-10 text-sm justify-center items-center p-2 bg-main_color rounded-xl hover:bg-white hover:text-main_color hover:border hover:border-main_color transition-all text-white ">
          <BsPlus size={25} />
        </button>
      </div>
      <SortingB />
      <TableAuto />
    </section>
  );
};

export default Dashboard;
