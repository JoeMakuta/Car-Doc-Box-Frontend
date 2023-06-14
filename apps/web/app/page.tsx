"use client";

import Image from "next/image";
import { Checkbox, ConfigProvider, Radio } from "antd";
import { Button, Header, MyInput } from "ui";
import { Logo } from "../components/logo";
import Link from "next/link";

export default function Page() {
  const alertText = () => {
    alert("boop");
  };
  return (
    <div className=" w-screen flex justify-center items-center h-screen bg-black/10">
      <div className="max-w-[1500px]  max-h-screen  bg-white  h-full w-full max-w-screen md:max-h-[900px] xl:flex justify-around  items-center ">
        <div className="flex flex-col justify-center items-center gap-8 ">
          <Logo width={100} height={200} />
          <div className=" flex flex-col gap-4 justify-center items-center">
            <h1 className=" font-bold text-3xl">Salut encore !</h1>
            <p className=" text-black/60 text-sm">
              Saisissez vos identifiants pour accéder à votre compte.
            </p>
          </div>
          <div className=" flex flex-col gap-4 w-full ">
            <MyInput
              label="Nom d'utilisateur : "
              placeholder="Nom d'utilisateur"
              size="middle"
              type="text"
            />
            <MyInput
              label="Mot de passe : "
              placeholder="*********************"
              size="middle"
              type="password"
            />
          </div>
          <div className=" w-full justify-between flex items-center">
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#D37E2F",
                },
              }}
            >
              <Checkbox>Gardez-moi connecté</Checkbox>
            </ConfigProvider>
            <Link href={"#"} className="text-sm text-main_color ">
              Mot de passe oublié ?
            </Link>
          </div>

          <Button action={alertText} name="SIGN IN" type="primary" />
        </div>
        <div>Hello world !</div>
      </div>
    </div>
  );
}
