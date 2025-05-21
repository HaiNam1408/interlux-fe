/* eslint-disable @typescript-eslint/no-empty-object-type */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICartState {
  isShowCart: boolean;
  isResetCart: boolean;
}

const initialState: ICartState = {
  isShowCart: false,
  isResetCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //Bật tắt cart
    setIsShowCart: (state, action: PayloadAction<boolean>) => {
      state.isShowCart = action.payload;
    },

    //Reset Data
    setIsReset: (state) => {
      state.isResetCart = !state.isResetCart;
    },
  },
});

export const { setIsShowCart, setIsReset } = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export default cartReducer;
