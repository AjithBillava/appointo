import { getMonth, getYear } from "../../utils/helpers";
import styles from "./calendarHeader.module.css";

const CalendarHeader = ({
  date,
  //   changeYear,
  //   changeMonth,
  //   currentYear,currentMonth,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}) => {
  //   console.log("🚀 ~ Calendar ~ month:", currentMonth,currentYear)

  const currentYear = getYear(date);
  const currentMonth = getMonth(date);

  console.log("🚀 ~ Calendar ~ month:", currentMonth, currentYear);

  return (
    <div className={styles.container}>
      <button className={styles.prevBtn} onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
        {/* {"<"} */}
      </button>
      <div className={styles.monthAndYear}>
        {currentMonth} {currentYear}
      </div>
      <button className={styles.nextBtn} onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
        {/* {">"} */}
      </button>
    </div>
  );
};

export default CalendarHeader;
