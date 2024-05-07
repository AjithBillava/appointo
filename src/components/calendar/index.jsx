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
import moment from "moment";

const Calendar = () => {
  const { startDate, endDate } = useSelector((state) => state.calendar);
  const dispatch = useDispatch();
  const { data } = useGetTimeSlotsQuery({ startDate, endDate });

  useEffect(() => {
    let dateFromSearch = window.location.search;
    dateFromSearch = dateFromSearch?.split("=")[1]?.replace(/\s/g, "");

    dateFromSearch && dispatch(setDate(JSON.stringify(dateFromSearch)));
    data && dispatch(setTimeSlots(data[0]?.slots));
  }, [data]);

  const handleDataChange = (date) => {
    dispatch(setDate(JSON.stringify(date)));
    window.location.search = `date=${moment(date).format()}`;
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
        renderCustomHeader={CalendarHeader}
        inline
        formatWeekDay={formatWeekDay}
        calendarContainer={MyContainer}
      />
    </div>
  );
};

export default Calendar;
