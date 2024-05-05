import { useSelector } from "react-redux";
import { convertTimeToLT } from "../../utils/helpers";


const TimeSlots = () => {
  const { timeSlots } = useSelector((state) => state.calendar);
//   console.log("🚀 ~ TimeSlots ~ timeSlots:", timeSlots)
  return (
    <div>
      <div>Time slots</div>

      <div>
        {timeSlots.map((item, index) => (
          <div key={index}>
            {/* {item.start_time} */}
            {convertTimeToLT(item.start_time)} -{" "}
            {convertTimeToLT(item.end_time)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSlots;
