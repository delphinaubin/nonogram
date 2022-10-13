import {Action, configureStore, createStore, ThunkAction} from "@reduxjs/toolkit";
import { gameSlice } from "./gameReducer";

export const store = configureStore({
  reducer: {
    game: gameSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
  >;

