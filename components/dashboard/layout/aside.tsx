import DashboardMenu from "../menu";
import React from "react";

const Aside = ({
  responsive,
  setResponsive,
}: {
  responsive: boolean;
  setResponsive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <aside className="border-r-[1px] min-h-screen border-black/10 flex pt-4 bg-main_color text-white  flex-col items-center   row-start-1 row-end-3">
      <DashboardMenu responsive={responsive} setResponsive={setResponsive} />
    </aside>
  );
};

export default Aside;
