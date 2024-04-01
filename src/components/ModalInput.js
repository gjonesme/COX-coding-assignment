import classes from "./ModalInput.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectName, selectPhone, setName, setPhone } from "./appointmentSlice";

const ModalInput = (props) => {
  const name = useSelector(selectName);
  const phone = useSelector(selectPhone);
  const value = props.label === "Name" ? name : phone;
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    if (props.label === "Name") {
      dispatch(setName(e.target.value));
    } else {
      dispatch(setPhone(e.target.value));
    }
  };

  return (
    <div className={classes.ModalInput}>
      <label>{props.label}: </label>
      <input
        type={props.type}
        pattern={props.pattern}
        placeholder={props.placeholder}
        onChange={onChangeHandler}
        value={value}
      />
    </div>
  );
};

export default ModalInput;
