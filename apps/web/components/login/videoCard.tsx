import { CiPlay1 } from "react-icons/ci";

const VideoCard = () => {
  return (
    <div className=" flex w-[50%] min-w-fit z-10 absolute right-1/3  rounded-xl justify-center gap-3 cursor-pointer  transition-all delay-200 text-white items-center p-3 bg-main_color ">
      <div className=" flex justify-center items-center w-10 h-10 bg-white rounded-full">
        <CiPlay1 size={25} className=" text-main_color " />
      </div>
      <div className=" flex justify-center items-start flex-col ">
        <h1 className=" font-bold ">Comment ?</h1>
        <p className=" text-xs ">Regardez la video.</p>
      </div>
    </div>
  );
};

export default VideoCard;
