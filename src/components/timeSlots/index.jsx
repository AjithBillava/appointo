import { useDispatch, useSelector } from "react-redux";
import {
  convertTimeToLT,
  getDate,
  getDay,
  getMonth,
} from "../../utils/helpers";
import styles from "./timeSlots.module.css";
import DropDown from "../timeRangeDropDown";
import {  useEffect, useState } from "react";
import { setSelectedTimeSlot } from "../../slices/calendarSlice";
import { useGetTimeSlotsQuery } from "../../services/calendarServices";

const TimeSlots = () => {
  const { timeSlots, currentDate, selectedTimeSlot, startDate, endDate } =
    useSelector((state) => state.calendar);
  const {
    // data,
    // error,
    isLoading,
  } = useGetTimeSlotsQuery({ startDate, endDate });
  const dispatch = useDispatch();
  const parsedDate = JSON.parse(currentDate);
  const dayString = ` ${getDay(parsedDate)}, ${getMonth(parsedDate).substring(
    0,
    3
  )} ${getDate(parsedDate)} - AVAIILABLE SLOTS`;

  //   const [selectedTimeSlot, setSlectedTimeSlot] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  //   const timeVariants = ["30 min", "1 hour"];
  //   console.log("🚀 ~ TimeSlots ~ dayString:", dayString);
  //   console.log("🚀 ~ TimeSlots ~ timeSlots:", timeSlots)

  //   const handleClick = (e) => {
  //     console.log(e.target.value);
  //   };
  console.log("slots", selectedTimeSlot, selectedOption);

  useEffect(() => {
    setSelectedOption(null);
    dispatch(setSelectedTimeSlot(''));

    // console.log(hiii)
  }, [currentDate]);

  const handleOptionClick = (timeSlot, optionIndex) => {
    console.log("clicked");
    dispatch(setSelectedTimeSlot(timeSlot));
    setSelectedOption(optionIndex);
  };

  return (
    <div className={styles.container}>
      <div className={styles.firstSection}>
        <div className={styles.label}>SELECT FROM VARIANTS</div>
        <DropDown />
      </div>

      <div style={{ paddingTop: "1.5rem" }} className={styles.label}>
        {" "}
        {dayString}
      </div>

      <div
        style={
          timeSlots.length > 4 ? { width: "25.5rem", overflowY: "scroll" } : {}
        }
        className={styles.timeSlots}
      >
        {isLoading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height:'100%'
            }}
          >
            Loading...
          </div>
        )}
        {timeSlots.map((item, index) => (
          <div
            onClick={() => handleOptionClick(item.start_time, index)}
            style={
              selectedOption === index
                ? {
                    justifyContent: "space-between",
                    backgroundColor: "#378760",
                    color: "#FFFFFF",
                  }
                : {}
            }
            className={styles.slots}
            key={index}
          >
            {/* {item.start_time} */}
            <div>
              {convertTimeToLT(item.start_time)} -{" "}
              {convertTimeToLT(item.end_time)}
            </div>
            {selectedOption === index && (
              <img src="/tick.png" alt="selected-icon" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSlots;
