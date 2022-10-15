import React, { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import DaySchedule from "../../components/classSchedule/DaySchedule";
import Heading from "../../components/heading/Heading";
import Timer from "../../components/timer/Timer";
import TimeContext from "../../context/timeContext";

const Saturday = () => {
  const { time } = useContext(TimeContext);

  useEffect(() => {
    let warn = new Audio("/bell.mp3");
    let final = new Audio("/bell.mp3");

    switch (time) {
      // Start
      case "8:00:00 AM":
        warn.play();
        toast.success("Prayer session");
        break;
      // End of Prayer session
      case "8:20:00 AM":
        final.play();
        toast.success("Final Bell");
        break;
      // session 5
      case "8:30:00 AM":
        warn.play();
        toast.success("Break Over, Start Session");
        break;
      case "9:10:00 AM":
        warn.play();
        toast.success("Warning Bell");
        break;
      case "9:20:00 AM":
        final.play();
        toast.success("Final Bell");
        break;
      // session 6
      case "9:30:00 AM":
        warn.play();
        toast.success("Break Over, Start Session");
        break;
      case "10:10:00 AM":
        warn.play();
        toast.success("Warning Bell");
        break;
      case "10:20:00 AM":
        final.play();
        toast.success("Final Bell");
        break;
      // session 7
      case "10:40:00 AM":
        warn.play();
        toast.success("Break Over, Start Session");
        break;
      case "11:10:00 AM":
        warn.play();
        toast.success("Warning Bell");
        break;
      case "11:20:00 AM":
        final.play();
        toast.success("Final Bell");
        break;
      // session 8
      case "11:30:00 AM":
        warn.play();
        toast.success("Break Over, Start Session");
        break;
      case "12:10:00 PM":
        warn.play();
        toast.success("Warning Bell");
        break;
      case "12:20:00 PM":
        final.play();
        toast.success("Final Bell");
        break;
      // session 9
      case "1:30:00 PM":
        warn.play();
        toast.success("Break Over, Start Session");
        break;
      case "2:10:00 PM":
        warn.play();
        toast.success("Warning Bell");
        break;
      case "2:20:00 PM":
        final.play();
        toast.success("Final Bell");
        break;
      // session 10
      case "2:30:00 PM":
        warn.play();
        toast.success("Break Over, Start Session");
        break;
      case "3:10:00 PM":
        warn.play();
        toast.success("Warning Bell");
        break;
      case "3:20:00 PM":
        final.play();
        toast.success("Final Bell");
        break;
      // session 11
      case "3:40:00 PM":
        warn.play();
        toast.success("Break Over, Start Session");
        break;
      case "4:10:00 PM":
        warn.play();
        toast.success("Warning Bell");
        break;
      case "4:20:00 PM":
        final.play();
        toast.success("Final Bell");
        break;
      // session 12
      case "4:30:00 PM":
        warn.play();
        toast.success("Break Over, Start Session");
        break;
      case "5:10:00 PM":
        warn.play();
        toast.success("Warning Bell");
        break;
      case "5:20:00 PM":
        final.play();
        toast.success("Final Bell");
        break;
      // Close meeting
      case "5:30:00 PM":
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
        <DaySchedule />
      </div>
    </div>
  );
};

export default Saturday;
