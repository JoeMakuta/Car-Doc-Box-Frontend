import { PayloadAction, Slice, createSlice } from "@reduxjs/toolkit";
import { IPoliceAgent } from "../../@types/user.type";

const initialState: IPoliceAgent = {
  address: [],
  birthDate: "",
  createdAt: "",
  email: "",
  firstName: "",
  gender: "M",
  lastName: "",
  password: "",
  phone: [],
  photos: [],
  policeLicense: "",
  role: 2,
  surName: "",
  token: "",
  updatedAt: "",
  username: "",
  _id: "",
};

export const userSlice: Slice = createSlice({
  name: "userState",
  initialState,
  reducers: {
    setUser: (user: IPoliceAgent, action: PayloadAction<IPoliceAgent>) => {
      user = Object.assign(user, action.payload);
    },
  },
});

export default userSlice;
