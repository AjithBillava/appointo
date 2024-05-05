import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const initialState = {
  startDate: moment().format("YYYY-MM-DD"),
  endDate: moment().add(1, "days").format("YYYY-MM-DD"),
  timeSlots: [],
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState: initialState,

  reducers: {
    setDate: (state, action) => {
      // const {startDate} = action.payload
      console.log(action);
      return {
        ...state,
        startDate: action.payload,
        endDate: moment(action.payload).add(1, "days").format("YYYY-MM-DD"),
      };
    },
    setTimeSlots: (state, action) => {
      return {
        ...state,
        timeSlots: action.payload,
      };
    },
  },
});

export const { setDate, setTimeSlots } = calendarSlice.actions;

export default calendarSlice.reducer;
