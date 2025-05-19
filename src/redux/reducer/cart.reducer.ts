/* eslint-disable @typescript-eslint/no-empty-object-type */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICartState {
  isShowCart: boolean;
}

const initialState: ICartState = {
  isShowCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //Bật tắt cart
    setIsShowCart: (state, action: PayloadAction<boolean>) => {
      state.isShowCart = action.payload;
    },
  },
});

export const { setIsShowCart } = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export default cartReducer;
