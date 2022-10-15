import React from "react";
import styles from "./TimeTable.module.scss";

const TimeTable = ({ data }) => {
  return (
    <div className={styles.table}>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Event</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            const { time, event } = item;
            return (
              <tr key={index}>
                <td>{time}</td>
                <td>{event}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TimeTable;
