import React from "react";

const LayoutAuto = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <h1 className=" font-bold text-2xl ">Automobiles</h1> {children}{" "}
    </main>
  );
};

export default LayoutAuto;
