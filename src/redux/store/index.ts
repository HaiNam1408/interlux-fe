import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "@redux/reducer/auth.reducer";
import productReducer from "@redux/reducer/product.reducer";

const persistConfigAuth = {
  key: "auth",
  storage: storageSession,
};

const persistConfigProduct = {
  key: "product",
  storage: storageSession,
};

const persistedAuthReducer = persistReducer(persistConfigAuth, authReducer);
const persistedProductReducer = persistReducer(
  persistConfigProduct,
  productReducer
);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    product: persistedProductReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
