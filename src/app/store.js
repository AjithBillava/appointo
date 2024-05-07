import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from "../slices/calendarSlice";
import { calendarApi } from "../services/calendarServices";

export const store = configureStore({
    reducer: {
      calendar: calendarReducer,
      [calendarApi.reducerPath]: calendarApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(calendarApi.middleware),
  });