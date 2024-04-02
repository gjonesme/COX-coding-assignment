import { useSelector, useDispatch } from "react-redux";
import classes from "./HourBlock.module.css";
import { showModal } from "./modalSlice";
import {
  selectScheduledTimes,
  setName,
  setPhone,
  setTime,
} from "./appointmentSlice";
import { formatTime } from "../helpers/helperFunctions";

const HourBlock = (props) => {
  const dispatch = useDispatch();
  const scheduledTimes = useSelector(selectScheduledTimes);

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
    >
      {formatTime(props.startTime)}
    </button>
  );
};

export default HourBlock;
