import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { formatDate } from "../utils/helpers";

let dateFromSearch = window.location.search;
dateFromSearch = dateFromSearch?.split("=")[1]?.replace(/\s/g, "");

const initialState = {
  startDate: dateFromSearch ?? moment().format("YYYY-MM-DD"),
  endDate: moment().add(1, "days").format("YYYY-MM-DD"),
  currentDate: JSON.stringify(moment()),
  timeSlots: [],
  selectedTimeSlot: "",
  isBooked: false,
  showConfirmationToast: false,
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState: initialState,

  reducers: {
    setDate: (state, action) => {
      // const {startDate} = action.payload
      //   console.log(action);
      const parsedDate = JSON.parse(action.payload);
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
    setSelectedTimeSlot: (state, action) => {
      return {
        ...state,
        selectedTimeSlot: action.payload,
      };
    },
    setSlotBooking: (state, action) => {
      return {
        ...state,
        isBooked: action.payload,
        showConfirmationToast: action.payload,
      };
    },
    setShowConfirmationToast: (state, action) => {
      return {
        ...state,
        showConfirmationToast: action.payload,
      };
    },
  },
});

export const {
  setDate,
  setTimeSlots,
  setSelectedTimeSlot,
  setSlotBooking,
  setShowConfirmationToast,
} = calendarSlice.actions;

export default calendarSlice.reducer;
