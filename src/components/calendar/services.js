import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const calendarApi = createApi({
  reducerPath: "calendarApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://app.appointo.me/scripttag/mock_timeslots",
  }),
  endpoints: (builder) => ({
    getTimeSlots: builder.query({
        query: ({startDate = '2024-01-20',endDate = '2024-01-30'}) => `?start_date=${startDate}&end_date=${endDate}`,
    }),
  }),
});


export const { useGetTimeSlotsQuery } = calendarApi;
