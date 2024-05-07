import Calendar from "./components/calendar";
import Navbar from "./components/navBar";
import TimeSlots from "./components/timeSlots";

import styles from "./App.module.css";
import CalendarFooter from "./components/calendarFooter";
import BookingConfirmation from "./components/bookingConfirmation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setShowConfirmationToast } from "./slices/calendarSlice";

function App() {
  const { showConfirmationToast } = useSelector((state) => state.calendar);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(setShowConfirmationToast(false));
    }, 2000);
  }, [showConfirmationToast]);

  return (
    <main className={styles.main}>
      <Navbar />
      {showConfirmationToast && <BookingConfirmation />}
      <div className={styles.container}>
        <div className={styles.heroWrapper}>
          <div className={styles.hero}>
            <Calendar />

            <TimeSlots />
          </div>
          <CalendarFooter />
        </div>
        <div className={styles.blueCircle}></div>
        <div className={styles.greenCircle}></div>
        <img
          className={styles.leftRect}
          src="./left-rect.png"
          alt="left-rectangle"
        />
        <img
          className={styles.rightRect}
          src="./right-rect.png"
          alt="right-rectangle"
        />
      </div>
    </main>
  );
}

export default App;
