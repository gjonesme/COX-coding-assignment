import classes from "./ModalForm.module.css";
import ModalInput from "./ModalInput";
import ModalButton from "./ModalButton";

const ModalForm = (props) => {
  const onClickHandler = (e) => {
    e.stopPropagation();
  };
  return (
    <div className={classes.ModalForm} onClick={onClickHandler}>
      <div className={classes.ModalInputContainer}>
        <ModalInput label="Name" type="name" />
        <ModalInput
          label="Phone"
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="123-456-7890"
        />
      </div>
      <div className={classes.ModalButtonContainer}>
        <ModalButton label="Cancel" />
        <ModalButton label="Reserve" type="submit" />
      </div>
    </div>
  );
};
export default ModalForm;
