import { createSlice } from "@reduxjs/toolkit";

export const appointmentSlice = createSlice({
  name: "appointment",
  initialState: {
    scheduledTimes: [],
    name: "",
    phone: "",
    time: "",
  },
  reducers: {
    addScheduledTime: (state, action) => {
      state.scheduledTimes.push(action.payload); //ok with immer?
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setTime: (state, action) => {
      state.time = action.payload;
    },
  },
});

export const { addScheduledTime, setName, setPhone, setTime } =
  appointmentSlice.actions;

export const selectScheduledTimes = (state) => state.appointment.scheduledTimes;
export const selectName = (state) => state.appointment.name;
export const selectPhone = (state) => state.appointment.phone;
export const selectTime = (state) => state.appointment.time;

export default appointmentSlice.reducer;
