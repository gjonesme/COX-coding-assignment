import classes from "./ModalButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "./modalSlice";
import {
  selectName,
  selectPhone,
  addScheduledTime,
  selectTime,
  selectScheduledTimes,
} from "./appointmentSlice";

const ModalButton = (props) => {
  const name = useSelector(selectName);
  const phone = useSelector(selectPhone);
  const time = useSelector(selectTime);
  const scheduledTimes = useSelector(selectScheduledTimes);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    if (props.type === "submit") {
      if (name === "") {
        alert("please enter your name to reserve an appointment.");
      } else if (phone.length < 12) {
        alert(
          "please enter a complete phone number to reserve an appointment."
        );
      } else {
        !scheduledTimes.includes(time) && dispatch(addScheduledTime(time));

        const bodyData = JSON.stringify({
          time: time,
          name: name,
          number: phone,
        });
        try {
          fetch("/reserve", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: bodyData,
          });
        } catch (err) {
          console.log(err.message);
        }
        dispatch(hideModal());
      }
    } else {
      dispatch(hideModal());
    }
  };
  return (
    <button
      className={classes.ModalButton}
      type={props.type}
      onClick={onClickHandler}
    >
      {props.label}
    </button>
  );
};

export default ModalButton;
