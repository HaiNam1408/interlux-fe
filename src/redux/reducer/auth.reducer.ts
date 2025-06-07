import { IAuth } from "@interfaces/IAuth.interface";
import { ICategory } from "@interfaces/ICategory.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface INoticafition {
  title: string;
  status: "info" | "warning" | "success" | "error" | "loading" | undefined;
}

export interface IAuthState {
  auth: IAuth["data"];
  notification?: INoticafition;
  categorys: ICategory[];
}

const initialState: IAuthState = {
  auth: {
    accessToken: "",
    refreshToken: "",
  },
  categorys: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<IAuth["data"]>) => {
      state.auth = action.payload;
    },
    resetAuth: (state) => {
      state.auth = {
        accessToken: "",
        refreshToken: "",
      };
    },

    setNotification: (state, action: PayloadAction<INoticafition>) => {
      state.notification = action.payload;
    },
    removeNotification: (state) => {
      state.notification = undefined;
    },
    setCategory: (state, action: PayloadAction<ICategory[]>) => {
      state.categorys = action.payload;
    },
    clearStateAuth: () => initialState,
  },
});

export const {
  setAuth,
  resetAuth,
  removeNotification,
  setNotification,
  clearStateAuth,
  setCategory,
} = authSlice.actions;
const authReducer = authSlice.reducer;

export default authReducer;
