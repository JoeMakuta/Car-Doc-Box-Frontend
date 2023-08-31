"use client";
import React, { useState } from "react";
import { Logo } from "../../components/logo";
import DashboardMenu from "../../components/dashboard/menu";
import { BiSearchAlt } from "react-icons/bi";
import ProfilMenu from "../../components/dashboard/ProfileMenu";
import { ConfigProvider } from "antd";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#D37E2F" } }}>
      <section className=" grid grid-cols-[80px_1fr] grid-rows-[80px_1fr]  ">
        <header className=" flex justify-between p-3 items-center border-b-[1px] border-black/10">
          <Logo height={0} width={100} />
          <div className=" flex gap-2 justify-center items-center ">
            <div className=" relative ">
              <input
                className="bg-black/5 pl-8 text-xs h-9 outline-none focus:border  focus:border-main_color/50 transition-all border-[1px] rounded-md p-1 "
                type="text"
                placeholder="Rechercher ..."
              />
              <BiSearchAlt
                className="text-black/25 absolute top-2 left-2"
                size={20}
              />
            </div>
            <ProfilMenu />
          </div>
        </header>
        <aside className="border-r-[1px]  border-black/10 flex pt-4 bg-main_color text-white gap-12 flex-col items-center min-h-screen  row-start-1 row-end-3">
          <DashboardMenu />
        </aside>
        <main className=" p-4 ">{children}</main>
      </section>
    </ConfigProvider>
  );
};
export default DashboardLayout;
