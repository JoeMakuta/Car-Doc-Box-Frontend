"use client";
import React, { useEffect, useState } from "react";
import Header from "../../components/dashboard/layout/header";
import Aside from "../../components/dashboard/layout/aside";
import { IPoliceAgent } from "../../@types/user.type";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { IServerResponse } from "../../@types/response.type";
import { ApiClient } from "../../axios/helpers";
import { AxiosResponse } from "axios";
import { ICar } from "../../@types/car.type";
import carsSlice from "../../redux/slices/carSlice";
import { Button } from "antd";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [responsive, setResponsive] = useState<boolean>(true);

  const { token }: IPoliceAgent = useSelector((state: RootState) => state.user);

  const { setCars } = carsSlice.actions;

  const cars: ICar[] = useSelector((state: RootState) => state.cars);

  const getCars = async () => {
    const Response: AxiosResponse<
      IServerResponse<ICar[]>,
      any
    > = await ApiClient.get({
      token,
      url: "/api/car/",
    });
    console.log(Response);
    setCars(Response.data.data);
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <section
      className={`transition-all  grid  grid-rows-[80px_1fr] max-h-screen   ${
        responsive ? ` grid-cols-[80px_1fr] ` : ` grid-cols-[170px_1fr] `
      }`}
    >
      <button
        className=" fixed top-0  bg-black right-20 text-white "
        onClick={() => {
          console.log(cars);
        }}
      >
        Log cars
      </button>
      <Header />
      <Aside responsive={responsive} setResponsive={setResponsive} />
      <main className=" p-4 overflow-y-scroll overflow-x-auto ">
        {children}
      </main>
    </section>
  );
};
export default DashboardLayout;
