import { FaTh } from "react-icons/fa";
import { BsAlarm, BsAlarmFill } from "react-icons/bs";

const menu = [
  {
    title: "Home",
    icon: <FaTh />,
    path: "/",
  },
  {
    title: "Level 1 Night",
    icon: <BsAlarmFill />,
    childrens: [
      {
        title: "Sunday",
        path: "/sunday",
      },
      {
        title: "Monday",
        path: "/monday",
      },
      {
        title: "Tuesday",
        path: "/tuesday",
      },
    ],
  },
  {
    title: "Level 1 Weekend",
    icon: <BsAlarm />,
    childrens: [
      {
        title: "Friday",
        path: "/friday",
      },
      {
        title: "Saturday",
        path: "/saturday",
      },
    ],
  },
];

export default menu;
