import classes from "./ModalInput.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectName, selectPhone, setName, setPhone } from "./appointmentSlice";

const ModalInput = (props) => {
  const name = useSelector(selectName);
  const phone = useSelector(selectPhone);
  const value = props.label === "Name" ? name : phone;
  const dispatch = useDispatch();

  const phoneNumberAutoFormat = (phoneNumber) => {
    const number = phoneNumber.trim().replace(/[^0-9]/g, "");

    if (number.length < 4) return number;
    if (number.length < 7) return number.replace(/(\d{3})(\d{1})/, "$1-$2");
    if (number.length < 11)
      return number.replace(/(\d{3})(\d{3})(\d{1})/, "$1-$2-$3");
  };

  const onChangeHandler = (e) => {
    if (props.label === "Name") {
      if (
        /^[a-zA-Z\s]*$/.test(e.target.value.charAt(e.target.value.length - 1))
      ) {
        dispatch(setName(e.target.value));
      }
    } else {
      e.target.value.length < 13 &&
        dispatch(setPhone(phoneNumberAutoFormat(e.target.value)));
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
