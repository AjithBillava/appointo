import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MyContainer from "./calendarContainer";

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());

  console.log(startDate);

  return (
    <div>

      
      <ReactDatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        inline
        calendarContainer={MyContainer}
      />
    </div>
  );
};

export default Calendar;
