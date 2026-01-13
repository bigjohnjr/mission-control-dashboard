import { configureStore } from "@reduxjs/toolkit";
import connectionReducer from "./connectionSlice";
import telemetryReducer from "./telemetrySlice";

export const store = configureStore({
  reducer: {
    connection: connectionReducer,
    telemetry: telemetryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;