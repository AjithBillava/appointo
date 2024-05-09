import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

let dateFromSearch = window.location.search;
dateFromSearch = dateFromSearch?.split("=")[1]?.replace(/\s/g, "");

const initialState = {
  startDate: dateFromSearch ?? moment().format("YYYY-MM-DD"),
  endDate: moment().endOf("month").add(1, "days").format("YYYY-MM-DD"),
  currentDate: JSON.stringify(moment().format()),
  timeSlots: [],

  monthTimeSlots: [],

  selectedTimeSlot: "",
  isBooked: false,
  showConfirmationToast: false,
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState: initialState,

  reducers: {
    setDate: (state, action) => {
      const parsedDate = JSON.parse(action.payload);

      return {
        ...state,
        startDate: moment(parsedDate).startOf("month").format("YYYY-MM-DD"),
        endDate: moment(parsedDate)
          .endOf("month")
          .add(1, "days")
          .format("YYYY-MM-DD"),
      };
    },
    setMonthTimeSlots: (state, action) => {
      return {
        ...state,
        monthTimeSlots: action.payload,
      };
    },
    setTimeSlots: (state, action) => {
      const { data, slotIndex } = action.payload;

      const currTimeslot = data[slotIndex].slots;
      return {
        ...state,
        timeSlots: currTimeslot,
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
  setMonthTimeSlots,
  setTimeSlots,
  setSelectedTimeSlot,
  setSlotBooking,
  setShowConfirmationToast,
} = calendarSlice.actions;

export default calendarSlice.reducer;
