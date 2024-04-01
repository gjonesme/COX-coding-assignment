import { useDispatch } from "react-redux";
import { hideModal } from "./modalSlice";
import classes from "./Modal.module.css";
import ModalForm from "./ModalForm";

const Modal = (props) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(hideModal());
  };
  return (
    <div className={classes.Modal} onClick={onClickHandler}>
      <ModalForm />
    </div>
  );
};

export default Modal;
