import { Logo } from "../../logo";
import React from "react";
import ProfilMenu from "../ProfileMenu";
import { BiSearchAlt } from "react-icons/bi";

const Header = () => {
  return (
    <header className=" flex  justify-between p-3 items-center border-b-[1px] border-black/10">
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
  );
};

export default Header;
