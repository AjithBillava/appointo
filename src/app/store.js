import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from "../components/calendar/calendarSlice";
import { calendarApi } from "../components/calendar/services";

export const store = configureStore({
    reducer: {
      calendar: calendarReducer,
      [calendarApi.reducerPath]: calendarApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(calendarApi.middleware),
  });