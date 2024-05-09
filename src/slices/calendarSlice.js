import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

let dateFromSearch = window.location.search;
dateFromSearch = dateFromSearch?.split("=")[1]?.replace(/\s/g, "");

// console.log("curr month", moment().month());
const initialState = {
  startDate: dateFromSearch ?? moment().format("YYYY-MM-DD"),
  endDate: moment().endOf("month").add(1, "days").format("YYYY-MM-DD"),
  currentDate: JSON.stringify(moment()),
  timeSlots: [],

  monthTimeSlots: [], //{ date: "", timeSlots: [] }[]

  selectedTimeSlot: "",
  isBooked: false,
  showConfirmationToast: false,
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState: initialState,

  reducers: {
    setDate: (state, action) => {
      // console.log(moment(action.payload))
      const parsedDate = JSON.parse(action.payload);

      console.log(moment(parsedDate).daysInMonth());

      return {
        ...state,
        // startDate: formatDate(parsedDate),
        startDate: moment(parsedDate).startOf("month").format("YYYY-MM-DD"),
        endDate: moment(parsedDate)
          .endOf("month")
          .add(1, "days")
          .format("YYYY-MM-DD"),
        // currentDate:formatDate(state.currentDate),
      };
    },
    setMonthTimeSlots: (state, action) => {
      // console.log("🚀 ~ action:", action.payload)
      // const {data,slotIndex} = action.payload

      // const currTimeslot = data[slotIndex]
      // console.log("🚀 ~ action currTimeslot:", currTimeslot)
      return {
        ...state,
        monthTimeSlots: action.payload,
      };
    },
    setTimeSlots: (state, action) => {
     
      console.log("🚀 ~ action:", action.payload)
      const {data,slotIndex} = action.payload

      const currTimeslot = data[slotIndex].slots
      console.log("🚀 ~ action currTimeslot:", currTimeslot)

      return {
        ...state,
        timeSlots: currTimeslot,
        // timeSlots: curentMonthSlots[slotIndex].slots,
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
