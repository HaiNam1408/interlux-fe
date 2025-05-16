import { IMenuChild } from "@interfaces/IMenu.interface";
import { IProduct } from "@interfaces/IProduct.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IProductState {
  product?: IProduct;
  listProduct?: IProduct[];
  valueSearch: string;
  idCategory: number;
  categorySelected: string;
  rangPrice: [number, number];
  sortBy: "createdAt" | "price" | "sold";
  sortDirection: "desc" | "asc";
  colorProduct: string;
  tagCategory: IMenuChild[];
}

const initialState: IProductState = {
  listProduct: [],
  valueSearch: "",
  idCategory: 0,
  rangPrice: [0, 10000],
  sortBy: "createdAt",
  sortDirection: "desc",
  colorProduct: "",
  tagCategory: [],
  categorySelected: "",
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

    //Search Filter
    setValueSearch: (state, action: PayloadAction<string>) => {
      state.valueSearch = action.payload;
    },

    //ID Category
    setIdCategory: (state, action: PayloadAction<number>) => {
      state.idCategory = action.payload;
    },

    // Category Selected
    setCategorySelected: (state, action: PayloadAction<string>) => {
      state.categorySelected = action.payload;
    },

    //Rang Price
    setRangPrice: (state, action: PayloadAction<[number, number]>) => {
      state.rangPrice = action.payload;
    },

    //sortBy
    setSortBy: (
      state,
      action: PayloadAction<"createdAt" | "price" | "sold">
    ) => {
      state.sortBy = action.payload;
    },

    //sortDirection
    setSortDirection: (state, action: PayloadAction<"desc" | "asc">) => {
      state.sortDirection = action.payload;
    },

    //Color
    setColorProduct: (state, action: PayloadAction<string>) => {
      state.colorProduct = action.payload;
    },

    //Tag Check Menu
    setTagCategory: (state, action: PayloadAction<IMenuChild[]>) => {
      state.tagCategory = action.payload;
    },
  },
});

export const {
  setProduct,
  setListProduct,
  setValueSearch,
  setIdCategory,
  setRangPrice,
  setSortBy,
  setSortDirection,
  setColorProduct,
  setTagCategory,
  setCategorySelected,
} = productSlice.actions;
const productReducer = productSlice.reducer;

export default productReducer;
