import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RemainderSliceStateType } from "../../../libs/types/remainder.types";

const initialState: RemainderSliceStateType = {
  remainders: null,
  error: null,
};

export const remainderSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    updateRemainders: (
      state,
      action: PayloadAction<RemainderSliceStateType>
    ) => {
      state.remainders = action.payload.remainders;
      state.error = action.payload.error;
    },
  },
});

export const { updateRemainders } = remainderSlice.actions;

export default remainderSlice.reducer;
