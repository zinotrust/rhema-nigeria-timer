import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TimeContextProvider } from "./context/timeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TimeContextProvider>
      <App />
    </TimeContextProvider>
  </React.StrictMode>
);
