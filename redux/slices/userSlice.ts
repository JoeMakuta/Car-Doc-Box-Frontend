import { PayloadAction, Slice, createSlice } from "@reduxjs/toolkit";
import { IPoliceAgent } from "../../@types/user.type";

const initialState: IPoliceAgent = {
  _id: "",
  address: [],
  birthDate: new Date(),
  email: "",
  firstName: "",
  gender: "M",
  lastName: "",
  password: "",
  phone: [],
  policeLicense: "",
  role: 2,
  surName: "",
  username: "",
  photos: [],
};

export const userSlice: Slice = createSlice({
  name: "userState",
  initialState,
  reducers: {
    setUser: (user, action: PayloadAction<IPoliceAgent>) => {
      user = action.payload;
    },
  },
});

export default userSlice;
