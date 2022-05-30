import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address1: null,
  address2: null,
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
  passengers: {
    adults: 2,
    children: 0,
    infantsCount: 0,
  },
};

const searchSlice = createSlice({
  name: "search",
  reducers: {
    setAddress1: (state, action) => {
      state.address1 = action.payload;
    },
    setAddress2: (state, action) => {
      state.address2 = action.payload;
    },
    setPickDateTime: (state, action) => {
      state.pickDateTime = action.payload;
    },
    setReturnDateTime: (state, action) => {
      state.returnDateTime = action.payload;
    },
    setPassengers: (state, action) => {
      state.passengers = action.payload;
    },
  },
  initialState,
});

export const {
  setPickDateTime,
  setReturnDateTime,
  setPassengers,
  setAddress1,
  setAddress2,
} = searchSlice.actions;
export default searchSlice.reducer;
