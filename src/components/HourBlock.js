import { useSelector, useDispatch } from "react-redux";
import classes from "./HourBlock.module.css";
import { showModal } from "./modalSlice";
import {
  selectScheduledTimes,
  setName,
  setPhone,
  setTime,
} from "./appointmentSlice";

const HourBlock = (props) => {
  const dispatch = useDispatch();
  const scheduledTimes = useSelector(selectScheduledTimes);
  const getAmPm = (time) => {
    if (time >= 12) {
      return "PM";
    } else {
      return "AM";
    }
  };
  const convert24to12 = (time) => {
    return time % 12 === 0 ? 12 : time % 12;
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch(setTime(props.startTime));
    fetch(`/available?time=${props.startTime}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setName(data.name));
        dispatch(setPhone(data.number));
        dispatch(showModal());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <button
      className={`${classes.Button} ${
        scheduledTimes.includes(props.startTime) && classes.Reserved
      }`}
      onClick={onClickHandler}
    >{`${convert24to12(props.startTime)} ${getAmPm(
      props.startTime
    )} - ${convert24to12(props.startTime + 1)} ${getAmPm(
      props.startTime + 1
    )}`}</button>
  );
};

export default HourBlock;
