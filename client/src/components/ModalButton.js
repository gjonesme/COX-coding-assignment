import classes from "./ModalButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "./modalSlice";
import {
  selectName,
  selectPhone,
  addScheduledTime,
  selectTime,
} from "./appointmentSlice";

const ModalButton = (props) => {
  const name = useSelector(selectName);
  const phone = useSelector(selectPhone);
  const time = useSelector(selectTime);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    if (props.type === "submit") {
      dispatch(addScheduledTime(time));
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
    }
    dispatch(hideModal());
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
