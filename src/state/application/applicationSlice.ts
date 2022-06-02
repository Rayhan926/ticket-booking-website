import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
  headerHeight: null | number;
};

const initialState: InitialStateType = {
  headerHeight: null,
};

const applicationSlice = createSlice({
  name: "application",
  reducers: {
    setHeaderHeight: (state, action: PayloadAction<null | number>) => {
      state.headerHeight = action.payload;
    },
  },
  initialState,
});

export default applicationSlice.reducer;
export const { setHeaderHeight } = applicationSlice.actions;
