import { configureStore } from "@reduxjs/toolkit";

import remainderReducer from "./slices/remainders.slice";
import userReducer from "./slices/user.slice";

import { RemainderSliceStateType } from "../../libs/types/remainder.types";
import { userSliceStateType } from "../../libs/types/user.types";

export const store = configureStore({
  reducer: {
    remainderReducer,
    userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = {
  remainderReducer: RemainderSliceStateType;
  userReducer: userSliceStateType;
};
