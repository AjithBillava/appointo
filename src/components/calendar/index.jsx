import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MyContainer from "./calendarContainer";
import { useDispatch, useSelector } from "react-redux";
import { useGetTimeSlotsQuery } from "../../services/calendarServices";
import { setDate, setMonthTimeSlots, setTimeSlots } from "../../slices/calendarSlice";
import { getDate, getMonth, textToDate } from "../../utils/helpers";

import { useEffect, useMemo, useState } from "react";
import styles from "./calendar.module.css";
import CalendarHeader from "../calendarHeader";
import moment from "moment";

const Calendar = () => {
  const { startDate, endDate, currentDate } = useSelector(
    (state) => state.calendar
  );
  const dispatch = useDispatch();
  const { data } = useGetTimeSlotsQuery({ startDate, endDate });
  // const currentMonth = useMemo(() => {
  //   console.log('exec')
  //   return getMonth(startDate);
  // }, [startDate]);
  console.log("🚀 ~ Calendar ~ startDate:", startDate)


  const [selectedDate, setSelectedDate] = useState(textToDate(startDate));
  const [currentMonth, setCurrentMonth] = useState(getMonth(startDate));
  const [slotIndex,setSlotIndex] = useState(getDate(startDate)-1)
  console.log("🚀 ~ currentMonth ~ currentMonth:", slotIndex)


  useEffect(() => {
    let dateFromSearch = window.location.search;
    dateFromSearch = dateFromSearch?.split("=")[1]?.replace(/\s/g, "");

    dateFromSearch && dispatch(setDate(JSON.stringify(dateFromSearch)));
    // data && dispatch(setTimeSlots(data[0]?.slots));
    // data && dispatch(setTimeSlots({data,slotIndex}));
    data && dispatch(setMonthTimeSlots(data));
  }, [data]);

  useEffect(()=>{
    data && dispatch(setTimeSlots({data,slotIndex}));
  },[data, slotIndex])

  useEffect(() => {
    dispatch(setDate(JSON.stringify(selectedDate)));
  }, [currentMonth]);

  const handleDataChange = (date) => {
    // dispatch(setDate(JSON.stringify(date)));
    // window.location.search = `date=${moment(date).format()}`;

    setSelectedDate(date);
    setCurrentMonth(date)
    
    setSlotIndex(getDate(date)-1)
  };

  const formatWeekDay = (weekday) => {
    return weekday.substring(0, 3);
  };
  return (
    <div>
      <ReactDatePicker
        selected={selectedDate}
        onChange={(date) => handleDataChange(date)}
        weekDayClassName={() => styles.weekDays}
        renderCustomHeader={CalendarHeader}
        inline
        minDate={textToDate(currentDate)}
        formatWeekDay={formatWeekDay}
        calendarContainer={MyContainer}
      />
    </div>
  );
};

export default Calendar;
