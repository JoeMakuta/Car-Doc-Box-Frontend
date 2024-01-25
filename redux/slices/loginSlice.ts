import { PayloadAction, Slice, createSlice } from "@reduxjs/toolkit";
import { IPoliceAgent } from "../../@types/user.type";

export interface IUserLogin {
  username: string;
  password: string;
}

const initialState: IUserLogin = {
  username: "",
  password: "",
};

const loginSlice: Slice = createSlice({
  name: "loginState",
  initialState,
  reducers: {
    setPassword: (login: IUserLogin, action: PayloadAction<string>) => {
      login.password = action.payload;
    },
    setUsername: (login: IUserLogin, action: PayloadAction<string>) => {
      login.username = action.payload;
    },
  },
});

export default loginSlice;
