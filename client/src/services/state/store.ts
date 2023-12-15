import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/remainders.slice";

import { CounterStateType } from "./slices/remainders.slice";

export const store = configureStore({
  reducer: {
    counterReducer,
  },
});
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = {
  counterReducer: CounterStateType;
};
