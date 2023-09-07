import { Result } from "antd";
import DashboardLayout from "./dashboard/layout";
import React from "react";

const NotFound = () => {
  return (
    <DashboardLayout>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
      />
    </DashboardLayout>
  );
};

export default NotFound;
