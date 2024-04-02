import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addScheduledTime } from "./appointmentSlice";
import classes from "./Calendar.module.css";
import HourBlock from "./HourBlock";

const Calendar = () => {
  const dispatch = useDispatch(addScheduledTime);
  useEffect(() => {
    fetch("/available")
      .then((res) => res.json())
      .then((data) => {
        for (const dataItem of data) {
          dispatch(addScheduledTime(dataItem.time));
        }
      })
      .catch((err) => console.log(err));
  });

  const startTimes = [];
  for (let i = 0; i < 8; i++) {
    startTimes.push(i + 9);
  }

  return (
    <div className={classes.Calendar}>
      <h2>Select a desired appointment time</h2>
      <ul className={classes.HourBlocks}>
        {startTimes.map((time, index) => {
          return <HourBlock key={index} startTime={time} />;
        })}
      </ul>
    </div>
  );
};

export default Calendar;
