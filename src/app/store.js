import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../components/modalSlice";
import appointmentReducer from "../components/appointmentSlice";

export default configureStore({
  reducer: {
    modal: modalReducer,
    appointment: appointmentReducer,
  },
});
