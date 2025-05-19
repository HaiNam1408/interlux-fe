import { IMenuChild } from "@interfaces/IMenu.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IProductStogeState {
  rememberSlug: IMenuChild;
}

const initialState: IProductStogeState = {
  rememberSlug: {
    title: "",
  },
};

const productStogeSlice = createSlice({
  name: "productStoge",
  initialState,
  reducers: {
    setRememberSlug: (state, action: PayloadAction<IMenuChild>) => {
      state.rememberSlug = action.payload;
    },
  },
});

export const { setRememberSlug } = productStogeSlice.actions;
const productStogeReducer = productStogeSlice.reducer;

export default productStogeReducer;
