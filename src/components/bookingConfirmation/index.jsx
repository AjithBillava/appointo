import styles from "./booking.module.css";

const BookingConfirmation = () => {
  return (
    <div className={styles.container}>
      <div>Booking confirmed</div>
      <img src="./tick.png" alt="booking-confirmed" />
    </div>
  );
};

export default BookingConfirmation;
