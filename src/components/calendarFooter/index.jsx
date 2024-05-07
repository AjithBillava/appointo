import { useEffect, useState } from "react";
import styles from "./calendarFooter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setSlotBooking } from "../../slices/calendarSlice";

// import styles from "../footer/footer.module.css";

const CalendarFooter = () => {
  const { selectedTimeSlot, currentDate } = useSelector(
    (state) => state.calendar
  );
  const [btnText, setBtnText] = useState("Next");

  const dispatch = useDispatch();

  useEffect(() => {
    setBtnText("Next");
    dispatch(setSlotBooking(false));

    // console.log(hiii)
  }, [currentDate,selectedTimeSlot]);
  console.log("🚀 ~ handelNextClick ~ selectedTimeSlot:", selectedTimeSlot);


  const handelNextClick = () => {
    selectedTimeSlot && setBtnText("Booked");
    selectedTimeSlot &&  dispatch(setSlotBooking(true));
  };

  return (
    <div className={styles.container}>
      <div className={styles.copyText}>
        POWERED BY{" "}
        <a
          className={styles.link}
          href="https://apps.shopify.com/appointo-appointments-and-bookings"
          target="_blank"
        >
          APPOINTO
        </a>{" "}
      </div>
      {/* <div> */}
      <button onClick={() => handelNextClick()} className={styles.nextBtn}>
        {btnText}
        {btnText === "Next" && (
          <img
            className={styles.nextIcon}
            src="./down-arrow.png"
            alt="next-icon"
          />
        )}
      </button>
      {/* </div> */}
    </div>
  );
};

export default CalendarFooter;
