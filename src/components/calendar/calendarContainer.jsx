import { CalendarContainer } from "react-datepicker";

const MyContainer = ({ className, children }) => {
  return (
    <div style={{ padding: "16px", background: "#216ba5", color: "#fff" }}>
      <div style={{ background: "#f0f0f0" }}>Test Service</div>
      <div>Timezone: Asia/Calcutta</div>

      <CalendarContainer className={className}>
        <div style={{ position: "relative" }}>{children}</div>
      </CalendarContainer>
    </div>
  );
};

export default MyContainer;
