// import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MyContainer from "./calendarContainer";
import { useDispatch, useSelector } from "react-redux";
import { useGetTimeSlotsQuery } from "./services";
import { setDate, setTimeSlots } from "./calendarSlice";
import { formatDate, textToDate } from "../../utils/helpers";
import { useEffect } from "react";

const Calendar = () => {
  // const [startDate, setStartDate] = useState(new Date());
  const { startDate, endDate } = useSelector(
    (state) => state.calendar
  );
  // console.log("🚀 ~ Calendar ~ timeSlots:", timeSlots);
  const dispatch = useDispatch();
  const {
    data,
    error,
    isLoading,
  } = useGetTimeSlotsQuery({ startDate, endDate });
    console.log("🚀 ~ Calendar ~ data:", data[0])
  // console.log(
  //   "🚀 ~ Calendar ~ data, error, isLoading:",
  //   slots,
  //   error,
  //   isLoading
  // );

  useEffect(() => {
    data && dispatch(setTimeSlots(data[0]?.slots));
  }, [data]);

  const handleDataChange = (date) => {
    // console.log('date',moment(date).format("YYYY-MM-DD"))
    dispatch(setDate(formatDate(date)));
  };
  // console.log(calendar, moment(calendar.startDate, "YYYY-MM-DD").toDate());
  // const date = moment(startDate, "YYYY-MM-DD").toDate();
  // console.log("🚀 ~ Calendar ~ date:", calendar, date)

  return (
    <div>
      <ReactDatePicker
        selected={textToDate(startDate)}
        onChange={(date) => handleDataChange(date)}
        inline
        calendarContainer={MyContainer}
      />
    </div>
  );
};

export default Calendar;
