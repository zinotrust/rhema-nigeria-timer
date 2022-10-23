import React from "react";
import { toast } from "react-toastify";
import Timer from "../../components/timer/Timer";

const Home = () => {
  let final = new Audio("/final.mp3");

  const ringBell = () => {
    final.play();
    toast.success("Final Bell Rang");
  };
  return (
    <div className="--flex-start --flex-dir-column --mt">
      <Timer />
      <div className="--mt">
        <button className="--btn --btn-danger --btn-lg" onClick={ringBell}>
          Ring Bell
        </button>
      </div>
    </div>
  );
};

export default Home;
