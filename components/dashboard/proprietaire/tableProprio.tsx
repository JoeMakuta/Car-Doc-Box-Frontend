import React from "react";
import { Button, Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { HiEye } from "react-icons/hi";

interface DataType {
  key: React.Key;
  name: string;
  phone: string;
  email: string;
  status: boolean;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Noms",
    dataIndex: "name",
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Category 1",
        value: "Category 1",
      },
      {
        text: "Category 2",
        value: "Category 2",
      },
    ],
    filterMode: "tree",
    filterSearch: true,
    // onFilter: (value: string, record) => record.name.startsWith(value),
  },
  {
    title: "Phone",
    dataIndex: "phone",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Actions",
    dataIndex: "action",
    render: (text, record, index) => (
      <div className=" flex gap-1 ">
        <Button
          type="default"
          onClick={() => {
            // showDeleteConfirm(record._id);
          }}
          className=" text-red-600 border border-red-600 hover:bg-white hover:text-red-600 "
        >
          <AiOutlineDelete />
        </Button>

        <Button
          onClick={() => {
            // showStudentDetails(record);
          }}
          className=" text-white bg-main_color/70  hover:bg-white hover:text-red-600 "
        >
          <HiEye />
        </Button>
        <Button
          onClick={() => {}}
          className=" text-main_color  hover:bg-white hover:text-red-600 "
        >
          <FiEdit />
        </Button>
      </div>
    ),
    // onFilter: (value: string, record) => record.address.startsWith(value),
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    email: "makutajosue@gmail.com",
    phone: "+243972383759",
    status: true,
  },
  {
    key: "2",
    name: "Jim Green",
    email: "makutajosue@gmail.com",
    phone: "+243972383759",
    status: true,
  },
  {
    key: "3",
    name: "Joe Black",
    email: "makutajosue@gmail.com",
    phone: "+243972383759",
    status: true,
  },
  {
    key: "4",
    name: "Jim Red",
    email: "makutajosue@gmail.com",
    phone: "+243972383759",
    status: true,
  },
];

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const TableProprio: React.FC = () => (
  <Table columns={columns} bordered dataSource={data} onChange={onChange} />
);

export default TableProprio;
