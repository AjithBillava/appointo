// import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MyContainer from "./calendarContainer";
import { useDispatch, useSelector } from "react-redux";
import { useGetTimeSlotsQuery } from "../../services/calendarServices";
import { setDate, setTimeSlots } from "../../slices/calendarSlice";
import { textToDate } from "../../utils/helpers";

import { useEffect } from "react";
import styles from "./calendar.module.css";
import CalendarHeader from "../calendarHeader";
// import moment from "moment";

const Calendar = () => {
  // const [startDate, setStartDate] = useState(new Date());
  const { startDate, endDate } = useSelector((state) => state.calendar);
  // console.log("🚀 ~ Calendar ~ timeSlots:", timeSlots);
  const dispatch = useDispatch();
  const {
    data,
    // error,
    // isLoading,
  } = useGetTimeSlotsQuery({ startDate, endDate });

  useEffect(() => {
    data && dispatch(setTimeSlots(data[0]?.slots));
  }, [data]);

  const handleDataChange = (date) => {
    dispatch(setDate(JSON.stringify(date)));
  };

  const formatWeekDay = (weekday) => {
    return weekday.substring(0, 3);
  };

  return (
    <div>
      <ReactDatePicker
        selected={textToDate(startDate)}
        onChange={(date) => handleDataChange(date)}
        weekDayClassName={() => styles.weekDays}
        // calendarClassName={()=>styles.calendar}
        renderCustomHeader={CalendarHeader}
        inline
        formatWeekDay={formatWeekDay}
        calendarContainer={MyContainer}
      />
    </div>
  );
};

export default Calendar;
