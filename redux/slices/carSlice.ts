import { PayloadAction, Slice, createSlice } from "@reduxjs/toolkit";
import { ICar } from "../../@types/car.type";

const initialState: ICar[] = [];

const carsSlice: Slice = createSlice({
  name: "carsState",
  initialState,
  reducers: {
    setCars: (cars: ICar[], action: PayloadAction<ICar[]>) => {
      cars = action.payload;
      console.log("Here are the cars set: ", cars);
    },
  },
});

export default carsSlice;
