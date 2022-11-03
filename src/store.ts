import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import companyReducer from "./features/company/companySlice";
import fileReducer from "./features/files/fileSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    company: companyReducer,
    file: fileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
