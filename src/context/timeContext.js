import { createContext, useState } from "react";

const TimeContext = createContext();

export const TimeContextProvider = ({ children }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString("en-US"));

  return (
    <TimeContext.Provider value={{ time, setTime }}>
      {children}
    </TimeContext.Provider>
  );
};

export default TimeContext;
