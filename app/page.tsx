"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Checkbox, ConfigProvider, Modal, Radio } from "antd";
import Link from "next/link";
import { Logo } from "../components/logo";
import VideoCard from "../components/login/videoCard";
import MyInput from "../components/Input";
import { Button } from "../components/Button";
import { IServerResponse } from "../@types/response.type";
import car from "../assets/car_image.png";
import dot from "../assets/dots.png";
import { useSelector, useDispatch } from "react-redux";
import userSlice from "../redux/slices/userSlice";
import { AppDispatch, RootState } from "../redux/store";
import loginSlice, { IUserLogin } from "../redux/slices/loginSlice";
import { ApiClient } from "../axios/helpers";
import { AxiosResponse } from "axios";
import { IPoliceAgent } from "../@types/user.type";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const { setUser } = userSlice.actions;
  const user: IPoliceAgent = useSelector((state: RootState) => state.user);

  const { setUsername, setPassword } = loginSlice.actions;
  const login: IUserLogin = useSelector((state: RootState) => state.login);

  const [loading, setLoading] = useState<boolean>(false);

  const dispatch: AppDispatch = useDispatch();

  const alertText = async () => {
    setLoading(true);
    try {
      const Response: AxiosResponse<
        IServerResponse<IPoliceAgent>,
        any
      > = await ApiClient.post({
        url: "/api/admin/login",
        data: { email: login.username, password: login.password },
      });
      setLoading(false);
      if (Response.data.status == 200) {
        await dispatch(setUser(Response.data.data));
        Modal.success({
          title: "Success",
          content: Response.data.message,
          okType: "default",
          centered: true,
        });
        router.push("/dashboard");
      } else {
        throw new Error("Server error");
      }
    } catch (error) {
      setLoading(false);
      Modal.error({
        title: "Erreur",
        content: error?.message || "Email ou password incorrect !",
        okType: "default",
        centered: true,
      });
    }
  };

  return (
    <div className=" w-screen flex justify-center items-center h-screen bg-black/10">
      <div className="max-w-[1600px]  max-h-screen  bg-white  h-full w-full max-w-screen md:max-h-[900px] flex justify-between  items-center ">
        <div className=" w-1/2 flex justify-center items-center ">
          <div className="flex flex-col justify-center w-[60%] items-center gap-6 ">
            <Logo width={100} height={200} />
            <div className=" flex flex-col gap-4 justify-center items-center">
              <h1 className=" font-bold text-3xl">Salut encore !</h1>
              <p className=" text-black/60 text-sm">
                Saisissez vos identifiants pour accéder à votre compte.
              </p>
            </div>
            <div className=" flex flex-col gap-4 w-full ">
              <MyInput
                setter={setUsername}
                label="Nom d'utilisateur : "
                placeholder="Nom d'utilisateur"
                size="middle"
                type="text"
              />
              <MyInput
                setter={setPassword}
                label="Mot de passe : "
                placeholder="*********************"
                size="middle"
                type="password"
              />
            </div>
            <div className=" w-full justify-between flex items-center">
              <Checkbox>Gardez-moi connecté</Checkbox>

              <Link href={"#"} className="text-sm text-main_color ">
                Mot de passe oublié ?
              </Link>
            </div>

            <Button
              loading={loading}
              action={alertText}
              name="SIGN IN"
              type="default"
            />
          </div>
        </div>
        <div className=" h-full p-6  w-[50%]">
          <div className="flex flex-col justify-around items-center text-center bg-main_color/20 h-full w-full  rounded-3xl">
            <h1 className="w-[50%] text-3xl text-main_color ">
              {"Sécuriser et à stocker vos documents d'automobiles."}
            </h1>
            <div className=" flex w-full ">
              <div className="relative flex justify-center items-center w-[50%] ">
                <div className=" w-[60%] bg-white z-20 rounded-2xl overflow-hidden ">
                  <Image
                    className=" w-full "
                    src={car}
                    width={200}
                    height={200}
                    alt="car image"
                  />
                  <div className="flex flex-col gap-1 text-left p-3 ">
                    <h1 className=" font-bold text-lg">Avantages</h1>
                    <p className=" text-xs ">
                      {
                        "Un gestionnaire de documents automobiles qui vous aide à sécuriser et à stocker les documents de votre véhicule"
                      }
                    </p>
                  </div>
                </div>
                {/* <div className="absolute top-1/2 right-1/2 w-[50%] h-[70%] rounded-full rounded-bl-none bg-main_color/70 "></div> */}
              </div>
              <div className=" w-[50%] ">
                <div className=" w-full relative">
                  <Image
                    className=" absolute left-0  "
                    src={dot}
                    width={100}
                    height={100}
                    alt="Dots"
                  />
                  <VideoCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
