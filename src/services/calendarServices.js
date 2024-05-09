import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const calendarApi = createApi({
  reducerPath: "calendarApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://app.appointo.me/scripttag/mock_timeslots",
  }),
  endpoints: (builder) => ({
    getTimeSlots: builder.query({
        query: ({startDate ,endDate}) => `?start_date=${startDate}&end_date=${endDate}`,
    }),
  }),
});


export const { useGetTimeSlotsQuery } = calendarApi;
