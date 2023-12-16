import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { userSliceStateType } from "../../../libs/types/user.types";

const initialState: userSliceStateType = {
  user: null,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateusers: (state, action: PayloadAction<userSliceStateType>) => {
      state.user = action.payload.user;
      state.error = action.payload.error;
    },
  },
});

export const { updateusers } = userSlice.actions;

export default userSlice.reducer;
