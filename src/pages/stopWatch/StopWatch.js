import React, { useState } from "react";
import "./StopWatch.css";
import Heading from "../../components/heading/Heading";
import Timer from "../../components/timer/Timer";

const StopWatch = () => {
  const [sec, setSec] = useState(0);
  const [mil, setMil] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);

  return (
    <div className="--mt">
      <Heading text={"Stop Watch"} />

      <div class="box">
        <div class="time">{` ${hour} : ${min} : ${sec} : ${mil}`}</div>
        <div class="buttons">
          <button class="start">
            <i class="fas fa-play"></i> Start
          </button>
          <button class="pause">
            <i class="fas fa-pause"></i> Pause
          </button>
          <button class="reset">
            <i class="fas fa-sync"></i> Reset
          </button>
        </div>
      </div>
      <div className="--flex-start --flex-dir-column --mt">
        <Timer />
      </div>
    </div>
  );
};

export default StopWatch;
