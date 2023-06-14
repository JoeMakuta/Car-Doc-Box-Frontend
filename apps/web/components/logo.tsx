import Image from "next/image";
import logo from "../asserts/logo cardocbox.png";

export const Logo = ({ width, height }: { width: number; height: number }) => {
  return <Image src={logo} alt="Logo" width={width} height={height} />;
};
