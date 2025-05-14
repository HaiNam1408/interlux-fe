import { IProduct } from "@interfaces/IProduct.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IProductState {
  product?: IProduct;
  listProduct?: IProduct[];
}

const initialState: IProductState = {
  listProduct: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<IProduct | undefined>) => {
      state.product = action.payload;
    },

    setListProduct: (state, action: PayloadAction<IProduct[]>) => {
      state.listProduct = action.payload;
    },
  },
});

export const { setProduct, setListProduct } = productSlice.actions;
const productReducer = productSlice.reducer;

export default productReducer;
