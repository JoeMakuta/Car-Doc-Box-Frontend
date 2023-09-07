"use client";
import React, { useState } from "react";
import Header from "../../components/dashboard/layout/header";
import Aside from "../../components/dashboard/layout/aside";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [responsive, setResponsive] = useState<boolean>(true);
  return (
    <section
      className={`transition-all  grid  grid-rows-[80px_1fr] max-h-screen   ${
        responsive ? ` grid-cols-[80px_1fr] ` : ` grid-cols-[200px_1fr] `
      }`}
    >
      <Header />
      <Aside responsive={responsive} setResponsive={setResponsive} />
      <main className=" p-4 overflow-y-scroll overflow-x-auto ">
        {children}
      </main>
    </section>
  );
};
export default DashboardLayout;
