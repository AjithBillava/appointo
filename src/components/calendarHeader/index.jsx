import { getMonth, getYear } from "../../utils/helpers";
import styles from "./calendarHeader.module.css";

const CalendarHeader = ({
  date,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}) => {
  const currentYear = getYear(date);
  const currentMonth = getMonth(date);

  return (
    <div className={styles.container}>
      <button
        className={styles.prevBtn}
        onClick={decreaseMonth}
        disabled={prevMonthButtonDisabled}
      >
        {/* {"<"} */}
      </button>
      <div className={styles.monthAndYear}>
        {currentMonth} {currentYear}
      </div>
      <button
        className={styles.nextBtn}
        onClick={increaseMonth}
        disabled={nextMonthButtonDisabled}
      >
        {/* {">"} */}
      </button>
    </div>
  );
};

export default CalendarHeader;
