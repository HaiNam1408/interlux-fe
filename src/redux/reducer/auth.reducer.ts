import { IAuth } from "@interfaces/IAuth.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface INoticafition {
  title: string;
  status: "info" | "warning" | "success" | "error" | "loading" | undefined;
}

export interface IAuthState {
  auth: IAuth["data"];
  notification?: INoticafition;
}

const initialState: IAuthState = {
  auth: {
    accessToken: "",
    refreshToken: "",
  },
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
    clearStateAuth: () => initialState,
  },
});

export const {
  setAuth,
  resetAuth,
  removeNotification,
  setNotification,
  clearStateAuth,
} = authSlice.actions;
const authReducer = authSlice.reducer;

export default authReducer;
