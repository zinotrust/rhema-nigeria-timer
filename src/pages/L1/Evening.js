import React, { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import NightSchedule from "../../components/classSchedule/NightSchedule";
import Heading from "../../components/heading/Heading";
import Timer from "../../components/timer/Timer";
import TimeContext from "../../context/timeContext";

const Evening = () => {
  const { time } = useContext(TimeContext);

  useEffect(() => {
    let warn = new Audio("/bell.mp3");
    let final = new Audio("/bell.mp3");

    switch (time) {
      // session 1
      case "5:00:00 PM":
        warn.play();
        toast.success("Start Session");
        break;
      case "5:40:00 PM":
        warn.play();
        toast.success("Warning Bell");
        break;
      case "5:50:00 PM":
        final.play();
        toast.success("Final Bell");
        break;
      // session 2
      case "6:00:00 PM":
        warn.play();
        toast.success("Start Session");
        break;
      case "6:30:00 PM":
        warn.play();
        toast.success("Warning Bell");
        break;
      case "6:40:00 PM":
        final.play();
        toast.success("Final Bell");
        break;
      // session 3
      case "7:00:00 PM":
        warn.play();
        toast.success("Start Session");
        break;
      case "7:40:00 PM":
        warn.play();
        toast.success("Warning Bell");
        break;
      case "7:50:00 PM":
        final.play();
        toast.success("Final Bell");
        break;
      // session 4
      case "8:00:00 PM":
        warn.play();
        toast.success("Start Session");
        break;
      case "8:40:00 PM":
        warn.play();
        toast.success("Warning Bell");
        break;
      case "8:50:00 PM":
        final.play();
        toast.success("Final Bell");
        break;
      // Close meeting
      case "9:00:00 PM":
        final.play();
        toast.success("Close Meeting");
        break;

      // Default
      default:
        break;
    }
  }, [time]);
  return (
    <div className="--mt">
      <Heading text={"Level 1 - Weekend Class"} />
      <div className="--flex-start --flex-dir-column">
        <Timer />
        <NightSchedule />
      </div>
    </div>
  );
};

export default Evening;
