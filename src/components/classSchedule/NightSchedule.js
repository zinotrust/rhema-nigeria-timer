import React from "react";
import TimeTable from "./TimeTable";

const nightSchedule = [
  {
    time: "5.00 - 5.50pm",
    event: "Session 1",
  },
  {
    time: "5.50 - 6.00pm",
    event: "10 Minute break",
  },
  {
    time: "6.00 - 6.40pm",
    event: "Session 2",
  },
  {
    time: "6.40 - 7.00pm",
    event: "10 Minute break",
  },
  {
    time: "7.00 - 7.50pm",
    event: "Session 3",
  },
  {
    time: "7.50 - 8.00pm",
    event: "10 Minute break",
  },
  {
    time: "8.00 - 8.50pm",
    event: "Session 4",
  },
  {
    time: "8.50 - 9.00pm",
    event: "Notices",
  },
];

const NightSchedule = ({ day }) => {
  return (
    <div>
      <h4>{day} Schedule</h4>
      <TimeTable data={nightSchedule} />
    </div>
  );
};

export default NightSchedule;
