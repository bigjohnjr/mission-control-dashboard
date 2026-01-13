import { createSlice } from "@reduxjs/toolkit";

type ConnectionStatus = "connecting" | "connected" | "disconnected";

interface ConnectionState {
  status: ConnectionStatus;
}

const initialState: ConnectionState = {
  // What should the initial status be?
  status: "disconnected",
};

const connectionSlice = createSlice({
  name: "connection",
  initialState,
  reducers: {
    cycleStatus: (state) => {
      const statusArray: ConnectionStatus[] = [
        "connecting",
        "connected",
        "disconnected",
      ];
      // What goes here? You've written this logic before.
      // Hint: state.status gives you the current status
      const currentIndex = statusArray.indexOf(state.status);
      const nextIndex = (currentIndex + 1) % statusArray.length;
      const nextStatus = statusArray[nextIndex];
      state.status = nextStatus;
    },
  },
});

export const { cycleStatus } = connectionSlice.actions;
export default connectionSlice.reducer;