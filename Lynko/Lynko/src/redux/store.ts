import { configureStore } from "@reduxjs/toolkit";
import notificacionesReducer from "./notificacionesSlice";

export const store = configureStore({
  reducer: {
    notificaciones: notificacionesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;