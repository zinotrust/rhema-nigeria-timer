import React, { useContext, useEffect } from "react";
import TimeContext from "../../context/timeContext";
import Card from "../card/Card";

const Timer = () => {
  // const [time, setTime] = useState(new Date().toLocaleTimeString("en-US"));
  const { time, setTime } = useContext(TimeContext);

  useEffect(() => {
    // console.log(time);
    if (time === "8:07:05 AM") {
      alert("Time is up");
    }
  }, [time]);

  useEffect(() => {
    const time = () => {
      const event = new Date();
      setTime(event.toLocaleTimeString("en-US"));
    };
    const intervalId = setInterval(time, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [setTime]);

  const today = new Date();
  //   const date = `${today.getDate()}/${
  //     today.getMonth() + 1
  //   }/${today.getFullYear()}`;

  function getDate(d) {
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return (
      <>
        <div>{day},</div>
        <div>
          {date} {month}, {year}
        </div>
      </>
    );
  }

  return (
    <div className="--mr --mb">
      <Card cardClass={"--width-250px"}>
        <div className="display date">{getDate(today)}</div>
        <div className="display time">{time}</div>
      </Card>
    </div>
  );
};

export default Timer;
