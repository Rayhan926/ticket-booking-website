import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pickDateTime: {
    date: null,
    time: {
      hour: "13",
      minute: "00",
    },
  },
  returnDateTime: {
    date: null,
    time: {
      hour: "13",
      minute: "00",
    },
  },
  passengers: "",
};

const searchSlice = createSlice({
  name: "search",
  reducers: {
    setPickDateTime: (state, action) => {
      state.pickDateTime = action.payload;
    },
    setReturnDateTime: (state, action) => {
      state.returnDateTime = action.payload;
    },
  },
  initialState,
});

export const { setPickDateTime, setReturnDateTime } = searchSlice.actions;
export default searchSlice.reducer;
