import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickets: [],
  loading: false,
  error: false,
};

export const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    fetchingStart: (state) => {
      state.loading = true;
    },
    fetchingSuccess: (state, action) => {
      state.tickets = action.payload;
      state.loading = false;
      state.error = false;
    },
    fetchingFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchingStart, fetchingSuccess, fetchingFailure } =
  ticketsSlice.actions;
export default ticketsSlice.reducer;
