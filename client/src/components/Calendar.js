import classes from "./Calendar.module.css";
import HourBlock from "./HourBlock";

const Calendar = (props) => {
  const startTimes = [];
  for (let i = 0; i < 8; i++) {
    startTimes.push(i + 9);
  }

  return (
    <div className={classes.Calendar}>
      <h2>Select a desired time-slot</h2>
      <ul className={classes.HourBlocks}>
        {startTimes.map((time, index) => {
          return <HourBlock key={index} startTime={time} />;
        })}
      </ul>
    </div>
  );
};

export default Calendar;
