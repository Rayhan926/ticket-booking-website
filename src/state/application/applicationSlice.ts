import { HeaderType } from "@config/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
  headerType: HeaderType;
};

const initialState: InitialStateType = {
  headerType: undefined,
};

const applicationSlice = createSlice({
  name: "application",
  reducers: {
    setHeaderType: (state, action: PayloadAction<HeaderType>) => {
      state.headerType = action.payload;
    },
  },
  initialState,
});

export default applicationSlice.reducer;
export const { setHeaderType } = applicationSlice.actions;
