import React from "react";
import { Logo } from "../../components/logo";
import DashboardMenu from "../../components/dashboard/menu";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className=" grid grid-cols-[200px_1fr] grid-rows-[80px_1fr]  ">
      <header className="border-b-[1px] border-black/10">Menu</header>
      <aside className="border-r-[1px] border-black/10 flex pt-8 gap-12 flex-col items-center min-h-screen  row-start-1 row-end-3">
        <Logo height={0} width={150} />
        <DashboardMenu />
      </aside>
      <main className=" p-4 ">{children}</main>
    </section>
  );
};
export default DashboardLayout;
