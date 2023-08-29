"use client";
import React from "react";
import { Button } from "../../components/Button";
import { BsPencilSquare, BsPlus } from "react-icons/bs";

const Dashboard = () => {
  return (
    <section>
      <h1 className=" font-bold text-3xl ">Bienvenu sur CARDOCBOX ....</h1>
      <div className=" w-28 ">
        <Button
          action={() => {
            console.log("Button1");
          }}
          name="Ajouter"
          type="primary"
        >
          {" "}
          <BsPlus size={30} />{" "}
        </Button>
      </div>
    </section>
  );
};

export default Dashboard;
