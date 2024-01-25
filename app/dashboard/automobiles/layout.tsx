import Link from "next/link";
import React from "react";
import { BsPlus } from "react-icons/bs";

const LayoutAuto = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className=" flex flex-col gap-3 ">
      <h1 className=" font-bold text-2xl ">Automobiles</h1>{" "}
      
      <section>{children} </section>
    </main>
  );
};

export default LayoutAuto;
