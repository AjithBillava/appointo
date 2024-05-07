import React from "react";
import styles from "./calendarFooter.module.css";

// import styles from "../footer/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.copyText}>
        POWERED BY{" "}
        <a
          className={styles.link}
          href="https://apps.shopify.com/appointo-appointments-and-bookings"
        >
          APPOINTO
        </a>{" "}
      </div>
      {/* <div> */}
        <button  className={styles.nextBtn}>
          Next
          <img  className={styles.nextIcon} src="./down-arrow.png" alt="next-icon" />
        </button>
      {/* </div> */}
    </div>
  );
};

export default Footer;
