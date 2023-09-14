import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    user: "user",
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
