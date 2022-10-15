import React from "react";
import TimeTable from "./TimeTable";

const daySchedule = [
  {
    time: "8.00 - 8.20am",
    event: "Prayer",
  },
  {
    time: "8.20 - 8.30am",
    event: "10 Minute break",
  },
  {
    time: "8.30 - 9.20am",
    event: "Session 5",
  },
  {
    time: "9.20 - 9.30am",
    event: "10 Minute break",
  },
  {
    time: "9.30 - 10.20am",
    event: "Session 6",
  },
  {
    time: "10.20 - 10.40am",
    event: "20 Minute break",
  },
  {
    time: "10.40 - 11.20am",
    event: "Session 7",
  },
  {
    time: "11.20 - 11.30am",
    event: "10 Minute break",
  },
  {
    time: "11.30 - 12.20pm",
    event: "Session 8",
  },
  {
    time: "12.20 - 1.30pm",
    event: "Lunch break",
  },
  {
    time: "1.30 - 2.20pm",
    event: "Session 9",
  },
  {
    time: "2.20 - 2.30pm",
    event: "10 Minute break",
  },
  {
    time: "12.30 - 3.20pm",
    event: "Session 10",
  },
  {
    time: "3.20 - 3.40pm",
    event: "20 Minute break",
  },
  {
    time: "3.40 - 4.20pm",
    event: "Session 11",
  },
  {
    time: "4.20 - 4.30pm",
    event: "10 Minute break",
  },
  {
    time: "4.30 - 5.20pm",
    event: "Session 12",
  },
  {
    time: "5.20 - 5.30pm",
    event: "Notices",
  },
];

const DaySchedule = ({ day }) => {
  return (
    <div>
      <h4>{day} Schedule</h4>
      <TimeTable data={daySchedule} />
    </div>
  );
};

export default DaySchedule;
