import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { formatDate } from "../../utils/helpers";

const initialState = {
  startDate: moment().format("YYYY-MM-DD"),
  endDate: moment().add(1, "days").format("YYYY-MM-DD"),
  timeSlots: [],
  currentDate: JSON.stringify(moment())
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState: initialState,

  reducers: {
    setDate: (state, action) => {
      // const {startDate} = action.payload
    //   console.log(action);
    const parsedDate = JSON.parse(action.payload)
      return {
        ...state,
        startDate: formatDate(parsedDate),
        endDate: moment(parsedDate).add(1, "days").format("YYYY-MM-DD"),
        currentDate: action.payload,
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
