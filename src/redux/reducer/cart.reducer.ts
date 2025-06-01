/* eslint-disable @typescript-eslint/no-empty-object-type */
import { ICouponResponse } from "@interfaces/ICoupon.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICartState {
  isShowCart: boolean;
  isResetCart: boolean;
  subTotal: number;
  coupon?: ICouponResponse;
}

const initialState: ICartState = {
  isShowCart: false,
  isResetCart: false,
  subTotal: 0,
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

    //Tổng giá của giỏ hàng
    setSubTotal: (state, action: PayloadAction<number>) => {
      state.subTotal = action.payload;
    },

    //Cập nhật lại giá của giỏ hàng
    updateSubTotal: (state, action: PayloadAction<number>) => {
      state.subTotal += action.payload;
    },

    //Mã giảm giá
    setCoupon: (state, action: PayloadAction<ICouponResponse | undefined>) => {
      state.coupon = action.payload;
    },
  },
});

export const {
  setIsShowCart,
  setIsReset,
  setSubTotal,
  updateSubTotal,
  setCoupon,
} = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export default cartReducer;
