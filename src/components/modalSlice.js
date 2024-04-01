import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    value: "",
  },
  reducers: {
    showModal: (state) => {
      state.value = true;
    },
    hideModal: (state) => {
      state.value = false;
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;

export const selectModal = (state) => state.modal.value;

export default modalSlice.reducer;
