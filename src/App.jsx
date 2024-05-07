// import { useState } from 'react'
// import "./App.css";
import Calendar from "./components/calendar";
import Navbar from "./components/navBar";
import TimeSlots from "./components/timeSlots";

import styles from "./App.module.css";
import Footer from "./components/calendarFooter";

function App() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.heroWrapper}>
          <div className={styles.hero}>
            <Calendar />
            <TimeSlots />
          </div>
        <Footer />
        </div>
        <div className={styles.blueCircle}></div>
        <div className={styles.greenCircle}></div>
        <img className={styles.leftRect} src="./left-rect.png" alt="left-rectangle" />
        <img className={styles.rightRect} src="./right-rect.png" alt="right-rectangle" />
      </div>
    </main>
  );
}

export default App;
