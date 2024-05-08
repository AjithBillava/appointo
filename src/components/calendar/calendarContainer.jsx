import { CalendarContainer } from "react-datepicker";
import styles from "./calendar.module.css";

const MyContainer = ({ className, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.heading}>Test Service</div>
        <div className={styles.subHeading}>
          <span style={{paddingRight:'0.2rem'}}>Timezone:</span> Asia/Calcutta
        </div>
      </div>
      <CalendarContainer className={className}>
        <div style={{ position: "relative" }}>{children}</div>
      </CalendarContainer>
    </div>
  );
};

export default MyContainer;
