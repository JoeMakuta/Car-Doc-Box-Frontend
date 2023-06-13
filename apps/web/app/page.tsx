"use client";

import Image from "next/image";
import { Button, Header, MyInput } from "ui";
import { Logo } from "../components/logo";

export default function Page() {
  const alertText = () => {
    alert("boop");
  };
  return (
    <div className=" w-screen flex justify-center items-center h-screen">
      <div className="max-w-[1500px]  max-h-screen    h-full w-full max-w-screen md:max-h-[900px] xl:flex justify-around  items-center ">
        <div className="flex flex-col justify-center items-center gap-6 ">
          <Logo width={100} height={200} />
          <div className=" flex flex-col gap-3 justify-center items-center">
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

          <Button action={alertText} name="Sign in" />
        </div>
        <div>Hello world !</div>
      </div>
    </div>
  );
}
